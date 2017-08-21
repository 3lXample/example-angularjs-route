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
  SubtractionController.$inject = ['$scope', 'userService'];
  // Add subtraction controller
  module.controller('subtractionController', SubtractionController);

  // SubtractionController Class
  function SubtractionController($scope, userService) {
    // private variable
    var userID = 100; // last user id used for addition
    var listID = 100; // last user used for addition

    $scope.title = 'Subtraction Example [Route]';
    $scope.menus = ['Sub First', 'Sub Last', 'Sub Random'];
    $scope.info  = 'Count';
    $scope.users = [];
    $scope.count = 0;

    // Reset and update table user to initial state
    function reset() {
      userID = 100;
      listID = 100;
      $scope.count = 0;
      userService.getByPage(1, function resetCallback(userList) {
        $scope.users = userList.users;
      });
    }

    // Get next user for subtraction
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

    // Add user to table at last row
    function addUserAtLast() {
      getNextUser(function subFirstCallback(user) {
        $scope.users.push(user);
      });
    }

    // Subtract first row from table user and add user to table at last row
    function subFirst() {
      $scope.count++;
      $scope.users.shift();
      addUserAtLast();
    }

    // Subtract last row from table user and add user to table at last row
    function subLast() {
      $scope.count++;
      $scope.users.pop();
      addUserAtLast();
    }

    // Subtract random row from table user and add user to table at last row
    function subRandom() {
      var index = Math.floor(Math.random() * 100);
      $scope.count++;
      $scope.users.splice(index, 1);
      addUserAtLast();
    }

    // function for bind to child component
    function onClickMenu(menu) {
      switch (menu) {
        case 'reset':
          reset();
          break;
        case 'Sub First':
          subFirst();
          break;
        case 'Sub Last':
          subLast();
          break;
        case 'Sub Random':
          subRandom();
          break;
      }
    }

    // expose this function, so it can be called from ng-click
    $scope.onClickMenu = onClickMenu;

    // Initialize page
    reset();
  }

})();
