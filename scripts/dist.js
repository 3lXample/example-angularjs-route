/**
 * example-angularjs-route
 * https://github.com/3lXample/example-angularjs-route
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
const fs = require('fs-extra');

const srcDir         = 'src';
const srcTestSumFile = 'reports/karma-html/result.html';
const srcTestCovDir  = 'reports/karma-coverage/lcov-report'

const distDir         = 'docs';
const distTestSumFile = 'docs/test/summary/index.html';
const distTestCovDir  = 'docs/test/coverage';

const copyOptions = { 'overwrite': true, 'errorOnExist': true };

// Delete dist directory content or create folder if not exist
fs.emptyDirSync(distDir);

// Copy content of src directory into docs directory
fs.copySync(srcDir, distDir, copyOptions);

// Copy test summary into dist directory
fs.copySync(srcTestSumFile, distTestSumFile, copyOptions);

// Copy test coverage into dist directory
fs.copySync(srcTestCovDir, distTestCovDir, copyOptions);
