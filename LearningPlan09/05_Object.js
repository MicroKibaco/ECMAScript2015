'use strict';

var obj2 = {};
var sky = Symbol('qq');

let obj = Object.assign({}, {name: 'MicroKibaco'}, {age: 30}, {[sky]: '569015640'});

console.log(obj === obj2, obj);
console.log(obj[sky]);

const DEFAULT_OPTIONS = {

    NAME: '杨正友'

};

/**
 *
 * @param options
 */
function test(opts) {

    let options = Object.assign({}, DEFAULT_OPTIONS, opts);

    console.log(options);

}

// test();

test({name: '小木箱'});