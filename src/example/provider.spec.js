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

  // Suite test for constant
  describe('exampleConstant', function() {
    var constant;

    // Initialize object exampleConstant
    beforeEach(inject(function(exampleConstant) {
      constant = exampleConstant;
    }));

    // Test
    it('should have exampleConstant with value `built by Anisetus Elly Efendi`', function() {
      expect(constant).toEqual('built by Anisetus Elly Efendi');
    })

  });

  // Suite test for value
  describe('exampleValue', function() {
    var value;

    // Initialize object exampleValue
    beforeEach(inject(function(exampleValue) {
      value = exampleValue;
    }));

    // Test
    it('should have exampleValue with value `AngularJS 1.6.5`', function() {
      expect(value).toEqual('AngularJS 1.6.5');
    })

  });

});
