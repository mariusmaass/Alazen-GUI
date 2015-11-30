'use strict';

import React from 'react';
import { AreaChart } from 'react-d3';

var areaData = [
  {
    name: "mutations",
    values: [
      { x: 1000, y: 100 },
      { x: 1060, y: 5 },
      { x: 1100, y: 200 },
      { x: 1200, y: 0 },
      { x: 1300, y: 0 },
      { x: 1350, y: 50 },
      { x: 1450, y: 200 },
      { x: 1500, y: 100 },
      { x: 1300, y: 0 },
      { x: 1320, y: 0 },
      { x: 1400, y: 180 },
      { x: 1500, y: 150 },
      { x: 1600, y: 140 },
      { x: 1700, y: 135 },
      { x: 1800, y: 0 },
      { x: 1900, y: 5 },
      { x: 2000, y: 40 }
    ]
  }
];

var viewBox = {x: 0, y: 0, heigth: 400, width: 500};

var LaneAggregation = React.createClass({
  render: function() {
    return (
      <div className="lane lane-aggregation">
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
