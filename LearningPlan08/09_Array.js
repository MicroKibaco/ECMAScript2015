'use strict';

/**
 * Int8Arrary:8位有符号整数.长度1个字节
 * Unit8Arrary:8位无符号整数,长度1个字节
 *
 * Int16Arrary:16位有符号整数,长度2个字节
 * Unit16Arrary:16位无符号整数,长度2个字节
 *
 * Int32Arrary:32位有符号整数,长度4个字节
 * Unit32Arrary:32位无符号整数,长度4个字节
 *
 * Float32Arrary:32位有符号整数,长度4个字节
 * Float64Arrary:32位无符号整数,长度4个字节
 */


let buffer = new ArrayBuffer(12);

// let tarr = new Int16Array(buffer);
// let tarr = new Int16Array(buffer,2,5);
// console.log(tarr.length, tarr.byteLength);

let tarr = new Int16Array([12, 3, 5]);
console.log(tarr.length, tarr.length);
console.log(tarr.buffer.byteLength);

let tarr2 = new Int8Array(tarr);
console.log(tarr2.length, tarr2);





