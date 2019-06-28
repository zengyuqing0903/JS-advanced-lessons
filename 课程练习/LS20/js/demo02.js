// 2019/5/7

// 在控制台上测试，了解两点
// 一、g全局、i大小写、m换行 修饰符作用
/* 二、正则对象的两种基本使用方式 
    1.字符串.字符串方法（正则对象）
    2.正则对象.正则方法（字符串）
*/
var regExp = /ab/i;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//Ab

var regExp = /ab/gi;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//Ab aB

var regExp = /a*b/gi;//注意*和.的区别
// 参见在线分析工具 https://regexper.com或https://jex.im/regulex
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//Ab aaB b

var regExp = /a.b/gi;//注意*和.的区别
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//aaB

// test初步了解
var regExp = /a/i;
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true

var regExp = /a/gi;//思考如果加了g，循环了若干次后是true还是false，为什么？test中的lastIndex
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false 为什么？
// 因为接着上一次的index位置查找，没找到正则中的内容，所以是false，false以后，index会自动归0
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false 为什么？

/*
while (regExp.test("aaa")){
    console.log(regExp.lastIndex);//每次执行后从哪开始重新匹配？
    //结果 1 2 3
}
*/