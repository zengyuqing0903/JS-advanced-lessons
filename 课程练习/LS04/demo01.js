// 2019/3/12

//上一章数据类型知识点回顾 part1~part3
// part1
var a = [1,2,3];
var b = a;
console.log(a,b);//[1,2,3] [1,2,3]
// pop();从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度
b.pop();
console.log(a,b);//[1,2] [1,2]
b = [4,5,6];
console.log(a,b);//[1,2]  [4,5,6]

// part2
function foo(x){
    // push();将1个或多个元素添加到数组的末尾，并返回该数组的新长度
    x.push(4);
    x = [5,6,7];
    x.push(8);
    // console.log(x);//[5,6,7,8]
}
var a = [1,2,3];
foo(a);
console.log(a);//[1,2,3,4]

// part3
function foo(x){
    x.push(4);
    // console.log(x);//[1,2,3,4]
    x.length = 0;
    x.push(5,6,7,8);
    // console.log(x);//[5,6,7,8]
}
var a = [1,2,3];
foo(a);
console.log(a);//[5,6,7,8]



// 字面量
var obj = {x:1,y:2};
var arr = [1,2,3,4,5];

// 关键字知多少  arguments、break、continue...

// 表达式与语句  表达式语句
var o = {x:1,y:2};
a>b;

// 存在二义性的语句，要避免有二义性的语句
var max = function(x,y){
    return x>y?x:y;
};
// 下属代码是对象还是语句块
{
    foo:max(2,3)
}
// 【语句块】


// 存在二义性的语句  补充一
var max = function(x,y){
    return x>y?x:y;
};
var x = {
    foo:max(2,3)
}

// 存在二义性的语句  补充二
var max = function(x,y){
    return x>y?x:y;
};
{
    console.log(123);//123
    console.log(456);//456
    foo:max(2,3)//3
}