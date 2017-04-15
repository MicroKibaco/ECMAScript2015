'use strict';
/**
 * setPrototypeof的认识
 */

var obj = {};

console.log(obj.__proto__);

class User {

    constructor() {

    }

}

var p = {

    getName() {
    }

};

var user = new User();

console.log(user.__proto__ === User.prototype);

user.__proto__ = p;

// console.log(user.getName);

Object.setPrototypeOf(user, p);

var proto = Object.getPrototypeOf(user);

console.log(proto === user.__proto__);
