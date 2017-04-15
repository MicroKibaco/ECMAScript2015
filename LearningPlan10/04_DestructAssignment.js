/**
 * 变量的解构赋值
 */

'use strict';
// ./node_modules/.bin/babel-node --presets es2015 ./LearningPlan10/04_DestructAssignment.js

// var arr = [1, 2, 3];

// var a = arr[0];
// var b = arr[1];
// var c = arr[2];

// 多维数组的结构解析赋值

// var [a, b, c] = arr;

let arr = [22, [5, 8], 11];

let [a, [b, c], d] = arr;

console.log(a, b, c, d);

// console.log(a, b, c);