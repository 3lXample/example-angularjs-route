/**
 * example-angularjs-route
 * https://github.com/3lXample/example-angularjs-route
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
(function() {
  'use strict';

  var name   = '3XApp';
  var module = angular.module(name);

  // Add view route config
  module.config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider
      .when('/', {
        template:
          // inline template
          '<main>' +
          '  <app-home></app-home>' +
          '</main>'
      })
      .when('/pagination', {
        template:
          // inline template
          '<main>' +
          '  <app-home></app-home>' +
          '</main>'
      })
      .otherwise('/');
  }]);

})();
