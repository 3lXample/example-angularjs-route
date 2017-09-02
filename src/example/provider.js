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

  // Add Constants
  module.constant('exampleConstant', 'built by Anisetus Elly Efendi');

  // Add Values
  module.value('exampleValue', 'AngularJS 1.6.5');

  // ExampleService Constructor
  function ExampleService(version, banner) {
    // Private
    var privateVariable = 'privateValue';

    // Public
    this.publicVariable = 'publicValue';
    this.version        = version;
    this.banner         = banner;

    // Private Function
    var privateFunc = function privateFunc() {
      return privateVariable;
    }

    // public function (Privileged)
    this.publicFunc = function publicFunc() {
      return this.publicVariable;
    }

    this.getHeader = function getHeader() {
      return this.banner + ' [' + this.version + ']';
    }
  }

  // Add Service use factory
  module.factory('exampleService1', ['exampleValue',
    function ExampleService1Factory(exampleValue) {
      return new ExampleService(exampleValue);
    }
  ]);

})();
