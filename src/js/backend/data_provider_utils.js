'use strict';

var providerUtils = {
  /**
   *
   * @param {json} parsedJson has endOfLastInterval be a parsed JSON-variable like 'testMutationJSON'
   * @returns {Array}
   */
  buildMutationSequence: function(parsedJson) {
    var ref = parsedJson.detail.refseq;
    var mutations = parsedJson.detail.mutations;
    var mutationSequence = [];
    var endOfLastInterval = 0;
    var startOfMutation = 0;

    if (mutations.length == 0) {
      mutationSequence.push({
        id: "refSeq",
        sequence: ref,
        mutationFlag: false,
        metadata: ""
      });
      return mutationSequence;
    }

    for(var index = 0; index < mutations.length; index++) {
      startOfMutation = mutations[index].interval.startOfMutation;

      if (startOfMutation != 0 || endOfLastInterval < startOfMutation - 1) {
        handleGaps(ref, mutationSequence, startOfMutation, endOfLastInterval, index);
      }

      endOfLastInterval = mutations[index].interval.endOfLastInterval;
      var subSequence = ref.substring(startOfMutation, endOfLastInterval);
      mutationSequence.push({
        id: mutations[index].name,
        sequence: subSequence,
        mutationFlag: true,
        metadata: mutations[index].metadata
      });

      if (index + 1 == mutations.length) {
        handleGaps(ref, mutationSequence, startOfMutation, endOfLastInterval, index);
      }
    }
    return mutationSequence;
  }
};

function handleGaps(ref, mutationSequence, startOfMutation, endOfLastInterval, index) {
  var sequence = "test";
  if (endOfLastInterval == 0 && startOfMutation != 0) {
    sequence = ref.substring(endOfLastInterval, startOfMutation - 1);
  } else if (endOfLastInterval < startOfMutation - 1) {
    sequence = ref.substring(endOfLastInterval + 1, startOfMutation - 1);
  } else if (endOfLastInterval != ref.length) {
    sequence = ref.substring(endOfLastInterval + 1, ref.length);
  }
  mutationSequence.push({
    id: index,
    sequence: sequence,
    mutationFlag: false,
    metadata: ""
  });
}

export default providerUtils;
