'use strict';

class UserGroup {

    // 构造
    constructor(users) {

        /***
         * users:{'杨正友':'569015640','MicroKibaco':'yangzy3@asiainfo.com'}
         */

        // json {name: xxx };
        this.users = users;

    }

    [Symbol.iterator]() {

        let that = this;
        let i = 0;
        const names = Object.keys(this.users);
        const length = names.length;

        // iterator 指针 遍历一个对象当中值的方式
        return {

            next: function () {
                let name = names[i++];
                let email = that.users[name];

                return {
                    value: {name, email},
                    done: i > length
                }

            }

        }

    }

}

let group = new UserGroup({'杨正友': '569015640@qq.com', 'MicroKibaco': 'yangzy3@asiainfo.com'});

let i = 0;
for (let user of group) {

    if (i === 0) {
        i++;
        continue;
    }

    console.log(user);

}

/*
 let iterator = group[Symbol.iterator]();

 console.log(iterator.next());
 console.log(iterator.next());
 console.log(iterator.next());*/
