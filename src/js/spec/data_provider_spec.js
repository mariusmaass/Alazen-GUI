'use strict';

import dataProvider from 'backend/data_provider';

describe('dataProvider', function() {
  describe('[actions]', function() {
    it('has a getSource function', function()  {
      expect(dataProvider.getPosition).toBeDefined();
    });

    it('has a getInitialSources function,', function() {
      expect(dataProvider.getInitialSources).toBeDefined();
    });

    it('has a searchGene function', function() {
      expect(dataProvider.searchGene).toBeDefined();
    });

    it('has a getPossibleGeneNames function', function() {
      expect(dataProvider.getPossibleGeneNames).toBeDefined();
    });
  });
});
