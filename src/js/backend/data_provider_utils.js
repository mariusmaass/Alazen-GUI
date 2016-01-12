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
    var mutationSequenceIndex = 0;
    var endOfLastInterval = 0;
    var startOfMutation = 0;
    var sequence = "";

    if (mutations.length === 0) {
      mutationSequence.push({
        id: mutationSequenceIndex,
        sequence: ref,
        mutationFlag: false,
        metadata: ""
      });
      return mutationSequence;
    }
    for (var index = 0; index < mutations.length; index++) {
      startOfMutation = mutations[index].interval.from;
      if (startOfMutation !== 0 && index === 0) {
        sequence = ref.substring(endOfLastInterval, startOfMutation);
        pushSequence(sequence, mutationSequence, mutationSequenceIndex);
        mutationSequenceIndex++;
      } else if (endOfLastInterval < startOfMutation - 1) {
        sequence = ref.substring(endOfLastInterval + 1, startOfMutation);
        pushSequence(sequence, mutationSequence, mutationSequenceIndex);
        mutationSequenceIndex++;
      }
      endOfLastInterval = mutations[index].interval.to;
      var subSequence = ref.substring(startOfMutation, endOfLastInterval + 1);
      mutationSequence.push({
        id: mutationSequenceIndex,
        sequence: subSequence,
        mutationFlag: true,
        metadata: mutations[index].metadata
      });
      mutationSequenceIndex++;
      if (index + 1 == mutations.length && endOfLastInterval != ref.length - 1) {
        sequence = ref.substring(endOfLastInterval + 1, ref.length);
        pushSequence(sequence, mutationSequence, mutationSequenceIndex);
        mutationSequenceIndex++;
      }
    }
    return mutationSequence;
  }
};

function pushSequence(sequence, mutationSequence, index) {
  mutationSequence.push({
    id: index,
    sequence: sequence,
    mutationFlag: false,
    metadata: "none"
  });
}

export default providerUtils;
