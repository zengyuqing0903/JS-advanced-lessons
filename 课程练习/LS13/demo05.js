// 2019/4/29

var obj = {};
obj.x = 2;//直接添加属性
console.log(obj.x);//通过.访问属性  2
obj.x = 5;//设置属性
console.log(obj["x"]);//通过[]访问属性 5
delete obj.x;//删除属性
console.log(obj.x);//undefined

// 访问属性的for循环练习
var obj2 = {
    id_1:2,
    id_2:4,
    id_3:6,
    id_4:8,
    id_5:10
};

//思考obj3 和 obj4 内容是什么？为什么？
var obj3 = {};
for(var i=0;i<10;i++){
    obj.i = i;
} 
console.log(obj3);//{}

var obj4 = {};
for(var i=0;i<10;i++){
    obj4[i] = i;
}
console.log(obj4);//{0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9}

// 对象名[属性名] 较 对象名.属性名 更通用
var obj = {
    "x":1,
    "y":2
}
var z = "age";//obj.z = 20;//给obj添加的属性是z
obj[z] = 20;//将变量里的值作为obj的属性名，即age