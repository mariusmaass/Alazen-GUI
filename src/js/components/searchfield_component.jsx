'use strict';

import React from 'react';

var SearchField = React.createClass({

	handleSubmit: function(e) {
		console.log(e);
	    e.preventDefault();
	    //var inputSearchValue = this.refs.inputSearch.getDOMNode().value.trim();
	    var inputSearchValue = this.refs.inputSearch.value.trim();
	    
	    if (!inputSearchValue) {
	      return;
	    }
	    this.handleSearchSubmit({inputSearch : inputSearchValue});
	    // TODO: send request to the server
	    this.refs.inputSearch.value = '';
	    return;
	},

	handleSearchSubmit: function(searchdata) {

		console.log(searchdata.inputSearch);

	    var data = new FormData();
	    data.append('inputSearch', searchdata.inputSearch);
	    
	    var submitUrl = 'http://127.0.0.1:8000/';
	    
	    var xhr = new XMLHttpRequest();
	    xhr.open('post', submitUrl, true);
	    xhr.send(data);
	    
	},

	render: function() {
		return (
			<div className="searchfield">
				<div idName="custom-search-input">
                    <div className="input-group col-md-12">
                    	
                        <input type="text" className="search-query form-control" placeholder="Search" ref="inputSearch" />
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