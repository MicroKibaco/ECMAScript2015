'use strict';

let buffer = new ArrayBuffer(10);

let arr = new Int8Array(buffer); // 0 - 255

arr[0] = -128;
arr[1] = 127;

console.log(arr);

let arr2 = new Uint16Array(buffer);

console.log(arr2.length);
