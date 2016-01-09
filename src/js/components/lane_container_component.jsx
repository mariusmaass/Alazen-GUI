'use strict';

import React from 'react';

import Lane from './lane_component.jsx!';
import LaneAggregation from './lane_aggregation_component.jsx!';
import Draggable from 'react-draggable';
import MutationView from './mutation_view_component.jsx!';
import SourceSelect from './source_select_component.jsx!';

import dataProvider from 'backend/data_provider';

const DEFAULT_BASE_FACTOR = 15;

var LaneContainer = React.createClass({
  getInitialState: function() {
    return {
      data: this.props.data,
      mutationMetaData: null
    };
  },
  componentWillReceiveProps: function(newProps) {
    // TODO should data really live in props AND state?
    this.setState({data: newProps.data});
  },
  startPoint: function() {
    return {x: -(20 * DEFAULT_BASE_FACTOR), y: 0};
  },
  handleSourceSelect: function(updateData) {
    //todo: anpassen für alle vier quellen
    //this.replaceState({data: updateData});
    var testData = this.state.data;
    if (typeof testData[3] == "undefined") {
      testData.push(updateData);
      this.setState({data: testData});
    } else {
      testData.pop();
      this.setState({data: testData});
    }

  },
  isDetailView: function() {
    return this.props.currentZoomLevel === 1;
  },
  handleDrag: function(event, ui) {
    var bundle = {position: Math.round(Math.abs(ui.position.left) / DEFAULT_BASE_FACTOR) + this.props.windowBegin};
    this.props.moveFunction(bundle);
  },
  handleSingleMutation: function(singleData) {
    this.setState({mutationMetaData: [singleData]});
  },
  handleMultiMutations: function(multiDatas) {
    this.setState({mutationMetaData: multiDatas});
  },
  mutationBoardisActive: function() {
    return this.state.data != null;
  },
  createIndex: function() {
    var index = [];
    var numberOfIntervals = 200;
    // var interval = this.props.windowSize / numberOfIntervals;
    var interval = 2;
    for (var i = this.props.windowBegin; i <= this.props.windowEnd; i += interval) {
      if ((i % (interval * 10)) == 0) {
        index.push(<span className="lane-interval" key={i}>{i}</span>);
      } else {
        index.push(<span className="lane-interval" key={i}></span>);
      }
    }
    return index;
  },
  renderLanes: function() {
    return this.state.data.map(function(laneData) {
      if (this.isDetailView()) {
        return <Lane key={laneData.id} sequences={laneData.data} clickOnMutation={this.handleSingleMutation}/>;
      } else {
        return <LaneAggregation key={laneData.id} data={laneData.data} />;
      }
    },this);
  },
  renderLanesLabels: function() {
    return this.state.data.map(function(laneData) {
      return <div className="lane-label" key={laneData.id}>Source: {laneData.id}</div>;
    });
  },
  renderMutationBoard: function() {
    return <div>
      <SourceSelect handleClick={this.handleSourceSelect}/>
      <div className="mutation-board">
        <div className="lane-labels">
          <div className="lane-label-index">Index</div>
          <div>{this.renderLanesLabels()}</div>
        </div>

        <div className="lane-contents">
          <Draggable axis="x" onStop={this.handleDrag} start={this.startPoint()}>
            <div className="lanes-block">
              <div className="lane-content-index">{this.createIndex()}</div>
              <div>{this.renderLanes()}</div>
            </div>
          </Draggable>
        </div>
      </div>
      <MutationView metaDataArray={this.state.mutationMetaData} />
    </div>;

  },
  render: function() {
    if (this.mutationBoardisActive()) {
      return this.renderMutationBoard();
    } else {
      return <div>⚛</div>;
    }
  }
});

export default LaneContainer;
