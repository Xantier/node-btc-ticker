'use strict';


var exchanges = [
   require('../services/poller/kraken'),
   require('../services/poller/anxpro'),
   require('../services/poller/btce'),
   require('../services/poller/bitstamp'),
   require('../services/poller/cryptopay')
];

exports.show = function (req, res, socket) {
   var exchangeData = {};

   for (var i = 0; i < exchanges.length; i += 1) {
      exchanges[i].poll(exchangeData, socket);
   }
};