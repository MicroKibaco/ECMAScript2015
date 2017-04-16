/**
 * 对象的新属性
 */

var ok = 'ok';
// obj['myid'+ok] = '007';
// obj['age'+ok] = 22;

obj = {

    ['myid' + ok]: '007',
    ['age' + ok]: 22,
    getName(firstName, lastName) {

        return {firstName, lastName};

    },

    set name(name) {
        this.name = name;
    },

    get name() {

        return this.name;
    }

};

obj2 = {};

// exports.obj = obj;
// exports.obj2 = obj2;

// 收集属性方便在其他的文件中调用

module.exports = {
    obj, obj2
};

