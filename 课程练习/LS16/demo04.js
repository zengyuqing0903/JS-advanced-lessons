// 2019/7/3

function Point(x,y) {
    this.x = x;
    this.y = y;
}
var p = new Point(2,3);
console.log(p);

//思考：直接调用Point方法会是什么样的情况
Point(5,6);//结果是什么情况 //Point {x: 5, y: 6}
console.log(window.x,window.y);//undefined undefined