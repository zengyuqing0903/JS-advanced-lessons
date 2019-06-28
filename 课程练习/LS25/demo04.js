// 2019/5/30

window.onload = function(e){
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    div1.addEventListener("click",function(e){
        console.log("div1 click");
        e.stopPropagation();//阻止事件冒泡或捕获
    },false);//第3个参数可以不写，默认为false

    div2.addEventListener("click",function(e){
        console.log("div2 click");
    },false);

    document.addEventListener("click",function(e){
        console.log("document click");
    },false);

    document.body.addEventListener("click",function(e){
        console.log("body click");
    },true);
}
// 点击div1结果：body click   div1 click
// 点击div2结果：body click   div2 click   div1 click
/* addEventListener第三个参数，理解为是否以捕获的形式触发，
true以捕获形式，false不以捕获形式，以冒泡形式
决定内层及它自己以何种方式触发 */
/* 冒泡处理过程，从内往外依次触发事件（默认情况下）
事件捕获的处理过程，从外往内依次触发事件*/
