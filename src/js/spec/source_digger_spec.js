'use strict';

import sourceDigger from 'backend/source_digger';
// TODO: fix failure
describe('sourceDigger', function() {
  describe('.getSources()', function() {
    it('returns Promise with source Object', function(done)  {
      sourceDigger.getSources().then(function(result) {
        expect(result).toEqual({"1000GenomeProject": false});
        done();
      });
    });
  });
});
