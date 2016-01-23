// inspired by http://stackoverflow.com/questions/5272698/how-to-fake-jquery-ajax-response

import $ from 'jquery';

var mockAjaxForJasmine = function mockAjaxForJasmine(response) {
  spyOn($, 'ajax').and.returnValue(fakeResponse(response));
};

var fakeResponse = function fakeResponse(response) {
  var deferred = $.Deferred().resolve(response);
  return deferred.promise();
};

export default mockAjaxForJasmine;
