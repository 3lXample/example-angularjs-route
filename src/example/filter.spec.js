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

  // Suite test for filter
  describe('reverseFilter', function() {
    var filter;

    // Initialize object reverseFilter
    beforeEach(inject(function(reverseFilter) {
      filter = reverseFilter;
    }));

    // Test
    it('should reverse string value', function() {
      expect(filter('elpmaXl3')).toEqual('3lXample');
    })

    // Test
    it('shoud return empty string if value is undefined', function() {
      expect(filter(undefined)).toEqual('');
    });

  });

});
