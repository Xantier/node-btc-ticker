'use strict';

angular.module('mean.ticker').factory('Ticker', ['$resource',
   function($resource) {
      return $resource('ticker/', {
         articleId: '@_id'
      }, {
         update: {
            method: 'PUT'
         }
      });
   }
]);
