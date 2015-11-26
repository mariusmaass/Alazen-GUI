'use strict';

import React from 'react';

import LaneFragment from './lane_component.jsx!';

var LaneContainer = React.createClass({
  createLane: function(){
    return this.props.datas.map(function(lanedata){
      return <LaneComponent data={lanedata.data} />
    })
  }
  render: function(){
    return <div className="lanecontainer">
      {this.createLane()}
    </div>

  }
});

export default LaneContainer;
