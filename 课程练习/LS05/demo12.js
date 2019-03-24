// 2019/3/24

console.log("1"+"2");//"12"
console.log("1"+2);//"12"
console.log("1"+{});//"1{Object Object}"
console.log(true+true);//2
console.log("5"-2);//3

//
var x = "1";
console.log(++x);//2 注意++和--的隐式类型转换
var x = "1";
console.log(x+1);//"11"
//思考：+=是转成字符串类型还是转成数字类型
//不同情况下转换的类型不同
var x = "1";
console.log(x+=1);//"11"
var x = 1;
console.log(x+=1);//2

//++x 先运算再输出
//x++ 先输出再运算
var i = 1;
var y = ++i + ++i + ++i//（2+3+4）
console.log(y);//9