var counter=document.getElementById("counter");
var list=document.getElementById("list");
var pre=document.getElementById("pre");
var next=document.getElementById("next");
var timer;   //定时器参数

//html与js结合式书写 : 变量名.style.left=数值
var nextlist=parseInt(list.style.left);//接收偏移量的值
//偏移量的改变
function animals(offset){
	var newlist=parseInt(list.style.left)+offset;//定义参数随时传递新的偏移量值
	list.style.left=newlist+'px';//偏移量需要单位‘像素px’，否则计算机识别不出，图片将不会移动位置
	//到达最后一张时，点击右耳朵则返回到第一张
	if(newlist<-3001){
		list.style.left=0+'px';
		list.setAttribute('class','list');
	}
	//在第一张时，点左耳朵则返回到最后一张
	if(newlist>0){
		list.style.left=-3000+'px';
		list.setAttribute('class','list');
	}
}
// 点击左右耳朵触发函数
pre.onclick=function(){
	animals(600)  //点击左边耳朵，图片往左移一张，偏移量减600
}
next.onclick=function(){
	animals(-600)   //点击右边耳朵，图片往右移一张，偏移量加600
}
// 开始定时器
function start(){
	timer=setInterval(function(){
		next.onclick()
		},2000);
}
start();
// 关闭定时器
function stop(){
	clearInterval(timer);
}
// 鼠标移出时,开始定时器
counter.onmouseleave=start;
// 鼠标移入时,关闭定时器
counter.onmouseenter=stop;
