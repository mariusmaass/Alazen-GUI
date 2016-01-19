'use strict';

import $ from 'jquery';
import providerUtils from './data_provider_utils';

/**
 * endpoints to dummyBackendServer
 * @type {string}
 */
//var refGenUrl = "http://localhost:8081/refGen/";
//var mutationsUrl = "http://localhost:8081/mutations/";

var detailTestDataUrl = "../../test/dummyRehashedDetailViewData.json";

var detailModifiedTestDataUrl = "../../test/dummyRehashedModifiedDetailViewData.json";
var aggregatedDataBaseUrl = "../../test/aggregatedData/";
var aggregatedDataFileNames = new Array("dummyAggregatedViewFirst.json", "dummyAggregatedViewSecond.json", "dummyAggregatedViewThird.json", "dummyAggregatedViewFourth.json", "dummyAggregatedViewFifth.json", "dummyAggregatedViewSixth.json", "dummyAggregatedViewFirst.json");

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
 * @type {{getPosition: dataProvider.getPosition, searchFor: dataProvider.searchGene, getPossibleSourceNamesForUserInput: ((userInput))}}
 */
var dataProvider = {

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
   * @param {array} sources
   * @param {string} chromosome
   * @param {number} position from ... to ...
   * @param {number} zoomLevel [1-7]
   * @param {boolean} detailView
   * @returns {*[]}
   */
  getPosition: function(sources, chromosome, position, zoomLevel, detailView) {
    logRequest(sources, chromosome, position, zoomLevel, detailView);

    if (detailView) {
      if (sources[0] == "Elefant") {
        return Promise.all([fetchData(detailModifiedTestDataUrl)]);
      } else {
        return Promise.all(
          [
            fetchData(detailTestDataUrl),
            fetchData(detailModifiedTestDataUrl),
            fetchData(detailTestDataUrl)
          ]
        ).then(function(sources) {
          return sources.map(function(source, index) {
            return {
              id: index,
              data: source
            };
          });
        });
      }
    } else {

      var dataUrl = getAggregatedDataUrl(aggregatedDataFileNames[zoomLevel - 2]);
      return Promise.all(
        [
          fetchData(dataUrl),
          fetchData(dataUrl),
          fetchData(dataUrl)
        ]
      ).then(function(sources) {
        return sources.map(function(source, index) {
          return {
            id: index,
            data: source
          };
        });
      });
    }
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

function logRequest(sources, chromosome, position, zoomLevel, detailView) {
  console.log('Interval Request', {
    sources: sources,
    chromosome: chromosome,
    position: position,
    zoomLevel: zoomLevel,
    detailView: detailView
  });
}

function getAggregatedDataUrl(fileName) {
  console.log("requested url: " + aggregatedDataBaseUrl + fileName);
  return aggregatedDataBaseUrl + fileName;
}

export default dataProvider;
