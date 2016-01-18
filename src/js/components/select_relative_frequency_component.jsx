'use strict';

import React from 'react';
var SelectRelativeFrequencyCheckbox = React.createClass({
  getInitialState: function() {
    return {checked: true};
  },
  getSelected: function(item) {
    this.setState({checked: !this.state.checked});
    var selected = this.refs.selectBox.value;
    console.debug(selected);
    console.log(selected + " selected.");
    this.props.checkboxSelected(selected);
  },
  render: function() {
    return (
        <label className="checkbox-inline">
          <input type="checkbox" checked={this.state.checked} id="SearchCheckbox3" ref="selectBox" value="relFreq" onChange={this.getSelected} /> relative frequency
        </label>
    );
  }
});
export default SelectRelativeFrequencyCheckbox;
