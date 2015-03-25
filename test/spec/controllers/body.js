'use strict';

describe('Controller: BodyCtrl', function () {

  // load the controller's module
  beforeEach(module('pmodApp'));

  var BodyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BodyCtrl = $controller('BodyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
