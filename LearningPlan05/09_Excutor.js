'use strict';

// https://github.com/tj/co
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

    if ((yield  sum(1, 5)) > 6) {

        console.log(yield asyncF(name));

    } else {

        console.log('error')

    }

}
let fnx = co.wrap(fn);
fnx('你好我叫小木箱');