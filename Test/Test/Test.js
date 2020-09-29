function ShowUserName()
{
    var UserName=document.getElementById("UserName").value;
    document.getElementById("UName").innerHTML=UserName;
}
var score = 10;
function GetScore()
{
    if (Test.t1[1].checked) 
    {
        score += 10;
    }
    if (Test.t2[1].checked) 
    {
        score += 10;
    }
    if (Test.t3[2].checked) 
    {
        score += 10;
    }
    if (Test.t4[1].checked) 
    {
        score += 10;
    }
    if (Test.t4[3].checked) 
    {
        score += 10;
    }
    if (Test.t5[0].checked) 
    {
        score += 10;
    }
    if (Test.t5[3].checked) 
    {
        score += 10;
    }
    if (Test.t6[0].checked) 
    {
        score += 10;
    }
    if (Test.t6[2].checked) 
    {
        score += 10;
    }
return score;
}
function ShowScore()
{
    document.getElementById("Score").innerHTML=GetScore();
    alert("您的得分是："+score);
}
function ShowAnswer()
{
    document.getElementById("Answer").innerHTML="answer:<br>1、B<br>2、B<br>3、C<br>4、BD<br>5、AD<br>6、AC<br>"
}


var hour,minute,second;//时 分 秒
hour=minute=second=0;//初始化
var millisecond=0;//毫秒
var int;
function Reset()//重置
{
    window.clearInterval(int);
    millisecond=hour=minute=second=0;
    document.getElementById('timetext').value='00时00分00秒000毫秒';
}
function start()//开始
{
    int=setInterval(timer,50);
}
function timer()//计时
{
    millisecond=millisecond+50;
    if(millisecond>=1000)
    {
        millisecond=0;
        second=second+1;
    }
    if(second>=60)
    {
        second=0;
        minute=minute+1;
    }
    if(minute>=60)
    {
        minute=0;
        hour=hour+1;
    }
    document.getElementById('timetext').value=hour+'时'+minute+'分'+second+'秒'+millisecond+'毫秒';

}
function stop()//暂停
{
    window.clearInterval(int);
}


// function myFunction(){
//     var x;
//     var person=prompt("请输入你的名字","吴梦瑜");
   
//         x="Welcome" + person + "加油哦";
//         document.getElementById("demo").innerHTML=x;
// }


function CurrentDate()
{
    var d = new Date();
    var year = d.getFullYear() + "年";
    var month = d.getMonth() + 1;
    if(month < 10) month = "0" + month;
    month += "月";
    var date = d.getDate();
    if(date < 10) date = "0" + date;
    date += "日";
    var hour = d.getHours();
    if(hour <= 12) nowtime.innerHTML = "Good Morning!<br/>";
    else if(hour <= 18) nowtime.innerHTML = "Good Afternoon!<br/>";
    else nowtime.innerHTML = "Good Evening!<br/>";
    if(hour < 10) hour = "0" + hour;
    hour += ":";
    var minute = d.getMinutes();
    if(minute < 10) minute = "0" + minute;
    minute += ":";
    var second = d.getSeconds();
    if(second < 10) second = "0" + second;
    nowtime.innerHTML += "当前时间：" + year + month + date + hour + minute + second;
    setTimeout("CurrentDate()", 1000);
    return "";
}
