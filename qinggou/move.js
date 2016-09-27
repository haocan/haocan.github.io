function move(obj,attr,speed,target,endFn){
    //参数：要运动的元素，要运动的属性，速度，目标点，运动结束的回调。
    var n=parseFloat(getStyle(obj,attr));
    var str='px',
        num=1;
    clearInterval(obj[attr]);
    if(n<target){//计算要走的是正数还是负数。
        speed=Math.abs(speed);
    }else{
        speed=-Math.abs(speed);
    }
    if(attr=='opacity'){//如果传进来的是透明度就做些处理
        // speed*=100;
        n*=100;//元素原来透明度的值进行放大，为了兼容ie
        str='';//运动的是透明度就不需要单位。
        num=100;//在标准下运动透明度需要除以100。
        
    }
    
    
    obj[attr]=setInterval(function(){

        n+=speed;
         
        obj.style[attr]=n/num+str;
        obj.style.filter='alpha(opacity='+n+')';
        //走负数的时候比的是谁小，走正数的时候比的是谁大。
        if((speed<0&&n<target)||(speed>0&&n>target)){
            //条件成立的时候清除定时器。
            n=target;
            clearInterval(obj[attr]);
            //如果有endFn就调用
            obj.style[attr]=n/num+str;
            obj.style.filter='alpha(opacity='+n+')';
            endFn&&endFn();   
            // if(endFn){
            //     endFn();
            // }
        }
      
    },30)
}


function getStyle(obj,attr){

   return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}
function shake(obj,dir,endFn){
    var arr=[];
    var timer=null;
    var n=0;
    if(!obj.num){
        obj.num=parseFloat(getStyle(obj,dir));
    }
    //拿到一组数字，抖动的幅度。
    for(var i=20;i>0;i-=2){
        arr.push(i,-i);
    }
    arr.push(0);
    //用定时器来实现抖动效果。
    clearInterval(timer);
    timer=setInterval(function(){
        n++;
        if(n>arr.length-1){
            clearInterval(timer);
            endFn&&endFn();
        }
        obj.style[dir]=arr[n]+obj.num+'px';
    },30);
    

}