'use strict';

import React from 'react';

var MutationView = React.createClass({
  createView: function() {
    return this.props.metaDataArray.map(function(metaData) {
      return <div className="mutation-view" key={metaData.name}>
        <h1>{metaData.name}</h1>
        <table className="mutation-view-table">
          <tbody>
            <tr>
              <th>Sequenz</th>
              <td>{metaData.sequence}</td>
            </tr>
            <tr>
              <th>Position</th>
              <td>{metaData.position.from} - {metaData.position.to}</td>
            </tr>
            <tr>
              <th>Quelle</th>
              <td>{metaData.source}</td>
            </tr>
            <tr>
              <th>Geschlecht</th>
              <td>{metaData.gender}</td>
            </tr>
            <tr>
              <th>Downloadzeit</th>
              <td>{metaData.downloadTime}</td>
            </tr>
          </tbody>
        </table>
      </div>;
    });
  },
  render: function() {
    console.log("MutationView", this.props.metaDataArray);
    if (this.props.metaDataArray === null) {
      return <p>Keine Mutation ausgewählt.</p>;
    } if (this.props.metaDataArray === undefined) {
      return <p>Es wurden keine Metadaten zu der Mutation gefunden.</p>;
    } else {
      return <div>{this.createView()}</div>;
    }
  }
});

export default MutationView;
