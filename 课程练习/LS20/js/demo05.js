// 2019/5/10-2019/5/14

// 贪婪模式和非贪婪模式

// 默认是贪婪模式；在量词后面直接加上一个问号？就是非贪婪模式。
// 贪婪模式：趋向于最大长度匹配；
// 非贪婪模式：匹配到结果就好，最少的匹配字符
// x{m,n} 匹配最少m个，最多n个
"12345678".replace(/\d{3,6}/,'x');//默认为贪婪模式 x78

"12345678".replace(/\d{3,6}?/,'X');//非贪婪模式 X45678
// 每3个字符别一个X替换
"12345678".replace(/\d{3,6}?/g,'X');//返回 XX78

// 正则表达式的分组
console.log("NameNameName_11111".replace(/Name{3}/,"X")); //"NameNameName_11111"
console.log("NameNameName_11111".replace(/(Name){3}/,"X"));//"X_11111"

console.log("a1b2c3d4e5".replace(/[a-z]\d{3}/,"X"));//"a1b2c3d4e5"
console.log("a1b2c3d4e5".replace(/([a-z]\d){3}/,"X"));//"Xd4e5"
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}/,"X"));//"Xe5"
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}?/,"X"));//"Xd4e5"

// 与分组有关的 或
"abcdefghijk".replace(/abcde|fghijk/g,"X");//"XX"
"abcdefghijk_abcdehijk_abcfghijk".replace(/abc(de|fg)hijk/g,"X");//"abcdefghijk_X_X"

//练习：
//将"xxabccxxdexx"替换为"yyabccxxdeyy"
"xxabccxxdexx".replace(/(\bxx)|(xx\b)/g,"yy");

//"xx11xx".replace(/(\bxx)|(xx\b)/g,"mm");//mm11mm

