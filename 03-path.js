/*file system  ==  fs*/
var fs = require('fs');
//writeFile 第一个参数是路径，第二个参数是文件内容,第三个参数是回调函数
fs.writeFile('data.json',JSON.stringify({
    "name":"jiangze",
    "age":24
}),function(err){
    if(err){
        console.log("错误");
        return;
    }
    console.log("写入文件成功");
fs.readFile('data.json',function(err,data){
    if(err){
        console.log("错误");
        return;
    }
    console.log(data.toString());
    })
});

