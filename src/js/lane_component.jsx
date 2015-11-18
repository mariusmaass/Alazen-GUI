'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

var data = "TGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGAC";

var Lane = React.createClass({
  getSequence: function(){
    return {laneseq: data};
  },

  render: function(){
    return (
      <div>
        {this.state.laneseq}
      </div>
    )
  }
})

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Lane />, document.getElementById('lane_component'))
})
