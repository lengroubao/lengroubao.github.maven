/**
 * Created by Administrator on 2016/4/20.
 */
//qita.HTML

window.onload=function(){
        document.getElementById("buttonsc").onclick=function()
        {
            var uname=document.getElementById("username2").value;
            if(uname=="")
            {}
            else{
                var lab="账号："+uname+" 删除成功";
                alert(lab);
            }
        }};

window.onload=function(){
    document.getElementById("button3").onclick=function()
    {
        var uname=document.getElementById("username3").value;
        var sex = document.getElementsByName("radio");
        var a;
        for(var i=0;i<sex.length;i++){
            if(sex[i].checked==true){
                a=sex[i].value;
            }
        }
        if(uname=="")
        {}
        else{
            var lab="账号："+uname+a+"成功";
            alert(lab);
        }
    }};


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
    var select2=document.getElementById("select2").value;


    if(name=="")
      name="未修改";
    if(password=="")
        password="未修改";
    if(txt=="")
        txt="未修改";
    if(select2=="")
        select2="未修改";
    if(username=="") { }
    else {
        var labin="账号："+username+"修改成功！\n修改内容如下"+"\n名称："+name+"\n密码:"+password+"\n备注:"+txt+"\n类型："+select2;
        alert("10");
        lab.innerHTML="账号："+username+"修改成功！<br>修改内容如下："+"<br> 名称："+name+"<br>密码:"+password+"<br>备注:"+txt+"<br>类型："+select2;
        alert(labin);
    }}