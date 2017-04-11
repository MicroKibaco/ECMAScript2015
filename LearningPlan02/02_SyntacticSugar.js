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

    changePassword(password) {

        this.password = password;

    }

    get info() {

        var info = super.info;
        console.log(info);
        return info + ' new';

    }

}

console.log(typeof User, typeof Manager);

var manager = new Manager('yangzy', 23, 123456);

manager.changeName('小木箱');

console.log(manager.info);

/*
 class Programer extends User {

 // 默认自动加入 constructor
 /!*  constructor(...arg) {
 super(...arg);
 }*!/

 }

 var programer = new Programer('MicroKibaco', 28);

 console.log(programer);
 */
