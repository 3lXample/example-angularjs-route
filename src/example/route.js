/**
 * example-angularjs-route
 * https://github.com/3lXample/example-angularjs-route
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
(function() {
  'use strict';

  var name   = '3XApp-example';
  var module = angular.module(name);

  // Add view route config
  module.config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider
      .when('/view1', { template: '<p>This is view1</p>' })
      .when('/view2', { template: '<p>This is view2</p>' })
      .when('/view3', { template: '<p>This is view3</p>' })
      .otherwise('/view1');
  }]);

})();
