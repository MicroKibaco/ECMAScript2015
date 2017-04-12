'use strict';
var obj = {

    length: 2,
    '0': 'abc',
    '1': 'ddd'
};

obj[Symbol.iterator] = [][Symbol.iterator];

for (let i of obj) {

    console.log(i);

}