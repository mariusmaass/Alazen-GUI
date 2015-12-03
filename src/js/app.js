'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import dataProvider from 'backend/data_provider';
import GuiComponent from 'components/gui_component.jsx!';

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(React.createElement(GuiComponent),
    document.getElementById("gui-component"));
});

var searchReference = "TGACTGACTG";
var source = "Elefant";
var position = dataProvider.searchFor(searchReference, source);
console.log(searchReference + " has been found in source: " + source + " at following postion: " + position.begin + " " + position.end);