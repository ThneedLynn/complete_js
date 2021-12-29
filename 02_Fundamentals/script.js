'use strict';

let hasDriversLicense = false;
const passTest = true;

// 1. let error throw, not failing silently
if (passTest) hasDriverLicense = true;
// 如果没有strict mode， 上一行会fail silently 然后block
// 如果用了strict mode， 上一行会报错 “Uncaught ReferenceError: hasDriverLicense is not defined”
if (hasDriversLicense) console.log("@@ I CAN DRIVE");

// 2. reserve variable names
const interface = true;