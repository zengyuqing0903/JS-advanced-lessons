// 2019/7/3

function thisTest() {
    "use strict"
    console.log(this);
}
thisTest();

//严格模式检测
// "use strict"
function isStrictMode() {
    return this == undefined?true:false;
}
isStrictMode();