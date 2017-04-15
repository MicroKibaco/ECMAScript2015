'use strict';
/**
 * 标签模板
 */

function tag(strArr, arg1, arg2) {

    console.log(strArr);
    console.log(arg1);
    console.log(arg2);
}
let name = '小木箱';

let age = 30;

var result = tag`${name}${age}`;

