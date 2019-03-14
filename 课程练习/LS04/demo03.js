// 2019/3/13
//ES5中没有块作用域
{
    var a = 20;
}
console.log("大括号外依然能访问到a:",a);//大括号外依然能访问到a:20

for(var i = 0;i<5;i++){
    console.log("in for ",i);
}
console.log("out of for ",i);//报错吗，输出啥？
// 不报错，结果为：
// in for 0
// in for 1
// in for 2
// in for 3
// in for 4
// out of for 5

if(true){
    var a = 20;
}
console.log(a);//20

// 思考：下边的例子是否报错，输出什么，相关知识参考预解析部分
// 是否能够区分undefined和undeclared(没有声明)
// undeclared：js可以看做是一种语法错误，没有声明直接使用，js无法找到对应的上下文。
// 还没有在作用域中声明过的变量，是undeclared的
if(false){
    var b = 30;
}
console.log(b);//undefined

// C、C++、c#、Java等语言中的块，在线编译网站上查看
/*#include <iostream>
using namespace std;
int main()
{
    for(int i = 0;i<5;i++){
        cout<<"i = "<<i<<endl;
    }
    // cout<<"i = "<<i<<endl;//这里是否能输出i，和JavaScript（ES5）有什么不同
    return 0;
}*/