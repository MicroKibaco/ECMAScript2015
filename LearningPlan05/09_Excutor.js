'use strict';

// https://github.com/tj/co
/**
 * function*
 * var vaule1 =  yield 1
 * yield
 * yield
 *
 * next() --> {value:promiseObject ,done}
 * promiseObject.then(function(vaule){
 *  next(vaule);
 * })
 * next(promiseObject)
 */
let co = require('co');

function asyncF(name) {

    return new Promise(function (resolve) {

        setTimeout(function () {

            resolve('my name is: ' + name);

        });

    });

}

function sum(a, b) {

    return new Promise(function (resolve) {

        setTimeout(function () {
            resolve(a + b);
        });

    });

}

function * fn(name) {

    if ((yield  sum(2, 5)) > 6) {

        console.log(yield asyncF(name));

    } else {

        console.log('error')

    }

}
let fnx = co.wrap(fn);
fnx('小木箱');