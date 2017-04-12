function asyncFun(a, b, cb) {

    setTimeout(function () {

        cb(a + b);

    }, 200);

}

asyncFun(1, 2, function (result) {

    if (result > 2) {

        asyncFun(result, 2, function (result) {

            if (result > 4) {

                console.log('ok');

            }

        });

    }
});

console.log(2);