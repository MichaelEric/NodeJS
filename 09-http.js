/**
 * Created by jiangze on 2017/3/3.
 */
    //获取http模块
var http = require('http');
//创建服务器对象
var server = http.createServer();

//注册事件

server.on('request',function(request,response){
    /*console.log(1111);*/
    response.write('hello world');
    response.end();
});

//监听端口
//参数1：端口号，参数2：ip地址（可选参数），参数3：回调函数
server.listen(8888,'127.0.0.1',function(err){
    console.log('监听成功');
})