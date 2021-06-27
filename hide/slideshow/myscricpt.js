
var counter=document.getElementById("counter");
var list=document.getElementById("list");
var pre=document.getElementById("pre");
var next=document.getElementById("next");
var timer;   //定时器参数
//找到list盒子的left，用于边界判断
var listNext=parseInt(list.style.left);
//构建偏移函数按animates,用于图片的偏移，实现轮播效果
function animates(offset)
{
    var newoffset= parseInt(list.style.left)+offset;
   //左移超过界限，回到最后一张图片
    if(newoffset>0){
        newoffset=newoffset-3600;
    }
    //使用模运算实现循环播放
    newoffset = newoffset % 3600;
    //实现图片位移效果
    list.style.left=newoffset +"px";

}
next.onclick=function(){
    animates(-600);
}
pre.onclick=function(){
    animates(600);
}
//定时器使实现，单次用settimeout,连续用setinterval,关闭加claer即可
function start(){
    timer=setInterval(function(){
        next.onclick();
    },1500);

}
//开始定时轮播，默认开始轮播，否则只能鼠标离开counter时开始轮播
start();
function stop(){
    clearInterval(timer)
}
//在盒子counter上实现停止和开始轮播
counter.onmouseenter=stop;
counter.onmouseleave=start;

