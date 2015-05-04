'use strict';

angular.module('mean.ticker').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
    .state('Exchange Ticker', {
       url: '/ticker/',
       templateUrl: 'ticker/views/ticker.html'
    });
  }
]);
