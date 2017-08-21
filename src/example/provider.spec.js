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

  // Suite test for exampleService1
  describe('exampleService1', function() {
    var exampleValue = 'value';
    var service;

    // Mock exampleValue
    beforeEach(module(function($provide) {
      $provide.value('exampleValue', exampleValue);
    }));

    // Initialize object exampleService1
    beforeEach(inject(function(exampleService1) {
      service = exampleService1;
    }));

    // Test
    it('Property publicVariable value should be `publicValue`', function() {
      expect(service.publicVariable).toEqual('publicValue');
    });

    // Test
    it('Property version value should be `' + exampleValue + '`', function() {
      expect(service.version).toEqual(exampleValue);
    });

    // Test
    it('Property banner value should be `undefined`', function() {
      expect(service.banner).toEqual(undefined);
    });

    // Test
    it('Function publicFunc should be return `publicValue`', function() {
      expect(service.publicFunc()).toEqual('publicValue');
    });

    // Test
    it('Function getHeader should be return `undefined [' + exampleValue + ']`', function() {
      expect(service.getHeader()).toEqual('undefined [' + exampleValue + ']');
    });

  });

  // Suite test for exampleService2
  describe('exampleService2', function() {
    var exampleValue = 'value';
    var service;

    // Mock exampleValue
    beforeEach(module(function($provide) {
      $provide.value('exampleValue', exampleValue);
    }));

    // Initialize object exampleService2
    beforeEach(inject(function(exampleService2) {
      service = exampleService2;
    }));

    // Test
    it('Property publicVariable value should be `publicValue`', function() {
      expect(service.publicVariable).toEqual('publicValue');
    });

    // Test
    it('Property version value should be `' + exampleValue + '`', function() {
      expect(service.version).toEqual(exampleValue);
    });

    // Test
    it('Property banner value should be `undefined`', function() {
      expect(service.banner).toEqual(undefined);
    });

    // Test
    it('Function publicFunc should be return `publicValue`', function() {
      expect(service.publicFunc()).toEqual('publicValue');
    });

    // Test
    it('Function getHeader should be return `undefined [' + exampleValue + ']`', function() {
      expect(service.getHeader()).toEqual('undefined [' + exampleValue + ']');
    });

  });

  // Suite test for exampleService3
  describe('exampleService3', function() {
    var exampleValue = 'value';
    var service;

    // Mock exampleValue
    beforeEach(module(function($provide) {
      $provide.value('exampleValue', exampleValue);
    }));

    // Initialize object exampleService3
    beforeEach(inject(function(exampleService3) {
      service = exampleService3;
    }));

    // Test
    it('Property publicVariable value should be `publicValue`', function() {
      expect(service.publicVariable).toEqual('publicValue');
    });

    // Test
    it('Property version value should be `' + exampleValue + '`', function() {
      expect(service.version).toEqual(exampleValue);
    });

    // Test
    it('Property banner value should be `undefined`', function() {
      expect(service.banner).toEqual(undefined);
    });

    // Test
    it('Function publicFunc should be return `publicValue`', function() {
      expect(service.publicFunc()).toEqual('publicValue');
    });

    // Test
    it('Function getHeader should be return `undefined [' + exampleValue + ']`', function() {
      expect(service.getHeader()).toEqual('undefined [' + exampleValue + ']');
    });

  });

  // Suite test for exampleService4
  describe('exampleService4', function() {
    var exampleValue = 'value';
    var banner       = 'banner';
    var service;

    // Mock exampleValue
    beforeEach(module(function($provide) {
      $provide.value('exampleValue', exampleValue);
    }));

    // Config exampleService4
    beforeEach(module(function(exampleService4Provider) {
      exampleService4Provider.setBanner(banner);
    }));

    // Initialize object exampleService4
    beforeEach(inject(function(exampleService4) {
      service = exampleService4;
    }));

    // Test
    it('Property publicVariable value should be `publicValue`', function() {
      expect(service.publicVariable).toEqual('publicValue');
    });

    // Test
    it('Property version value should be `' + exampleValue + '`', function() {
      expect(service.version).toEqual(exampleValue);
    });

    // Test
    it('Property banner value should be `' + banner + '`', function() {
      expect(service.banner).toEqual(banner);
    });

    // Test
    it('Function publicFunc should be return `publicValue`', function() {
      expect(service.publicFunc()).toEqual('publicValue');
    });

    // Test
    it('Function getHeader should be return `' + banner + ' [' + exampleValue + ']`', function() {
      expect(service.getHeader()).toEqual(banner + ' [' + exampleValue + ']');
    });

  });

});
