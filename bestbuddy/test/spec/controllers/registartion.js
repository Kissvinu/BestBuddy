'use strict';

describe('Controller: RegistartionCtrl', function () {

  // load the controller's module
  beforeEach(module('bestbuddyApp'));

  var RegistartionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistartionCtrl = $controller('RegistartionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegistartionCtrl.awesomeThings.length).toBe(3);
  });
});
