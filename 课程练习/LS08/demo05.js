// 2019/3/28

// typeof会返回一个变量的基本类型,instanceof返回的是一个布尔值
// typeof无法更细致的区分引用类型

// 对象 instanceof 构造函数
//1.看这个对象能否能用该构造函数实例化得到，能得到结果为true，不能结果为false(用于判断一个变量是否属于某个对象的实例。)
// 2.判断能否在对象的原型链上找到构造函数的prototype
function foo(){}
console.log(foo);//function foo(){}
//如果变量是函数（函数对象）时，typeof此对象，返回function，而非object
console.log(typeof foo);//Function
console.log(foo instanceof Object);//true
console.log(foo instanceof Function);//true
console.log(foo === window.foo);//true

//内置的函数对象（Array、Function、Date等），内置的非函数对象（Math、JSON）
console.log(typeof Function);//function
console.log(typeof Array);//function
console.log(typeof Date); //function
console.log(typeof Error);//function
console.log(typeof Math);//object
console.log(typeof JSON);//object

// typeof不能用于判断是否为数组，因为都会返回object
// typeof在判断null、array、object以及函数实例（new + 函数）时，得到的都是object。
//  思考
console.log(typeof new Function());//function
console.log(typeof new Array());//object
console.log(typeof new Date());//object
// instanceof只能用来判断对象和函数，不能用来判断字符串和数字等
//  补充思考
console.log(Function instanceof Function);//true
console.log(Function instanceof Object);//true

console.log(Array instanceof Function);//true
console.log(Array instanceof Object);//true

console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true

console.log(Math instanceof Function); //false
console.log(Math instanceof Object);//true

console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true