'use strict';

let arr = ['569015640', 'yangzhengyou.com', '569015630'];
let newArr = Array.from(new Set(arr));

console.log(newArr);

console.log(Set.prototype[Symbol.iterator] === Set.prototype.values); // Set 的遍历器

