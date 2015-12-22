'use strict';

import React from 'react';

var MutationView = React.createClass({
  render: function() {
    if (this.props.metadata === null) {
      return <p>Keine Mutation ausgewählt.</p>;
    } if (this.props.metadata === undefined) {
      return <p>Es wurden keine Metadaten zu der Mutation gefunden.</p>;
    } else {
      var metadata = this.props.metadata;
      return <div className="mutation-view">
        <h1>{metadata.name}</h1>
        <table className="mutation-view-table">
          <tbody>
            <tr>
              <th>Sequenz</th>
              <td>{metadata.sequence}</td>
            </tr>
            <tr>
              <th>Position</th>
              <td>{metadata.position.from} - {metadata.position.to}</td>
            </tr>
            <tr>
              <th>Quelle</th>
              <td>{metadata.source}</td>
            </tr>
            <tr>
              <th>Geschlecht</th>
              <td>{metadata.gender}</td>
            </tr>
            <tr>
              <th>Downloadzeit</th>
              <td>{metadata.downloadTime}</td>
            </tr>
          </tbody>
        </table>
      </div>;
    }
  }
});

export default MutationView;
