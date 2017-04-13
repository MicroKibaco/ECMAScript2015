'use strict';

function * fn() {

    let name;
    try {

        name = yield; // yield 默认情况下返回undefined,并且不会抛出异常

    } catch (e) {
        console.log('error 1');

    }

}

let g = fn();
g.next();
// g.next('杨正友');

try {
    g.throw('error!'); // generator 在外部可以调用抛出异常
} catch (e) {
    console.log('have error!')
}
