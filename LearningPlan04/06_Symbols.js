'use strict';
let arr = ['a', 'b', 'c'];

let iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log('------------------------------------------------------------');

for (let item of arr) {

    console.log(item);

}
