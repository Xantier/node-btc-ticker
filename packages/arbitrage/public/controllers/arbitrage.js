'use strict';

angular.module('mean.arbitrage').controller('ArbitrageController', ['$scope', 'Global', 'Arbitrage',
  function($scope, Global, Arbitrage) {
    $scope.global = Global;
    $scope.package = {
      name: 'arbitrage'
    };
  }
]);
