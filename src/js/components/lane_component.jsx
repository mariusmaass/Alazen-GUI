'use strict';

import React from 'react';

var testjson = [{id: 1, sequence: "ATGCATGCATGCATGCATGC", mutation: false},
                {id: 2, sequence: "BGFD", mutation: true},
                {id: 3, sequence: "ATGCATGCATGCATGCATGC", mutation: false},
                {id: 4, sequence: "TGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGAC", mutation: false},
                {id: 5, sequence: "ATGCATGCATGCATGCATGC", mutation: false},
                {id: 6, sequence: "===BG", mutation: true},
                {id: 7, sequence: "ATGCATGCATGCATGCATGC", mutation: false}
              ];

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

var Lane = React.createClass({
  getInitialState: function() {
    return {colors: ["red", "green"],
            testseq: testjson};
  },
  setLanes: function() {
    return this.state.colors.map(function(color){
      return <LaneFragment sequence="XYW" color={color}/>
    });
  },
  setLane: function() {
    return this.state.testseq.map(function(seq){
      var color;
      if(seq.mutation){
        color = "red";
      }else{
        color = "green";
      }
      return <LaneFragment sequence={seq.sequence} color={color} />
    })
  },
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
          <LaneFragment sequence="XYZ" color={this.state.colors}/>
        </p>
        <p>
          {this.setLanes()}
        </p>
        <p>
          {this.setLane()}
        </p>
      </div>
    );
  }
});

export default Lane;
