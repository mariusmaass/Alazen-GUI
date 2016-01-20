'use strict';

import providerUtils from 'backend/data_provider_utils';

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

var testMutationJSON2 =
'{"details": ' +
  '{"refseq": "AAACCCCGGGGTTTT",' +
  '"mutations": [' +
    '{"refname":"PX7",' +
    '"mutationseq": "CCGGGG","position":' +
    '{"from": 5, "to": 10 },' +
    '"metadata": ""},' +
    '{"refname": "PX10",' +
    '"mutationseq": "GGTTT", "position":' +
    '{"from": 9, "to": 13},' +
    '"metadata": ""}' +
  ']}' +
'}';

var expectedAnswer2 = new Array({
  id: 0,
  sequence: "AAACC",
  mutationFlag: false,
  metadata: ""
  },
  {
    id: 1,
    sequence: "CCGGGG",
    mutationFlag: true,
    metadata: ""
  },
  {
    id: 2,
    sequence: "GGTTT",
    mutationFlag: true,
    metadata: ""
  },
  {
    id: 3,
    sequence: "T",
    mutationFlag: false,
    metadata: ""
  }
);

var testMutationJSON3 =
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

var expectedAnswer3 = new Array({
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
      answer = providerUtils.buildMutationSequence(JSON.parse(testMutationJSON2));
      expect(JSON.stringify(answer)).toBe(JSON.stringify(expectedAnswer2));
      answer = providerUtils.buildMutationSequence(JSON.parse(testMutationJSON3));
      expect(JSON.stringify(answer)).toBe(JSON.stringify(expectedAnswer3));
    });
  });
});
