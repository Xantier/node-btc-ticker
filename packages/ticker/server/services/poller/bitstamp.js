'use strict';

var Bitstamp = require('bitstamp');

//var privateBitstamp = new Bitstamp(key, secret, client_id);
var bitstampPublic = new Bitstamp();
var bitstampEurUsd = 0;

exports.poll = function(exchangeData, socket){

   bitstampPublic.eur_usd(function (error, data) {
      bitstampEurUsd = data.buy;
   });
   setInterval(function () {
      bitstampPublic.ticker(function (error, data) {
         if (error) {
            console.log('Bitstamp: ' + error);
         }
         else {
            if (bitstampEurUsd !== 0) {
               exchangeData.bitstamp = {
                  exchange: 'Bitstamp',
                  asking: data.bid / bitstampEurUsd,
                  selling: data.ask / bitstampEurUsd,
                  volume: data.volume,
                  average: data.vwap,
                  low: data.low,
                  high: data.high
               };
            }
            socket.emit('ticker', exchangeData);
         }
      });
   }, 2500);
   setInterval(function () {
      bitstampPublic.eur_usd(function (error, data) {
         bitstampEurUsd = data.buy;
      });
   }, 150000);
};