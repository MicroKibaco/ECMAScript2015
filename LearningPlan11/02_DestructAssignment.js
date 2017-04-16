/**
 * 嵌套式的解构:模式与变量的区别
 */

'use strict';

var obj = {

    a: {

        b: {

            c: 123

        }

    }

};

let {a: {b}} = obj;

console.log(b);


