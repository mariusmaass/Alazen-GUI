'use strict';

import React from 'react';
import dataProvider from 'backend/data_provider';

var SourceSelect = React.createClass({
  addSource: function(id) {
    this.props.addSourceFunction(id);
  },
  removeSource: function(id) {
    this.props.removeSourceFunction(id);
  },
  showInactiveSources: function() {
    var inactiveSourceNames = Object.keys(this.props.availableSources).filter((source) => this.props.availableSources[source] !== true);
    return inactiveSourceNames.map((source) => {
      return <div><button className="btn btn-success source-button" key={source} onClick={this.addSource.bind(this, source)}>{source}</button></div>;
    });
  },
  renderSourceLabels: function() {
    return this.props.sourceData.map(function(laneData) {
      return <div className="source-label" key={laneData.id}>Source: {laneData.id} <button className="btn btn-xs btn-danger" onClick={this.removeSource.bind(this, laneData.id)}><span className="glyphicon glyphicon-trash"></span></button></div>;
    }, this);
  },
  render: function() {
    return <div className="source-select">
      <div>{this.renderSourceLabels()}</div>
      <div className="button-container">{this.showInactiveSources()}</div>
    </div>;
  }
});

export default SourceSelect;
