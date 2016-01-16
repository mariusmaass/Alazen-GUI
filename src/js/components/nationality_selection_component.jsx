'use strict';
import React from 'react';
var SelectNationality = React.createClass({
  getSelectValues: function(item) {
    var select = this.refs.selectBox;
    var result = [];
    var options = select && select.options;
    var opt;

    for (var i = 0, iLen = options.length; i < iLen; i++) {
      opt = options[i];

      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    console.log("Nationality " + result + " selected.");
    this.props.nationalitySelected(result);
  },

  render: function() {
    return (
        <div className="country-selection-list">
            <select multiple size="5" className="form-control" ref="selectBox" onChange={this.getSelectValues}>
                {this.renderListCountries()}
            </select>
        </div>
    );
  },

  renderListCountries: function() {
    var countries = [];
    for (var i = 0; i < this.props.list.length; i++) {
      var country = this.props.list[i];
      if (i == 0)  {
        countries.push(
        <option value={country.id} selected key={country.id}>{country.name}</option>
      );
      }else {
        countries.push(
        <option value={country.id} key={country.id}>{country.name}</option>
      );
      }
    }
    return countries;
  }
});
export default SelectNationality;
