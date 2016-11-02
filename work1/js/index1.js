$(function(){
	window.scrollTo(0,0);
});
window.onload = function(){
	fn();
	function fn(){
		//按钮的点击事件，点击div收，再次点击div回，运动
		var navBtn = document.getElementsByClassName('navBtn')[0];
		var nav = document.getElementsByClassName('nav')[0];
		var onOff = true;
		navBtn.onclick = function(){
			if(onOff){
				//默认是block的，点击时运动让他收回
				this.className += " navShow";
				mTween(nav,'left',50,500,'linear',function(){
					nav.style.display = "none";
					nav.style.opacity = 1;
				});
			}else{
				//再次点击让他显示
				this.className = "navBtn";
				nav.style.display = "block";
				mTween(nav,'left',0,1000,'linear');
			}
			onOff = !onOff;
		};
	};
	//根据滑轮的变化，nav导航的li跟着变化，滑轮滑到哪，哪个li高亮
	var lis = $('.nav li');
	var divs = $('.body>div:not(.header)');
	var header = $('.header');
	var e = divs[0].getBoundingClientRect().height/2;
	var a = divs[0].getBoundingClientRect().height-200;
	var b = divs[1].getBoundingClientRect().height-150;
	var c = divs[2].getBoundingClientRect().height-150;
	var d = divs[3].getBoundingClientRect().height-150;
	window.onscroll = function(){
		var Yoffset = window.pageYOffset;
		/*console.log(window.pageYOffset)*/
		//滚轮一变化，第一个header的高就会有变化
		$('.header').addClass('headerFixed');
		//滚轮回到原点，就把他身上的class清掉
		if(window.pageYOffset == 0){
			//滚轮回到0，清空class
			$('.header').removeClass('headerFixed');
		}
		if(Yoffset>0&&Yoffset<a){
			//做判断，第一个div
			clear();
			add(0)
			mtween1();
		}
		if(Yoffset>a&&Yoffset<a+b){
			mtween();
			//做判断，第二个div
			clear();
			add(1)
		}
		if(Yoffset>a+b&&Yoffset<a+b+c){
			mtween1();
			clear();
			add(2)
		}
		if(Yoffset>a+b+c&&Yoffset<a+b+c+d){
			clear();
			add(3)
			mtween1();
		}
	};
	//给li添加样式，给当前的添加
	function add(index){
		lis[index].className = 'hide';
	};
	//清空所有li的样式
	function clear(){
		for(var i = 0;i<lis.length;i++){
			lis[i].className = '';
		}
	};
	fn2();
	//banner广告循环播放
	function fn2(){
		var arr = ['img/bg.jpg','img/bg1.jpg'];
		var li = document.getElementById('list');
		var img = document.getElementById('img');
		var num = 0;
		img.src = arr[0];
		setInterval(function(){
			num++;
			num%=arr.length;
			img.src = arr[num];
		},3000)	
	}
	//service的实现功能，移入时高度变化
	//console.log($('.ul li'))
	$('.ul li').hover(function(){
		$(this).find('.t2').animate({height:350},300,'linear');
	},function(){
		$(this).find('.t2').animate({height:0},300,'linear');
	});
	//案例的实现模块,选项卡模式
	contant();
	function contant(){
		var menu = document.getElementsByClassName('menu')[0];
		var as = menu.getElementsByTagName('a');
		var list = document.getElementsByClassName('list')[0];
		var ul = list.getElementsByTagName('ul');
		for(var i = 0;i<as.length;i++){
			as[i].index = i;
			as[i].onclick = function(){
				//清空所有样式
				for(var i = 0;i<as.length;i++){
					as[i].className = "";
					ul[i].className = "";
				}
				//当前a高亮，对应的ul显示
				this.className = "cur";
				ul[this.index].className = "show";
			};
		}
	};
	//滚轮滑动的运动函数，淡入的效果显示
	function mtween(){
		var words = document.getElementsByClassName('word');
		var bs = document.getElementsByTagName('b');
		var is = document.getElementsByTagName('i');
		var lst = document.getElementsByClassName('lst')[0];
		var num = Math.floor(lst.offsetWidth/2);
    	for(var i=0;i<words.length;i++){
    		$('.word').fadeIn(600);
    		$('b').fadeIn(600);
    		$('i').fadeIn(600);
    		//文字的运动方式
    		mTween(words[i],'left',num,1500+i*100,'easeBoth');
    		//雪碧图的运动方式
    		mTween(bs[i],'left',num,1000+i*100,'easeBoth');
    		//年份的运动方式
    		mTween(is[i],'left',num,1500+i*100,'easeBoth');
    	}
	};
	$('.about').click(function(){
		mtween1();
	})
	function mtween1(){
		var words = document.querySelectorAll('.r .word');
		var is = document.querySelectorAll('.r i');
		var bs = document.querySelectorAll('.r b');
		var w = document.querySelectorAll('.l .word');
		var iss = document.querySelectorAll('.l i');
		var b = document.querySelectorAll('.l b');
		for(var i = 0;i<words.length;i++){
			//文字的运动方式
			mTween(words[i],'left',1500,700+i*100,'easeBoth');
			//雪碧图的运动方式
			mTween(bs[i],'left',-500,700+i*100,'easeBoth');
			//年份的运动方式
			mTween(is[i],'left',1400,700+i*100,'easeBoth');
			
		};
		for(var j = 0;j<w.length;j++){
			//文字的运动方式
			mTween(w[j],'left',0,700+j*100,'easeBoth');
			//雪碧图的运动方式
			mTween(b[j],'left',1800,700+j*100,'easeBoth');
			//年份的运动方式
			mTween(iss[j],'left',-1400,700+j*100,'easeBoth');
			
		};
	
	};
	//点击li有对应的div切换
	click();
	function click(){
		//获取到每个div到父级的top值，减去header的高
		var screen = document.getElementsByClassName('screen');
		//创建数组，把数据放在数组里
		var arr = [];
		for (var i=0;i<screen.length;i++) {
			arr.push(screen[i].getBoundingClientRect().top-70);
		}
		//点击li，滚轮到指定的位置
		$('.nav li').click(function(){
			$(document.body).animate({
				scrollTop:arr[$(this).index()]
			},1000)
			console.log(arr[$(this).index()])
			//window.scrollTo(0,arr[$(this).index()]);
			$('.nav li').removeClass('hide').filter(this).addClass('hide');
		});
	}
	
}