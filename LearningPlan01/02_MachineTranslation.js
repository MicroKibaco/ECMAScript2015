'use strict';
// 变量提升
function fn() {

    console.log(a);
    var a = 12; // undefined

}

fn();
