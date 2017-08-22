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

  // Controller for appUser component
  function UserListController() {
    var ctrl = this;

    // Call parent to trigger onMenu
    function clickMenu(menu) {
      ctrl.onClickMenu({ menu: menu });
    }

    // expose this function, so it can be called from ng-click
    ctrl.clickMenu = clickMenu;
  }

  // component for app user
  module.component('appUserList', {
    template:
      // inline template
      // we can also use templateUrl for external template
      // ex: `templateUrl: 'template.html'`
      // templateUrl will be relative from current page url if not use absolute url path
      '<section>' +
      '  <h2>{{$ctrl.title}}</h2>' +
      '  <nav aria-label="{{$ctrl.title}} Navigation">' +
      '    <h3 class="sr-only">{{$ctrl.title}} Navigation</h3>' +
      '    <div class="row">' +
      '      <div class="col">' +
      '        <ul class="pagination">' +
      '          <li ng-repeat="menu in $ctrl.menus" class="page-item"><a class="page-link" href="" ng-click="$ctrl.clickMenu(menu)">{{menu}}</a></li>' +
      '        </ul>' +
      '      </div>' +
      '      <div class="col col-auto">' +
      '        <ul class="pagination">' +
      '          <li class="page-item"><a class="page-link">{{$ctrl.info}} : {{$ctrl.value}}</a></li>' +
      '          <li class="page-item"><a class="page-link" href="" ng-click="$ctrl.clickMenu(\'reset\')">Reset</a></li>' +
      '        </ul>' +
      '      </div>' +
      '    </div>' +
      '  </nav>' +
      '  <article>' +
      '    <h3 class="sr-only">{{$ctrl.title}} Content</h3>' +
      '    <table class="table table-sm table-bordered table-hover">' +
      '      <thead class="thead-inverse">' +
      '        <tr>' +
      '          <th>First Name</th>' +
      '          <th>Last Name</th>' +
      '          <th>Phone</th>' +
      '          <th>Date of Birth</th>' +
      '        </tr>' +
      '      </thead>' +
      '      <tbody>' +
      '        <tr ng-repeat="user in $ctrl.users">' +
      '          <td>{{user.firstName}}</td>' +
      '          <td>{{user.lastName}}</td>' +
      '          <td>{{user.phone}}</td>' +
      '          <td>{{user.dob | date:\'dd-MMM-yyyy\'}}</td>' +
      '         </tr>' +
      '      </tbody>' +
      '    </table>' +
      '  </article>' +
      '</section>',
    controller: UserListController,
    bindings: {
      // Should be bind from parent
      title: '<',
      menus: '<',
      info : '<',
      users: '<',
      value: '<',
      onClickMenu: '&'
    }
  });

})();
