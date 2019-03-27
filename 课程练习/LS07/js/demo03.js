// 2019/3/27

// 实参数大于形参数
function test(){
    console.log(arguments);
    console.log(test.arguments==arguments,arguments);
    // console.log(arguments.length);
    // console.log(typeof arguments);
    // console.log(arguments instanceof Array);
    // console.log(arguments instanceof Object);
    console.log(Array.prototype.slice.call(arguments));
    var s = "";
    for(var i = 0;i<arguments.length;i++){
        s += arguments[i];
    }
    return s;
}
test("hello,","world!");
// 结果：Arguments(2) ["hello,", "world!", callee: ƒ, Symbol(Symbol.iterator): ƒ]
        // false Arguments(2) ["hello,", "world!", callee: ƒ, Symbol(Symbol.iterator): ƒ]
        // 2
        // Object
        // false
        // true
        // ["hello","world!"]


// 实参小于形参
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8
console.log(sum(1));//10