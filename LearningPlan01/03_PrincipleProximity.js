'use strict';

// 就近原则
var a = 12; // 先失效,后选择a
function fn() {

    console.log(a);
    var a;

}
fn();
