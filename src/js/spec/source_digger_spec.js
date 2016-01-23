'use strict';

import mockAjax from './mock_ajax';
import sourceDigger from 'backend/source_digger';

describe('sourceDigger', () => {
  describe('.getSources()', () => {
    beforeEach(() => {
      localStorage.clear();
      mockAjax({
        "source": ["1000GenomeProject", "UCSC"],
        "chromosome": "",
        "prefix": [],
        "position": {}
      });
    });

    describe('[on first request, local storage not set yet]', () => {
      it('returns available sources and sets them to false', (done) => {
        sourceDigger.getSources().then(function(result) {
          expect(result).toEqual({"1000GenomeProject": false, "UCSC": false});
          done();
        });
      });

      it('asks backend for available sources', (done) => {
        sourceDigger.getSources().then(function(result) {
          expect($.ajax).toHaveBeenCalled();
          done();
        });
      });

      it('sets local storage to available sources', (done) => {
        sourceDigger.getSources().then(function(result) {
          expect(localStorage.getItem("sources")).toEqual(
            JSON.stringify({"1000GenomeProject": false, "UCSC": false})
          );
          done();
        });
      });
    });

    describe('[on later requests, local storage already set]', () => {
      beforeEach(() => {
        localStorage.setItem("sources", JSON.stringify({"1000GenomeProject": false, "UCSC": true}));
      });

      it('returns available sources and sets them to false', (done) => {
        sourceDigger.getSources().then(function(result) {
          expect(result).toEqual({"1000GenomeProject": false, "UCSC": true});
          done();
        });
      });

      it('will use sources from local storage', (done) => {
        expect(localStorage.getItem("sources")).toEqual(
          JSON.stringify({"1000GenomeProject": false, "UCSC": true})
        );
        done();
      });

      it('does not ask backend for available sources', (done) => {
        expect($.ajax).not.toHaveBeenCalled();
        done();
      });
    });
  });
});
