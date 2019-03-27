// 2019/3/26
// part1
// 普通函数直接调用
function test1(){
    console.log("this is",this);
}
test1();//this is window

//思考嵌套的情况
function test2(){
    function test3(){
        console.log("this is",this);
    }
    test3();
}
test2();
//this is window


// 对象方法证明
var obj = {
    name:"obj",
    x:23,
    test:function(){//test 内部的this指向调用该方法的对象
        console.log(this.x,this);
    }
};
obj.test();//调用对象的方法 
// 结果为23，当前对象obj，即{name:"obj",x:23,test:function...}

//在普通函数调用，this指向全局对象
//当函数不作为对象的属性调用时，就相当于普通函数，this指代的是全局对象
//当他作为对象的属性调用时，指该对象

//eg1:
var x = 45;
var test = function(){
    console.log("输出:",this.x);
}
var obj = {
    x:23
};
obj.test = test;
obj.test();//输出：23
test();//输出：45

//eg2:
var x = 45;
var obj = {
    x:23,
    test:function(){
        function foo(){
            console.log(this.x);
        }
        foo();
    }
};
obj.test();//45    (作为普通函数调用)

//给obj动态添加方法
var obj = {name:"jack"}
var sayHi = function(){
    console.log("Hi,i'm",this.name);
};
obj.sayHi = sayHi;//添加 给对象添加方法
obj.sayHi();//Hi i'm jack
//思考：若直接调用sayHi();
// var name = "全局"
//sayHi(); 

//
// var sayHi = function(){
//     console.log("Hi,i'm",this.name);
// };
// var name = "全局"
// sayHi(); //结果：Hi i'm 全局



/*
// 思考如下代码 详情参见高阶函数章节
var x =2;
var obj ={
    x:23
};
var fun1 = function(){
    return function fun2(){
        return this.x;//若改为 return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
//（fun1的执行结果，比fun3少了一层,
// fun3相当于是函数套函数；fun4可看做只是在执行fun2）
console.log(obj.fun3());
// ƒ fun2(){
//     return this.x;//若改为 return this;
//     }
console.log(obj.fun3()());
//2 (将this.x改为this，结果输出为window)
console.log(obj.fun4());//obj的x值
*/


// part2
// 间接调用 实例一 间接调用的对象要和原对象之间，
// 在数据结构上有对应的相似处，以便不影响调用效果
objA = {name:"AA"};
objB = {name:"BB"};
objA.foo = function(){
    console.log(this.name);
};
objA.foo();//AA
objA.foo.call(objB);//BB

// 间接调用 实例二 移花接木 吸星大法
var fish = {
    name:"fish",
    swim:function(m,n){
        console.log("i'm "+this.name+" i can swim __",m,n);
    }
};

var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly __",m,n);
    }
};

var me = {
    name:"ABC"
};

bird.fly(5,6);//i'm:polly i can fly __ 5 6
fish.swim.call(me,3,4);//i'm ABC i can swim __ 3 4
bird.fly.call(me,7,8);//i'm:ABC i can fly __ 7 8 
// swim.call(null,1,2);//报错


// 很多方法都可以通过间接调用的方式来调用，比如很多原型的方法
function test(){
    console.log(Array.prototype.slice.call(arguments));
}
test(1,2,3,"4",5);//[1,2,3,"4",5]


// 构造函数
function Person(name){
    this.name = name;
}
Person.prototype.sayHi = function(){
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person("Jack");
p1.sayHi();//Hi,i'm Jack