 'use strict';

import $ from 'jquery';

var refGenUrl = "http://localhost:8081/refGen/";
var mutationsUrl = "http://localhost:8081/mutations/";

function fetchData(url) {
 $.ajax({
     type: "GET",
     url: url,
     data: {},
     dataType: "jsonp",
     success: function(data){
       console.log(JSON.parse(data));
     },
     error: function(e){
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

fetchData(refGenUrl);
fetchData(mutationsUrl);

export default dataProvider;
