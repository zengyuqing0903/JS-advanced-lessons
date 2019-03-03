//2019/3/3

//Part1 隐式类型转换
//比较运算符 与 隐式类型转换
var a = 3;
var b = 4;
console.log(typeof (a>b),a>b);//boolean  false
console.log(typeof (a==b),a==b);//boolean false
console.log(typeof (a<b),a<b);//boolean  true

//算术运算符 与 隐式类型转换 + -
var c = "img" + 3 + ".jpg";
var d = "23" - 5;
console.log(c,d);//img3.jpg 18

//逻辑运算符 与 隐式类型转换 + -
var e = !123;
var f = !!34;       
var g = !!{};
console.log(e,f,g);//false true true
var e1 = !!"";
var e2 = !!0;
var e3 = !!"abc";
var e4 = !!undefined;
var e5 = !!null;
console.log(e1,e2,e3,e4,e5);//false false true false false

//流程语句 与 隐式类型转换
var h = {x:1};
//var h = "";
if(h){
    console.log("h:",h);
} //h:{x:1}

var h = "";
if(h){
    console.log("h:",h);
} //不执行if语句（h转换为false）

//Part2 显式类型转换
//Boolean();
//Number();
//String();
//Object();

//parseInt();
//parseFloat();

//toString();  数字转换为字符串
//valueOf();   对象转换为原始值