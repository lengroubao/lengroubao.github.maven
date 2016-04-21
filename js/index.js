/**
 * Created by Administrator on 2016/4/20.
 */
window.onload=function(){
        var onld =document.getElementById("onld");
        lod(70);
        var times=null;
        function lod(top){
            clearInterval(times);
            var onld =document.getElementById("onld");
            times=setInterval(function(){
                var speen=(top-onld.offsetTop)/20;
                speen=speen>0?Math.ceil(speen):Math.floor(speen);
                if(onld.offsetTop==top)
                {
                    clearInterval(times);
                }else {
                    onld.style.top=onld.offsetTop+speen+'px';
                }
            },50)

            document.getElementById("btnindex").onclick=function(){

                var name= document.getElementById("inputEmail").value;
                var pass= document.getElementById("inputPassword").value;
                if(name==""||pass==""){ return;}
                else {
                if(name=="admin"&&pass=="123"){

                    window.open("Frameset-1.html","_selft");
                }else {alert("用户名或密码错误！！！")}
            }
        }}}