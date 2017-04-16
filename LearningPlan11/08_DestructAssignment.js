/**
 * 错误异常
 * undenfiend[0]
 */

'use strict';

function test([x = 2, [y = 3, w = 5] = []] = [], z = 90) {

    console.log(x, y, w, z);

}

test([33], 80);
