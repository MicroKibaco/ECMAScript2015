/**
 * 不能被数组解析的值
 * Invalid attempt to destructure non-iterable instance
 */

'use strict';
// ./node_modules/.bin/babel-node --presets es2015 ./LearningPlan10/07_DestructAssignment.js

let [x, y] = NaN; // undefined,null,{}

let [a, [c], d] = arr;

console.log(a, c, d);
