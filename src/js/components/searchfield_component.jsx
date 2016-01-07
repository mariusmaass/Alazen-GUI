'use strict';

import React from 'react';

var SearchField = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    var inputSearchValue = this.refs.inputSearch.value;
    var bundle;

    if (!inputSearchValue) {
      /* Input Value is Empty */
      //return;
      console.log('Eingabe String ist leer.');

    } else if (this.valueIsNumber(inputSearchValue)) {

      /* Input Value is Integer and not empty */

      var iInputSearchValue = inputSearchValue;

      if (-1 !== iInputSearchValue.indexOf(';')) {
        /* Input Value contains ';' */
        var iChromosom    = iInputSearchValue.slice(0, iInputSearchValue.indexOf(';'));
        iInputSearchValue = iInputSearchValue.slice(iInputSearchValue.indexOf(';') + 1);
      }

      if (-1 !== iInputSearchValue.indexOf('-')) {
        /* Input Value contains '-' */
        var iLeftPosition = iInputSearchValue.slice(0, iInputSearchValue.indexOf('-'));
        var iRightPosition  = iInputSearchValue.slice(iInputSearchValue.indexOf('-') + 1);
      }

      /* Create bundle for the Backend */

      bundle = {
        chromosom: iChromosom,
        from: iLeftPosition,
        to: iRightPosition,
      };

            /* Call Backend Function getPosition() */
            //getPosition(bundle);

    } else {

      /* Input Value is String and not empty */

      inputSearchValue = inputSearchValue.trim();
      /* Create bundle for the Backend */
      bundle = inputSearchValue;

      /* Call Backend Function searchGene() */
      //searchGene(bundle);
    }

    //this.handleSearchSubmit({inputSearch : inputSearchValue});
    // TODO: send request to the server
    //this.refs.inputSearch.value = '';
    return;
  },

  handleSearchSubmit: function(searchdata) {

    console.log('SearchDataInput : ' + searchdata.inputSearch);

    var data = new FormData();
    data.append('inputSearch', searchdata.inputSearch);

    var submitUrl = 'http://127.0.0.1:8000/';

    var xhr = new XMLHttpRequest();
    xhr.open('post', submitUrl, true);
    xhr.send(data);

  },

  valueIsString: function(o) {
    return typeof o == "string" || (typeof o == "object" && o.constructor === String);
  },

  valueIsNumber: function(o) {
    //return typeof o == "number" || (typeof o == "object" && o.constructor === Number);
    //return (typeof o == 'number') && !isNaN(o - 0) && o !== '';
    return !isNaN(parseInt(o));
  },

  handleSearchAutoComplete: function() {

    console.log('handleSearchAutoComplete');
    // Get the <datalist> and <input> elements.
    var dataList = document.getElementById('jsonDataList');
    //var dataList = this.refs.jsonDataList;
    //var input = document.getElementById('inputSearch');
    var input = this.refs.inputSearch;

    // Create a new XMLHttpRequest.
    var request = new XMLHttpRequest();

    // Set up the request.
    request.open('GET', '../test/dummyGenAutoComplete.json', true);

    // Handle state changes for the request.
    request.onreadystatechange = function(response) {

      if (request.readyState === 4) {
        if (request.status === 200) {
          // Parse the JSON
          var jsonOptions = JSON.parse(request.responseText);
          // Loop over the JSON array.
          jsonOptions.forEach(function(item) {
            // Create a new <option> element.
            var option = document.createElement('option');

            // Set the value using the item in the JSON array.
            option.value = item;
            // Add the <option> element to the <datalist>.
            dataList.appendChild(option);
          });

          // Update the placeholder text.
          input.placeholder = "e.g. datalist";
        } else {
          // An error occured :(
          input.placeholder = "Couldn't load datalist options :(";
        }
      }
    };

    // Update the placeholder text.
    input.placeholder = "Loading options...";

    // Send the request.
    request.send();

  },

  render: function() {
    return (
      <div className="searchfield">
        <div idName="custom-search-input">
          <div className="input-group col-md-12">
            <input type="text" className="search-query form-control" placeholder="13;234-343 or 589-767 or FOXP2" ref="inputSearch" list="jsonDataList" onKeyUp={this.handleSearchAutoComplete} />
            <datalist idName="jsonDataList" id="jsonDataList" ref="jsonDataList"></datalist>
            <span className="input-group-btn">
              <button className="btn btn-danger" type="button" onClick={this.handleSubmit}>
                <span className="glyphicon glyphicon-search"></span>
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
});

export default SearchField;
