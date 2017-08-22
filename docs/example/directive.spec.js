/**
 * example-angularjs-route
 * https://github.com/3lXample/example-angularjs-route
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
'use strict';

// Suite test for module
describe('3XApp-example', function() {

  // Load module 3XApp-example before each test
  beforeEach(module('3XApp-example'));

  // Suite test for directive
  describe('exampleDirective', function() {
    var exampleConstant = 'constant';
    var exampleValue    = 'value';
    var $compile;
    var $rootScope;

    // Mock exampleConstant & exampleValue
    beforeEach(module(function($provide) {
      $provide.constant('exampleConstant', exampleConstant);
      $provide.value('exampleValue', exampleValue);
    }));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_) {
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));

    // Test
    it('Element text should be updated with the appropriate content', function() {
      // Compile a piece of HTML containing the directive
      var element = $compile("<example></example>")($rootScope);
      // fire all the watches
      $rootScope.$digest();
      // Check that the compiled element text
      expect(element.text()).toEqual(exampleConstant + ' [' + exampleValue + ']');
    });

  });

});
