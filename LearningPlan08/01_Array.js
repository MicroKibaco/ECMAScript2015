'use strict';
/*
 Array.from;// 类似数组的数据结构转化为数组
 Array.of; // 通过多个参数 生成 数组
 [].copyWithin(target, start, end); // 通过自身数据在指定位置 替换 数据

 [].find // 查找
 [].fill() // 填充*/

let arr = Array.from({
                         '0': 'qq 569015640',
                         '1': 'MicroKibaco',
                         'length': 2
                     }, function (item, index) {

    return item + '------' + index;

});

console.log(arr);

let set = new Set(['me', 'book', 'MicroKibaco']);

console.log(Array.from(set));