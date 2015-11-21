'use strict';

import React from 'react';

var Lane = React.createClass({
  //functions?
  parseSeq: function(seq){

    return seq[1].text.slice(0,5)+"#"+seq[1].text.slice(6,22)+"#"+seq[1].text.slice(23);
  },
  render: function() {
    return (
      <div className="lane">
        <p>
          {this.props.data.map(function(row){
              console.log(row.text.length);
              return row.text;
            })}
        </p>
        <p>
          {this.parseSeq(this.props.data)}
        </p>
      </div>
    );
  }
});

export default Lane;