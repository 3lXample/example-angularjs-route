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

  // component for app header
  module.component('appHeader', {
    template:
      // inline template
      // we can also use templateUrl for external template
      // ex: `templateUrl: 'template.html'`
      // templateUrl will be relative from current page url if not use absolute url path
      '<header>' +
      '  <div class="row">' +
      '    <div class="col col-auto">' +
      '      <img src="{{$ctrl.logoImgUrl}}" width="160" height="44" alt="logo">' +
      '    </div>' +
      '    <div class="col">' +
      '      <h1>Example AngularJS</h1>' +
      '    </div>' +
      '  </div>' +
      '</header>',
    bindings: {
      // Should be bind from parent
      logoImgUrl: '<'
    }
  });

  // component for app nav
  module.component('appNav', {
    template:
      // inline template
      // we can also use templateUrl for external template
      // ex: `templateUrl: 'template.html'`
      // templateUrl will be relative from current page url if not use absolute url path
      '<nav>' +
      '  <h2 class="sr-only">Navigation</h2>' +
      '  <ul class="nav nav-tabs">' +
      '    <li class="nav-item" ng-repeat="menu in $ctrl.menus">' +
      '      <a class="nav-link" ng-class={active:$ctrl.isActive(menu.href)} ng-href="#!{{menu.href}}">' +
      '        <img ng-if="menu.icon" ng-src="{{menu.icon}}" width="20" height="20" alt="{{menu.iconAlt}}"> {{menu.text}}' +
      '      </a>' +
      '    </li>' +
      '  </ul>' +
      '</nav>',
    bindings: {
      // Should be bind from parent
      // menus is an array of object menu
      // Example:
      //   menus = [{
      //     href    : '.',
      //     active  : true, // Not used anymore
      //     text    : '',
      //     icon    : '_assets/3lXample_icon-20x20.png',
      //     iconAlt : 'home'
      //   }]
      menus: '<'
    },
    controller: ['$location',
      function NavController($location) {
        var ctrl = this;
        ctrl.isActive = function(viewLocation) {
          return viewLocation === $location.path();
        };
      }
    ]
  });

  // component for app footer
  module.component('appFooter', {
    template:
      // inline template
      // we can also use templateUrl for external template
      // ex: `templateUrl: 'template.html'`
      // templateUrl will be relative from current page url if not use absolute url path
      '<footer>' +
      '  <p>Copyright (c) 2017 3lXample (https://github.com/3lXample)</p>' +
      '  <p>Designed and built by Anisetus Elly Efendi</p>' +
      '</footer>'
  });

})();
