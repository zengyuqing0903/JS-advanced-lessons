// 2019/6/2

var person = {_name:"jack"};
Object.defineProperty(person,"name",{
    configurable:false,//改为true后可删除，其他特性可配置
    enumerable:true,
    set:function(val){this._name=val},
    get:function(){return this._name}
});
console.log(person.name);//"jack"
person.name = "lucy";
console.log(person.name);//"lucy"
delete person.name;
console.log(person.name);//"lucy"