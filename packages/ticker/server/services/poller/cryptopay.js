'use strict';

var Cryptopay = require('cryptopay-api');
var cryptopayClient = new Cryptopay('key');

exports.poll = function(exchangeData, socket){
   setInterval(function () {
      exchangeData.cryptopay = { exchange: 'CryptoPay'};
      cryptopayClient.raw('https://cryptopay.me/api/v1/rates', 'GET', {}, function (error, data) {
         if (error) {
            console.log('CryptoPay: ' + error);
         } else {
            exchangeData.cryptopay.selling = data.EUR;
         }
      });
      cryptopayClient.raw('https://cryptopay.me/api/v1/ask_rates', 'GET', {}, function (error, data) {
         if (error) {
            console.log('CryptoPay: ' + error);

         } else {
            exchangeData.cryptopay.asking = data.EUR;
            socket.emit('ticker', exchangeData);
         }
      });
   }, 2500);
};