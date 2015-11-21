//var refGen = require("../../../test/json/dummyRefGen.json");
//
//console.log("refseq: " + refGen.refseq + "\n" + "begin: " + refGen.begin + "\n" + "end: " + refGen.end + "\n");
//
//var mutations = require("../../../test/json/dummyMutations.json");
//
//console.log("source: " + mutations.source + "\n" + "begin: " + mutations.begin + "\n" + "end: " + mutations.end + "\n" + "mutations: " + mutations.mutations[0].name);

function sendRequest() {
 $.ajax({
     type: "GET",
     url: "http://127.0.0.1:8000/dummyRefGen.json",
     data: {},
     dataType: "json",
     success: function(data){
    	 console.log(JSON.stringify(data));
     },
     error: function(){
       alert("Error:");
     }
  });
}

alert("Test");
sendRequest();



