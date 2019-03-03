// 2019/3/2

(function(){//立即执行表达式开始
    //基本（原始）数据类型与引用（对象）数据类型的区别：判等不同
    //判等（基本数据类型：==判断值是否相等，===判断值和类型是否相等）
    //(引用：判断所指向的内存空间是否相同)
    var a1 = 100;
    var b1 = 100;
    console.log(a1==b1);//true
    console.log(a1===b1);//true
    
//
    var a2 = new Number(200);
    var b2 = new Number(200);
    console.log(a2==b2);//false
    console.log(a2===b2);//false

//
    var a3 = new Number(200);
    var b3 = a3;
    console.log(a3==b3);//true
    console.log(a3===b3);//true

    b3 = new Number(200);
    console.log(a3===b3);//false


//思考
    var a4 = new Number(200);
    var b4 = 200;
    console.log(a4==b4);//true；思考是b4转换了，还是a4转换了(a4转换了)
    //==比较两个值是否相等，在比较前将两个被比较的值转换为相同类型,
    //如果一个值是对象，另一个值是数字或字符串，则将对象转换为原始值再进行比较
    console.log(a4===b4);//false

//思考
    var a5 = {x:1,y:2};
    var b5 = {x:1,y:2};
    console.log(a5 === b5);//false
    console.log(a5.x === a5.x);//true； 对象属性如果是基本类型内存分配在堆区，比较时是值比较

}());//立即执行表达式结束