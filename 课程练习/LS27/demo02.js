// 2019/6/1

// 变量共享问题
for(var i = 0;i<3;i++){
    setTimeout(function(){
        console.log(new Date,i);
    },1000*i);
}
console.log("i:",i);//i:3

// 通过IIFE解决变量共享问题
for(var i = 0;i<3;i++){
    (function(j){
        setTimeout(function(){
            console.log(new Date,j);
        },1000*j);
    })(i);
}