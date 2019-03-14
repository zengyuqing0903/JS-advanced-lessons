// 2019/3/13

// 如果变量不使用var声明,会自动提升为全局变量
function sloppyFunc(){
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);//123



// 下边的实例，若使用严格模式则报错
// 严格模式下全局变量需显式声明,否则会报错
function sloppyFunc(){
    "use strict"
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);