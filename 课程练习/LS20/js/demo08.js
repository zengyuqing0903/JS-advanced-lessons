// 2019/5/26

// part1  RegExp.prototype.test 方法
/*用来查看正则表达式与指定的字符串是否匹配，返回true或false
  判断一个模式是否存在于一个字符串中时，就可以使用 test() 
*/
var regExp = /a/i;
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true

/* 如果正则表达式设置了全局标志，test()的执行会改变正则表达式lastIndex属性(指定开始下一个匹配的索引。)。
   连续的执行test()方法，后续的执行将会从 lastIndex 处开始匹配字符串，
   (exec() 同样改变正则本身的 lastIndex属性值). 
*/
var regExp = /a/gi;//思考如果加了g，循环了若干次后是true还是false，这是为什么？test中的lastIndex
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false 为什么？
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false 为什么？

/*
while (regExp.test("aaa")){
    console.log(regExp.lastIndex);//每次执行后从哪开始重新匹配？
}
*/

//Part2   RegExp.prototype.exec 方法 可以获得更为详细的信息，返回一个有属性的数组，
// exec() 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null
//属性index表示匹配到的位置
//对于非全局模式下返回第一个匹配的和所有的分组项，正则对象的lastIndex不起作用
var execExp = /\d{1,2}(\d)(\d)/;
var retExp = execExp.exec("12s342dsfsf233s");
console.log(retExp instanceof Array,retExp,execExp.lastIndex);//true  ["342"] 0
console.log(retExp instanceof Array,retExp,execExp.lastIndex);//true  ["342"] 0
// true (3) ["342", "4", "2", index: 3, input: "12s342dsfsf233s", groups: undefined] 0


//对于全局模式下 每检测一次lastIndex增加一次，
// 再次用此正则对象匹配时，匹配的起始点为上一次的lastIndex
var execExp2 = /\d{1,2}(\d)(\d)/g;
var ts = "12s342dsfsf233s";
console.log(execExp2.exec(ts),execExp2.lastIndex);//lastIndex为 6
//["342", "4", "2", index: 3, input: "12s342dsfsf233s", groups: undefined] 6
console.log(execExp2.exec(ts),execExp2.lastIndex);//lastIndex为 14
// ["233", "3", "3", index: 11, input: "12s342dsfsf233s", groups: undefined] 14

/*
var ret2;
while (ret2 = execExp2.exec(ts)){
    console.log(execExp2.lastIndex);//每次执行后从哪开始重新匹配？
}
*/