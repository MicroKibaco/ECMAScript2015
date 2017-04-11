'use strict';
let b;
{
    var a = 12;
    b = 15;
    {
        console.log(a, b);
    }
}

// ReferenceError: b is not defined let是在块级范围内,块级之外,无法访问, 作用域和var不一样
// console.log(a, b);

