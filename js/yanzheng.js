/**
 * Created by Administrator on 2016/4/20.
 */
function ontips(arr){
    document.getElementsByName("tips")[arr].style.display='block';
}
function outtips(arr){
    document.getElementsByName("tips")[arr].style.display='none';
}
function btn(){
    var lab=document.getElementById("lab");
    var username=document.getElementById("username").value;
    var name=document.getElementById("name").value;
    var password=document.getElementById("password").value;
    var txt=document.getElementById("txt").value;
    var demo22=document.getElementById("config-demo22").value;
    var select2=document.getElementById("select2").value;
    if(username==""||name == ""||password == ""||select2=="") {}
    else {
        var labin="注册成功！内容如下："+"\n账号："+username+"\n名称："+name+"\n密码:"+password+"\n备注:"+txt+"\n时间："+demo22+"\n类型："+select2;
        lab.innerHTML="注册成功！内容如下："+"<br>账号："+username+"<br> 名称："+name+"<br>密码:"+password+"<br>备注:"+txt+"<br>时间："+demo22+"<br>类型："+select2;
        alert(labin);
    }}


