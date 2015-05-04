'use strict';

var Kraken = require('kraken-api');
var krakenClient = new Kraken('APIKEY', 'Secret');

exports.poll = function (exchangeData, socket) {
   setInterval(function () {
      krakenClient.api('Ticker', {'pair': 'XBTCZEUR'}, function (error, data) {
         if (error) {
            console.log('Kraken: ' + error);
         }
         else {
            exchangeData.kraken = {
               exchange: 'Kraken',
               asking: data.result.XXBTZEUR.a[0],
               selling: data.result.XXBTZEUR.b[0],
               volume: data.result.XXBTZEUR.v[0],
               average: data.result.XXBTZEUR.p[0],
               low: data.result.XXBTZEUR.l[0],
               high: data.result.XXBTZEUR.h[0]
            };
            socket.emit('ticker', exchangeData);
         }
      });
   }, 2500);
};