'use strict';

// 在Set 和 Map 里面 默认判断 NaN 是相等的

let obj = {

    name: 'MicroKibaco',
    email: '569015640@qq.com',
    'full name': '杨正友'

};

let map = new Map();

map.set(obj, 'very very good!');
map.set(12, 'number = 12');
map.set(NaN, 'WTF');

let v = map.get(obj);

console.log(v);

console.log(map.get(12) + " 集合的大小: " + map.size);

map.delete(12);

console.log(map.has(obj));