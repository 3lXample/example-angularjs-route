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

  // Inject dependencies
  AppController.$inject = ['$scope'];

  // Add app controller
  module.controller('appController', AppController);

  // AppController Class
  function AppController($scope) {
    $scope.headerLogoImgUrl = '_assets/3lXample_logo-160x44.png';
  }

})();
