// 2019/6/2

var person = {name:"jack"};
Object.defineProperty(person,"name",{
    writable:false,//改为true 属性可写
    configurable:false,//改为true 属性可删除，其他特性可配置
    enumerable:true,
    value:"mike"
});
console.log(person.name);//"mike"
person.name = "lucy";
console.log(person.name);//"mike"
delete person.name;
console.log(person.name);//"mike"