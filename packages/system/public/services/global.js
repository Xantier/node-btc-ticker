'use strict';

//Global service for global variables
angular.module('mean.system')
   .factory('Global', [

      function () {
         var _this = this;
         _this._data = {
            user: window.user,
            authenticated: false,
            isAdmin: false
         };
         if (window.user && window.user.roles) {
            _this._data.authenticated = window.user.roles.length;
            _this._data.isAdmin = window.user.roles.indexOf('admin') !== -1;
         }
         return _this._data;
      }
   ])
   .factory('mySocket', function (socketFactory) {
      var mySocket = socketFactory();
      mySocket.forward('error');
      return mySocket;
   });
