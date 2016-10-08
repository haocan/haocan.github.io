window.onload = function(){
	//menu的效果
	var nav = document.getElementById('nav');
	var lis = nav.getElementsByTagName('li');
	var as = nav.getElementsByTagName('a');
	var span = nav.getElementsByTagName('span');
	var course = document.getElementsByClassName('course');
	var a = document.getElementById('menu-hider');
	
	//最大值
	var innerMax;
	for(let i = 0;i<lis.length;i++){
		//移入li，他的子级发生的变化
		lis[i].onmouseover = function(){
			//判断如果它的第三个孩子存在，就是说li下还有ul就展开
			if(this.children[3]){
				//ul的宽逐渐变宽
				mTween(this.children[3],'width',210,200,'linear');
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
	}
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
		//点击播放音频
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
			lis[i].onmouseout = function(){
				span[this.index].style.display = "none";
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
	['XHTML+CSS2整站视频教程-1','XHTML+CSS2整站视频教程-2','XHTML+CSS2整站视频教程-3','XHTML+CSS2整站视频教程-4','XHTML+CSS2整站视频教程-5','XHTML+CSS2整站视频教程-6','9种焦点图拓展-上','9种焦点图拓展-下','瀑布流效果的实现-1','瀑布流效果的实现-2','瀑布流效果的实现-3','瀑布流效果的实现-4'],
	['XHTML+CSS2整站视频教程-1','XHTML+CSS2整站视频教程-2','XHTML+CSS2整站视频教程-3','XHTML+CSS2整站视频教程-4','XHTML+CSS2整站视频教程-5','XHTML+CSS2整站视频教程-6','9种焦点图拓展-上','9种焦点图拓展-下','瀑布流效果的实现-1','瀑布流效果的实现-2','瀑布流效果的实现-3','瀑布流效果的实现-4'],
	['XHTML+CSS2整站视频教程-1','XHTML+CSS2整站视频教程-2','XHTML+CSS2整站视频教程-3','XHTML+CSS2整站视频教程-4','XHTML+CSS2整站视频教程-5','XHTML+CSS2整站视频教程-6','9种焦点图拓展-上','9种焦点图拓展-下','瀑布流效果的实现-1','瀑布流效果的实现-2','瀑布流效果的实现-3','瀑布流效果的实现-4'],
	['XHTML+CSS2整站视频教程-1','XHTML+CSS2整站视频教程-2','XHTML+CSS2整站视频教程-3','XHTML+CSS2整站视频教程-4','XHTML+CSS2整站视频教程-5','XHTML+CSS2整站视频教程-6','9种焦点图拓展-上','9种焦点图拓展-下','瀑布流效果的实现-1','瀑布流效果的实现-2','瀑布流效果的实现-3','瀑布流效果的实现-4'],
	['XHTML+CSS2整站视频教程-1','XHTML+CSS2整站视频教程-2','XHTML+CSS2整站视频教程-3','XHTML+CSS2整站视频教程-4','XHTML+CSS2整站视频教程-5','XHTML+CSS2整站视频教程-6','9种焦点图拓展-上','9种焦点图拓展-下','瀑布流效果的实现-1','瀑布流效果的实现-2','瀑布流效果的实现-3','瀑布流效果的实现-4'],
	['XHTML+CSS2整站视频教程-1','XHTML+CSS2整站视频教程-2','XHTML+CSS2整站视频教程-3','XHTML+CSS2整站视频教程-4','XHTML+CSS2整站视频教程-5','XHTML+CSS2整站视频教程-6','9种焦点图拓展-上','9种焦点图拓展-下','瀑布流效果的实现-1','瀑布流效果的实现-2','瀑布流效果的实现-3','瀑布流效果的实现-4'],
	['XHTML+CSS2整站视频教程-1','XHTML+CSS2整站视频教程-2','XHTML+CSS2整站视频教程-3','XHTML+CSS2整站视频教程-4','XHTML+CSS2整站视频教程-5','XHTML+CSS2整站视频教程-6','9种焦点图拓展-上','9种焦点图拓展-下','瀑布流效果的实现-1','瀑布流效果的实现-2','瀑布流效果的实现-3','瀑布流效果的实现-4']
	
	];
	//自动生成vedio列表的图片
	var m = 0;
	vedioImg(m);
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
		
	}
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
				img[num].src = "";
				img[num].style.opacity = 0;
				setTimeout(function(){
					img[num].src = 'image/'+arrImg[m][num]+'.jpg';
					img[num].style.opacity = 1;
				},60)
			},30)
		},90)
	}
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
		//console.log(innerMax) -241
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
	move()
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
					}).animate({top:0},300,'linear');
					break;
					//1是右方，初始值为正值，上移的时回到0
					case 1:
					that.find('div').css({
						top:0,
						left:w
					}).animate({left:0},300,'linear')
					break;
					//2是下方，初始值为正值，上移的时回到0
					case 2:
					that.find('div').css({
						top:h,
						left:0
					}).animate({top:0},300, 'linear')
					break;
					//3是左方，初始值为负值，上移的时回到0
					case 3:
					that.find('div').css({
						top:0,
						left:-w
					}).animate({left:0},300, 'linear')
					break;
				}
			}else{
				//移出事件时触发的，让他都回到0
				switch(direction){
					case 0:
					that.find('div').css({
						top:0,
						left:0
					}).animate({top:-h},50,'linear');
					break;
					case 1:
					that.find('div').css({
						top:0,
						left:0
					}).animate({left:w},50,'linear')
					break;
					case 2:
					that.find('div').css({
						top:0,
						left:0
					}).animate({top:h},50, 'linear')
					break;
					case 3:
					that.find('div').css({
						top:0,
						left:0
					}).animate({left:-w},50, 'linear')
					break;
				}
			}
		});
		
	};
	//点击切换vedio列表图片事件
	 vedioclick();
	function vedioclick(){
		var ul = document.getElementById('vedio');
		var Li = ul.getElementsByTagName('li');
		var prev = document.getElementById('prev');
		var next = document.getElementById('next');
		next.onclick = function(){
			m++;
			m%=arrImg.length;
			cut(m);
			move()
		};
		prev.onclick = function(){
			m--;
			if(m<0){
				m = arrImg.length-1;
			}
			cut(m);
			move()
		};
	};
}
