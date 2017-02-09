/**
 * Created by Administrator on 2016/10/30 0030.
 */

//关闭广告栏
var sclose = document.getElementById("sclose");
var lclose = document.getElementById("lclose");
lclose.onclick = function () {
    //sclose.className = "hide";
    sclose.style.display="none";
    return false;//阻止a跳转到新页面
}
//显示商品分类
var open = document.getElementById("open");
var cate = document.getElementById("cate");
open.onmouseover = function () {
    cate.style.display = "block";
}
open.onmouseout = function () {
    cate.style.display = "none";
}
//搜索框
var txt = document.getElementById("txt");
var empty = true;
txt.onfocus = function () {
    if (empty) {
        txt.value = "";
        txt.style.color = "#333";
        empty = true;
    }
}
txt.onblur = function () {
    if (txt.value === "") {
        txt.value = "儿童手表";
        txt.style.color = "#ccc";
        empty = true;
    } else {
        empty = false;
    }
}

//话费
var ul = document.getElementById("sprite");
var icons = ul.getElementsByTagName("i");
for (var i = 0; i < icons.length; i++) {
    icons[i].style.background = "url(img/lifserv.png) 0px " + (-25 * i) + "px no-repeat";
}

//小圆点切换
var circle=document.getElementById("circle");
var simg=document.getElementById("s-img");
var lis=circle.children;
for(var i=0;i<lis.length;i++){
    lis[i].index=i;
    //simgs.style.src="";
    lis[i].onmouseover=function(){
        //干掉所有
        for(var i=0;i<lis.length;i++){
            lis[i].className="";
        }
        //留下自己
        var idx=this.index;
        this.className="current";
        simg.src="img/promotion"+(idx+1)+".jpg";
    }
}

    //点击箭头 切换图片的简单轮播图
    var gl=document.getElementById("arrow-l");
    var gr=document.getElementById("arrow-r");
    var num;
//左箭头触发事件
    gl.onclick=function(){
        //得到当前圆点的索引号
        for(var i=0;i<lis.length;i++){
            if(lis[i].className==="current"){
                num=i;
            }
        }
        num--;
        for(var i=0;i<lis.length;i++){
            lis[i].className="";
        }
        //留下圆点自己
        if(num>=0&&num<=5){
            lis[num].className="current";
            simg.src="img/promotion"+(num+1)+".jpg";
        }else{
            num=5;
            lis[5].className="current";
            simg.src="img/promotion6.jpg";
        }
    }
//右箭头触发事件
    gr.onclick=function(){
        //得到当前圆点的索引号
        for(var i=0;i<lis.length;i++){
            if(lis[i].className==="current"){
                num=i;
            }
        }
        num++;
        for(var i=0;i<lis.length;i++){
            lis[i].className="";
        }
        //留下圆点自己
        if(num>=0&&num<=5){
            lis[num].className="current";
            simg.src="img/promotion"+(num+1)+".jpg";
        }else{
            num=0;
            lis[0].className="current";
            simg.src="img/promotion1.jpg";
        }
    }