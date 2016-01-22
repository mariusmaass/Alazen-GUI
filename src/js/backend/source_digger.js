'use strict';

import dataProvider from './data_provider';

var sourceDigger = {
  getSources: function() {
    if (localStorage.getItem("sources") === null) {
      return dataProvider.getInitialSources().then((sources) => {
        var sourcesMap = {};
        sources.map(function(source) {
          sourcesMap[source] = false;
        });
        localStorage.setItem("sources", JSON.stringify(sourcesMap));
        return sourcesMap;
      });
    } else {
      return new Promise(function(resolve) {
        resolve(JSON.parse(localStorage.getItem("sources")));
      });
    }
  },
  updateSources: function(availableSources) {
    localStorage.setItem("sources", JSON.stringify(availableSources));
  }
};

export default sourceDigger;
