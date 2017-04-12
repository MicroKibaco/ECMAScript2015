'use strict';
function asyncFun(a, b) {

    return new Promise(function (resolve, reject) {

        setTimeout(function () {

            resolve(a + b);

        }, 200);

    });

}

asyncFun(1, 2).then(function (result) {

    if (result > 2) {

        return asyncFun(result, 2)

    }

}).then(function (result) {

    if (result > 4) {
        console.log('ok');
    }

});