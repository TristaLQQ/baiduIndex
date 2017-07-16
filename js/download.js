var datas=jsonData;
var oDevice=getByClassName(null,'device_list')[0];
var oContent=getByClassName(null,'center_content')[0];
var oI=oDevice.getElementsByTagName('i');
var btnImg=document.getElementById('btn_img');
var aLi=document.getElementsByTagName('li');
function getByClassName(parent,sclassName){
	var oChild=parent||document;
	var ele=oChild.getElementsByTagName('*');
	var result=[];
	for(var i=0;i<ele.length;i++){
		  if(ele[i].className==sclassName){
		  	result.push(ele[i]);
		  }
	}
	return result;
}
for(var i=0;i<oI.length;i++){
	oI[i].index=i;
	oI[i].onclick=function(){
		for(var j=0;j<oI.length;j++){
			oI[j].className='';
			oContent.children[j].style.display='none';
			aLi[j].style.display='none';
		}
		oI[this.index].className='selected';
	    oContent.children[this.index].style.display='block';
	    btnImg.className=`class${this.index+1}`;
	    aLi[this.index].style.display='block';
	}
	oContent.innerHTML+=`<p id="jsonData" style="display: none;">
             	<span>大小:${datas[i].size}  版本：${datas[i].version}</span><br />
                <span>适应系统：${datas[i].adapte}</span><br />
                <span>更新时间:${datas[i].updateTime}</span>                
             </p>`;
    
}
oContent.children[0].style.display='block';



