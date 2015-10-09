'use strict';

/**
 * @ngdoc overview
 * @name bestbuddyApp
 * @description
 * # bestbuddyApp
 *
 * Main module of the application.
 */
var app=angular
    .module('bestbuddyApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.sortable',
        'door3.css'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about/:id', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                 css: '../styles/buddyselfi.css'
            })
            .when('/login', {
              templateUrl: 'views/login.html',
              controller: 'LoginCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }).factory('_', function() {
        return window._;
    });;
