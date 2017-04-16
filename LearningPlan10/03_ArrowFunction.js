'use strict';
// 箭头函数
// var fn = n => n * 3;
// 无法使用arguments属性
let fn = n => {

    console.log(arguments[0]);

};

fn(12);

// 无法使用构造函数
// new fun() RUDE

var fn2 = n => {

    return n * 2;

};
console.log(fn2(5));