'use strict';
function asyncFun(a, b, timer) {

    return new Promise(function (resolve, reject) {

        if (typeof a !== 'number' || typeof b !== 'number') {

            reject(new Error('no number!'));

        }

        setTimeout(function () {

            resolve(a + b);

        }, timer);

    });

}

/*
 var resultList = [];

 asyncFun(1, 2).then(function (result) {

 resultList.push(result);
 return asyncFun(2, 3);

 }).then(function (result) {

 resultList.push(result);

 });*/

var promise = Promise.race(
    [asyncFun('a', 2, 100), asyncFun(2, 3, 50), asyncFun(3, 4, 10), asyncFun(1, 44, 40)]);

promise.then(function (result) {

    console.log(result);

}).catch(error => {

    console.log(error);

});

