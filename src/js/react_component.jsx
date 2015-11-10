'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

var renderHelloWorld = function(){
  ReactDOM.render(
    <marquee>Reeeeact Component</marquee>,
    document.getElementById('blubb')
  );
}

document.addEventListener('DOMContentLoaded', function(){ 
  renderHelloWorld();
}, false);
