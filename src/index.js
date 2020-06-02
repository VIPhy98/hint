//构造函数
function Spring(obj){
	this.content=null;//内容为空
	this.mouseX=0;//鼠标X轴
	this.mouseY=0;//鼠标Y轴
	this.posX=0;//弹框X轴
	this.posY=0;//弹框Y轴
	this.isDrag=false;//默认不可以拖动
	this.maxWidth=document.documentElement.clientWidth;//窗口宽
	this.maxHeight=document.documentElement.clientHeight;//窗口高
	this.obj={//自定义属性
		width:obj._w,//宽
		height:obj._h,//高
		title:obj._title,//标题
		con:obj._con,//内容
		color:obj.color,//字体颜色
		bgcolor:obj._bgcolor,//背景颜色
	};
	this.addChild();//生成div
	this.move();//移动
	this.delete();//删除
}

//生成DOM节点
Spring.prototype.addChild=function(){
	this.hy=document.createElement("div");//创建div
	this.hy.className="content";//设置class
	this.hy.style.width=this.obj.width+"px";//设置宽
	this.hy.style.height=this.obj.height+"px";//设置高
	this.hy.style.color=this.obj.color;//设置字体颜色
	this.hy.style.background=this.obj.bgcolor;//设置背景颜色
	this.hy.style.left=(this.maxWidth-this.obj.width)/2+"px";
	this.hy.style.top=(this.maxHeight-this.obj.height)/2+"px";
	this.hy.innerHTML="<i id='del'>X</i><div class='header'>"+this.obj.title+"</div><div class='con'>"+this.obj.con+"</div><div class='footer'><input id='left' type='button' value='否'><input id='right' type='button' value='是'></div>";//内容
	
	document.body.appendChild(this.hy);//上树
}

//移动div时
Spring.prototype.move=function(){
	var that=this;//备份
	
	//鼠标按下时
	this.hy.onmousedown=function(event){
		//console.log("按下鼠标");
		var event=event || window.event;
	
		that.mouseX=event.pageX;//点击鼠标时的X轴
		that.mouseY=event.pageY;//点击鼠标时的Y轴
		that.posX=that.hy.offsetLeft;//获取X轴
		that.posY=that.hy.offsetTop;//获取Y轴
		
		that.isDrag=true;//可以拖动
	}
	
	//鼠标按下并移动时
	this.hy.onmousemove=function(event){
		//console.log("按下鼠标并开始移动");
		var event=event || window.event;
		
		var x=event.pageX;//移动时的x坐标
		var y=event.pageY;//移动时的y坐标
		
		//判断是否移动
		if(that.isDrag){
			var xx=that.posX+x-that.mouseX;//移动后的left
			var yy=that.posY+y-that.mouseY;//移动后的top
			
			that.hy.style.left=xx+"px";//X轴
			that.hy.style.top=yy+"px";//Y轴
		} 
	}
	
	//当鼠标离开时
	this.hy.onmouseup=function(){
		//console.log("鼠标离开");
		that.isDrag=false;//禁止移动
	}
}

//删除div
Spring.prototype.delete=function(){
	var btn=document.getElementById("btn");//点击按钮
	var that=this;
	//点击X
	del.onclick=function(){
		document.body.removeChild(that.hy);//删除wrap
		btn.style.display="block";//显示按钮
	}
	//点击取消
	left.onclick=function(){
		document.body.removeChild(that.hy);//删除wrap
		btn.style.display="block";//显示按钮
	}
	//点击确认
	right.onclick=function(){
		document.body.removeChild(that.hy);//删除wrap
		btn.style.display="block";//显示按钮
	}
}