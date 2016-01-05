'use strict';

import providerUtils from 'backend/data_provider_utils';

var testMutationJSON = '{"detail":{"refseq": "AAACCCGGGTTT",' +
  '"mutations":' +
  '[{"name":"PX7","interval":' +
  '{ "from": 4, "to": 6 }},' +
  '{"name": "PX10", "interval":' +
  '{"from": 7, "to": 9}}' +
  ']}}';

var expectedAnswer = new Array([{
  id: "0",
  sequence: "AAAC",
  mutationFlag: false,
  metadata: ""
},
  {
    id: "PX7",
    sequence: "CCG",
    mutationFlag: true,
    metadata: ""
  },
  {
    id: "PX10",
    sequence: "GGT",
    mutationFlag: true,
    metadata: ""
  },
  {
    id: "3",
    sequence: "TT",
    mutationFlag: false,
    metadata: ""
  },
]);

describe('dataProvider', function() {
  describe('[actions]', function() {
    it('has a buildMutationSequence function', function() {
      var answer = providerUtils.buildMutationSequence(JSON.parse(testMutationJSON));
      expect(answer).toBe(expectedAnswer);
    });
  });
});
