// 2019/3/13

// 严格模式下禁止删除不可改变的属性的变量


// 返回指定对象上一个自有属性对应的属性描述符。
// （自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）
// Object.getOwnPropertyDescriptor(需要查找的目标对象,目标对象内属性名称);
// 返回值：如果指定的属性存在于对象上，则返回其属性描述符对象（property descriptor），否则返回undefined
var str = "abc";
var strDescriptor = Object.getOwnPropertyDescriptor(window,"str");
console.log(strDescriptor);

function sloppyFunc(){
    str.length = 7;
    // console.log(Object.getOwnPropertyDescriptor(str,"lenght"));//undefined
    console.log(str.length);
}
sloppyFunc();//3

function strictFunc(){
    'use strict';
    console.log(Object.getOwnPropertyDescriptor(str,"length"));
    str.length = 7;//严格模式下不可更改
    console.log(str.length);
}
strictFunc();//报错

// 严格模式下禁止删除未定义的变量
delete foo;
delete window.foo;
'use strict';
delete foo;
delete window.foo;

// 严格模式下禁止函数参数重名
/*
function f(a,a,b){
    return a+b;
}
f(2,3,4);//非严格模式下正常执行  7

"use strict";
function f(a,a,b){
    return a+b;
}
f(2,3,4);//严格模式下报错
*/

// 严格模式下的arguments，变与不变
function f(a){
    "use strict";
    a = 42;
    return [a,arguments[0]];
}
var pair = f(17);

console.log(pair[0]);//console.assert(pair[0] === 42);
console.log(pair[1]);//console.assert(pair[1] === 17);
// 结果42  17

// console.assert();[assert()调试过程中使用的断言工具函数]
// 如果断言为false，则将错误消息写入控制台。如果断言为真，则没有任何反应。