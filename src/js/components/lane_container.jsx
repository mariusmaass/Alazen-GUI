'use strict';

import React from 'react';

import LaneComponent from './lane_component.jsx!';
import LaneAggregation from './lane_aggregation.jsx!';
import Draggable from 'react-draggable';

var SourceSelect = React.createClass({
    addSource: function () {
        var test = {
            id: 4, data: [{id: 1, sequence: "ATGCATGCATGCATGCATGC", mutation: false},
                {id: 2, sequence: "ATGCATGCATGCATGCATGC", mutation: false},
                {id: 3, sequence: "ATGCATGCATGCATGCATGC", mutation: false},
                {id: 4, sequence: "ATGCATGCATGCATGCATGC", mutation: false},
                {id: 5, sequence: "ATGCATGCA===========", mutation: true},
                {id: 6, sequence: "ATGCATGCATGCATGCATGC", mutation: false},
                {id: 7, sequence: "ATGCATGCATGCATGCATGC", mutation: false},
                {id: 8, sequence: "ATGCATGCATGCATGCATGC", mutation: false}
            ]
        };
        console.log(test);
        this.props.handleClick(test);
    },
    render: function () {
        return <div className="source-select">
            <button className="btn btn-success active source-button">Source 1</button>
            <button className="btn btn-success active source-button">Source 2</button>
            <button className="btn btn-success active source-button">Source 3</button>
            <button className="btn btn-primary sourcebutton" onClick={this.addSource}>Source 4</button>
        </div>
    }
});

var LaneContainer = React.createClass({
    getInitialState: function () {
        return {
            data: this.props.data,
            detailView: true,
            startPos: 200,
            endPos: 500
        };
    },
    handleClick: function (updateData) {
        //todo: anpassen für alle vier quellen
        //this.replaceState({data: updateData});
        var testdata = this.state.data;
        if (typeof testdata[3] == "undefined") {
            testdata.push(updateData)
            this.setState({data: testdata});
        } else {
            testdata.pop();
            this.setState({data: testdata});
        }

    },
    toggleDetailView: function () {
        this.setState({detailView: !this.state.detailView});
    },
    createLanes: function () {
        if (this.state.detailView) {
            return this.state.data.map(function (lanedata) {
                return <LaneComponent data={lanedata.data}/>
            });
        } else {
            return <LaneAggregation />
        }
    },
    createLanesLabes: function () {
        return this.state.data.map(function (lanedata) {
            return <div className="lanesource caption">Source: {lanedata.id}</div>
        });
    },
    createIndex: function () {
        var index = [];
        for (var i = this.state.startPos; i <= this.state.endPos; i++) {
            if ((i % 10) == 0) {
                index.push(<span className="char-element">{i}</span>);
            } else {
                index.push(<span className="char-element">_</span>);
            }
        }
        return index;
    },
    startPoint: function () {
        return {x: -(20 * 15), y: 0};
    },
    handleDrag: function (event, ui) {
        //console.log("handleDrag: ", event);
        console.log("handleDrag: ", ui.position);
        console.log("handleDrag: ", (Math.abs(ui.position.left) / 15) + this.state.startPos);
        var bundle = {position: (Math.abs(ui.position.left) / 15) + this.state.startPos};
        this.props.moveFunction(bundle);
    },
    render: function () {
        return <div>
            <SourceSelect handleClick={this.handleClick}/>
            <button onClick={this.toggleDetailView}>Toggle Details</button>
            <div className="lane-block">
                <div className="labels">
                    <div className="caption">Index</div>
                    <div className="lane-labels">{this.createLanesLabes()}</div>
                </div>
                <div className="lanes">
                    <Draggable axis="x" onStop={this.handleDrag} start={this.startPoint()}>
                        <div>
                            <div className="index-intervall">{this.createIndex()}</div>
                            <div>{this.createLanes()}</div>
                        </div>
                    </Draggable>
                </div>
            </div>

        </div>
    }
});

export default LaneContainer;
