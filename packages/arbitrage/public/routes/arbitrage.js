'use strict';

angular.module('mean.arbitrage').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('arbitrage example page', {
      url: '/arbitrage/example',
      templateUrl: 'arbitrage/views/index.html'
    });
  }
]);
