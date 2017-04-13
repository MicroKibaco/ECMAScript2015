'use strict';
function *fn() {
    yield 1;
    yield 2;
    yield 3;
    return 4;

}

// generator 通过*与函数体连接,里面可以包括yield关键字,而普通函数不可以
let it = fn();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// generator 实现了iterator接口, 所以可以通过for循环打印

for (let v of it) {

    console.log(v);

}