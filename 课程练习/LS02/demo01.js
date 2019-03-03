// 2019/3/2

//类型检测typeof一般用于值类型检测
console.log(typeof 123);//number
console.log(typeof NAN);//number
console.log(typeof true);//boolean
console.log(typeof "abc");//string
console.log(typeof null);//object(null类型被当做空对象引用)[在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 0。由于 null 代表的是空指针（大多数平台下值为 0x00），因此，null的类型标签也成为了 0，typeof null就错误的返回了"object"]
console.log(typeof undefined);//undefined
console.log(typeof {name:"Mike",age:20});//object

console.log(typeof function foo(){});//function

// 思考
console.log(typeof Array);//function
console.log(typeof Function);//function
console.log(typeof Date);//function
console.log(typeof Number);//function

console.log(typeof Math);//object
console.log(typeof JSON);//object

//类型检测 instanceof（左侧操作数为对象，右侧操作数为原型链中的一个类型时，返回为true）
var a = {name:"Mike",age:20};
console.log(a instanceof Object);//true

var b = [12,34,{},""];
console.log(b instanceof Array);//true
console.log(b instanceof Object);//true

var Person = function(){
    //...
};
var p1 = new Person();
console.log(p1 instanceof Person);//true
console.log(p1 instanceof Object);//true