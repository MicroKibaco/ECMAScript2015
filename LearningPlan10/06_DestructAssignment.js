/**
 * 不完全解析
 */

'use strict';
// ./node_modules/.bin/babel-node --presets es2015 ./LearningPlan10/06_DestructAssignment.js

let arr = [22, [5, 8], 11];

let [a, [c], d] = arr;

console.log(a, c, d);
