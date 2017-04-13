'use strict';

// Set集合里面的key和vaule值是一样的,实现了iterator接口

let set = new Set(['569015640', 'yangzhengyou.com', '569015630', '网名 小木箱']);
set.add(NaN).add(NaN).add(NaN).add(NaN).add(NaN);

console.log('---------------键-----------------');

let itKeys = set.keys();

for (let k of itKeys) {

    console.log(k);

}

console.log('---------------值-----------------');

let itValue = set.values();

for (let v of itValue) {

    console.log(v);

}
console.log('----------------实体对象----------------');

let entriesI = set.entries();

for (let e of entriesI) {

    console.log(e);

}

console.log('---------------直接遍历对象-----------------');

for (let v of set) {

    console.log(v);

}
