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
  PaginationController.$inject = ['$scope', 'userService'];
  // Add pagination controller
  module.controller('paginationController', PaginationController);

  // PaginationController Class
  function PaginationController($scope, userService) {
    $scope.title = 'Pagination Example [Route]';
    $scope.menus = ['Previous', 'Next'];
    $scope.info  = 'Page';
    $scope.users = [];
    $scope.page  = 1;

    // Get data users for current page from userService
    function updateTableUser() {
      userService.getByPage($scope.page, function updateTableUserCallback(userList) {
        $scope.users = userList.users;
      });
    }

    // Reset and update table user to page 1
    function reset() {
      $scope.page = 1;
      updateTableUser();
    }

    // Goto next page and update table user
    // max page is 100, if current page is 100 next page will be page 1
    function nextPage() {
      $scope.page++;
      if ($scope.page > 100) {
        $scope.page = 1;
      }
      updateTableUser();
    }

    // Goto prev page and update table user
    // max page is 100, if current page is 1 prev page will be page 100
    function prevPage() {
      $scope.page--;
      if ($scope.page < 1) {
        $scope.page = 100;
      }
      updateTableUser();
    }

    // function for bind to child component
    function onClickMenu(menu) {
      switch (menu) {
        case 'reset':
          reset();
          break;
        case 'Previous':
          prevPage();
          break;
        case 'Next':
          nextPage();
          break;
      }
    }

    // expose this function, so it can be called from ng-click
    $scope.onClickMenu = onClickMenu;

    // Initialize page
    reset();
  }

})();
