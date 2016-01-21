'use strict';

import React from 'react';
var InputRelativeFrequency = React.createClass({
  getInitialState: function() {
    return {value: '100'};
  },
  getInput: function(item) {
    this.setState({value: item.target.value});
    var input = this.refs.numberBox.value;
    //console.debug(input);
    //console.log("Input: " + input);
    this.props.numberInput(input);
  },
  render: function() {
    return (
      <div className="form-group rel-freq-box">
        <label htmlFor="relFreq"> Relative frequency(%):
          <br/>
          <input type="number" className="form-control rel-freq" min="0" max="100" value={this.state.value} id="relFreq" ref="numberBox" onChange={this.getInput}/>
        </label>
      </div>
    );
  }
});
export default InputRelativeFrequency;
