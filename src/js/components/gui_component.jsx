'use strict';

import React from 'react';

import LaneContainer from './lane_container.jsx!';
import Slider from 'rc-slider';
import SearchField from './searchfield_component.jsx!';
import SelectChromosome from 'components/chromosome_selection_component.jsx!';

var testjson = [{id: 1, sequence: "ATGCATGCATGCATGCATGC", mutation: false},
                {id: 2, sequence: "BGFD", mutation: true},
                {id: 3, sequence: "ATGCATGCATGCATGCATGC", mutation: false},
                {id: 4, sequence: "TGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGAC", mutation: false},
                {id: 5, sequence: "ATGCATGCATGCATGCATGC", mutation: false},
                {id: 6, sequence: "===BG", mutation: true},
                {id: 7, sequence: "ATGCATGCATGCATGCATGC", mutation: false},
                {id: 8, sequence: "ATGCATGCATGCATGCATGCATGCATGCATGCATGCATGCATGC", mutation: false},
                {id: 9, sequence: "ATGCATGCATGCATGCATGCATGCATGC", mutation: false},
                {id: 10, sequence: "ATGCATGCATGCATGCAATGCATGCTGC", mutation: false},
                {id: 11, sequence: "ATGCATATGCATGCATGCATGCGCATGCATGCATGC", mutation: false},
                {id: 12, sequence: "ATGCATGCATGCATGCATGC", mutation: false}
              ];

var testdatas = [{id: 1, data: testjson},
                 {id: 2, data: testjson},
                 {id: 3, data: testjson}
                ];

var chromosomeList = [{
  id: 1, name: "Chromosome 1"}, {id: 2, name: "Chromosome 2"}, {id: 3, name: "Chromosome 3"}, {
  id: 4, name: "Chromosome 4"}, {id: 5, name: "Chromosome 5"}, {id: 6, name: "Chromosome 6"}, {
  id: 7, name: "Chromosome 7"}, {id: 8, name: "Chromosome 8"}, {id: 9, name: "Chromosome 9"}, {
  id: 10, name: "Chromosome 10"}, {id: 11, name: "Chromosome 11"}, {id: 12, name: "Chromosome 12"}, {
  id: 13, name: "Chromosome 13"}, {id: 14, name: "Chromosome 14"}, {id: 15, name: "Chromosome 15"}, {
  id: 16, name: "Chromosome 16"}, {id: 17, name: "Chromosome 17"}, {id: 18, name: "Chromosome 18"}, {
  id: 19, name: "Chromosome 19"}, {id: 20, name: "Chromosome 20"}, {id: 21, name: "Chromosome 21"}, {
  id: 22, name: "Chromosome 22"}, {id: 23, name: "Chromosome X"}, {id: 24, name: "Chromosome Y"}];

var GuiComponent = React.createClass({
  getInitialState: function(){
    return {testdata: testdatas};
  },
  handleMove: function(bundle){
    this.setState({testdata: testdatas});
  },
  handleSearch: function(bundle){

  },
  handleZoom: function(bundle){

  },
  render: function() {
    return (
      <div>
        <div className="banner">
          <h1>Alazen</h1>
        </div>
        <div className="chromosome-info">
          <h2 id="chromosome_header">Chromosome 1</h2>
        </div>

        <div className="container-fluid main">
          <div id="chromosome_selection_component"></div>
            <SelectChromosome list={chromosomeList} selected={chromosomeList[0]} />
          <div className="row navigation">
            <div className="col-xs-12 col-sm-7">
              <SearchField/>
            </div>
            <div className="col-xs-12 col-sm-5">
              <div className="slider-container">
                <Slider min={1} max={9} defaultValue={4} />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12">
              <div className="info">
                Current Position / Zoomlevel / More Info
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <LaneContainer data={this.state.testdata} moveFunction={this.handleMove}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

export default GuiComponent;
