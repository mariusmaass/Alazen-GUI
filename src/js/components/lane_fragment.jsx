'use strict';

import React from 'react';

var LaneFragment = React.createClass({
    style: function () {
        if (this.props.mutation) {
            return {backgroundColor: "red", cursor: "help"}
        }
    },
    createBase: function () {
        var base = [];
        var seq = this.props.sequence;
        for (var i = 0; i < seq.length; i++) {
            base.push(<span className="char-element">{seq[i]}</span>);
        }
        return base;
    },
    getData: function () {
        if (this.props.mutation) {
            console.log("Mutation!");
        }
    },
    render: function () {
        return (
            <span className="lanefragment" onClick={this.getData} style={this.style()}>
        {this.createBase()}
      </span>
        );
    }
});

export default LaneFragment;
