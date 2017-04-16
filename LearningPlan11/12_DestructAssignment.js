/**
 * 通过实例巩固遍历解构赋值
 * undenfiend[0]
 */

'use strict';

function test([x = 12, y = 22] = [], {name = 'MicroKibaco', qq = '569015640'} = {}) {

    return [x, y, name, qq];

}

let [x, y, name, qq] = test();

console.log(x);

let mapObj = new Map();
mapObj.set('k1', 'k1');
mapObj.set('k2', 'k2');
mapObj.set('k3', 'k3');
mapObj.set('k4', 'k4');
mapObj.set('k5', 'k5');
mapObj.set('k6', 'k6');
let map = mapObj.keys();



