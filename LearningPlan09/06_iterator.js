'use strict';
/**
 * 遍历对象的属性
 */

class A {

    constructor() {

        this.name = 'MicroKibaco';

    }

    getName() {

    }

}

class B extends A {

    constructor() {

        super();
        this.age = 22;
    }

    getAge() {

    }

    [Symbol('fullname')]() {

    }

}

// 可以枚举
B.prototype.getClass = function () {

};

var b = new B;

// Object.keys 能够得到自身可枚举的属性,但是得不到原型链的属性
// 得不到 Symbols 属性
console.log(Object.keys(b));

// 包括不可枚举的属性,但是得不到原型链的属性.
// Object.getOwnPropertyNames能够得到自身属性
// 得不到 Symbol属 性
console.log(Object.getOwnPropertyNames(b));

console.log(Object.getOwnPropertySymbols(B.prototype));

// for in 获取原型链的数据

for (let key in b) {

    console.log(key);

}