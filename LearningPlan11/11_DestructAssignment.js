/**
 * 对象的解构参数赋值
 * undenfiend[0]
 */

'use strict';

function config({x = 1, y = 2, z = 3} = {}, [a = 11, b = 22, c = 33] = [], name = '小木箱') {

    console.log(x, y, z);
    console.log(a, b, c);
    console.log(name);

}

config({}, []);