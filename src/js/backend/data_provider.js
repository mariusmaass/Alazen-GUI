'use strict';

import $ from 'jquery';

/**
 * endpoints to dummyBackendServer
 * @type {string}
 */
//var refGenUrl = "http://localhost:8081/refGen/";
//var mutationsUrl = "http://localhost:8081/mutations/";

var detailTestDataUrl = "../../test/dummyRehashedDetailViewData.json";
var agreggatedTestDataUrl = "../../test/dummyAgreggatedViewData.json";
var chromosomeTestDataUrl = "../../test/dummyChromosomeList.json";

/**
 * GET-request to backend
 *
 * @param {string} url to endpoint
 */
function fetchData(url) {
  var ajaxCall = $.ajax({
    type: "GET",
    url: url,
    dataType: "json"
  });

  return ajaxCall.promise();
}

/**
 * Interface to GUI
 *
 * @type {{getSource: dataProvider.getSource, getSources: dataProvider.getSources, getPosition: dataProvider.getPosition, getChromosomes: dataProvider.getChromosomes, searchFor: dataProvider.searchGene, getPossibleSourceNamesForUserInput: ((userInput))}}
 */
var dataProvider = {

  /**
   * if detailView -> detailed data with refString will be sent
   * otherwise aggregated data
   *
   * @returns {*[]}
   * @param {boolean} detailView
   */
  getSource: function(detailView) { //TODO replace -> getPosition
    if (detailView) {
      return fetchData(detailTestDataUrl);
    } else {
      return fetchData(agreggatedTestDataUrl);
    }
  },

  /**
   * get initially all sources
   *
   * return string-array/list
   */
  getInitialSources: function() {
    //TODO return dummyData
  },

  /**
   *
   * @returns {*[]}
   */
  getSources: function() { //TODO replace
    return [{
      id: 1,
      data: fetchData(detailTestDataUrl)
    }, {
      id: 2,
      data: fetchData(detailTestDataUrl)
    }, {
      id: 3,
      data: fetchData(detailTestDataUrl)
    }];
  },

  /**
   *
   * @param {array} sources
   * @param {string} chromosome
   * @param {number} position from ... to ...
   * @param {number} zoomLevel [1-7]
   * @param {boolean} detailView
   * @returns {*[]}
   */
  getPosition: function(sources, chromosome, position, zoomLevel, detailView) {
    return fetchData(detailTestDataUrl);
  },

  /**
   * @returns {*[]} a simple list of all chromosomes
   * maybe request, maybe static data
   */
  getChromosomes: function() {
    return fetchData(chromosomeTestDataUrl);
  },

  /**
   * send search-request regarding gene, if gene exists existing data will be returned
   * otherwise this function will (TODO) throw an error or return null
   *
   * @param {string} gene search-string by user
   * return {json} begin: int, end: int, chromsome
   */
  searchGene: function(gene) {
    //TODO... send get-request and return data if available
  },

  /**
   * returns all source-names being in line for userInput
   *
   * @param {string} userInput
   * return {array} list of matching Genes
   */
  getPossibleGeneNames(userInput) {
    //TODO... implement filter
  }
};

export default dataProvider;

//TODO extract
var testMutationJSON = '{"detail":{"refseq": "AAACCCGGGTTT",' +
  '"mutations": [{"name":"PX7","position": { ' +
  '"from": 4, "to": 6 }},{"name": "PX10",' +
  '"from": 7, "to": 9}] }}';

/**
 *
 * @param {json} parsedJson has to be a parsed JSON-variable like 'testMutationJSON'
 * @returns {Array}
 */
function buildMutationSequence(parsedJson) {
  var ref = parsedJson.detail.refseq;
  var mutations = parsedJson.detail.mutations;
  var mutationSequence = [];
  var to = 0;
  var from = 0;

  if (mutations.length == 0) {
    mutationSequence.push({
      id: "refSeq",
      sequence: ref,
      mutationFlag: false,
      metadata: ""
    });
  }

  for(var index = 0; index < mutations.length; index++) {
    from = mutations[index].position.from;
    if (from != 0 || to < from - 1) {
      var innerSequence = ref.substring(to, from - 1);
      mutationSequence.push({
        id: index,
        sequence: innerSequence,
        mutationFlag: false,
        metadata: ""
      });
    }
    to = mutations[index].position.to;
    var subSequence = ref.substring(from, to);
    mutationSequence.push({
      id: mutations[index].name,
      sequence: subSequence,
      mutationFlag: true,
      metadata: mutations[index].metadata
    });
    if (index + 1 == mutations.length) {
      if (to != ref.length) {
        var lastSequence = ref.substring(to + 1, ref.length);
        mutationSequence.push({
          id: index,
          sequence: lastSequence,
          mutationFlag: false,
          metadata: ""
        });
      }
    }
  }
  return mutationSequence;
}
