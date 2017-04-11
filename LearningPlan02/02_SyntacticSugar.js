'use strict';
/***
 * ES6语法糖
 */
class User {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }

    static getClassName() {

        return User;
    }

    changeName(name) {
        this.name = name;
    }

    changeAge(age) {
        this.name = age;
    }

    get info() {

        return 'name:' + this.name + ' | age:' + this.age;

    }

}

class Manager extends User {

    constructor(name, age, password) {
        super(name, age);
        this.password = password;
    }

}
