'use strict';

import React from 'react';

var LaneFragment = React.createClass({
  style: function() {
    if (this.props.mutation) {
      return {backgroundColor: "red", cursor: "help"};
    }
  },
  createBase: function() {
    var base = [];
    var seq = this.props.sequence;
    for (var i = 0; i < seq.length; i++) {
      base.push(<span className="char-element" key={i}>{seq[i]}</span>);
    }
    return base;
  },
  clickMutation: function() {
    if (this.props.mutation) {
      console.log("Mutation!", this.props.metadata);
      this.props.clickOnMutation(this.props.metadata);
    }
  },
  render: function() {
    return (
      <span className="lanefragment" onClick={this.clickMutation} style={this.style()}>
        {this.createBase()}
      </span>
    );
  }
});

export default LaneFragment;
