// 2019/3/24

var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8
console.log(sum(1));//10
// console.log(sum(1,0,0));//10


// 优化改造版本
var sum = function(a,b,c){
    if(b!=false){b = b||4;}//(b!=false)&&(b=b||4)
    if(c!=false){c = c||5;}//(c!=false)&&(c=c||5)
    return a+b+c;
};
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8
console.log(sum(1));//10
console.log(sum(1,0,0));//1