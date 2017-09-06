export function iscroll(obj){
	var sum=0;
	if(obj.isTop){
		obj.li.forEach(function(value,index){
			sum+=value.offsetHeight;
		});
	}else{
		obj.li.forEach(function(value,index){
			sum+=value.offsetWidth;
		});
	}
	if(obj.isTop){
		obj.ul.style.height=sum+"px";
	}else{
		obj.ul.style.width=sum+"px";
	}
	
	var startY,moverY,ulY,currentY;
	obj.ul.addEventListener("touchstart",function(eve){
		if(obj.isTop=="top"){
		 startY=eve.targetTouches[0].clientY
		}else{
			startY=eve.targetTouches[0].clientX
		}
	})
	obj.ul.addEventListener("touchmove",function(eve){
		if(obj.isTop){	
			moverY=eve.targetTouches[0].clientY;
	    	currentY=parseInt(window.getComputedStyle(this,null).top);
	 		ulY=moverY-startY;
			this.style.top=(ulY+currentY)+"px";
			this.style.transition="none";
			startY=moverY;
		}else{
			moverY=eve.targetTouches[0].clientX;
	    	currentY=parseInt(window.getComputedStyle(this,null).left);
	 		ulY=moverY-startY;
			this.style.left=(ulY+currentY)+"px";
			this.style.transition="none";
			startY=moverY;
		}
	});
	if(obj.isTop){
		obj.ul.addEventListener("touchend",function(){
		if(currentY>0){
			currentY=0;
		}else if(currentY<parseInt(obj.box.offsetHeight-this.offsetHeight)){
			currentY=parseInt(obj.box.offsetHeight-this.offsetHeight);
		}
		this.style.top=(ulY+currentY)+"px";
		this.style.transition="top .7s ease";
	})
	}else{
		obj.ul.addEventListener("touchend",function(){
		if(currentY>0){
			currentY=0;
		}else if(currentY<parseInt(obj.box.offsetWidth-this.offsetWidth)){
			currentY=parseInt(obj.box.offsetWidth-this.offsetWidth);
		}
		this.style.left=(ulY+currentY)+"px";
		this.style.transition="left .7s ease";
	})
}
}
