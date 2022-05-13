/**
 * example-angularjs-route
 * https://github.com/3lXample/example-angularjs-route
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
const fs = require('fs-extra');

const srcVendorDir = 'src/_vendor';
const vendorFile   = [
  { 'file': 'angular.min.js',           'path': 'node_modules/angular/angular.min.js' },
  { 'file': 'angular.min.js.map',       'path': 'node_modules/angular/angular.min.js.map' },
  { 'file': 'angular-route.min.js',     'path': 'node_modules/angular-route/angular-route.min.js' },
  { 'file': 'angular-route.min.js.map', 'path': 'node_modules/angular-route/angular-route.min.js.map' },
  { 'file': 'bootstrap.min.css',        'path': 'node_modules/bootstrap/dist/css/bootstrap.min.css' },
  { 'file': 'bootstrap.min.css.map',    'path': 'node_modules/bootstrap/dist/css/bootstrap.min.css.map' },
  { 'file': 'bootstrap.min.js',         'path': 'node_modules/bootstrap/dist/js/bootstrap.min.js' },
  { 'file': 'bootstrap.min.js.map',     'path': 'node_modules/bootstrap/dist/js/bootstrap.min.js.map' },
  { 'file': 'popper.min.js',            'path': 'node_modules/@popperjs/core/dist/umd/popper.min.js' },
  { 'file': 'popper.min.js.map',        'path': 'node_modules/@popperjs/core/dist/umd/popper.min.js.map' }
];

// copy vendor file into src vendor directory
vendorFile.forEach((vendor) => {
  fs.copySync(vendor.path, srcVendorDir + '/' + vendor.file, { 'overwrite': true, 'errorOnExist': true });
});
