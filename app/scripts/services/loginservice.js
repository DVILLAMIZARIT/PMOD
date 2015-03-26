'use strict';

/**
 * @ngdoc service
 * @name pmodApp.loginService
 * @description
 * # loginService
 * Provider in the pmodApp.
 */
angular.module('pmodApp', ['ui.router'])
  .provider('loginService', function () {

    var errorState = 'app.error',
      logoutState = 'app.main';

    this.$get = function($rootScope, $http, $q, $state) {

    };
  });
