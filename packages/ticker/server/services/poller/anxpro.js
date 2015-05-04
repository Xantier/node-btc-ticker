'use strict';

var ANXClient = require('anx');
var anx = new ANXClient('apikey', 'secret', 'BTCEUR');

exports.poll = function (exchangeData, socket) {
   setInterval(function () {
      anx.tickerFast(function (error, data) {
         if (error) {
            console.log('ANXPro: ' + error);
         } else {
            exchangeData.anxpro = {
               exchange: 'ANXPro',
               asking: data.data.buy.display_short,
               selling: data.data.sell.display_short,
               volume: data.data.vol.display_short,
               average: data.data.avg.display_short,
               low: data.data.low.display_short,
               high: data.data.high.display_short
            };
            socket.emit('ticker', exchangeData);
         }
      });
   }, 2500);
};