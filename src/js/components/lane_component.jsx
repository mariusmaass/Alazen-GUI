'use strict';

import React from 'react';
import LaneFragment from './lane_fragment.jsx!';

var Lane = React.createClass({
  getInitialState: function() {
    return {testSeq: this.props.data};
  },
  setLane: function() {
    return this.state.testSeq.map(function(seq) {
      return <LaneFragment key={seq.id} sequence={seq.sequence} mutation={seq.mutation}/>;
    });
  },

  render: function() {
    return (
      <div className="lane">
        {this.setLane()}
      </div>
    );
  }
});

export default Lane;
