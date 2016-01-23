'use strict';

var providerUtils = {
  /**
   *
   * @param {json} parsedJson has endOfLastInterval be a parsed JSON-variable like 'testMutationJSON'
   * @returns {Array}
   */
  buildMutationSequence: function(parsedJson) {
    var ref                   = parsedJson.details.refseq;
    var mutations             = parsedJson.details.mutations;
    var mutationSequence      = [];
    var mutationSequenceIndex = 0;
    var endOfLastInterval     = 0;
    var startOfMutation       = 0;
    var sequence              = "";

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
      startOfMutation = mutations[index].position.from;
      // if first mutation is not at start of refseq
      if (startOfMutation !== 0 && index === 0) {
        sequence = ref.substring(0, startOfMutation);
        pushSequence(sequence, mutationSequence, mutationSequenceIndex);
        mutationSequenceIndex++;
          // if there is a gap between mutations
      } else if (endOfLastInterval < startOfMutation - 1) {
        sequence = ref.substring(endOfLastInterval + 1, startOfMutation);
        pushSequence(sequence, mutationSequence, mutationSequenceIndex);
        mutationSequenceIndex++;
      }
      endOfLastInterval = mutations[index].position.to;
      // pushing a mutation into the array
      mutationSequence.push({
        id: mutationSequenceIndex,
        sequence: mutations[index].mutationseq,
        mutationFlag: true,
        metadata: mutations[index].metadata
      });
      mutationSequenceIndex++;
      // if the last mutation does not reach the end of the refseq
      if (index + 1 == mutations.length && endOfLastInterval < ref.length - 1) {
        sequence = ref.substring(endOfLastInterval + 1, ref.length + 1);
        pushSequence(sequence, mutationSequence, mutationSequenceIndex);
        mutationSequenceIndex++;
      }
    }
    return mutationSequence;
  }
};

/**
* Pushes the given string into the provided array with the index.
* Will only be called for gaps and such,
* @param sequence
* @param mutationSequence
* @param index
*/
function pushSequence(sequence, mutationSequence, index) {
  mutationSequence.push({
    id: index,
    sequence: sequence,
    mutationFlag: false,
    metadata: ""
  });
}

export default providerUtils;
