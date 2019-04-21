// 2019/4/21

// 闭包引入案例（思考下述两个案例的区别，那个x始终未被释放）
function f1(){
    var x = 1;
    function f2(){
        return x++;
    }
    return f2();
}
var f3 = f1();
// 观察f1中的x变量
console.log(f3);//输出？结果为1
console.log(f3);//输出？结果为1

/* 
function f1(){
    var x = 1;
    function f2(){
        return x++;
    }
    return f2;
}
var f3 = f1();
// 观察f1中的变量x
console.log(f3());//输出？ 结果:1
console.log(f3());//输出？ 结果:2 
*/


/* 
// 例一
function createInc(startValue){
    return function(step){
        startValue+=step;
        return startValue;
    }
}
var inc = createInc(5);
console.log(inc(1));//输出多少？6
console.log(inc(2));//输出多少？8
inc = createInc(5);
console.log(inc(1));//输出多少？6
 */

//  例二
function createInc(startValue){
    return function(step){
        startValue+=step;
        return startValue;
    }
}
var inc = createInc(5);
console.log(inc(1));//输出多少？6
console.log(inc(2));//输出多少？8
var inc2 = createInc(5);
console.log(inc(1));//输出多少？9
console.log(inc2(1));//输出多少？6

/* 
// 例三
function foo(){
    var i = 0;
    function bar(){
        console.log(++i);
    }
    return bar();
}
foo();//1
foo();//1
 */

 //例四
 function foo(){
     var i = 0;
     function bar(){
         console.log(++i);
     }
     return bar;
 }
 var a = foo();
 var b = foo();
 a();//输出多少？ 1
 a();//输出多少？ 2
 b();//输出多少？ 1