'use strict';

let map = new Map([
                      ['name', 'MicroKibaco'],
                      ['email', 'yangzy3@asiainfio.com'],
                      ['qq', '569015640']
                  ]);

console.log(map.get('name'), map.get('email'), map.get('qq'));

console.log('-------------------------------键---------------------------------');

let itKeys = map.keys();

for (let k of  itKeys) {

    console.log(k);

}
console.log('-------------------------------值---------------------------------');
let vauels = map.values();

for (let v of vauels) {

    console.log(v);

}

console.log('-------------------------------实例对象---------------------------------');
let entries = map.entries();

for (let o of entries) {

    console.log(o);

}

console.log('-------------------------------直接遍历对象---------------------------------');

for (let m of map) {

    console.log(m);

}

console.log(Set.prototype[Symbol.iterator] === Set.prototype.values);
console.log(Map.prototype[Symbol.iterator] === Map.prototype.entries);
console.log(Map.prototype[Symbol.iterator] === Map.prototype.values);

let me = {

    favorite: 'coder'

};

map.forEach(function (v, k) {

    console.log(this.favorite, k, v);

}, me);