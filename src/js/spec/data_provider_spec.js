'use strict';

import dataProvider from 'backend/data_provider';

describe('dataProvider', function(){
  describe('[actions]', function(){
    it('has a fetchMutations function', function(){
      expect( dataProvider.fetchMutations ).toBeDefined();
    });

    it('has a fetchReferenceGenome function', function()  {
    	expect( dataProvider.fetchReferenceGenome ).toBeDefined();
    });

    it('has a searchFor function', function() {
    	expect ( dataProvider.searchFor ).toBeDefined();
    });

  });
});
