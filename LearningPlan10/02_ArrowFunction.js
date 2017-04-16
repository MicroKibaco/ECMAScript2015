'use strict';
// 箭头函数

/*setTimeout(function () {

 }, 1000);

 setTimeout(n => {

 }, 1000);*/

// 一.this在普通函数是可变的,在箭头函数是不可变的

class User {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }

    changeName(name) {
        this.name = name;
    }

    changeAge(age) {
        this.age = age;
    }

    change(name, age) {

        var self = this;

        let fnx = () => {

            (() => {

                (() => {

                    (() => {

                        (() => {

                            (() => {

                                console.log(self === this);
                                this.changeAge(age);
                                this.changeAge(age);

                            })();

                        })();

                    })();

                })();

            })();

        };

        function fn() {

            this.changeName(name);
            this.changeAge(age);

        }

        // fn(); // 全局的this
        fnx(); // 当前的this

    }

}

let user = new User('小木箱', 30);
user.change('MicroKibaco', 22);

console.log(user);