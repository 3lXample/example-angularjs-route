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
