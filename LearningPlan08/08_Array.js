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

let dataview = new DataView(buf);

console.log(dataview.getInt8(0), dataview.getInt8(1), dataview.getUint16(2));



