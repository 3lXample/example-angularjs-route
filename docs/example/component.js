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

  module.component('exampleComponent', {
    template:
      // Inline Template
      '<h1>{{$ctrl.title | reverse}} Component</h1>' +
      '<table>' +
      '  <tr>' +
      '    <td>component</td>' +
      '    <td>:</td>' +
      '    <td>{{$ctrl.content}}</td>' +
      '  </tr>' +
      '</table>',
    bindings: {
      title: '='
    },
    controller: ['exampleService4',
      function exampleComponentController(exampleService4) {
        this.content = exampleService4.getHeader();
      }
    ]
  });

})();
