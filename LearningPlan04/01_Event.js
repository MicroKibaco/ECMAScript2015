'use strict';

let getName = Symbol('name');

let obj = {

    [getName](){

        return '小木箱';

    }

};

console.log(obj[getName]());

