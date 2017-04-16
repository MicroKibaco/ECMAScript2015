/**
 * 对象的解构参数赋值
 * undenfiend[0]
 */

'use strict';

function arrTest([x, y] = [12, 22]) {

    console.log(x, y);

}

function test({x, y} = {x: 12, y: 22}) {

    console.log(x, y);

}
test();

arrTest([]);