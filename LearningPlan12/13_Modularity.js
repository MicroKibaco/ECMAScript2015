/**
 * 任务目的:
 * 1. 学会把所有 export 引用附着在一个对象上面
 * 2. 修改任务一代码,通过*导入全部引用,并附着在一个对象按上面
 *
 * 任务说明:
 * 1.定义模块,并导入该模块
 * 2.动态修改模块变量
 */

export var name = '杨正友';

export function changeName(_name) {

    name = _name;

}

export class User {

    constructor(name) {

        this.name = name;

    }

    changeName(name) {

        this.name = name;

    }

}





