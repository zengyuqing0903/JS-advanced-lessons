// 2019/6/10

// part1
//由于每一个Symbol值都是不相等的，这意味着Symbol值可以作为标识符，用于对象的属性名，
//就能保证不会出现同名的属性。
//这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。
// 使用Symbol是用[],而不是用点操作符
var mySymbol = Symbol();
// 第一种写法
var a = {};
a[mySymbol] = 'hello';//注意中括号内不要加引号
// 第二种写法
var a = {
    [mySymbol]:'hello'
};
// 第三种写法
var a = {};
Object.defineProperty(a,mySymbol,{value:'hello'});
// 以上写法都得到同样结果
a[mySymbol]//"hello"


// 思考下述代码，是添加了几个属性，obj对象有几个属性
var aSymbol = Symbol("abc");
var obj = {
    [aSymbol]:'hello'
};
Object.defineProperty(obj,Symbol("abc"),{value:'world'});
console.log(obj);//obj对象有2个属性
// 结果:{Symbol(abc): "hello", Symbol(abc): "world"}


// part2
// 上面代码通过方括号结构和Object.defineProperty,将对象的属性名指定为一个Symbol值
// 注意，Symbol值作为对象属性名时，不能用点运算符，使用中括号是注意使用引号和不用引号的区别
var mySymbol = Symbol();
var a = {};
a.mySymbol = 'hello';
a[mySymbol]//undefined
a['mySymbol']//"hello"
// 上面代码中，因为点运算符后面总是字符串，所以不会读取mySymbol作为标识名所指代的那个值，导致a的属性名实际上是一个字符串，而不是一个Symbol值

// 思考
var mys1 = Symbol("xx");
var mys2 = "xx";
var obj = {
    [mys1]:123,
    [mys2]:456
};
console.log(obj[mys1],obj[Symbol("xx")]);//123 undefined
console.log(obj[mys2],obj["xx"]);//456 456
// console.log(obj["mys1"]);//undefined

// 同理，在对象内部，使用Symbol值定义属性时，Symbol值必须放在方括号之中
// 如果不用[]的话相当于使用s对应的字符串定义属性
let s = Symbol();
let obj = {
    [s]:function(arg){console.log("xx");}
};
obj[s](123);//"xx"
// 上述代码中，如果s不放在方括号中，该属性的键名就是字符串s，而不是s所代表的的那个Symbol值

// 采用增强的对象手法，上面代码的obj对象可以写的更简洁一些
let obj = {
    [s](arg){console.log("xx");}
};

//回顾ES6对象属性的表达式定义方法和ES6对象的简洁表示法，对于属性和方法定义的简洁表示法
// 还有一点需要注意，Symbol值作为属性名时，该属性还是公开属性，不是私有属性

// 了解
//Symbol用于switch时可以避免重复问题
/*
const COLOR_RED = Symbol();
const COLOR_GREEN = Symbol();
function getComplement(color) {
    switch (color) {
        case COLOR_RED:
            return COLOR_GREEN;
        case COLOR_GREEN:
            return COLOR_RED;
        default:
            throw new Error('Undefined color');
    }
}
// 常量使用Symbol值最大的好处，就是其他任何值都不可能有相同的值了，
//因此可以保证上面的switch语句会按设计的方式工作。
*/