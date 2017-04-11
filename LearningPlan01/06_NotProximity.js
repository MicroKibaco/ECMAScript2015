// 'use strict';

// 函数不被提升
function a() {
    console.log('小木箱');
}

function f() {
    a();
    if (false) {
        function a() {
            console.log('小铁箱');
        }
    }
}

f();