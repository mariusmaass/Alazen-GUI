'use strict';

import dataProvider from 'backend/data_provider';

describe('dataProvider', function(){
  describe('[actions]', function(){
    it('has a getSource function', function()  {
    	expect( dataProvider.getSource ).toBeDefined();
    });

    it('has a searchFor function', function() {
    	expect ( dataProvider.searchFor ).toBeDefined();
    });

  });
});
