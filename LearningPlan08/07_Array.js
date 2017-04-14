'use strict';

function creatData() {

    let buffer = new ArrayBuffer(4);

    let arr = new Int8Array(buffer); // 0 - 255

    arr[0] = 12;
    arr[1] = 15;

    let arr2 = new Uint16Array(buffer);

    arr2[1] = 9;  // 占用了2个bytes

    return buffer;
}

let buf = creatData(); // image data

let arr1 = new Int8Array(buf);

let arr2 = new Int16Array(buf);

console.log(arr1[0], arr1[1], arr2[1]);



