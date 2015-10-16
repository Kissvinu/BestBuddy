'use strict';

/**
 * @ngdoc service
 * @name bestbuddyApp.databaseservice
 * @description
 * # databaseservice
 * Service in the bestbuddyApp.
 */
angular.module('bestbuddyApp')
  .service('databaseservice', function ($http) {
  	this.getDataUserData = function() {
  		return $http.get('../Database/data.json');
  	},
  	this.postDataUserData = function() {
  		return $http.post('../Database/data.json');
  	};
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
