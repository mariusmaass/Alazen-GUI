'use strict';

import React from 'react';
import dataProvider from 'backend/data_provider';

var SourceSelect = React.createClass({
  addSource: function() {
    this.props.addSourceFunction();
  },
  removeSource: function(id) {
    this.props.removeSourceFunction(id);
  },
  renderSourceLabels: function() {
    console.log('source select', this.props.sourceData);
    return this.props.sourceData.map(function(laneData) {
      return <div className="source-label" key={laneData.id}>Source: {laneData.id} <button className="btn btn-xs btn-danger" onClick={this.removeSource.bind(this, laneData.id)}><span className="glyphicon glyphicon-trash"></span></button></div>;
    }, this);
  },
  render: function() {
    return <div className="source-select">
      <div>{this.renderSourceLabels()}</div>
      <button className="btn btn-success source-label"><span className="glyphicon glyphicon-plus" onClick={this.addSource}></span></button>
    </div>;
  }
});

export default SourceSelect;
