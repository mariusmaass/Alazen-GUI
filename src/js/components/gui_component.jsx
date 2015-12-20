'use strict';

import React from 'react';

import LaneContainer from './lane_container.jsx!';
import Slider from 'rc-slider';
import SearchField from './searchfield_component.jsx!';
import SelectChromosome from 'components/chromosome_selection_component.jsx!';

import dataProvider from 'backend/data_provider';

var chromosomeList = dataProvider.getChromosomes();

var GuiComponent = React.createClass({
  getInitialState: function () {
    return {
      testdata: dataProvider.getSources(),
      currentPosition: 0,
      currentZoomlevel: 1,
      chromosomeNr: chromosomeList[0].id
    };
  },
  handleMove: function (bundle) {
    console.log("handleMove ", bundle);
    //testjson.push({id: 13, sequence: "XYZELEFANT======", mutation: true});
    this.setState({
      testdata: dataProvider.getSources(),
      currentPosition: bundle.position
    });
  },
  handleSearch: function (bundle) {

  },
  handleZoom: function (value) {
    console.log("handleZoom ", value);
    this.setState({currentZoomlevel: value});
  },
  changeChromHeader: function (chromNum) {
    this.setState({chromosomeNr: chromNum});
  },
  render: function () {
    return (
      <div>
        <div className="banner">
          <h1>Alazen</h1>
        </div>
        <div className="chromosome-info">
          <h2 id="chromosome_header">Chromosome {this.state.chromosomeNr}</h2>
        </div>

        <div className="container-fluid main">
          <div id="chromosome_selection_component"></div>
          <SelectChromosome list={chromosomeList} changeChromNumber={this.changeChromHeader}/>
          <div className="row navigation">
            <div className="col-xs-12 col-sm-7">
              <SearchField/>
            </div>
            <div className="col-xs-12 col-sm-5">
              <div className="slider-container">
                <Slider min={1} max={7} defaultValue={this.state.currentZoomlevel} onChange={this.handleZoom}/>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12">
              <div className="info">
                Current Position {this.state.currentPosition} / Zoomlevel {this.state.currentZoomlevel} / More Info
              </div>
            </div>
          </div>
          <div className="row">
            <div className="lane-container col-sm-12">
              <LaneContainer data={this.state.testdata} moveFunction={this.handleMove}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

export default GuiComponent;
