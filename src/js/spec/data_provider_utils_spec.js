'use strict';

import providerUtils from 'backend/data_provider_utils';

//{"details": {"refseq": "AAACCCGGGTTT", "mutations": [{"refname":"PX7", "mutationseq": "CCG",
//  "position": {"from": 4, "to": 6}, "metadata": ""}, {"refname":"PX10", "mutationseq":"GGT",
//  "position": {"from": 7,"to": 9}, "metadata": ""}]

var testMutationJSON =
'{"details": ' +
  '{"refseq": "AAACCCGGGTTT",' +
  '"mutations": [' +
    '{"refname":"PX7",' +
    '"mutationseq": "CCG","position":' +
    '{"from": 4, "to": 6 },' +
    '"metadata": ""},' +
    '{"refname": "PX10",' +
    '"mutationseq": "GGT", "position":' +
    '{"from": 7, "to": 9},' +
    '"metadata": ""}' +
  ']}' +
'}';

var expectedAnswer = new Array({
  id: 0,
  sequence: "AAAC",
  mutationFlag: false,
  metadata: ""
  },
  {
    id: 1,
    sequence: "CCG",
    mutationFlag: true,
    metadata: ""
  },
  {
    id: 2,
    sequence: "GGT",
    mutationFlag: true,
    metadata: ""
  },
  {
    id: 3,
    sequence: "TT",
    mutationFlag: false,
    metadata: ""
  }
);

describe('dataProvider', function() {
  describe('[actions]', function() {
    it('has a buildMutationSequence function', function() {
      var answer = providerUtils.buildMutationSequence(JSON.parse(testMutationJSON));
      expect(answer).toBe(expectedAnswer);
    });
  });
});
