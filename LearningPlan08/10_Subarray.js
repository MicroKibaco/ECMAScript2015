'use strict';
/**
 * 类型化数组
 * subarray的用法
 */

let tarr = new Int16Array([1, 2, 3, 4, 5, 6]);

let tarr2 = tarr.subarray(1, 3);

console.log(tarr2);
console.log(tarr.buffer === tarr2.buffer);
