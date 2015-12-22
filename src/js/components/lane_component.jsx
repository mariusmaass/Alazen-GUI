'use strict';

import React from 'react';
import LaneFragment from './lane_fragment_component.jsx!';

var Lane = React.createClass({
  getInitialState: function() {
    return {sequences: this.props.sequences};
  },
  setLane: function() {
    return this.state.sequences.map(function(seq) {
      return <LaneFragment key={seq.id} sequence={seq.sequence} mutation={seq.mutation} metadata={seq.metadata} clickOnMutation={this.props.clickOnMutation}/>;
    }, this);
  },
  render: function() {
    return (
      <div className="lane-content lane-detail">
        {this.setLane()}
      </div>
    );
  }
});

export default Lane;
