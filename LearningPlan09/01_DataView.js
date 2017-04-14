'use strict';

let buffer = new ArrayBuffer(8);

let int16Arr = new Int16Array(buffer);

int16Arr[0] = 300;

let int8Arr = new Int8Array(buffer);

console.log(int8Arr);

let buffer2 = new ArrayBuffer(8);
let dataview = new DataView(buffer2);
dataview.setInt16(0, 300);

let int8Arr2 = new Int8Array(buffer2);

console.log(int8Arr2);