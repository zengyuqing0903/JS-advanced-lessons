// 2019/3/11

// part 0 
// 字符串比较
localeCompare("用来比较的字符");
// 若引用字符存在于比较字符之前则为负数
// 若引用字符存在于比较字符之后则为正数
// 相等时返回0
console.log("A" > "a");//false
console.log("B".localeCompare("A"));//结果为1 //考虑本地化的字符排序，返回0或非0
console.log("A".localeCompare("A"));//结果为0 //考虑本地化的字符排序，返回0或非0
console.log("A".localeCompare("B"));//结果为-1 

//字符串连接
var a = "abc";
var b = "def";
var c = a+b;

//part1   字符串提取
//charAt(index) 方法可返回特定索引位置的字符。
// String.prototype.charAt(pos);
// //charCodeAt(index) 返回特定索引位置的字符的Unicode码
// String.prototype.charCodeAt(pos);
// //slice(截取的起始位置，截取的结束位置[不包括])
// String.prototype.slice(start,end?);
// //substr(截取的起始位置，截取字符串的长度)
// String.prototype.substr(start,length?);
// //substring(截取的起始位置，截取的结束位置[不包括])
// String.prototype.substring(start,end?);
// //split(特定的字符，[限定元素个数])将字符串以特定的字符分割，
// //将字符串作为数组元素，生成数组
// String.prototype.split(separator?,limit?)

//字符串常用方法，字符串的方法源于String.prototype

var str2 = "abcdef".slice(2);//"cdef"
var str3 = "abcdef".slice(2,5);//"cde"
var str4 = "abcdef".slice(-2);//"ef"
var str5 = "abcdef".slice(2,-2);//"cd"

//返回数组
var arr6 = "abcdef".split("c");//["ab","def"]
var arr7 = "abcdef".split("c",1);//["ab"]
var arr8 = "abcdef".split("c",2);//["ab","def"]

var str9 = "abcdef".charAt(2);//"c"
var str10 = "abcdef".charCodeAt(3);//100
var str11 = "abcdefabcdef".indexOf("d",1);//3
var str12 = "abcdefabcdef".indexOf("d",4);//结果为9  从第四个开始找

//substr与substring的区别
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//后一个参数代表长度
console.log(str13,str14);//str13未受到破坏  
// 结果为"abcdefghijklmn"  "cdefg"

var str15 = str13.substring(2,5);//后一个参数代表第几个end
console.log(str13,str15);//str13未受到破坏
//结果为"abcdefghijklmn"  "cde"

// part2  字符串变换
//trim()去除字符串两边的空白字符，字符串内部不去除
//String.prototype.trim( );
//字符串拼接
//String.prototype.concat(str1?,str2?);
// 将调用该方法的字符串值转为小写形式，并返回
//String.prototype.toLowerCase( );
// 返回调用字符串值转换为小写的值。
//String.prototype.toLocaleLowerCase( );
// 将调用该方法的字符串值转换为大写形式，并返回
//String.prototype.toUpperCase( );
// 使用本地化的大小写映射规则将输入的字符串转化成大写形式并返回结果字符串。
//String.prototype.toLocaleUpperCase( );

var str16 = "aaa".concat("bbb");//返回字符串  结果为"aaabbb"
var str17 = "   abc def    \r\n  ".trim();//返回已移除前导空格、尾随空格和行终止符的原始字符串
// 结果为"abc def"
var str18 = "abcDEF".toLowerCase();//"abcdef"
var str19 = "abcDEF".toUpperCase();//"ABCDEF"

// part3 检索和比较
//indexof(被查找值,开始查找位置) 返回调用第一次出现的指定值的索引，若未找到该值，则返回-1
//String.prototype.indexOf(searchingString,position?);
//lastIndexOf(被查找值，开始查找位置) 返回指定值在调用该方法的字符串中最后出现的位置，若未找到则返回-1
//String.prototype.lastIndexOf(searchingString,position?);
// 返回一个数字来指示一个参考字符串是否在排序顺序前面或之后或与给定字符串相同  
//String.prototype.localeCompare(other);

var indexOf = "abcDEFabcDEFabcDEF".indexOf("D",6);//9
var lastIndexOf = "abcDEFabcDEFabcDEF".lastIndexOf("D");//15

// part4 与正则相关的方法 详细内容见正则表达式章节
// String.prototype.search(regexp);
// String.prototype.match(regexp);
// String.prototype.replace(regexp);