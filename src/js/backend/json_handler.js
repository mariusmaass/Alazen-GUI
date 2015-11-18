var refGen = require("../../../test/json/dummyRefGen.json")

console.log("refseq: " + refGen.refseq + "\n" + "begin: " + refGen.begin + "\n" + "end: " + refGen.end + "\n")

var mutations = require("../../../test/json/dummyMutations.json")

console.log("source: " + mutations.source + "\n" + "begin: " + mutations.begin + "\n" + "end: " + mutations.end + "\n" + "mutations: " + mutations.mutations[0].name)





