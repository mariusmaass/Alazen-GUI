 'use strict';

import $ from 'jquery';

var refGenUrl = "/test/dummyRefGen.json";
var mutationsUrl = "/test/dummyMutations.json";

function fetchData(url) {
 $.ajax({
     type: "GET",
     url: url,
     data: {},
     dataType: "json",
     success: function(data){
       console.log(JSON.stringify(data));
     },
     error: function (e){
       console.log("Error:", e);
     }
  });
}

var dataProvider = {
  
  fetchReferenceGenome: function() {
    return fetchData(refGenUrl);
  },
  
  fetchMutations: function() {
    return fetchData(mutationsUrl);
  },
  
  //returns position in source
  searchFor: function(source, reference) {
    //will be replaced by a post-request
    return {"begin" : "5000", "end" : "100000"};
  }
}

export default dataProvider;