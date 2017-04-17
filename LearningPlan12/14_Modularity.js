/**
 * 任务目的:
 * 1. 理解 export 命令导出只是引用指针,并不是值
 * 2. 当模块内部更改此变量时,外部的引用也会发生变化
 *
 * 任务说明:
 * 1.定义模块,并导入该模块
 * 2.动态修改模块变量
 */

// import * as obj from './13_Modularity';
import {name, changeName, User} from './13_Modularity';
// name = '小木箱'; // "name" is read-only
console.log(name);
console.log(changeName);
console.log(User);




