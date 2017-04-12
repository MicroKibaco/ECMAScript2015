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

const user = new User('yangzhengyou', '123');

user.validateName().then(function (result) {

    return user.validatePassword();

}).then(function (result) {
    console.log('validate success');

}).catch(function (error) {

    console.log('validate error', error)

});