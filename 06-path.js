/**
 * Created by jiangze on 2017/3/3.
 */
// 找到path
    var path = require('path');
//拼接路径
var str = path.join('c:/abc','dcsd.text');

console.log(str);
//打印当前路径的上一级目录
console.log(path.dirname(str));
//打印当前运行文件的路径
console.log(path.extname(str));

//打印当前node执行的文件所在的目录
console.log(__dirname);
//打印当前node执行的文件的路径
console.log(__filename);


