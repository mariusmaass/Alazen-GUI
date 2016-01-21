'use strict';

import React from 'react';
var SelectFemaleCheckbox = React.createClass({
  getInitialState: function() {
    return {checked: true};
  },
  getSelected: function(item) {
    this.setState({checked: !this.state.checked});
    var selected = this.refs.selectBox.value;
    //console.debug(selected);
    //console.log(selected + " selected.");
    this.props.checkboxSelected(selected);
  },
  render: function() {
    return (
        <label className="checkbox">
          <input type="checkbox" checked={this.state.checked} id="SearchCheckbox2" ref="selectBox" value="female" onChange={this.getSelected} /> female
        </label>
    );
  }
});
export default SelectFemaleCheckbox;
