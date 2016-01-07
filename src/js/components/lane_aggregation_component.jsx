'use strict';

import React from 'react';
import { AreaChart } from 'react-d3';

import dataProvider from 'backend/data_provider';

var areaData;

var LaneAggregation = React.createClass({
  render: function() {
    return (
      <div className="lane-content lane-aggregation">
        Mutation aggregation view not yet implemented.
      </div>
    );
  }
});

// <AreaChart
//   data={areaData}
//   width={1400}
//   height={100}
// />

export default LaneAggregation;
