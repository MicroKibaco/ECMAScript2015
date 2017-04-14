'use strict';
/**
 * 类型化数组
 * subarray的用法
 */

let arr = new Int8Array([1, 2, 3]);
let arr2 = new Int16Array(6);

arr2.set(arr, 2);

console.log(arr2);

