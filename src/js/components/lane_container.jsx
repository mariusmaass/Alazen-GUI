'use strict';

import React from 'react';

import LaneComponent from './lane_component.jsx!';
import LaneAggregation from './lane_aggregation.jsx!';

var LaneContainer = React.createClass({
  createLanes: function(){
    return this.props.data.map(function(lanedata){
      return <LaneComponent data={lanedata.data} />
    })
  },
  render: function(){
    return <div className="lanecontainer">
      {this.createLanes()}
      <LaneAggregation key="lane-aggregation-example" />
    </div>
  }
});

export default LaneContainer;
