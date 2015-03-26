'use strict';

/**
 * @ngdoc function
 * @name pmodApp.controller:BodyCtrl
 * @description
 * # BodyCtrl
 * Controller of the pmodApp
 */
angular.module('pmodApp')
  .controller('BodyCtrl', function ($scope, $state, $http) {
    $scope.$state = $state;
    console.log('body controller');

    $scope.login = function() {
      $http.defaults.headers.common.Authorization =
        'Basic ' + btoa($scope.login.username + ':' + $scope.login.password);

      //var loginPromise = $http.get('http://yoda.gruden.com/rest/api/2/issue/MIS-681');
      $scope.login.working = true;
      $scope.login.wrong = false;
    };

  });
