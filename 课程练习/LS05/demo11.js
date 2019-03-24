// 2019/3/24

var a = 34;
if(a = 45){
    console.log("是否会输出？");
}
//会输出。结果为：是否会输出？

var b = 34;
if(45==b){//发反写
    console.log("是否会输出？");
}
//不会执行console.log语句
