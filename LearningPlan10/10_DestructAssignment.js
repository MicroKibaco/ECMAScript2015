/**
 * 所有实现iterator的数据结构,都能被解析
 */

'use strict';

// ...运算 转换成数组

// ./node_modules/.bin/babel-node --presets es2015 ./LearningPlan10/10_DestructAssignment.js

var [x, w, ...y] = [1, 2, 3, 4, 5, 6];

console.log(x, w, y);



