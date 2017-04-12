// var promise = Promise.resolve('hello');

var promise = new Promise(function (resolve, reject) {
    resolve('hello');
});

promise.then(function (result) {

}, function () {

}).then(function (result) {

});

var reject = Promise.reject('error');
reject.then(null, function (error) {

    console.log(error);

});