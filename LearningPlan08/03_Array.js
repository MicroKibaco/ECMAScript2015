'use strict';

let arr = [22, 33, 44, 55];
let value = arr.findIndex(function (value, index, arr) {
    return value > 33;
});

console.log(value);

let arr2 = [22, NaN];

console.log(arr2.findIndex(function (v) {

    return Object.is(NaN, v);

}));