/**
 * 嵌套式的解构:默认值
 */

'use strict';

var obj = {

    name: '小木箱',
    age: 23

};

var {name, id: uid = '008', age} = obj;

console.log(name, uid, age);