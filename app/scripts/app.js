'use strict';

/**
 * @ngdoc overview
 * @name pmodApp
 * @description
 * # pmodApp
 *
 * Main module of the application.
 */
angular
  .module('pmodApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    //'loginService'
  ])
  /*
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  */
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');

    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });
  })
  .run(function($rootScope) {
    $rootScope.loading = false;
    $rootScope.loggedIn = false;
  });
