'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

var data = [{id: 1, text: "TGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGAC"},
            {id: 2, text: "TGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGAC"},
            {id: 3, text: "TGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGAC"},
            {id: 4, text: "TGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGAC"},
            {id: 5, text: "TGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGAC"}
            ];

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

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Lane data={data}/>, document.getElementById("lane_component"));
})
