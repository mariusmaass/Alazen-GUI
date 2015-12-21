'use strict';

import dataProvider from 'backend/data_provider';

describe('dataProvider', function() {
  describe('[actions]', function() {
    it('has a getSource function', function()  {
      expect(dataProvider.getSource).toBeDefined();
    });

    it('has a searchGene function', function() {
      expect(dataProvider.searchGene).toBeDefined();
    });

  });
});
