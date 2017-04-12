'use strict';
var obj = {'小木箱': '569015640@qq.com', '杨正友': 'yangzy3@asiainfo.com'};
var obj2 = {'天道酬勤': '569015640@qq.com', '徐绍坤': 'yangzy3@asiainfo.com'};

let iteratorFun = function () {

    let that = this;
    let i = 0;
    const names = Object.keys(this);
    const length = names.length;

    // iterator 指针 遍历一个对象当中值的方式
    return {

        next: function () {
            let name = names[i++];
            let email = that[name];

            return {
                value: {name, email},
                done: i > length
            }

        }

    }

};

obj[Symbol.iterator] = iteratorFun;
obj2[Symbol.iterator] = iteratorFun;

for (let u of obj2) {

    console.log(u);

}