'use strict';

/**
 * @ngdoc function
 * @name pmodApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pmodApp
 */
angular.module('pmodApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
