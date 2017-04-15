/**
 * 变量的解构赋值
 */

'use strict';
// ./node_modules/.bin/babel-node --presets es2015 ./LearningPlan10/05_DestructAssignment.js

let x = 11;
let y = 22;

[y, x] = [x, y];

console.log(x, y);