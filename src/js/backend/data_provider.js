'use strict';

import $ from 'jquery';

/**
 * endpoints to dummyBackendServer
 * @type {string}
 */
var refGenUrl = "http://localhost:8081/refGen/";
var mutationsUrl = "http://localhost:8081/mutations/";

/**
 * GET-request to backend
 *
 * @param url to endpoint
 */
function fetchData(url) {
    $.ajax({
        type: "GET",
        url: url,
        data: {},
        dataType: "jsonp",
        success: function (data) {
            console.log(JSON.parse(data));
        },
        error: function (e) {
            console.log("Error:", e);
        }
    });
}

/**
 * Interface to GUI
 *
 * @type {{getSource: dataProvider.getSource, getSources: dataProvider.getSources, getPosition: dataProvider.getPosition, getChromosomes: dataProvider.getChromosomes, searchFor: dataProvider.searchFor, getPossibleSourceNamesForUserInput: ((userInput))}}
 */
var dataProvider = {

    /**
     * if detailView -> detailed data with refString will be sent
     * otherwise aggregated data
     *
     * @param detailView
     * @returns {*[]}
     */
    getSource: function (detailView) {
        if (detailView) {
            return testDataForDetailView;
        } else {
            return testDataForAggregatedView;
        }
    },

    /**
     *
     * @returns {*[]}
     */
    getSources: function () {
        return [{id: 1, data: testDataForDetailView},
            {id: 2, data: testDataForDetailView},
            {id: 3, data: testDataForDetailView}
        ];
    },

    /**
     *
     * @param sources
     * @param chromosome
     * @param position
     * @param detailView
     * @returns {*[]}
     */
    getPosition: function (sources, chromosome, position, detailView) {
        return testDataForDetailView;
    },

    /**
     * @returns {*[]} a simple list of all chromosomes
     */
    getChromosomes: function () {
        return chromosomeList;
    },

    /**
     * send get-request regarding the source, if source exists existing data will be returned
     * otherwise this function will (TODO) throw an error or return null
     *
     * (TODO) add missing parameters
     *
     * @param source search-string by user
     * @returns {{begin: string, end: string}}
     */
    searchFor: function (source) {
        //TODO... send get-request and return data if available
    },

    /**
     * returns all source-names being in line for userInput
     *
     * @param userInput
     */
    getPossibleSourceNamesForUserInput(userInput) {
        //TODO... implement filter
    }
};

export default dataProvider;

/**
 * testData
 */
var testDataForDetailView = [{id: 1, sequence: "ATGCATGCATGCATGCATGC", mutation: false},
    {id: 2, sequence: "BGFD", mutation: true},
    {id: 3, sequence: "ATGCATGCATGCATGCATGC", mutation: false},
    {id: 4, sequence: "TGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGACTGAC", mutation: false},
    {id: 5, sequence: "ATGCATGCATGCATGCATGC", mutation: false},
    {id: 6, sequence: "===BG", mutation: true},
    {id: 7, sequence: "ATGCATGCATGCATGCATGC", mutation: false},
    {id: 8, sequence: "ATGCATGCATGCATGCATGCATGCATGCATGCATGCATGCATGC", mutation: false},
    {id: 9, sequence: "ATGCATGCATGCATGCATGCATGCATGC", mutation: false},
    {id: 10, sequence: "ATGCATGCATGCATGCAATGCATGCTGC", mutation: false},
    {id: 11, sequence: "ATGCATATGCATGCATGCATGCGCATGCATGCATGC", mutation: false},
    {id: 12, sequence: "ATGCATGCATGCATGCATGC", mutation: false}
];

var testDataForAggregatedView = [
    {
        name: "mutations",
        values: [
            {x: 1000, y: 100},
            {x: 1060, y: 5},
            {x: 1100, y: 200},
            {x: 1200, y: 0},
            {x: 1300, y: 0},
            {x: 1350, y: 50},
            {x: 1450, y: 200},
            {x: 1500, y: 100},
            {x: 1300, y: 0},
            {x: 1320, y: 0},
            {x: 1400, y: 180},
            {x: 1500, y: 150},
            {x: 1600, y: 140},
            {x: 1700, y: 135},
            {x: 1800, y: 0},
            {x: 1900, y: 5},
            {x: 2000, y: 40}
        ]
    }
];

var chromosomeList = [{
    id: 1, name: "Chromosome 1"
}, {id: 2, name: "Chromosome 2"}, {id: 3, name: "Chromosome 3"}, {
    id: 4, name: "Chromosome 4"
}, {id: 5, name: "Chromosome 5"}, {id: 6, name: "Chromosome 6"}, {
    id: 7, name: "Chromosome 7"
}, {id: 8, name: "Chromosome 8"}, {id: 9, name: "Chromosome 9"}, {
    id: 10, name: "Chromosome 10"
}, {id: 11, name: "Chromosome 11"}, {id: 12, name: "Chromosome 12"}, {
    id: 13, name: "Chromosome 13"
}, {id: 14, name: "Chromosome 14"}, {id: 15, name: "Chromosome 15"}, {
    id: 16, name: "Chromosome 16"
}, {id: 17, name: "Chromosome 17"}, {id: 18, name: "Chromosome 18"}, {
    id: 19, name: "Chromosome 19"
}, {id: 20, name: "Chromosome 20"}, {id: 21, name: "Chromosome 21"}, {
    id: 22, name: "Chromosome 22"
}, {id: 23, name: "Chromosome X"}, {id: 24, name: "Chromosome Y"}];


var testMutationJSON = '{"detail":{"refseq": "AAACCCGGGTTT",' +
    '"mutations": [{"name":"PX7","position": { ' +
    '"from": 4, "to": 6 }},{"name": "PX10",' +
    '"from": 7, "to": 9}] }}';

/**
 *
 * @param parsedJson has to be a parsed JSON-variable like 'testMutationJSON'
 * @returns {Array}
 */
function buildMutationSequence(parsedJson) {
    var ref = parsedJson.detail.refseq;
    var mutations = parsedJson.detail.mutations;
    var mutationSequence = [];
    var to = 0;
    var from = 0;

    if (mutations.length == 0) {
        mutationSequence.push({id: "refSeq", sequence: ref, mutationFlag: false, metadata: ""})
    }

    for (var index = 0; index < mutations.length; index++) {
        from = mutations[index].position.from;
        if (from != 0 || to < from - 1) {
            var innerSequence = ref.substring(to, from - 1);
            mutationSequence.push({id: index, sequence: innerSequence, mutationFlag: false, metadata: ""});
        }
        to = mutations[index].position.to;
        var subSequence = ref.substring(from, to);
        mutationSequence.push({id: mutations[index].name, sequence: subSequence, mutationFlag: true, metadata: mutations[index].metadata});
        if (index + 1 == mutations.length) {
            if (to != ref.length) {
                var lastSequence = ref.substring(to + 1, ref.length);
                mutationSequence.push({id: index, sequence: lastSequence, mutationFlag: false, metadata: ""});
            }
        }
    }
    return mutationSequence;
}