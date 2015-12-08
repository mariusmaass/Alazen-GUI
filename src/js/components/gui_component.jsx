'use strict';

import React from 'react';

import LaneContainer from './lane_container.jsx!';
import Slider from 'rc-slider';
import SearchField from './searchfield_component.jsx!';

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
                {id: 12, sequence: "ATGCATGCATGCATGCATGCTGGA", mutation: false}
              ];

var testdatas = [{id: 1, data: testjson},
                 {id: 2, data: testjson},
                 {id: 3, data: testjson}
                ];

var GuiComponent = React.createClass({
  getInitialState: function(){
    return {testdata: testdatas,
            currentPosition: 0,
            currentZoomlevel: 1};
  },
  handleMove: function(bundle){
    console.log("handleMove ", bundle);
    //testjson.push({id: 13, sequence: "XYZELEFANT======", mutation: true});
    this.setState({
        testdata: testdatas,
        currentPosition: bundle.position
    });
  },
  handleSearch: function(bundle){

  },
  handleZoom: function(value){
      console.log("handleZoom ", value);
      this.setState({currentZoomlevel: value});
  },
  render: function() {
    return (
      <div>
        <div className="banner">
          <h1>Alazen</h1>
        </div>
        <div className="chromosome-info">
          <h2>Chromosome 14</h2>
        </div>

        <div className="container-fluid main">
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
