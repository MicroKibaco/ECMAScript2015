'use strict';
function safe(strArr) {

    let result = '';

    for (var i = 0, len = strArr.length; i < len; i++) {

        result += strArr[i].replace(/</g, '&lt;').replace(/>/g, '&gt;');

        if (i < arguments.length - 1) {

            result += arguments[i + 1];

        }

    }

    return result;

}
let name = "小木箱";
let result = safe`<p>Hello${name}</p>`;

console.log(result);

/*
 function java() {
 }

 function ejs() {
 }

 let ejsResult = ejs`<% for(){%>
 <%}%>
 `;

 let javaResult = java`class HelloWorld{

 public static void main(String [] args){

 }

 }`;*/
