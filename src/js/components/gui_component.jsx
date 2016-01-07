'use strict';

import React from 'react';
import $ from 'jquery';

import LaneContainer from './lane_container_component.jsx!';
import Slider from 'rc-slider';
import SearchField from './searchfield_component.jsx!';
import SelectChromosome from './chromosome_selection_component.jsx!';
import dataProvider from 'backend/data_provider';
import DATA from 'backend/embedded_data';

var GuiComponent = React.createClass({
  getInitialData: function() {
    dataProvider.getPosition(["Maus", "Pferd", "B-Meise"], "ChromosomeXY", "0 - 10", 7, true).then((values) => {
      if (values.length == 0) {
        return;
      }

      var sources = [];
      for (var i = 0; i < values.length; i++) {
        sources.push({
          id: i,
          data: values[i]
        });
      }
      this.setState({sourceData: sources});
    });
  },
  getInitialState: function() {
    this.getInitialData();
    return {
      sourceData: null,
      currentPosition: 0,
      currentZoomLevel: 1,
      windowBegin: 0,
      windowEnd: DATA.zoomLevel[1],
      windowSize: DATA.zoomLevel[1],
      chromosomeNr: DATA.chromosomeList[0].id
    };
  },
  getWindowIntervalByZoomLevel: function(zoomLevel) {
    return {
      windowBegin: 0,
      windowEnd: DATA.zoomLevel[zoomLevel],
      windowSize: DATA.zoomLevel[zoomLevel]
    };
  },
  handleMove: function(bundle) {
    this.setState({
      currentPosition: bundle.position
    });
  },
  handleSearch: function(bundle) {
    // TODO
  },
  handleZoom: function(value) {
    value = value || 1;
    var stateUpdate = {};
    Object.assign(stateUpdate, {currentZoomLevel: value}, this.getWindowIntervalByZoomLevel(value));
    console.log("handleZoom ", value, stateUpdate);
    this.setState(stateUpdate);
  },
  changeChromHeader: function(chromosomeNr) {
    this.setState({chromosomeNr: chromosomeNr});
  },
  render: function() {
    return (
      <div>
        <div className="banner">
          <h1>Alazen</h1>
        </div>
        <div className="chromosome-info">
          <h2>Chromosome {this.state.chromosomeNr}</h2>
          <SelectChromosome list={DATA.chromosomeList} changeChromNumber={this.changeChromHeader}/>
        </div>

        <div className="container-fluid main">
          <div className="row navigation">
            <div className="col-xs-12 col-sm-7">
              <SearchField/>
            </div>
            <div className="col-xs-12 col-sm-5">
              <div className="slider-container">
                <Slider min={1} max={7} defaultValue={this.state.currentZoomLevel} onChange={this.handleZoom}/>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12">
              <div className="info">
                Current Position {this.state.currentPosition} / Zoomlevel {this.state.currentZoomLevel} / More Info
              </div>
            </div>
          </div>
          <div className="row">
            <div className="lane-container col-sm-12">
              <LaneContainer data={this.state.sourceData} currentZoomLevel={this.state.currentZoomLevel} windowBegin={this.state.windowBegin} windowEnd={this.state.windowEnd} windowSize={this.state.windowSize} moveFunction={this.handleMove}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default GuiComponent;
