'use strict';

import React from 'react';

import LaneComponent from './lane_component.jsx!';

var SourceSelect = React.createClass({
  addSource: function(){
    var test = [{id: 4, data: [{id: 1, sequence: "ATGCATGCATGCATGCATGC", mutation: false}]}];
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
    return {data: this.props.data};
  },
  handleClick: function(updateData){
    //this.replaceState({data: updateData});
    this.setState({data: updateData});
  },
  createLane: function(){
    return this.state.data.map(function(lanedata){
      return <div><div className="lanesource">Source: {lanedata.id}</div><LaneComponent key={lanedata.id} data={lanedata.data} /></div>
    })
  },
  render: function(){
    return <div className="lanecontainer">
      <SourceSelect handleClick={this.handleClick} />
      {this.createLane()}
    </div>

  }
});

export default LaneContainer;
