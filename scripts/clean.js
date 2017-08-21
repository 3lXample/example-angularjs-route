/**
 * example-angularjs-route
 * https://github.com/3lXample/example-angularjs-route
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
const fs = require('fs-extra');

const reportsDir   = 'reports';
const srcVendorDir = 'src/_vendor';

// Delete directory content or create folder if not exist
fs.emptyDirSync(reportsDir);
fs.emptyDirSync(srcVendorDir);
