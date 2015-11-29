'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import dataProvider from 'backend/data_provider';

import LaneContainer from 'components/lane_container.jsx!';
import Slider from 'rc-slider';

import SearchField from 'components/searchfield_component.jsx!';

// - - -
var testjson = [{id: 1, sequence: "ATGCATGCATGCATGCATGC", mutation: false},
                {id: 2, sequence: "BGFD", mutation: true},
                {id: 3, sequence: "ATGCATGCATGCATGCATGC", mutation: false},
                {id: 4, sequence: "TGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGAC", mutation: false},
                {id: 5, sequence: "ATGCATGCATGCATGCATGC", mutation: false},
                {id: 6, sequence: "===BG", mutation: true},
                {id: 7, sequence: "ATGCATGCATGCATGCATGC", mutation: false},
                {id: 8, sequence: "ATGCATGCATGCATGCATGCATGCATGCATGCATGCATGCATGC", mutation: false},
                {id: 9, sequence: "ATGCATGCATGCATGCATGCATGCATGC", mutation: false},
                {id: 10, sequence: "ATGCATGCATGCATGCAATGCATGCTGC", mutation: false},
                {id: 11, sequence: "ATGCATATGCATGCATGCATGCGCATGCATGCATGC", mutation: false},
                {id: 12, sequence: "ATGCATGCATGCATGCATGC", mutation: false}
              ];

var testdatas = [{id: 1, data: testjson},
                 {id: 2, data: testjson},
                 {id: 3, data: testjson}
                ];
// - - -

document.addEventListener('DOMContentLoaded', function(){

  ReactDOM.render(
    React.createElement(LaneContainer, {
      data: testdatas
    }),
    document.getElementById("lane-container")
  );

  ReactDOM.render(
    React.createElement(Slider),
    document.getElementById("slider")
  );

});

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(React.createElement(SearchField),
  document.getElementById("searchfield_component"));

});

var searchReference = "TGACTGACTG";
var source = "Elefant";
var position = dataProvider.searchFor(searchReference, source);
console.log(searchReference + " has been found in source: " + source + " at following postion: " + position.begin + " " + position.end);
