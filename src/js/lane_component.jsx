'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

var data = [{"seq1": "TGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGAC"},
            {"seq2": "TGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGAC"}];

var Lane = React.createClass({
  getInitialState: function(){
    return {data: []};
  },
  render: function() {
    return (
      <div className="commentBox">
        {this.state.data[1]}
      </div>
    );
  }
});

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Lane data={data}/>, document.getElementById("lane_component"));
})
