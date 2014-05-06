var async    = require('async');
var request = require("request");
var express = require('express');
var db = require('../model')

exports.getListKoridor = function(req,res){
  request({
    uri: "http://api.hackjak.bappedajakarta.go.id/busway/halte?apiKey=ItLnQWwolgDl7b86NQAG6nRLNbKATfUN",
    method: "GET",
    dataType:'json',
  }, function(error, response, body) {
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
exports.getListKoridorDB = function(req,res){
  db.halte.findAll({

  }).success(function(halte_list){
    console.log(halte_list);
  })

}