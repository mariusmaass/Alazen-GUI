'use strict';

import React from 'react';

import LaneContainer from './lane_container_component.jsx!';
import Slider from 'rc-slider';
import SearchField from './searchfield_component.jsx!';
import SelectChromosome from './chromosome_selection_component.jsx!';

import dataProvider from 'backend/data_provider';

var chromosomeList = dataProvider.getChromosomes();

var GuiComponent = React.createClass({
  getInitialState: function() {
    return {
      sourceData: dataProvider.getSources(),
      currentPosition: 0,
      currentZoomLevel: 1,
      chromosomeNr: chromosomeList[0].id
    };
  },
  handleMove: function(bundle) {
    this.setState({
      sourceData: dataProvider.getSources(),
      currentPosition: bundle.position
    });
  },
  handleSearch: function(bundle) {
    // TODO
  },
  handleZoom: function(value) {
    this.setState({currentZoomLevel: value});
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
          <SelectChromosome list={chromosomeList} changeChromNumber={this.changeChromHeader}/>
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
              <LaneContainer sourceData={this.state.sourceData} moveFunction={this.handleMove}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default GuiComponent;
