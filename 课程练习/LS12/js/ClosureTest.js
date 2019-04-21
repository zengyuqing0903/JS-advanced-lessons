// 2019/4/21

// 将demo12、demo13中的部分代码复制到下边，然后进行断点调试
// 加深对闭包的理解

// demo12
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

//demo13
function counter(){
    var n = 0;
    return {
        count:function(){return ++n;},
        reset:function(){n = 0;return n;}
    }
}
var c = counter();
var d = counter();
console.log(c.count());// 1
console.log(d.count());// 1
console.log(c.reset());// 0
console.log(c.count());// 1
console.log(d.count());// 2
