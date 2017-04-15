'use strict';

let html = '<div>' + '<span>Hello</span>' + '</div>';

let name = '小木箱';

let qq = '569015640';

function log() {

    return ' good';

}

let html2 = `<div>

               <ul>
               
                    <li>${name === '小木箱' ? '工程师' : '码农'}</li>
                    <li>${qq + log()}</li>
               </ul>

             </div>`;

console.log(html2);

