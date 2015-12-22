'use strict';

import React from 'react';
import { AreaChart } from 'react-d3';

import dataProvider from 'backend/data_provider';

var areaData = dataProvider.getSource(false);

var LaneAggregation = React.createClass({
  render: function() {
    return (
      <div className="lane lane-aggregation">
        <div className="lane-aggregation-source">Source 1</div>
        <AreaChart
          data={areaData}
          width={1400}
          height={100}
        />
      </div>
    );
  }
});

export default LaneAggregation;
