// 2019/6/28

// 全局作用
var a = 10,
    b = 20;
function fn(){
    // fn作用域
    var a = 100,
        c = 200;
    console.log(a,b,c,d);//100 20 200(没有d的结果) (有d会报错)
    function bar(){
        // bar局域作用域
        var a = 500,
            d = 600;
        console.log(a,b,c,d);//500 20 200 600
    }
    bar();
}
fn();
console.log(a,b,c,d);//10 20(没有cd的结果) (有cd会报错) 