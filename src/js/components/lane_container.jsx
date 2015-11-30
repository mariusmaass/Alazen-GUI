'use strict';

import React from 'react';

import LaneComponent from './lane_component.jsx!';
import LaneAggregation from './lane_aggregation.jsx!';

var SourceSelect = React.createClass({
  addSource: function(){
    var test = {id: 4, data: [{id: 1, sequence: "ATGCATGCATGCATGCATGC", mutation: false}]};
    console.log(test);
    this.props.handleClick(test);
  },
  render: function(){
    return <div className="source-select">
      <button className="sourcebutton">Source 1</button>
      <button className="sourcebutton">Source 2</button>
      <button className="sourcebutton">Source 3</button>
      <button className="sourcebutton" onClick={this.addSource}>Source new</button>
      </div>
  }
});

var LaneContainer = React.createClass({
  getInitialState: function(){
    return {data: this.props.data, detailView: false};
  },
  handleClick: function(updateData){
    //this.replaceState({data: updateData});
    var testdata = this.state.data;
    console.log(testdata.push(updateData));
    this.setState({data: testdata});
  },
  toggleDetailView: function(){
    this.setState({detailView: !this.state.detailView});
  },
  createLanes: function(){
    if(this.state.detailView){
      return this.state.data.map(function(lanedata){
        return <div><div className="lanesource">Source: {lanedata.id}</div><LaneComponent data={lanedata.data} /></div>
      });
    } else {
      return <LaneAggregation />
    }
  },
  render: function(){
    return <div>
      <SourceSelect handleClick={this.handleClick} />
      <button onClick={this.toggleDetailView}>Toggle Details</button>
      <div className="lane-container">
        {this.createLanes()}
      </div>
    </div>
  }
});

export default LaneContainer;
