// 2019/5/26

//String.prototype.search 注意search忽略 全局g
/*如果匹配成功,则 search() 返回正则表达式在字符串中首次匹配项的索引;否则，返回 -1*/
console.log("a1b2c3d4".search(/1/));//返回index 1
console.log("a1b2c3d4".search(/f/));//返回index -1 没找到
console.log("a1b2c3d4".search(/\d/g));//返回index 1 忽略全局
console.log("a1b2c3d4".search(/\d\w/g));//返回index 1 忽略全局


//String.prototype.match 如果匹配不到返回null,匹配到了返回数组
// 包含的信息有index 原始字符串 有没有g影响很大
// 如果使用g标志,则将返回与完整正则表达式匹配的所有结果,但不会返回捕获组，
// 或者未匹配返回null。
console.log("a1b2c3d4".match(/1/));//[ '1', index: 1, input: 'a1b2c3d4' ]
console.log("a1b2c3d4".match(/f/));//null
console.log("a1b2c3d4".match(/\d/));//[ '1', index: 1, input: 'a1b2c3d4' ]
console.log("a1b2c3d4".match(/\d/g));//[ '1', '2', '3', '4' ]

// String.prototype.replace 替换与正则表达式匹配的子串
console.log("a,b,c,d".replace(",","X"));//"aXb,c,d"
console.log("a2b3c4d".replace(/[2-3]/,"X"));//"aXb3c4d"
console.log("a2b3c4d".replace(/[2-3]/g,"X"));//"aXbXc4d"

//String.prototype.split  把字符串分割为字符串数组
console.log("a,b,c,d".split(","));//["a","b","c","d"]
console.log("a2b3c4d".split(/\d/));//["a","b","c","d"]

"abcdef21313sfsflsf1223jlnsa".match(/[a-h]/);
//["a", index: 0, input: "abcdef21313sfsflsf1223jlnsa", groups: undefined]
"abcdef21313sfsflsf1223jlnsa".match(/[a-h]/g);
// ["a", "b", "c", "d", "e", "f", "f", "f", "f", "a"]
"abcdef21313sfsflsf1223jlnsa".match(/[123efsa]/g);
// ["a","e","f","2","1","3","1","3","s","f","s","f","s","f","1","2","2","3","s","a"]
"abcdef21313sfsflsf1223jlnsa".match(/[^123efsa]/g);
//["b","c","d","l","j","l","n"]
"abcdef21313sfsflsf1223jlnsa".match(/[1-2a-d]/g);
//["a","b","c","d","2","1","1","1","2","2","a"]
"hello world Hi you".match(/hello|world/);
//["hello", index: 0, input: "hello world Hi you", groups: undefined]
"hello world Hi you".match(/hello|world/g);
//["hello","world"]
"world Hi you".match(/hello|world/);
// ["world", index: 0, input: "world Hi you", groups: undefined]
"THat hot hat".match(/h.t/);
//["hot", index: 5, input: "THat hot hat", groups: undefined]
"THat hot hat".match(/h.t/g);
//  ["hot", "hat"]
"THat hot hat".match(/h.t/gi);
// ["Hat", "hot", "hat"]