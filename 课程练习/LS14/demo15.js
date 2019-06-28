// 2019/6/2

// 要求掌握下述方法的使用
// Object.keys() 返回所有自有（非继承）可枚举属性的键
// Object.getOwnPropertyNames()返回所有自有（非继承）键，包括不可枚举
// Object.prototype.hasOwnProperty() 判断自身是否有该属性，包括不可枚举的属性
// Object.prototype.propertyIsEnumerable() 判断自身是否有该属性并检测该属性是否可枚举
// in  检测一个对象是否有某个属性，包括继承的属性，包括不可枚举的属性
// for...in 遍历一个对象的属性，包括继承的属性，但不包括不可枚举的属性
// 思考Object静态方法和Object.prototype原型方法的区别（都共享了方法，使用上有什么区别）
var o3 = {};
o3.y = "yyy";
Object.defineProperty(o3,"x",
    {configurable:true,enumerable:false,writable:true,value:"xxx"}
);
console.log(Object.keys(o3));//["y"]
console.log(Object.getOwnPropertyNames(o3));//["y","x"]

console.log(o3.hasOwnProperty("x")); //true
console.log(o3.propertyIsEnumerable("x"));//false

for(var k in o3){//遍历不到x属性
    console.log(k,o3[k]);
}//y "yyy"
console.log("x" in o3,"y" in o3);//true true //in 和 for...in的区别  关于可枚举属性特性
console.log(o3.hasOwnProperty("x"),o3.hasOwnProperty("y"));//true true //不关心可枚举

// 遍历属性的综合实例
var o4 = {};
o4.a = "aaa";
Object.defineProperty(o4,"b",{
    configurable:true,enumerable:false,writable:true,value:"bbb"
});
var o5 = Object.create(o4);
o5.c = 234;
Object.defineProperty(o5,"d",{enumerable:false,value:567});
for(var k in o5){
    if(o5.hasOwnProperty(k)){
        console.log("o5自有可遍历属性：",k,o5[k]);
    }else{
        console.log("o5非自有可遍历属性：",k,o5[k]);
    }
}
// 结果:o5自有可遍历属性： c 234
//     o5非自有可遍历属性: a aaa 

console.log(o5.propertyIsEnumerable("a"),//false
    o5.propertyIsEnumerable("b"),//false
    o5.propertyIsEnumerable("c"),//true
    o5.propertyIsEnumerable("d")//false
);//多少个true 多少个false
console.log("a" in o5,"b" in o5,"c" in o5,"d" in o5);//true true true true
console.log(Object.keys(o5));//["c"]   只显示自身可枚举的属性
console.log(Object.getOwnPropertyNames(o5));//["c","d"]  返回一个数组，包含自身所有属性，包括不可枚举的属性

//console.log(o4.isPrototypeOf(o5));//true