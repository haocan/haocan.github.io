window.onload = function(){
	//console.log(img)
	var vedio = document.getElementById('vedio-list');
	var menu = document.getElementById('menu');
	var winWidth,
	winHeight;
	if( window.innerWidth ){
		winWidth = window.innerWidth;
	} else if( (document.body) && (document.body.clientWidth) ){
		winWidth = document.body.clientWidth;
	}
	if( window.innerHeight ){
		winHeight = window.innerHeight;
	} else if( (document.body) && (document.body.clientHeight) ){
		winHeight = document.body.clientHeight;
	}
	var box = document.getElementById('box');
	box.style.width = winWidth + 'px';
	box.style.height = winHeight + 'px';
	
	/*var w = winWidth - menu.offsetWidth;
	vedio.style.width = w + 'px';*/
	var ul = document.getElementById('vedio');
	var Li = ul.getElementsByTagName('li');
	var liWidth =parseInt(( vedio.clientWidth - 10)/3);
	var liHeight =parseInt(( vedio.clientHeight)/3);
	var num=0;
	$(window).resize(function() {
		location.reload(); 
	    var width = $(this).width();
	    var height = $(this).height();
	    var w = width - menu.offsetWidth;
		vedio.style.width = w + 'px';
		vedio.style.height = height + 'px';
	});
	
	var img = document.querySelectorAll('h1 img');
	setInterval(function(){
		mTween(img[0],'top',-10,200,'linear',function(){
			img[0].style.top = 0;
		});
	},1000)
	var vedioArr = ['XNDQxNTEwMjU2','XNDU5MDMxOTQw','XNDU5NDk5MDI0','XNDU5OTQ3MTQw','XNDYwNzc4MTY4','XNDY1NDgwMjM2','XNDQxNTEwMjU2','XNDU5MDMxOTQw','XNDU5NDk5MDI0','XNDU5OTQ3MTQw','XNDQxNTEwMjU2','XNDU5MDMxOTQw'];
	//menu的效果
	var nav = document.getElementById('nav');
	var lis = nav.getElementsByTagName('li');
	var as = nav.getElementsByTagName('a');
	var span = nav.getElementsByTagName('span');
	var course = document.getElementsByClassName('course');
	for(let i = 0;i<lis.length;i++){
		//移入li，他的子级发生的变化
		lis[i].onmouseover = function(){
			//判断如果它的第三个孩子存在，就是说li下还有ul就展开
			if(this.children[3]){
				//ul的宽逐渐变宽
				mTween(this.children[3],'width',210,700,'linear');
			}
			//延时的是字体的透明度
			setTimeout(function(){
				as[i].style.opacity = 1;
			},200)
			//span的宽是运动的
			mTween(span[i],'width',210,400,'linear');
		};
		lis[i].onmouseout = function(){
			//判断如果它的第三个孩子存在，就是说li下还有ul就隐藏
			if(this.children[3]){
				//ul的宽逐渐变0
				mTween(this.children[3],'width',0,200,'linear');
			}
			//延时消失透明度
			setTimeout(function(){
				as[i].style.opacity = .5;
			},200)
			//运动span的宽变成0
			mTween(span[i],'width',0,400,'linear');
		};
	};
	//歌曲数组
	var audArr=['Faydee - Legendary','Jay Brannan','Michael Learns To Rock'];
	
		var audNum=0;
		var audOnOff=true;
		$('#music p')[0].innerHTML=audArr[audNum];
		//点击播放上一首音频
		$('#music input')[0].onclick=function () {
			//点击上一首歌曲时全局开关重新打开
			audOnOff=true;
			audNum--;
			if (audNum<0) {
				audNum=audArr.length-1;
			}
			//切换歌曲后让播放歌曲按钮重新执行
			$('#music input')[1].onclick();
		}
		//点击播放下一首音频
		$('#music input')[3].onclick=function () {
			//点击下一首歌曲时全局开关重新打开
			audOnOff=true;
			audNum++;
			if (audNum>audArr.length-1) {
				audNum=0;
			}
			//切换歌曲后让播放歌曲按钮重新执行
			$('#music input')[1].onclick();
		}
		//点击播放音频
		$('#music input')[1].onclick=function () {
			//没有暂停情况下重新创建音频文件，暂停的情况下直接打开原文件继续播放
			if (audOnOff) {
				creatAudio (audNum);
			}
			$('#music audio')[0].play();
		}
		//点击暂停音频
		$('#music input')[2].onclick=function () {
			//全局开关关闭
			audOnOff=false;
			$('#music audio')[0].pause(); 
		}
		//创建音频标签
		function creatAudio(num) {
			var aud=document.createElement('audio');
			var sou=document.createElement('source');
			$('#music p')[0].innerHTML=audArr[num];
			sou.src='audio/'+audArr[num]+'.mp3';
			sou.type='audio/mpeg';
			aud.appendChild(sou);
			$('#music .box').eq(0).empty().append(aud);
		}
	//小图标的移入
	attendtion();
	function attendtion(){
		var ul = document.getElementById('attention')
		var lis = ul.getElementsByTagName('li');
		var span = ul.getElementsByTagName('span');
		for(var i = 0;i<lis.length;i++){
			lis[i].index = i;
			lis[i].onmouseover = function(){
				span[this.index].style.display = "block";
			};
		
		}
	};
	var arrImg = [[1,10,94,93,92,91,89,88,9,87,8,75],[73,72,7,60,6,59,58,57,56,55,54,53,52],
		[3,30,31,32,33,34,35,36,37,38,39,4],[40,41,42,43,4,45,46,47,48,49,5,50,51],
		[28,29,27,26,25,24,23,22,21,20,2,19],[18,17,16,15,14,13,126,125,124,123,122,121,120],
		[12,119,118,117,116,115,11,113,112,111,11,109],[108,107,106,105,104,103,102,101,100,1,11,109]
	];
	var arrList = [
	['XHTML+CSS2整站视频教程-1','XHTML+CSS2整站视频教程-2','XHTML+CSS2整站视频教程-3','XHTML+CSS2整站视频教程-4','XHTML+CSS2整站视频教程-5','XHTML+CSS2整站视频教程-6','9种焦点图拓展-上','9种焦点图拓展-下','瀑布流效果的实现-1','瀑布流效果的实现-2','瀑布流效果的实现-3','瀑布流效果的实现-4'],
	['9种焦点图拓展-下','瀑布流效果的实现-1','瀑布流效果的实现-2','瀑布流效果的实现-3','瀑布流效果的实现-4','原生JS编写小蜜蜂游戏-1','原生JS编写小蜜蜂游戏-2','原生JS编写小蜜蜂游戏-3','jQuery编写推箱子游戏-1','Query编写推箱子游戏-2','Query编写推箱子游戏-3','Query编写推箱子游戏-4'],
	['妙味课堂原首页经典弹窗效果-1','妙味课堂原首页经典弹窗效果-2','妙味课堂原首页经典弹窗效果-3','妙味课堂原首页经典弹窗效果-4','妙味课堂原首页经典弹窗效果-5','XHTML+CSS2整站视频教程-6','JS模块化开发-1','JS模块化开发-2','JS模块化开发-3','JS模块化开发-4','css3实现3D旋转轮播图-1','css3实现3D旋转轮播图-2'],
	['css3实现3D旋转轮播图-3','css3实现3D旋转轮播图-4','css3实现3D翻转焦点图-1','css3实现3D翻转焦点图-2','css3实现3D翻转焦点图-3','HTML5拖拽购物车-1','HTML5拖拽购物车-2','HTML5拖拽购物车-3','HTML5拖拽购物车-4','HTML实现祖玛小游戏-1','HTML实现祖玛小游戏-2','HTML实现祖玛小游戏-3'],
	['HTML5实现地理信息与本地存储-1','HTML5实现地理信息与本地存储-2','HTML5实现地理信息与本地存储-3','HTML5实现地理信息与本地存储-4','HTML5实现地理信息与本地存储-5','HTML5打造自定义播放器-1','HTML5打造自定义播放器-2','HTML5打造自定义播放器-3','HTML5打造自定义播放器-4','百叶窗效果','原韩雪冬官网图片切换','自适应屏幕宽度的轮播图'],
	['JS实现的分页效果','JS实现的网页进度条','联动日历-1','联动日历-2','联动日历-3','联动下拉菜单','延迟菜单','多图片无缝切换','选中文字分享效果','微博登录suggest','微博发布框效果','瀑布流布局实例'],
	['jQuery原创视频教程-1','jQuery原创视频教程-2','jQuery原创视频教程-3','DOM优化','快速排序','函数声明与表达式','操作iframe','枚举算法','事件委托','闭包','对象引用','JS中的跨域'],
	['firebug工具使用','MVC系列-初探backbone-1','MVC系列-初探backbone-2','MVC系列-初探backbone-3','MVC系列-初探backbone-4','MVC系列-初探backbone-5','HTML-canvas基础-1','HTML-canvas基础-2','HTML-canvas基础-3','HTML-canvas基础-4','HTML-canvas基础-5','HTML历史管理']
	
	];
	//自动生成vedio列表的图片
	var m = 0;
	
	var loader = document.getElementById('loader');
	setTimeout(function(){
		loader.style.display = "none";
		vedioImg(m);
	},1000)
	function vedioImg(n){
		var ul = document.getElementById('vedio');
		var str = "";
		for(var i = 0;i<arrImg[0].length;i++){
			str += '<li><div class="info"><strong></strong><h2>'+arrList[n][i]+'</h2><span></span></div><img src="image/'+arrImg[n][i]+'.jpg"/></li>';
		}
		//console.log(arrList.length)
		ul.innerHTML = str;
		var Li = ul.getElementsByTagName('li');
		var div = ul.getElementsByTagName('div');
		//console.log(Li.length)
		for(var i=0;i<Li.length;i++){
			if(i%3==0){
				if(i!=0){
					num++;
				}
			}
		Li[i].style.width= liWidth + 'px';
		//console.log(liWidth)
		Li[i].style.height= liHeight + 'px';
		Li[i].style.left=(i%3)*liWidth + 'px';
		Li[i].style.top= num * liHeight + 'px';
		//console.log(num)
	};
	//切换图片时是一张一张切换的
	function cut(m){
		var num = -1;
		var ul = document.getElementById('vedio');
		var Li = ul.getElementsByTagName('li');
		var img = ul.getElementsByTagName('img');
		var timer = setInterval(function(){
			setTimeout(function(){
				num++;
				//console.log(num)
				if(num == Li.length){
					clearInterval(timer);
					return;
				}
				setTimeout(function(){
					img[num].src = 'image/'+arrImg[m][num]+'.jpg';
					img[num].style.opacity = 1;
				},90)
				img[num].src = "";
				img[num].style.opacity = 0;
			},90)
		},200)
	};
	//视频效果的js效果
	//var vedioArr = ['XNDQxNTEwMjU2','XNDU5MDMxOTQw','XNDU5NDk5MDI0','XNDU5OTQ3MTQw','XNDYwNzc4MTY4','XNDY1NDgwMjM2','XNDQxNTEwMjU2','XNDU5MDMxOTQw','XNDU5NDk5MDI0','XNDU5OTQ3MTQw','XNDQxNTEwMjU2','XNDU5MDMxOTQw']
	
	 vedioclick();
	vedio(m);
	function vedio(n){
		var vedio = document.getElementById('vedio');
		var lis = vedio.getElementsByTagName('li');
		var wrap = document.getElementById('vedio-wrap');
		var bg = document.getElementById('vedio-bg');
		var flash = document.getElementsByClassName('flash')[0];
		var btn = document.getElementsByClassName('close-btn')[0];
		var content = document.getElementsByClassName('info-content')[0];
		var h2s = content.getElementsByTagName('h2');
		//console.log(arrList[0].length)
		for(var i = 0;i<arrList[0].length;i++){
			lis[i].index = i;
			lis[i].onclick = function(){
				wrap.style.display = "block";
				bg.style.display = "block";
				h2s[0].innerHTML = arrList[n][this.index];
				embed(this.index);	
			};
		}
		btn.onclick = function(){
			wrap.style.display = "none";
			bg.style.display = "none";
			flash.innerHTML = "";
		};
	};
	menuVedio(m)
	function menuVedio(n){
		var course = document.getElementsByClassName('.course');
		var liMenu = document.querySelectorAll('.course li a');
		var wrap = document.getElementById('vedio-wrap');
		var bg = document.getElementById('vedio-bg');
		var flash = document.getElementsByClassName('flash')[0];
		var btn = document.getElementsByClassName('close-btn')[0];
		var content = document.getElementsByClassName('info-content')[0];
		var h2s = content.getElementsByTagName('h2');
		//console.log(arrList[0].length)
		for(var i = 0;i<liMenu.length;i++){
			
			liMenu[i].index = i;
			liMenu[i].onclick = function(){
				this.offsetParent.offsetParent.style.width = 0;
				n++;
				n%=vedioArr.length;
				/*m%=arrList[0].length;*/
				wrap.style.display = "block";
				bg.style.display = "block";
				h2s[0].innerHTML = this.innerHTML;
				embed(this.index);	
			};
		}
		btn.onclick = function(){
			wrap.style.display = "none";
			bg.style.display = "none";
			flash.innerHTML = "";
		};
	};
	//创建视频对象
	function embed(n){	
    	$('<embed allowFullScreen="true" id="embedid"  quality="high" width="620" height="500"  type="application/x-shockwave-flash" src="http://player.youku.com/player.php/sid/'+vedioArr[n]+'/v.swf"></embed>').appendTo('.flash');
	};
	//滚轮的控制
	bar();
	function bar(){
		var bar = document.getElementById('bar');
		var vedio = document.getElementById('vedio-list');
		var v= document.getElementById('vedio');
		var a = bar.children[0];
		var t;
		var b;
		
		//滚轮移出的最大范围
		var maxY = vedio.clientHeight - a.offsetHeight;
		//内容的最大范围
		var innerMax = vedio.clientHeight - v.scrollHeight;
		//console.log(innerMax)// -241
		//按下滚轮开始移动
		a.onmousedown = function(ev){
			var disy = ev.clientY - getPos(this).top;
			//console.log(disy)
			document.onmousemove = function(ev){
				var y = ev.clientY - disy;
				//判断移动的范围
				if(y<0){
					y = 0;
				}
				if(y>maxY){
					y = maxY;
				}
				a.style.top = y+'px';
				//比例，求出比例然后赋值给ul的top值
				var scale = y/maxY;
				v.style.top = scale*innerMax+'px';
				//阻止默认行为
				return false;
			};
			document.onmouseup = function(){
				//抬起的时候清空移入和抬起事件
				this.onmousemove = this.onmouseup = null;
				//阻止默认行为
				return false;
			}
		};
		//获取该对象的top，left，right，bottom值
		function getPos(obj){
			return obj.getBoundingClientRect();
		};
		mScroll(document,function(ev){
			//往上滑
			t = a.offsetTop;
			//console.log(a)
			//限制范围
			if(t<0){
				return;
			}
			var scale = t/maxY;
			a.style.top = t-10+'px';
			//内容的top值变化
			v.style.top = scale*innerMax+'px';
		},function(ev){
			//往下滑
		   b = a.offsetTop;
		   //限制范围
		   if(b>maxY){
		    	return;
		   }
		   var scale = b/maxY;
		   //累计加值
		   a.style.top = b+10+'px';
		   v.style.top = scale*innerMax+'px';
			//console.log(b)
		})
		//滚轮滑动事件，封装个函数，firefox和chrome不一样
		function mScroll(obj,uper,down){
			//firefox必须要用addEventListener(),绑定
			obj.addEventListener('DOMMouseScroll',fn,false);
			//谷歌和ie用的事件
			obj.onmousewheel = fn;
			function fn(ev){
				var n;//n是个正数
				if(ev.detail){
					//条件成立，就是说明正数代表向下，负数代表向上；
					n = -ev.detail;
				}else{
					//条件成立，就是说明正数代表向上，负数代表向下；
					n = ev.wheelDelta;
				}
				if(n<0){
					down();
				}else{
					uper();
				}
			}
		};
	};
	//移入列表中的每个li，对应的div显示
	move();
	function move(){
		//获取到所有的li，加两个事件，一个移出，一个移入
		$('#vedio li').bind("mouseenter mouseleave",function(e){
			//console.log(1)
			//console.log($(this).index())
			var that = $(this);
			var w = that.width();
			//console.log(w);
			var h = that.height();
			//判断方向的
			var x = (e.pageX - that.offset().left - (w / 2)) * (w > h ? (h / w) : 1);
			var y = (e.pageY - that.offset().top - (h / 2)) * (h > w ? (w / h) : 1);
			//是个数组，分别代表的'上方','右侧','下方','左侧'
			var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
			//console.log(direction)  
			//'上方','右侧','下方','左侧'
			if(e.type == 'mouseenter'){
				//移入事件时触发
				switch(direction){
					//0是上方，初始值为负值，上移的时回到0
					case 0:
					that.find('div').css({
						top:-h,
						left:0
					}).stop().animate({top:0},300,'linear');
					break;
					//1是右方，初始值为正值，上移的时回到0
					case 1:
					that.find('div').css({
						top:0,
						left:w
					}).stop().animate({left:0},300,'linear')
					break;
					//2是下方，初始值为正值，上移的时回到0
					case 2:
					that.find('div').css({
						top:h,
						left:0
					}).stop().animate({top:0},300, 'linear')
					break;
					//3是左方，初始值为负值，上移的时回到0
					case 3:
					that.find('div').css({
						top:0,
						left:-w
					}).stop().animate({left:0},300, 'linear')
					break;
				}
			}else{
				//移出事件时触发的，让他都回到0
				switch(direction){
					case 0:
					that.find('div').css({
						top:0,
						left:0
					}).stop().animate({top:-h},200,'linear');
					break;
					case 1:
					that.find('div').css({
						top:0,
						left:0
					}).stop().animate({left:w},200,'linear')
					break;
					case 2:
					that.find('div').css({
						top:0,
						left:0
					}).stop().animate({top:h},200, 'linear')
					break;
					case 3:
					that.find('div').css({
						top:0,
						left:0
					}).stop().animate({left:-w},200, 'linear')
					break;
				}
			}
		});	
	};
	
	//点击切换vedio列表图片事件
	function vedioclick(){
		var ul = document.getElementById('vedio');
		var Li = ul.getElementsByTagName('li');
		var prev = document.getElementById('prev');
		var next = document.getElementById('next');
		next.onclick = function(){
			m++;
			m%=arrImg.length;
			cut(m);
			vedio(m);
			move();
		};
		prev.onclick = function(){
			m--;
			if(m<0){
				m = arrImg.length-1;
			}
			cut(m);
			move();
			vedio(m);
		};
	}
}
}