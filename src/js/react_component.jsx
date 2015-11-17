'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

var renderHelloWorld = function(){
  ReactDOM.render(
    <button className="btn btn-success">Reeeeact Component</button>,
    document.getElementById('blubb')
  );
}

document.addEventListener('DOMContentLoaded', function(){ 
  renderHelloWorld();
}, false);
