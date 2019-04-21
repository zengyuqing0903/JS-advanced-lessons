// 2019/4/21

//part1
var tmp = 100;//注意：词法作用域，形成的闭包是否包含此行的变量tmp？（不包括）
function foo(x){
    var tmp = 3;//注意：词法作用域，若屏蔽此行，会输出113,114,115，foo之外的tmp是闭包的一部分
    return function(y){
        console.log(x + y + (++tmp));
    }
}
var fee = foo(2);
fee(10);//16
fee(10);//17
fee(10);//18


// 闭包嵌套，扩展知识（了解即可），
// 思考下述代码中存在几个闭包，设置断点调试
function f1(m){
    var z = 100;
    function f2(x){
        return function(y){
            console.log(x + y + (++z));//设置断点，查看有几个闭包
        }
    }
    return f2(m);
}
var f3 = f1(2);
f3(10);//113
f3(10);//114
// 上述存在两个闭包，x属于Closure(f2)，z属于Closure(f1)


// part2
function foo(x){
    var tmp = 3;
    return function(y){
        x.count = x.count ? x.count+1 : 1;
        console.log(x + y + tmp,x.count);
    }
}
var age = new Number(2);
var bar = foo(age);//和相关作用域形成了一个闭包
bar(10);//输出什么？ 15 1
bar(10);//输出什么?  15 2
bar(10);//输出什么？ 15 3


// part3
function fn(){
    var max = 10;//屏蔽此行，则输出100
    return function bar(x){
        if(x>max){
            console.log(x);
        }else{
            console.log(max);
        }
    }
}
var f1 = fn();
var max = 100;
f1(15);//15