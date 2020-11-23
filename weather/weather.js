
/**
 * Created by Turne on 2017/2/15.
 */
 
var http =  require('http');
var url = "";
var city = require("./cityData");
 
process.stdin.setEncoding('utf8');//设置用户输入数据的编码
 

// process.stdin.on('readable',function () {
//     //console.log("请输入您要查询的城市名：");
//     // var chunk = process.stdin.read();//获取用户的查询输入（标准输入流）
//     var chunk = '北京';
//     if(chunk !== null)
//     {
//         chunk = chunk.trim();//去掉字符串的前后空格
//         // var citycode = city[chunk];
//         var citycode = '101030100';
//         //console.log(typeof (citycode));
//         if(typeof (citycode) === "string") {//判断用户当前的输入是否正确
//             url = "http://t.weather.sojson.com/api/weather/city/" + citycode
//             getCityData(url);
//         }
//         else {
//             console.log("没有找到！" + '\n');
//             console.log("请输入您要查询的城市名：");
//         }
//     }
//     else
//     {
//         console.log("没有找到！" + '\n');
//         console.log("请输入您要查询的城市名：");
//     }
// })
 
function getCityData(url) {
    http.get(url, function (res) {//通过上面传过来的url来获取该天气信息的数据
        var jsonData = '';
 
        res.on("data", function (data) {
            jsonData += data.toString('utf8');//保存天气信息的数据
        })
        res.on("end", function () {
            jsonData = JSON.parse(jsonData);//因为获取到的天气信息数据是JSON格式的，通过JSON.parse函数进行解析，得到一个对象
            //输出天气的信息
            console.log("城市:" + jsonData.cityInfo.city);
            console.log("湿度:" + jsonData.data.shidu);
            console.log("pm2.5:" + jsonData.data.pm25);
           
        })
    })
}


getCityData("http://t.weather.sojson.com/api/weather/city/101090108")

