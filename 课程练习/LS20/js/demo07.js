// 2019/5/14

//  \w 匹配字母
// global:检测是否设置g标志;  ignoreCase:检测是否设置i标志;
// multiline:检测是否设置m标志; lastIndex:返回被查找字符串中下一个成功匹配的开始位置
// source:返回正则表达式的字符串表示
var reg1 = /\w/;
var reg2 = /\w/gi;
console.log(reg1.global,reg1.ignoreCase,reg1.multiline,reg1.lastIndex,reg1.source);
// 结果:false false false 0 "\w"
console.log(reg2.global,reg2.ignoreCase,reg2.multiline,reg2.lastIndex,reg2.source);
// 结果:true true false 0 "\w"

//思考reg1的global属性是定义在谁身上，是否可修改，它的属性特性描述符是什么？

console.log(reg2.lastIndex);
reg2.test("abc23def");
console.log(reg2.lastIndex);
reg2.test("abc23def");
console.log(reg2.lastIndex);

while (reg2.test("abc23def")){
    console.log(reg2.lastIndex);
}

var reg3 = /\w/gi;
var str = "slfls3r3sfsf";
var returnArray1 = reg3.exec(str);
console.log(reg3.lastIndex,returnArray1);

var returnArray2 = reg3.exec(str);
console.log(reg3.lastIndex,returnArray2);
/*
var returnArray3;
while (returnArray3 = reg3.exec(str)){
    console.log(reg3.lastIndex,returnArray3);
}
*/

//RegExp静态属性
console.log(RegExp.$_);
console.log(RegExp.lastMatch);