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
          '<main ng-controller="paginationController">' +
          '  <app-user-list' +
          '    title="title"' +
          '    menus="menus"' +
          '    info="info"' +
          '    users="users"' +
          '    value="page"' +
          '    on-click-menu="onClickMenu(menu)">' +
          '  </app-user-list>' +
          '</main>'
      })
      .when('/addition', {
        template:
          // inline template
          '<main ng-controller="additionController">' +
          '  <app-user-list' +
          '    title="title"' +
          '    menus="menus"' +
          '    info="info"' +
          '    users="users"' +
          '    value="count"' +
          '    on-click-menu="onClickMenu(menu)">' +
          '  </app-user-list>' +
          '</main>'
      })
      .otherwise('/');
  }]);

})();
