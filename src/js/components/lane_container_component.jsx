'use strict';

import React from 'react';

import Lane from './lane_component.jsx!';
import LaneAggregation from './lane_aggregation_component.jsx!';
import Draggable from 'react-draggable';
import MutationView from './mutation_view_component.jsx!';
import SourceSelect from './source_select_component.jsx!';

import dataProvider from 'backend/data_provider';

var LaneContainer = React.createClass({
  getInitialState: function() {
    return {
      sourceData: this.props.sourceData,
      detailView: true,
      startPos: 200,
      endPos: 500,
      mutationMetaData: null
    };
  },
  startPoint: function() {
    return {x: -(20 * 15), y: 0};
  },
  handleSourceSelect: function(updateData) {
    //todo: anpassen für alle vier quellen
    //this.replaceState({sourceData: updateData});
    var testData = this.state.sourceData;
    if (typeof testData[3] == "undefined") {
      testData.push(updateData);
      this.setState({sourceData: testData});
    } else {
      testData.pop();
      this.setState({sourceData: testData});
    }

  },
  toggleDetailView: function() {
    this.setState({detailView: !this.state.detailView});
  },
  handleDrag: function(event, ui) {
    var bundle = {position: Math.round(Math.abs(ui.position.left) / 15) + this.state.startPos};
    this.props.moveFunction(bundle);
  },
  handleSingleMutation: function(singleData) {
    this.setState({mutationMetaData: [singleData]});
  },
  handleMultiMutations: function(multiDatas) {
    this.setState({mutationMetaData: multiDatas});
  },
  createIndex: function() {
    var index = [];
    for (var i = this.state.startPos; i <= this.state.endPos; i++) {
      if ((i % 10) == 0) {
        index.push(<span className="lane-interval" key={i}>{i}</span>);
      } else {
        index.push(<span className="lane-interval" key={i}>_</span>);
      }
    }
    return index;
  },
  createLanes: function() {
    if (this.state.detailView) {
      return this.state.sourceData.map(function(laneData) {
        return <Lane key={laneData.id} sequences={laneData.data} clickOnMutation={this.handleSingleMutation}/>;
      },this);
    } else {
      return <LaneAggregation />;
    }
  },
  createLanesLabels: function() {
    return this.state.sourceData.map(function(laneData) {
      return <div className="lane-label" key={laneData.id}>Source: {laneData.id}</div>;
    });
  },
  render: function() {
    return <div>
      <SourceSelect handleClick={this.handleSourceSelect}/>
      <button onClick={this.toggleDetailView}>Toggle Details</button>
      <div className="mutation-board">
        <div className="lane-labels">
          <div className="lane-label-index">Index</div>
          <div>{this.createLanesLabels()}</div>
        </div>

        <div className="lane-contents">
          <Draggable axis="x" onStop={this.handleDrag} start={this.startPoint()}>
            <div>
              <div className="lane-content-index">{this.createIndex()}</div>
              <div>{this.createLanes()}</div>
            </div>
          </Draggable>
        </div>
      </div>
      <MutationView metaDataArray={this.state.mutationMetaData} />
    </div>;
  }
});

export default LaneContainer;
