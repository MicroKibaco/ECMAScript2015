'use strict';
let set = new Set();

let user = {name: 'MicroKibaco', email: 'yangzy3@asiainfo.com'};

// 增
set.add(user);

// 删
let bool = set.delete(user);
console.log(set, bool);

set.add(22);
console.log(set.has(22), set.size);

set.clear();

console.log(set.size);
