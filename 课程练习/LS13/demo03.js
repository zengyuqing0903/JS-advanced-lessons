// 2019/4/29

// 访问器属性  实例一
// 访问器属性：.访问器属性：这个属性不包含数据值，
// 包含的是一对get和set方法，在读写访问器属性时，
// 就是通过这两个方法来进行操作处理的。
var o ={
    _x:1.0,//如果都写成x会怎样
    get x(){
    return this._x;//如果都写成x会怎样
    },
    set x(val){
    this._x = val;//如果都写成x会怎样
    }
};
console.log(o.x);//1
o.x = 2;
console.log(o.x,o._x);//2 2
//o.hasOwnProperty("x");//true   访问器属性
//o.hasOwnProperty("_x");//true   数据属性

// 访问器属性  实例二  只读
var o = {
    _x:1.0,
    get x(){
        return this._x;
    }
};
console.log(o.x);//1
o.x = 2;
console.log(o.x,o._x);//1 1

///
var o = {
    _x:1.0,
    get x(){
        return this._x;
    }
};
console.log(o.x);//1
o.x = 2;
console.log(o.x);//1

// 访问其属性 实例三
var p1 = {
    _name:"Jack",
    _age:23,
    set age(val){
        if(val>0&&val<150){
            this._age = val;
        }else{
            console.log("请设置正常年龄");
        }
    },
    get age(){
        return this._age;
    }
};
p1.age = 178;
console.log(p1.age);//请设置正常年龄


// 访问器属性  综合实例
var p = {
    x:1,
    y:1,
    get r(){
        return Math.sqrt(this.x*this.x+this.y*this.y);
    },
    set r(newValue){
        var oldValue = Math.sqrt(this.x*this.x+this.y*this.y);
        var ratio = newValue/oldValue;
        this.x*=ratio;
        this.y*=ratio;
    },
    get theta(){
        return Math.atan2(this.y,this.x);
    }
};
var q = Object.create(p);
console.log(q);
q.x = 2;
q.y = 2;
console.log(q.r);//2.8284271247461903(根号8)
console.log(q.theta);//45°（0.7853981633974483）

