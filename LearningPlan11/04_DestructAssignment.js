/**
 * 嵌套式的解构:默认值
 */

'use strict';

var obj = {

    name: 'MicroKibaco',
    age: 23

};

var {name, id = '007', age} = obj;

console.log(name, id, age);