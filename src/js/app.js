'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import GuiComponent from 'components/gui_component.jsx!';

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(React.createElement(GuiComponent),
    document.getElementById("gui-component"));
});