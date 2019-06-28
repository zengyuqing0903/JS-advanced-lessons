// 2019/6/11

// part1
var s1 = new Set([1,2,3,4,5,5,6,2,2]);
console.log(s1);//Set(6) {1, 2, 3, 4, 5, 6}

var s2 = new Set();
[2,3,5,4,5,2,2].map(x => s2.add(x));
for(var i of s2){
    console.log(i);
}//2 3 5 4

// 例一
var set = new Set([1,2,3,4,4]);
console.log([...set]);// [1, 2, 3, 4]
//例二
var items = new Set([1,2,3,4,5,5,5,5]);
console.log(items.size);//5

// 去除数组的重复成员
[...new Set([1,2,3,3])];// [1, 2, 3]

// 区分基本数据类型和引用（对象）类型，两个对象总是不相等的
var set = new Set();
set.add({});
console.log(set.size);//1
set.add({});
console.log(set.size);//2

// part2
var s = new Set();
s.add(1).add(2).add(2);
// 注意2被加入了两次
s.size//2
s.has(1);//true
s.has(2);//true
s.has(3);//false
s.delete(2);
s.has(2);//false

// 
var properties = new Set();
properties.add('width');
properties.add('height');
console.log(properties.size);//2
if(properties.has('width')&&properties.has('height')){
    console.log("do something!");
}
// do something!


//Array.from方法可以将Set结构转为数组
var items = new Set([1,2,3,4,5]);
var array = Array.from(items);
console.log(array);// [1, 2, 3, 4, 5]

// ...也可以将set转换成数组
console.log([...(new Set([1,2,3,4,5]))]);// [1, 2, 3, 4, 5]
// 如果不加[]就是散列的元素
console.log(...(new Set([1,2,3,4,5])));1 2 3 4 5

// 关于Set的遍历方法
var set = new Set(['red','green','blue']);
console.log(typeof set.keys());// object 注意:对象类型，是否可迭代，可以用for...of遍历
console.log(typeof set.values());//object
console.log(typeof set.entries());//object

// keys方法、values方法、entries方法返回的都是遍历器对象
for(var item of set.keys()){
    console.log(item);
}
// red
// green
// blue
for(var item of set.values()){
    console.log(item);
}
// red
// green
// blue
for(var item of set.entries()){
    console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

// 练习：使用解构赋值，将数据提取
for(var [key,value] of set.entries()){
    console.log(key,value);
}
// red red
// green green
// blue blue

// Set结构的实例的forEach方法，用于对每个成员执行某种操作，没有返回值
var set = new Set([1,2,3]);
set.forEach((value,key) => console.log(value * 2));
// 2
// 4
// 6

// 而且，数组的map和filter方法也可以间接用于Set了，通过...转成数组后调用后再生成set
/* map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
   map() 方法按照原始数组元素顺序依次处理元素。
*/
// filter()方法创建一个新数组，其中包含通过所提供函数实现的测试的所有元素。
var set = new Set([1,2,3]);
set = new Set([...set].map(x => x * 2));
// 返回Set结构： Set(3) {2, 4, 6}
var set = new Set([1,2,3,4,5]);
set = new Set([...set].filter(x => (x%2) == 0));
// 返回Set结构： Set(2) {2, 4}

// set应用案例  并集、交集
let a = new Set([1,2,3]);
let b = new Set([4,3,2]);
// 并集
let union = new Set([...a,...b]);
console.log(union);
// Set(4) {1, 2, 3, 4}
// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}