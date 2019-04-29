// 2019/4/21

// part1
var i = new String("str");          //String Object
var h = new Number(1);              //Number Object
var g = new Boolean(true);          //Boolean Object
var j = new Object({name:"Tom"});   //Object Object
var k = new Array([1,2,3,4]);       //Array Object
var l = new Date();                 //Date Object
var m = new Error();
var n = new Function();
var o = new RegExp("\\d");

//typeof
console.log(typeof Array);//Function
console.log(typeof Function);//Function
console.log(typeof Date);//Function
console.log(typeof Number);//Function
console.log(typeof String);//Function
console.log(typeof Boolean);//Function
//和上边一样么？为什么 
console.log(typeof Math);//Object
console.log(typeof JSON);//Object
// 和上边不一样,函数对象得到“Function”，任何其他对象得到“Object”

// part2
// instanceof
console.log(Object instanceof Function);//true
console.log(Object instanceof Object);//true
console.log(Boolean instanceof Function);//true
console.log(Boolean instanceof Object);//true
console.log(String instanceof Function);//true
console.log(String instanceof Object);//true
console.log(Number instanceof Function);//true
console.log(Number instanceof Object);//true
console.log(Function instanceof Function);//true
console.log(Function instanceof Object);//true
console.log(Array instanceof Function);//true
console.log(Array instanceof Object);//true
console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true
console.log(Math instanceof Function);//false
console.log(Math instanceof Object);//true
console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true
// Math和JSON都不是以构造函数形式存在的，
// 使用其方法时直接（eg：Math.random()）,
// 因此instanceof Function为false