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
  AdditionController.$inject = ['$scope', 'userService'];
  // Add addition controller
  module.controller('additionController', AdditionController);

  // AdditionController Class
  function AdditionController($scope, userService) {
    // private variable
    var userID = 0; // last user id used for addition
    var listID = 0; // last user used for addition

    $scope.title = 'Addition Example [Route]';
    $scope.menus = ['Add Sequence', 'Add Random'];
    $scope.info  = 'Count';
    $scope.users = [];
    $scope.count = 0;

    // Reset and clear table user
    function reset() {
      userID = 0;
      listID = 0;
      $scope.users = [];
      $scope.count = $scope.users.length;
    }

    // Get next user for addition
    function getNextUser(callback) {
      userID++;
      listID++;
      if (userID > 10000) {
        userID = 1;
      }
      userService.getById(userID, function getNextUserCallback(user) {
        user.id = listID;
        callback(user);
      });
    }

    // Add user to table user at last row
    function addUser() {
      getNextUser(function addUserCallback(user) {
        $scope.users.push(user);
        $scope.count = $scope.users.length;
      });
    }

    // Add user to table user at random row
    function addUserRandom() {
      var length = $scope.users.length;
      var index  = Math.floor(Math.random() * length);
      getNextUser(function addUserCallback(user) {
        $scope.users.splice(index, 0, user);
        $scope.count = $scope.users.length;
      });
    }

    // function for bind to child component
    function onClickMenu(menu) {
      switch (menu) {
        case 'reset':
          reset();
          break;
        case 'Add Sequence':
          addUser();
          break;
        case 'Add Random':
          addUserRandom();
          break;
      }
    }

    // expose this function, so it can be called from ng-click
    $scope.onClickMenu = onClickMenu;

    // Initialize page
    reset();
  }

})();
