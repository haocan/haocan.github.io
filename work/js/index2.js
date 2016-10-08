window.onload = function(){
	var arr = [1,2,3,4];
	var num = 0;
	var onOff = true;
	var ps = document.getElementsByTagName('p')[0];
	ps.innerHTML = arr[0];
	//点击播放音频
	$('input')[1].onclick=function () {
		//没有暂停情况下重新创建音频文件，暂停的情况下直接打开原文件继续播放
		if (onOff) {
			creatAudio(num);
		}
		$('audio')[0].play();
	};
	$('input')[2].onclick=function () {
		//全局开关关闭
		onOff=false;
		$('audio')[0].pause(); 
	};
	//点击播放上一首音频
		$('input')[0].onclick=function () {
			//点击上一首歌曲时全局开关重新打开
			onOff=true;
			num--;
			if (num<0) {
				num=arr.length-1;
			}
			//切换歌曲后让播放歌曲按钮重新执行
			$('input')[1].onclick();
		}
		//点击播放下一首音频
		$('input')[3].onclick=function () {
			//点击下一首歌曲时全局开关重新打开
			onOff=true;
			num++;
			if (num>arr.length-1) {
				num=0;
			}
			//切换歌曲后让播放歌曲按钮重新执行
			$('input')[1].onclick();
		}
	//创建音频标签
	function creatAudio(num){
		var aud=document.createElement('audio');
		var sou=document.createElement('source');
		ps.innerHTML=arr[num];
		sou.src='audio/'+arr[num]+'.mp3';
		sou.type='audio/mpeg';
		aud.appendChild(sou);
		$('.box').eq(0).empty().append(aud);
	};
	//creatAudio(0);
}
