'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import dataProvider from 'backend/data_provider';

import Lane from 'components/lane_component.jsx!';
import Slider from 'rc-slider';

import SearchField from 'components/searchfield_component.jsx!';

// - - -
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
    document.getElementById("lane")
  );

  ReactDOM.render(
    React.createElement(Slider),
    document.getElementById("slider")
  );

});

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(React.createElement(SearchField),
  document.getElementById("searchfield_component"));
  dataProvider.fetchReferenceGenome();
  dataProvider.fetchMutations();
});
