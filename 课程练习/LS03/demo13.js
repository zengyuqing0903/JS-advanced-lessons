// 2019/3/6  +  2019/3/11
 
//Number构造器属性（静态属性）
Number.MAX_VALUE //最大数值
Number.MIN_VALUE //最小的正值
Number.NaN       //表示非数字，和NaN一样
Number.NEGATIVE_INFINITY   //表示负无穷大
Number.POSITIVE_INFINITY  //表示正无穷大

//Number原型方法（Number对象继承方法）
    //n表示要保留几位小数，并进行四舍五入
// Number.prototype.toFixed();
    //该方法以指定的精度返回该数值对象的字符串表示。n表示一个用来指定有效数个数的整数
// Number.prototype.toPrecision();
    //数字转换为字符串
// Number.prototype.toString();
    //以指数表示法返回该数值字符串表示形式。n表示用来指定小数点后有几位数字。
// Number.prototype.toExponential();

var n1 = 12345.6789;
console.log(n1.toFixed(2));//12345.68
console.log(n1.toPrecision(2));//'1.2e+4'
console.log(n1.toString());//"12345.6789"
console.log(n1.toExponential(2));//'1.23e+4'

//
console.log(NaN === NaN);//false
console.log(isNaN("12,3"));//true
    // Math.floor();向下取整
console.log(Math.floor(3.8));//3
console.log(Math.floor(-3.8));//-4
    //Math.ceil();向上取整
console.log(Math.ceil(3.2));//4
console.log(Math.ceil(-3.2));//-3
    //Math.round();返回一个数字四舍五入最接近的整数
console.log(Math.round(-3.2));//-3
console.log(Math.round(-3.5));//-3
console.log(Math.round(-3.8));//-4