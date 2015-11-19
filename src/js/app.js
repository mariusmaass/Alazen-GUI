'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Lane from 'components/lane_component.jsx!';
import Slider from 'rc-slider';

// - - -

var data = [{id: 1, text: "TGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGAC"},
            {id: 2, text: "TGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGAC"},
            {id: 3, text: "TGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGAC"},
            {id: 4, text: "TGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGAC"},
            {id: 5, text: "TGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGAC"}
            ];

// - - -

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(
    React.createElement(Lane, {
      data: data
    }),
    document.getElementById("lane")
  );

  ReactDOM.render(
    React.createElement(Slider),
    document.getElementById("slider")
  );
});
