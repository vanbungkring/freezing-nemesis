var async    = require('async');
var request = require("request");
var express = require('express');
var data;
var list;
exports.getListKoridor = function(req,res){
  request({
    uri: "http://api.hackjak.bappedajakarta.go.id/busway/halte?apiKey=ItLnQWwolgDl7b86NQAG6nRLNbKATfUN",
    method: "GET",
    dataType:'json',
  }, function(error, response, body) {
    data
    if(!error){
      request({
       uri: "http://api.hackjak.bappedajakarta.go.id/busway/halte?apiKey=ItLnQWwolgDl7b86NQAG6nRLNbKATfUN&limit="+JSON.parse(body).total,
       method: "GET",
       dataType:'json',
     },function(error, response, bodys) {
      if(!error){
        list = JSON.parse(bodys).result;
        res.render('index', {
          title : 'Express2',
          data  :JSON.parse(bodys).result,
        });
      }
    })
    }
  });
}
exports.autoComplete = function(req,res){
  var result = [];
  console.log(list);
  for (var halteName in list) {
    console.log(list);
    if (list.hasOwnProperty(halteName)) {
      result.push(list[halteName]);
    }
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(result));
}