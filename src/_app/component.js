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
