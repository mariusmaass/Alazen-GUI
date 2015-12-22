'use strict';

import React from 'react';
import dataProvider from 'backend/data_provider';

var SourceSelect = React.createClass({
  addSource: function() {
    var test = dataProvider.getSource(true);
    this.props.handleClick(test);
  },
  render: function() {
    return <div className="source-select">
      <button className="btn btn-success active source-button">Source 1</button>
      <button className="btn btn-success active source-button">Source 2</button>
      <button className="btn btn-success active source-button">Source 3</button>
      <button className="btn btn-primary sourcebutton" onClick={this.addSource}>Source 4</button>
    </div>;
  }
});

export default SourceSelect;
