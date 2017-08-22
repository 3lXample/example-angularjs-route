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

  // Suite test for component
  describe('exampleComponent', function() {
    var header = 'header';
    var ctrl;

    // Mock exampleService4
    beforeEach(module(function($provide) {
      $provide.value('exampleService4', { getHeader: function() { return header; } });
    }));

    // Initialize controller object exampleComponent and inject dependencies into it
    beforeEach(inject(function($componentController) {
      ctrl = $componentController('exampleComponent');
    }));

    it('content property should be assigned with header from exampleService4', function() {
      expect(ctrl.content).toEqual(header);
    });

  });

});
