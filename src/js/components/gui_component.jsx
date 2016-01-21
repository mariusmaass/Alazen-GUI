'use strict';

import React from 'react';
import $ from 'jquery';
import yyid from 'yyid';

import LaneContainer from './lane_container_component.jsx!';
import Slider from 'rc-slider';
import SearchField from './searchfield_component.jsx!';
import SelectChromosome from './chromosome_selection_component.jsx!';
import dataProvider from 'backend/data_provider';
import DATA from 'backend/embedded_data';

var GuiComponent = React.createClass({
  initalState: {
    sourceData: null,
    currentZoomLevel: 1,
    windowBegin: 0,
    windowEnd: DATA.zoomLevel[1],
    windowSize: DATA.zoomLevel[1],
    chromosomeNr: DATA.chromosomeList[0].id,
    laneContentsVersion: yyid()
  },
  getInitialState: function() {
    this.getInitialData().then((sources) => {
      this.setState({sourceData: sources});
    });
    return this.initalState;
  },
  getInitialData: function() {
    return dataProvider.getPosition(
      ["Maus", "Pferd", "B-Meise"],
      "ChromosomeXY",
      "0 - 10",
      7,
      true
    );
  },
  getWindowBeginForZoomlevel: function(oldWindowBegin, zoomLevel) {
    if (oldWindowBegin < 0) { return 0; }
    // var intervalSize = DATA.zoomLevel[zoomLevel] / DATA.config.numberOfIntervals;
    // var offBy = oldWindowBegin % intervalSize;
    // return oldWindowBegin + intervalSize - offBy;
    return oldWindowBegin;
  },
  handleMove: function(bundle) {
    var newWindowBegin = this.getWindowBeginForZoomlevel(bundle.windowBegin, this.state.currentZoomLevel);
    dataProvider.getPosition(
      ["Maus", "Pferd", "B-Meise"],
      "ChromosomeXY",
      newWindowBegin,
      this.state.currentZoomLevel,
      this.state.currentZoomLevel === 1
    ).then((sources) => {
      var stateUpdate = {};
      Object.assign(
        stateUpdate,
        {
          windowBegin: newWindowBegin,
          windowEnd:   newWindowBegin + this.state.windowSize,
          sourceData: sources,
          laneContentsVersion: yyid()
        }
      );
      this.setState(stateUpdate);
    });
  },
  handleSearch: function(bundle) {
    // TODO
  },
  handleZoom: function(zoomLevel) {
    zoomLevel          = zoomLevel ||  1;
    var isDetailView   = zoomLevel === 1;
    var newWindowBegin = this.getWindowBeginForZoomlevel(this.state.windowBegin, zoomLevel);
    dataProvider.getPosition(
      ["Maus", "Pferd", "B-Meise"],
      "ChromosomeXY",
      newWindowBegin,
      zoomLevel,
      isDetailView
    ).then((sources) => {
      var stateUpdate = {};
      Object.assign(
        stateUpdate,
        {
          currentZoomLevel: zoomLevel,
          windowSize:       DATA.zoomLevel[zoomLevel],
          windowBegin:      newWindowBegin,
          windowEnd:        newWindowBegin + DATA.zoomLevel[zoomLevel],
          sourceData:       sources,
          laneContentsVersion: yyid()
        }
      );
      this.setState(stateUpdate);
    });
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
          <br/>
          <img className="ideogram" src={"/images/chromosome_" + this.state.chromosomeNr + ".png"}/>
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
                Current Position {this.state.windowBegin} | Zoomlevel {this.state.currentZoomLevel}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="lane-container col-sm-12">
              <LaneContainer data={this.state.sourceData} currentZoomLevel={this.state.currentZoomLevel} windowBegin={this.state.windowBegin} windowEnd={this.state.windowEnd} windowSize={this.state.windowSize} moveFunction={this.handleMove} laneContentsVersion={this.state.laneContentsVersion}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default GuiComponent;
