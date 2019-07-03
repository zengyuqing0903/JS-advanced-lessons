// 2019/6/28

// part1
console.log(a);
var a = 1;
console.log(a);

// 上边代码等价如下 解析器眼中的代码
var a;
console.log(a);//undefined
a = 1;
console.log(a);//1

// 思考如下代码输出什么 值类型
console.log(a,b);//undefined undefined
var b = 23;
console.log(a,b);//undefined 23
var a = b;
console.log(a,b);//23 23 

// 思考如下代码输出什么 引用类型
console.log(obj1,obj2);//undefined undefined
var obj1 = {x:23};
console.log(obj1,obj2);//{x:23} undefined
var obj2 = obj1;
console.log(obj1,obj2);//{x:23} {x:23}
obj2.x =25;
console.log(obj1,obj2);// {x:25}  {x:25}

// part2
foo();
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}

// 上面代码等价如下，解析器眼中的代码
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
foo();//f_2

// part3
foo();
var foo = function(){
    console.log("foo");
};

// 思考以下代码是否会报错
console.log(foo);//输出什么  undefined
var foo = function(){
    console.log("foo");
};
foo();//是否会报错 不会报错，输出foo
// 上述等价形式如下
var foo;
console.log(foo);
foo = function(){
    console.log("foo");
};
foo();

// part4
AA();
function AA(){
    console.log("AA_1");
}
var AA = function AA(){
    console.log("AA_2");
};
AA();
//上边代码等价如下
function AA(){
    console.log("AA_1");
}
var AA;
AA();//AA_1
AA = function AA(){
    console.log("AA_2");
};
AA();//AA_2