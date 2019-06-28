// 2019/5/30

window.onload = function(e){
    // console.log("window onload");//window onload
    // console.log("e:",e);//Event
    // console.log(e.target);//document
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function(e){
        // 测试0
        console.log(e.type);//click
        console.log(e.target);//target和this此时一样
        //点击div1结果为<div id="div1" onclick="div1click()"></div>
        //点击div2结果为<div id=​"div2">​</div>​

        // 测试1
        // console.log(e.clientX,e.clientY);
        // console.log(this, "-----", e.target.id);
        //点击div1结果为<div id="div1" onclick="div1click()"></div> "----" "div1"
        // 点击div2结果为<div id="div2"></div>"----" "div2"

        // 测试2
        // console.log(e);
        // console.log(e.__proto__);
        // console.log(e.__proto__.__proto__);
        // console.log(e.__proto__.__proto__.__proto__);
        // console.log(e.__proto__.__proto__.__proto__.__proto__);

        // 测试3
        // for(var k in e){
        //     console.log(k,e[k]);
        // }
        // for(var k in e.__proto__){
        //     console.log(k);
        // }
        // for(var k in e.__proto__.__proto__){
        //     console.log(k);
        // }
        // for(var k in e.__proto__.__proto__.__proto__){
        //     console.log(k);
        // }
    }
    div1.onclick = eventHandler;
    div2.onclick = eventHandler;

    //自定义事件监听、事件分发
    // document.addEventListener("xx",function(){console.log("11")});
    // document.dispatchEvent(new Event("xx"));
    //dispatchEvent 向一个指定的事件目标派发一个事件, 并以合适的顺序同步调用目标元素相关的事件处理函数。
}