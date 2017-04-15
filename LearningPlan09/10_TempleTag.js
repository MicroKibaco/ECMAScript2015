'use strict';
/**
 * 标签模板
 */

function tag(strArr, arg) {

    console.log(strArr);
    console.log(arg);
    return '程序员';
}
let name = '小木箱';
var result = tag`Hello ${name}`;

console.log(result);