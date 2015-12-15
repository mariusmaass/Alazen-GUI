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
        return {testData: dataProvider.getAllSources()};
    },
    handleMove: function (bundle) {
        this.setState({testData: dataProvider.getAllSources});
    },
    handleSearch: function (bundle) {

    },
    handleZoom: function (bundle) {

    },
    render: function () {
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
                    <SelectChromosome list={chromosomeList} selected={chromosomeList[0]}/>
                    <div className="row navigation">
                        <div className="col-xs-12 col-sm-7">
                            <SearchField/>
                        </div>
                        <div className="col-xs-12 col-sm-5">
                            <div className="slider-container">
                                <Slider min={1} max={9} defaultValue={4}/>
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
                            <LaneContainer data={this.state.testData} moveFunction={this.handleMove}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});

export default GuiComponent;
