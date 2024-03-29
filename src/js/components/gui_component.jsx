'use strict';

import React from 'react';
import $ from 'jquery';

import LaneContainer from './lane_container_component.jsx!';
import Slider from 'rc-slider';
import SearchField from './searchfield_component.jsx!';
import SelectChromosome from './chromosome_selection_component.jsx!';
import dataProvider from 'backend/data_provider';
import DATA from 'backend/embedded_data';
import sourceDigger from 'backend/source_digger';

var GuiComponent = React.createClass({
  getInitialSourceData: function(sourceNames) {
    dataProvider.getPosition(sourceNames, this.state.chromosomeNr, "0 - 10", 1, true).then((sources) => {
      this.setState({sourceData: sources});
    });
  },
  getInitialSource: function() {
    sourceDigger.getSources().then((sources) => {
      this.setState({availableSources: sources});
      var availableSources = Object.keys(sources).filter((sourceId) => sources[sourceId]);
      this.getInitialSourceData(availableSources);
    });
  },
  getInitialState: function() {
    this.getInitialSource();
    return {
      sourceData: null,
      currentPosition: 0,
      currentZoomLevel: 1,
      windowBegin: 0,
      windowEnd: DATA.zoomLevel[1],
      windowSize: DATA.zoomLevel[1],
      chromosomeNr: DATA.chromosomeList[0].id,
      availableSources: null
    };
  },
  getWindowIntervalByZoomLevel: function(zoomLevel) {
    return {
      windowBegin: 0,
      windowEnd: DATA.zoomLevel[zoomLevel],
      windowSize: DATA.zoomLevel[zoomLevel]
    };
  },
  // TODO go away from single position, always work w/ interval begin and interval end
  handleMove: function(bundle) {
    dataProvider.getPosition(["Maus", "Pferd", "B-Meise"], "ChromosomeXY", bundle.position, this.state.currentZoomLevel, this.state.currentZoomLevel === 1).then((sources) => {
      var stateUpdate = {};
      Object.assign(
        stateUpdate,
        {currentPosition: bundle.position, sourceData: sources}
      );
      console.log("handleMove", bundle.position, stateUpdate);
      this.setState(stateUpdate);
    });
  },
  handleSearch: function(bundle) {
    // TODO
  },
  handleZoom: function(zoomLevel) {
    zoomLevel    = zoomLevel || 1;
    var isDetailView = zoomLevel === 1;
    dataProvider.getPosition(["Maus", "Pferd", "B-Meise"], "ChromosomeXY", this.state.currentPosition, zoomLevel, isDetailView).then((sources) => {
      var stateUpdate = {};
      Object.assign(
        stateUpdate,
        {currentZoomLevel: zoomLevel, sourceData: sources},
        this.getWindowIntervalByZoomLevel(zoomLevel)
      );
      console.log("handleZoom ", zoomLevel, stateUpdate);
      this.setState(stateUpdate);
    });
  },
  handleAddSource: function(selectedSource) {
    // TODO: fail handle!
    dataProvider.getPosition([selectedSource], this.state.chromosomeNr, "0 - 10", this.state.currentZoomLevel, true).then((source) => {
      var oldData = this.state.sourceData;
      var newData = oldData.concat(source);
      var newSources = this.state.availableSources;
      newSources[selectedSource] = true;
      sourceDigger.updateSources(newSources);
      this.setState({
        sourceData: newData,
        availableSources: newSources
      });
    });
  },
  handleRemoveSource: function(selectedSource) {
    // TODO: false lane remove handle
    var oldData = this.state.sourceData;
    var newData = [];
    for (var i = 0; i < oldData.length; i++) {
      if (oldData[i].id !== selectedSource) {
        newData.push(oldData[i]);
      }
    }
    var newSources = this.state.availableSources;
    newSources[selectedSource] = false;
    sourceDigger.updateSources(newSources);
    this.setState({
      sourceData: newData,
      availableSources: newSources
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
                Current Position {this.state.currentPosition} / Zoomlevel {this.state.currentZoomLevel} / More Info
              </div>
            </div>
          </div>
          <div className="row">
            <div className="lane-container col-sm-12">
              <LaneContainer
                data={this.state.sourceData}
                availableSources={this.state.availableSources}
                currentZoomLevel={this.state.currentZoomLevel}
                windowBegin={this.state.windowBegin}
                windowEnd={this.state.windowEnd}
                windowSize={this.state.windowSize}
                moveFunction={this.handleMove}
                addSourceFunction={this.handleAddSource}
                removeSourceFunction={this.handleRemoveSource}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default GuiComponent;
