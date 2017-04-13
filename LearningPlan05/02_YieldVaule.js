'use strict';

// yield 值和赋值

function *fn(_name) {

    let name = yield _name; // yield 默认始终返回 undenfied
    return name;

}

let it = fn('MicroKibaco');
console.log(it.next());
console.log(it.next('yangzy')); // 只能通过next方式赋值