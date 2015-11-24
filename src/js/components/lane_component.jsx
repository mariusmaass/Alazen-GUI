'use strict';

import React from 'react';

import LaneFragment from './lane_fragment.jsx!';


var Lane = React.createClass({
  getInitialState: function() {
    return {testseq: this.props.data};
  },

  setLane: function() {
    return this.state.testseq.map(function(seq){
      var color;
      if(seq.mutation){
        color = "red";
      }else{
        color = "green";
      }
      return <LaneFragment sequence={seq.sequence} color={color} />
    })
  },

  render: function() {
    return (
      <div className="lane">
        <p>
          {this.setLane()}
        </p>
      </div>
    );
  }
});

export default Lane;
