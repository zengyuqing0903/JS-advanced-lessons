// 2019/3/3

//字面量
//数字的字面量，就是这个数字自己，并不需要任何的符号来界定这个数字。
//字符串的字面量，必须用双引号、单引号括起来的零个或多个字符。字符串被限定在同种引号之间；
//布尔类型有两种字面量：true和false
var str = "abc_def_ghi_jkl_mn";

//转义字符 \n \" \' \\   (\n:换行；\":表示双引号；\':表示单引号；\\:表示反斜杠字符(\))
console.log("abc\ndefghi\\\n\'mn\'");
//上述结果为：abc
//           defghi\
//           'mn'

//字符串常用操作
var str = "abc_def_ghi_jkl_mn";
//split(分隔符，生成数组的元素个数)   功能：将字符串以特定的字符分割
str.split("_");//结果为["abc","def","ghi","jkl","mn"]
str.split("_",2);//结果为["abc","def"]

//将一个或多个字符串与原字符串连接合并，形成一个新字符串并返回
//concat 方法并不影响原字符串。
str.concat("_opq");//结果为"abc_def_ghi_jkl_mn_opq"

//str.substr(截取的起始位置，截取的长度)
str.substr(4,7);//结果为："def_ghi"

//str.substring(截取的第一个字符的索引，一个0到字符串长度之间的整数)
//前者表示的字符作为返回的字符的首字母；后者：表示的字符不包含在截取的字符串内
str.substring(4,7);//结果为："def"

//根据位置提取一段子串，返回值为包含提取部分的新的子串
//str.slice(起始下标[包括]，结束下标[不包括])（参数为负表示从字符串末尾开始算起，-1表示最后一个字符...）
//返回值：包含给定字符串的指定部分的新字符串
str.slice(2);//结果为："c_def_ghi_jkl_mn"
str.slice(2,5);//结果为："c_d"
str.slice(-2);//结果为:"mn"
str.slice(2,-2);//结果为:"c_def_ghi_jkl_"

//更多内容见下一章节


str.bold();//创建HTML元素“b”，并将字符串加粗显示
str.link();//创建一个 <a> HTML 元素，用该字符串作为超链接的显示文本，参数作为指向另一个URL的超链接
str.fontcolor("red");//创建一个<font>的HTML元素让字符串被显示成指定的字体颜色
//<font>元素已经在在HTML5中被移除并且不应该在使用。替代的是，web开发者应该使用CSS属性。
str.fontsize(50);//创建一个<font>html元素，该元素使字符串以指定的字体大小显示。
