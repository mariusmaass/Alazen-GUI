'use strict';

import React from 'react';

var MutationView = React.createClass({
  render: function() {
    return <div className="mutation-view">
      <h1>{this.props.metadata.metaDataId}</h1>
    </div>;
  }
});

export default MutationView;
