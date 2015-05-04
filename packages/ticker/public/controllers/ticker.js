'use strict';

angular.module('mean.ticker').controller('TickerController', ['$scope', 'Global', 'Ticker', 'mySocket',
   function ($scope, Global, Ticker, socket) {
      $scope.global = Global;
      $scope.package = {
         name: 'ticker'
      };

      $scope.find = function () {
         socket.on('ticker', function (data) {
            $scope.data = data;
         });
         console.log(Ticker);
         Ticker.get(function (data) {
            $scope.data = data.exchangedata;
         });
      };
   }
]);
