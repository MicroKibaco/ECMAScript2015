'use strict';

/**
 * const 常量的使用, 对物理内存不可以更改
 */
const a = 12;
// a = 15; //TypeError: Assignment to constant variable.

const b = {
    name: '杨正友'
}
b.name = 'MicroKibaco';
b.email = 'yangzy3@asiainfo.com';
Object.freeze(b);

// b.email = '569015640@qq.com'; // Cannot assign to read only property 'email' of #<Object>

console.log(b);