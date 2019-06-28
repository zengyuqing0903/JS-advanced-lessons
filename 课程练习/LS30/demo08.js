// 2019/6/8

// ES5中实现函数参数默认值的方法
var sum = function(a,b,c){
    b = b || 4;
    c = c || 5;
    return a+b+c;
};
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8
console.log(sum(1));//10
console.log(sum(1,0,0));//10  本应为1+0+0，但此处为1+4+5，代码有问题需优化，优化如下

// 优化改造版本
var sum = function(a,b,c){
    if(b!=false){b = b || 4;}//(b!=false)&&(b=b||4);
    if(c!=false){c = c || 5;}//(c!=false)&&(c=c||5);
    return a+b+c;
};
console.log(sum(1,2,3));//1+2+3
console.log(sum(1,2));//1+2+5
console.log(sum(1));//1+4+5
console.log(sum(1,0,0));//1+0+0

// ES6中实现函数参数默认值的方法，使用babble查看ES5的写法
var sum = function(a,b=4,c=5){
    return a+b+c;
}
console.log(sum(1,2,3));//1+2+3
console.log(sum(1,2));//1+2+5
console.log(sum(1));//1+4+5
console.log(sum(1,0,0));//1+0+0

// 默认值案例
function fetch(url,{body = '',method = 'GET',headers = {}} = {}){
    console.log(url);//http://example.com
    console.log(body);//''
    console.log(method);//GET
    console.log(headers);//{}
}
fetch('http://example.com')