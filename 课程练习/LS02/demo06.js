//2019/3/3

var a1 = 20;
var a2 = 23.4;
console.log(parseInt(a2));//23 如果是非数字，则先转换为字符串，然后再转成整型
console.log(parseFloat("23.456xy"));//23.456 同上
//注意：parseInt和parseFloat都为全局方法，即window全局对象的方法
console.log(parseInt === window.parseInt);//true
console.log(parseFloat === window.parseFloat);//true
//思考：函数、对象属性、对象方法之间的关系
// 一个对象就是一系列属性的集合，一个属性包含一个名和一个值。一个属性的值可以是函数，这种情况下属性也被称为方法
//思考：在node.js中全局对象是什么
// 在JavaScript中，通常window是全局对象，而node.js中的全局对象是global，所有全局变量（除了global本身之外）都是global对象的属性。


console.log(Math.ceil(a2));//--> 向上取整  结果为24
console.log(Math.floor(a2));//--> 向下取整  结果为23
console.log(Math.round(a2));//--> 返回一个数字四舍五入后最接近的整数  结果为23
a3 = 5e2;//使用e来表示乘以10的几次幂：
console.log(a3);//指数形式  结果为500
console.log(typeof Math);//输出为object

//NaN
var x = Number("xis021");//试着转成Number类型
console.log(x);//NaN
isNaN(x);//true 确定一个值是否为NaN若是则返回true；否则返回false，
typeof NaN;//number

console.log(Math.log(-1));//返回数字的自然对数（log e，也就是ln） 结果为NaN
console.log(Math.acos(2))//返回数字的反余弦值  结果为NaN
console.log(NaN === NaN);//false


//Infinity与-Infinity(正无穷大与负无穷大)
var y1 = 2/0;
console.log(y1);//Infinity
var y2 = -2/0;
console.log(y2);//-Infinity
isFinite(y2);//false，非有限数   用来判断被传入的参数值是否为一个有限数值，若是返回true，否则为false
isFinite(23);//true,有限数

//0与-0
var z1 = 1/Infinity;//Infinity:无穷大
console.log(z1);//0
var z2 = -1/Infinity;
console.log(z2);//-0