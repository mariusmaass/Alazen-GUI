'use strict';

import providerUtils from 'backend/data_provider_utils';

var testMutationJSON =
'{"details": ' +
  '{"refseq": "AAACCCCGGGGTTTT",' +
  '"mutations": [' +
    '{"refname":"PX7",' +
    '"mutationseq": "AAACCCC","position":' +
    '{"from": 0, "to": 6 },' +
    '"metadata": ""},' +
    '{"refname": "PX10",' +
    '"mutationseq": "TTT", "position":' +
    '{"from": 12, "to": 14},' +
    '"metadata": ""}' +
  ']}' +
'}';

var expectedAnswer = new Array({
  id: 0,
  sequence: "AAACCCC",
  mutationFlag: true,
  metadata: ""
  },
  {
    id: 1,
    sequence: "GGGGT",
    mutationFlag: false,
    metadata: ""
  },
  {
    id: 2,
    sequence: "TTT",
    mutationFlag: true,
    metadata: ""
  }
);


describe('dataProvider', function() {
  describe('[actions]', function() {
    it('has a buildMutationSequence function', function() {
      var answer = providerUtils.buildMutationSequence(JSON.parse(testMutationJSON));
      expect(JSON.stringify(answer)).toBe(JSON.stringify(expectedAnswer));
    });
  });
});
