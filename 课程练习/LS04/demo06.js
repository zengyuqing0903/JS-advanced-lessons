// 2019/3/13

// 检测是否存在严格模式的方法：根据this指向判断是否为严格模式
// 一般函数中的this（严格模式）为undefined，
// 非严格模式下为全局变量
"use strict"
function isStrictMode(){
    return this === window?false:true;
}
// "use strict"
console.log(isStrictMode());//true
// 不加'use strict'结果为false，加'use strict'为true