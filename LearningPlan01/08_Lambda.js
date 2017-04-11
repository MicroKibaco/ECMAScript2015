'use strict';
/**
 * 匿名函数
 */
// 代替立即执行匿名函数
var config = (function () {

    var config = [];
    config.push(1);
    config.push(2);
    config.push(5);
    return config;

})();

// let config;
// {
//
//     config = [];
//     config.push(1);
//     config.push(2);
//     config.push(5);
// }