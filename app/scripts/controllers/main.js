'use strict';

/**
 * @ngdoc function
 * @name pmodApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pmodApp
 */
angular.module('pmodApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
