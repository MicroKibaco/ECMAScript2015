/**
 * 所有实现iterator的数据结构,都能被解析
 */

'use strict';

// ./node_modules/.bin/babel-node --presets es2015 ./LearningPlan10/09_DestructAssignment.js

class Group {

    constructor() {
    }

    next() {

        return {value: 'MicroKibaco', done: false}
    };

    [Symbol.iterator]() {

        return this;

    }

}

let group = new Group();

let [x, y] = group;

console.log(x, y);



