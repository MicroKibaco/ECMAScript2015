'use strict';

let buffer = new ArrayBuffer(10);

let dataview = new DataView(buffer);

dataview.setFloat32(2, 18.9);

// 0 0 0 0 0 0 0 0 0 0

dataview.setFloat32(2, 18.9);
dataview.setInt32(6, 2000, true);
dataview.setInt16(0, 90);

let value = dataview.getFloat32(2, true);
let value2 = dataview.getInt32(6, true);

// let int8Arr = new Int8Array(buffer);
console.log(value2);