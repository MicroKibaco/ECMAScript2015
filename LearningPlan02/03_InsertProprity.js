'use strict';
// 立即执行的 类
let user = new class User {

    constructor(book) {

        this.book = book;

    }

}('学庸论语');

console.log(user);


