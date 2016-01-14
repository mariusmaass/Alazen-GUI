'use strict';

import React from 'react';
import dataProvider from 'backend/data_provider';

var SourceSelect = React.createClass({
  addSource: function() {
    dataProvider.getPosition(["Elefant"], "ChromosomeXY", "0 - 10", 1, true).then((values) => {
      this.props.handleClick(values[0]);
    });
  },
  removeSource: function() {

  },
  renderSourceLabels: function() {
    console.log('source select', this.props.sourceData);
    return this.props.sourceData.map(function(laneData) {
      return <div className="source-label" key={laneData.id}>Source: {laneData.id} <button className="btn btn-xs btn-danger"><span className="glyphicon glyphicon-trash"></span></button></div>;
    });
  },
  render: function() {
    return <div className="source-select">
      <div>{this.renderSourceLabels()}</div>
      <button className="btn btn-success source-label"><span className="glyphicon glyphicon-plus"></span></button>
    </div>;
  }
});

export default SourceSelect;
