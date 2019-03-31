// 2019/3/28

// part1
// 函数对象属性之arguments 实参集合（类似数组的一个对象）
var foo = function(a,b){
    console.log(arguments);
    console.log(arguments === test.arguments);

    console.log(arguments.length);
    var args = Array.prototype.splice.call(arguments,0);
    console.log(args);
};
foo(1,2,3,4);


// 函数对象属性之length 形参个数
function checkVarCount(a,b){
    if(checkVarCount.length !== arguments.length){
        alert("The count of the parameters you passed into the function doesn't match the function definition.");
    }else{
        alert("Successfully call the function");
    }
}
checkVarCount(1,2);
checkVarCount(1);


// 函数对象属性之caller 获取调用当前函数的函数
// 例一：
function test(){
    if(test.caller == null){
        console.log("test is called from the toppest level");
    }else{
        console.log("test is called from the function:");
        console.log(test.caller.toString());
    }
}
// caller属性只有当函数正在执行时才被定义
console.log("没有调用的情况下test.caller为：",test.caller);

test();

function testOuter(){
    test();
}
testOuter();


// 例二:
var obj = {
    foo1:function(){
        console.log(this.foo1.caller);
    },
    foo2:function abc(){
        this.foo1();
    }
};
obj.foo1();
obj.foo2();