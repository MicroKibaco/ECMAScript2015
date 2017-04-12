'use strict';
// 执行者

let name = Symbol('name');

let obj = {

    age: 22,
    [name]: 'yangzy'

};

// console.log(Object.keys(obj));

/*
 for (let key in obj) {

 console.log(key);

 }*/


// console.log(Object.getOwnPropertyNames(obj));

let key = Object.getOwnPropertySymbols(obj)[0];
console.log(obj[key]);