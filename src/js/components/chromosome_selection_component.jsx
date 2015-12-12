'use strict';

import React from 'react';
var SelectChromosome = React.createClass({
  onSelectClick: function(item) {
    console.log("Chromosome " + this.refs.selectBox.value + " selected.");
    var temp = this.refs.selectBox.value;
    if(temp === "23")
        temp = "X";
    else if(temp === "24")
        temp = "Y";
    document.getElementById("chromosome_header").innerHTML= "Chromosome " + temp;
    this.props.selected = item;
  },

  render: function() {
      return (
        <div>
          <div className="selection-list">
            <div className="row">
              <div className="col-xs-2 col-md-offset-5">
                <select className="form-control" ref="selectBox" onChange={this.onSelectClick}>
                 {this.renderListChromosomes()}
                </select>
              </div>
            </div>
          </div>
        </div>
      );
  },

  renderListChromosomes: function() {
    var chromosomes = [];
    for (var i = 0; i < this.props.list.length; i++) {
      var chromosomeNr = this.props.list[i];
      chromosomes.push(
        <option value={chromosomeNr.id}>{chromosomeNr.name}</option>
      );
    }
    return chromosomes;
  }
});

export default SelectChromosome;
