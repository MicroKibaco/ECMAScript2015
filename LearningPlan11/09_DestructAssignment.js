/**
 * 错误异常
 * undenfiend[0]
 */

'use strict';

// [x,[y,z]] x1 y2 z3

function test([x = 1, [y = 2, z = 3] = []] = []) {

    console.log(x, y, z);

}

test([, []]);