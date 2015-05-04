'use strict';

var ticker = require('../controllers/ticker');


// The Package is past automatically as first parameter
module.exports = function(Ticker, app, auth, database) {
   app.route('/ticker').get(function(req, res){
      ticker.show(req, res, app.socket);
   });
};
