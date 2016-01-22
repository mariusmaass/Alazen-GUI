'use strict';

import React from 'react';
import ReactUtils from 'react-addons-test-utils';
import ChromosomeSelection from 'components/chromosome_selection_component.jsx!';

describe('ChromosomeSelection', function() {
  it('works', function() {
    var component = ReactUtils.renderIntoDocument(
       <ChromosomeSelection list={[]} />
    );
    var select = ReactUtils.findRenderedDOMComponentWithTag(component, 'select');
    expect(select).toBeDefined();
  });
});
