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

var testjson = [{id: 1, sequence: "ATGCATGCATGCATGCATGC", mutation: false},
                {id: 2, sequence: "BGFD", mutation: true},
                {id: 3, sequence: "ATGCATGCATGCATGCATGC", mutation: false},
                {id: 4, sequence: "TGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGAC", mutation: false},
                {id: 5, sequence: "ATGCATGCATGCATGCATGC", mutation: false},
                {id: 6, sequence: "===BG", mutation: true},
                {id: 7, sequence: "ATGCATGCATGCATGCATGC", mutation: false}
              ];
// - - -

document.addEventListener('DOMContentLoaded', function(){

  ReactDOM.render(
    React.createElement(Lane, {
      data: testjson
    }),
    document.getElementById("lane_component")
  );

  ReactDOM.render(
    React.createElement(Slider),
    document.getElementById("slider")
  );

});
