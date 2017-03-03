/**
 * Created by jiangze on 2017/3/3.
 */
/*var qs = require('querystring');*/

str =  'name=zs&age=18&sex=male';

/*var result = JSON.parse(str);
console.log(result);*/

var result = str.split(',');
console.log(result);
for(var i = 0;i<result.length;i++){
    var ccc = result[i].split('&');
    var ddd = [];
    ddd.push(ccc[0],ccc[1]);
    console.log(ddd);
    /*ccc = {"+ccc+"};*/

}

/*var a = [];
for(var i= 0;i < str.length;i++){
    console.log(str[i]);
    a.push(str[i]);
    console.log(a);*/
   /* for(var j=0;j<a.length;j++){
        if(a[i] == []){
            return;
        }else{
            a.push(a[i]);
        }
        console.log(a);
    }*/
/*}*/
/*console.log(qs.parse(str));*/

/*var aaa = str.split(',');
aaa = aaa.slice(1,-1);

console.log(aaa);

var bbb = aaa.splice(':');

console.log(bbb);*/



/*
var aaa = function(){
    console.log(str.length);
    var bbb = str.split(',')
    var ccc = [];

    for(var i= 0;i < bbb.length;i++){
        console.log(bbb[i]);
        ccc.push(bbb[i]);
        console.log(ccc);

    }
}
aaa();*/
