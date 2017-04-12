'use strict';
class User {

    constructor(name, password) {

        this.name = name;
        this.password = password;

    }

    validateName(cb) {

        let name = this.name;

        return new Promise(function (resolve, reject) {

            setTimeout(function () {
                if (name === '小木箱') {

                    resolve('success');

                } else {

                    reject('error');

                }
            });

        });

    }

    validatePassword(cb) {

        let password = this.password;

        return new Promise(function (resolve, reject) {

            setTimeout(function () {
                if (password === '123') {

                    resolve('success');

                } else {

                    reject('error');

                }
            });

        });

    }

}

const user = new User('小木箱', '1234');

user.validateName().then(function (result) {

    throw new Error('First Error!');

}, function (error) {

    console.log(error, 'Second Error...');

}).catch(function (error) {

    console.log(error);
    return user.validatePassword();

}).then(function (result) {

    console.log(result);

}, function (error) {
    console.log('validate pwd error.....');
    throw new Error('xxxxx');

}).catch(function (error) {
    console.log('validate pwd error')
});


