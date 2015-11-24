'use strict';

import React from 'react';

var LaneFragment = React.createClass({
  style: function(){
    return {backgroundColor: this.props.color}
  },
  render: function() {
    return (
      <span className="lanefragment" style={this.style()}>
        {this.props.sequence}
      </span>
    );
  }
});

export default LaneFragment;
