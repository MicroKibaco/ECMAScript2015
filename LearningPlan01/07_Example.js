'use strict';

var arr = [];

function f() {
    for (let i = 0; i < 5; i++) {
        arr.push((function (i) {
            //  console.log(i);

            return function () {
                console.log(i);
            }
        })(i));
    }
}

f();

arr[3]();
