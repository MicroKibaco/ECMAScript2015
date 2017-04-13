'use strict';

function * fn() {

    let name;
    try {

        name = yield ff; // yield 默认情况下返回undefined,并且不会抛出异常

    } catch (e) {
        console.log('error 1');

    }

}

let g = fn();
g.next();
// g.next('杨正友');

try {
    g.throw('error!');
} catch (e) {
    console.log('have error!')
}
