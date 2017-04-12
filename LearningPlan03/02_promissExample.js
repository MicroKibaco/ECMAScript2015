'use strict';
function asyncFun(a, b) {

    return new Promise(function (resolve, reject) {

        if (typeof a !== 'number' || typeof b !== 'number') {

            reject(new Error('no number!'));

        }

        setTimeout(function () {

            resolve(a + b);

        }, 200);

    });

}

asyncFun(1, 'a').then(function (result) {

    if (result > 2) {

        return asyncFun(result, 2)

    }

}).then(function (result) {

    if (result > 4) {
        console.log('ok');
    }

}).catch(function (error) {

    console.log(error);

});