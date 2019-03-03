// 2019/3/3

//eg：
var str1 = "abcdef";
str1.substr(0,2);
//装箱操作（内部实现）
var str1="abcdef";
var strObject = new String(str1);
strObject.substr(0,2);

//数字、布尔、字符串等基本数据类型都有对应的包装对象类型，可以将其包装成对象
//存储或读取基本类型（字符串、数字、布尔）值的属性时，会创建临时包装对象
//包装对象
var a =123;
var b = new Number(a);  //对a进行包装

//"=="等于运算符将原始值和其包装对象视为相等，但“===”全等运算将它们视为不等
console.log(a == b);//true
console.log(a === b);//false

//临时包装对象
var str = "abcde";
console.log(str.length);//5  临时包装成了String对象
str.length = 1;
console.log(str.length,str);//5 "abcde"  临时包装对象并不影响原始值. 临时对象在使用之后立即释放

var arr = [1,2,3,4];
console.log(arr.length);//4
arr.length = 1;
console.log(arr.length,arr);//1 [1]



