/**
 * Created by MicroKibaco on 4/17/17.
 */
var name = 'MicroKibaco';

setTimeout(function () {

    name = '小木箱爱你哦';

}, 1000);

class User {

    constructor(name) {

        this.name = name;

    }

}

export default function changeName(_name) {

    name = _name;

}

export {name, User};
