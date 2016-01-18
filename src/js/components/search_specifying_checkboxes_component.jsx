'use strict';

import React from 'react';
var SelectFemaleCheckbox = React.createClass({
  getSelected: function(item) {
    var selected = this.refs.selectBox.value;
    console.debug(selected);
    console.log(selected + " selected.");
    this.props.checkboxSelected(selected);
  },
  render: function() {
    return (
        <label className="checkbox-inline">
          <input type="checkbox" id="SearchCheckbox" ref="selectBox" value="female" onChange={this.getSelected} /> female
        </label>
    );
  }
});
export default SelectFemaleCheckbox;
