'use strict';

let getName = Symbol('getName');

module.exports = class User {

    [getName]() {

        return 'yangzy';

    }

    print() {

        console.log(this[getName]());

    }

};