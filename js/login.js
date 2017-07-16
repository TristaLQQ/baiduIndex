
	var oDiv=document.getElementById('loginpic');
	var oImg1=document.getElementById('footer_img');
	var oImg2=document.getElementById('footer_img2');
	var Imgopacity=0;
	oImg1.timer=null;
	oImg1.onmouseover=function()
			{
			  move(this,0,100);
			}
	oImg1.onmouseout=function()
			{
			  move(this,67,0);
			}
	function move(obj,iTargert,alphas)
			{
			  clearInterval(obj.timer);
			  obj.timer=setInterval(function()
				{
					var Aspeed=0;
					if(Imgopacity>alphas)
					    {
					    	Aspeed=-4;
					    }
					else
					    {
					    	Aspeed=4;
					    }
					if(Imgopacity==alphas&&oImg1.offsetLeft==iTargert)
						{
							clearInterval(obj.timer);
						}
					else
						{
									
							var Mspeed=(iTargert-oImg1.offsetLeft)/15;
								
							Mspeed=Mspeed>0?Math.ceil(Mspeed):Math.floor(Mspeed);
							Imgopacity+=Aspeed;
							oImg1.style.left=oImg1.offsetLeft+Mspeed+'px';
							oImg2.style.opacity=Imgopacity/100;
									
						}
	            
				 },30);
			}
			