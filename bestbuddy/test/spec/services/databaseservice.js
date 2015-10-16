'use strict';

describe('Service: databaseservice', function () {

  // load the service's module
  beforeEach(module('bestbuddyApp'));

  // instantiate service
  var databaseservice;
  beforeEach(inject(function (_databaseservice_) {
    databaseservice = _databaseservice_;
  }));

  it('should do something', function () {
    expect(!!databaseservice).toBe(true);
  });

});
