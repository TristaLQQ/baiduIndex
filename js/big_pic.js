
	var aDiv=document.getElementById('content');
   	var oDiv=document.getElementById('list');
   	var oImg=oDiv.getElementsByTagName('img');
    var oSpan=document.getElementById('buttons').getElementsByTagName('span');
    var wordSpan=document.getElementById('list').getElementsByTagName('span');
    var wordArray=new Array('“安全存储生活井井有条”','“在线预览文件即开即看”','“多端并用数据随身携带”','“好友分享共度幸福时光”');
  	var current=0;
  	oDiv.timer=null;
   	//alert(current);
   	function slideShow()
  	{
  		//图片和小圆点淡出
   		function slideoff()
  		{
  			oImg[current].className='';
  			oSpan[current].className='';
  			wordSpan[current].innerHTML='';
  			
   		}
  		//图片和小圆点淡入
  		function slideon()
  		{
   			oImg[current].className='active';
   			oSpan[current].className='on';
   			wordSpan[current].innerHTML=wordArray[current];
   		}
  		
  		//amplifyon()和normalon()是针对大图放大和回到正常大小的函数
  		function amplifyon()
  		{
  			oImg[current].className='amplify active';
   			oSpan[current].className='on';
  		}
  		function normalon()
  		{
  			oImg[current].className='normal active';
   			oSpan[current].className='on';
  		}
  		
  		//定时器进行4s变换图片
  		
  		function changeSlide()
   		    {
	   			slideoff();
	   			current++;
	  			if(current>3)
		   			{
		   				current=0;
		  			}
 			    slideon();
   		     }
  		function play(obj)
  		{
  			obj.timer=setInterval(changeSlide,3000);
  		} 		
  		play(oDiv);
   	
   	  oDiv.onmouseover=function()
	       {
	       	  clearInterval(this.timer); 
	       	  amplifyon();
	       }
      oDiv.onmouseout=function()
      {
      	normalon();
      	play(this);
      };
      //点击大图上的小圆点时触发的事件
      for(var i=0;i<oSpan.length;i++)
      {
      	oSpan[i].index=i;
      	oSpan[i].onclick=function()
      	{
      		slideoff();
      		current=this.index;
      		slideon();
      	}
      }
      
      
 	}
   slideShow();
    