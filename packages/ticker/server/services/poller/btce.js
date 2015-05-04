'use strict';

var Btce = require('btc-e');
//btceTrade = new BTCE("YourApiKey", "YourSecret"),
var btcePublic = new Btce();

exports.poll = function (exchangeData, socket) {
   setInterval(function () {
      btcePublic.ticker('btc_eur', function (error, data) {
         if (error) {
            console.log('BTE-e: ' + error);
         }
         else {
            exchangeData.btce = {
               exchange: 'BTC-e',
               asking: data.ticker.buy,
               selling: data.ticker.sell,
               volume: data.ticker.vol_cur,
               average: data.ticker.avg,
               low: data.ticker.low,
               high: data.ticker.high
            };
            socket.emit('ticker', exchangeData);
         }
      });
   }, 2500);
};