'use strict';

describe('Controller: TilesalbumCtrl', function () {

  // load the controller's module
  beforeEach(module('bestbuddyApp'));

  var TilesalbumCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TilesalbumCtrl = $controller('TilesalbumCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TilesalbumCtrl.awesomeThings.length).toBe(3);
  });
});
