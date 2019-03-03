// 2019/3/3

//Bool类型的值只有两个true、false

//undefined的几种情况
//1.未定义
var a;
console.log(a);//undefined
//注意：分清未定义与未声明的区别 undefined与undeclare
//没有加var 直接用a会报错

//2.实参少于形参
function foo(x,y){
    console.log(x,y);//1 undefined
}
foo(1);

//3.实参多于形参
function foo(x,y){
    console.log(x,y);//1 2
}
foo(1,2,3);


function fee(){
    //3.没有返回值的情况
}
var feeReturnValue = fee();
console.log(feeReturnValue);//undefined

//null 需要注意的一点
console.log(typeof null);//object
