// 2019/5/31

// 发布订阅  实例

var Subject = function(){
    var _observer = [];
    this.attach = function(observer){
        _observer.push(observer);
    };
    this.detach = function(){
        _observer.pop();
    };
    this.notify = function(msg){
        for(var i = 0;i<_observer.length;i++){
            _observer[i].update(msg);
        }
    };
    this.print = function(){
        console.log(_observer.length);
        console.log(_observer);
    };
};
var Observer = function(name){
    this.update = function(msg){
        console.log('i am '+name+',and i get the message: '+msg);
    };
};
var sub = new Subject();
sub.attach(new Observer('a'));
sub.attach(new Observer('b'));
sub.notify('hello');
//结果：i am a,and i get the message: hello
//     i am b,and i get the message: hello
// sub.print();

setTimeout(function(){
    var c = new Observer('c');
    sub.detach();
    sub.attach(c);
    sub.notify('world');
// 结果：i am a,and i get the message: world
//       i am c,and i get the message: world
    // sub.print();
},5000);
