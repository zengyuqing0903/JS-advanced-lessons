// 2019/3/27

// 值传递
var a = 1;
function foo(x){
    console.trace("a:",a,"x:",x);;
    x = 2;//step 2222
    console.trace("a:",a,"x:",x);//step 3333
}

console.trace("a:",a);//a:1(全局)
foo(a);//step 1111      
//a:1 x:1   
//a:1 x:2    
console.trace("a:",a);//step 4444   //a:1



// 引用传递
var obj = {x:1};
function fee(o){
    console.trace("obj.x :",obj.x,"o.x :",o.x);
    o.x = 3;//step 2222
    console.trace("obj.x :",obj.x,"o.x :",o.x);//step 3333
}

console.trace("obj.x :",obj.x);//obj.x :1
fee(obj);//step 1111
//obj.x :1  o.x :1
//obj.x :3  o.x :3
console.trace("obj.x :",obj.x);//step 4444  obj.x被改写为3
//obj.x :3


// 打开index.html 学习Chrome的source调试
document.onclick = function(){//测试Event Listener Breakpoints
    alert("click");
    // var body = document.getElementsByTagName("body");
};