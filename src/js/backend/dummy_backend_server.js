/*
 * using express (web-framework for node.js)
 * express needs to be installed -> npm install express
 * then run 'node dummy_backend_server.js' to start the server
 */
var express = require('express');
var app = express();
var fs = require("fs");

console.log("starting dummy backend...");

app.get('/refGen', function(req, res) {
  fs.readFile("../../static/test/dummyRefGen.json", 'utf8', function(err, data) {
    console.log(data);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.jsonp(JSON.stringify(data));
    res.end();
  });
});

app.get('/mutations', function(req, res) {
  fs.readFile("../../static/test/dummyMutations.json", 'utf8', function(err, data) {
    console.log(data);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.jsonp(JSON.stringify(data));
    res.end();
  });
});

var server = app.listen(8081, 'localhost', function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("dummy-backend-server listening at http://%s:%s", host, port);
});
