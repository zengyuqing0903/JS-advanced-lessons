// 2019/5/30

window.onload = function(){
    console.log("window onload");
    var div2 = document.getElementById("div2");
     //思考：将下述7到11行代码写在window.onload回调函数外会怎样
     /* 将代码写在window.onload回调函数外会报错，因为html中引入js文件在body之前，
     所以若放在回调函数外，会造成在页面完全加载出来前，就已经执行完js代码，不会在页面中出现效果 */
    div2.onclick = function(){
        console.log("div2 click");
    }
    // div2.onmouseover = function () {
    //     console.log("div2 mouseover");
    // } 
}
function div1click(){
    console.log("div1 click");
    // console.log("this:",this);//this指window
}