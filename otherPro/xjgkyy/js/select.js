//下拉菜单
function showselect(qz,select_count)
{
	
	for(i=2;i<=select_count;i++)
	{
		document.getElementById(qz+'_'+i).style.display='';
		document.getElementById(qz+'_'+i).style.backgroundColor="#F1F7FA"; //定义下拉背景颜色
		document.getElementById(qz+'_'+i).style.borderLeft="1px solid #c0d0b7"; //定义左边边框颜色
		document.getElementById(qz+'_'+i).style.borderRight="1px solid #c0d0b7"; //定义右边边框颜色
		
	}
}
//移开隐藏下拉框
function clearselect(qz,select_count)
{
	
	for(i=2;i<=select_count;i++)
	{
		document.getElementById(qz+'_'+i).style.display='none';	
	}
}
function input_ks(qz,select_count,value)
{
	for(j=2;j<=select_count;j++)
	{
		document.getElementById(qz+'_'+j).style.display='none';	
	}
	document.getElementById(qz+'_1').innerHTML=value;
	document.getElementById(qz+'input').value=value;
}
//鼠标经过下拉的时候改变样式
function updatestyle(qz,select_count,count)
{
	document.getElementById(qz+'_'+select_count).style.color="#a74d12";
	document.getElementById(qz+'_'+select_count).style.backgroundColor="#F1F7FA";
	for(i=2;i<=count;i++)
	{
		document.getElementById(qz+'_'+i).style.display='';	
	}
}
//鼠标离开还原样式
function bakstyle(qz,select_count,count)
{
	document.getElementById(qz+'_'+select_count).style.color="#5e3219";
	document.getElementById(qz+'_'+select_count).style.backgroundColor="#F1F7FA";
	for(i=2;i<=count;i++)
	{
		document.getElementById(qz+'_'+i).style.display='none';	
	}
}


//定义下拉样式

//for(k=2;k<=6;$k++)
//{c0d0b7
	
	//document.getElementById('ks_'+k).style.backgroundColor='F1F7FA';	
	//document.getElementById('ks_'+k).style.color='#ffffff';	
//}

//表单验证
function submitgh()
{
	if(document.form1['ghform[gh_name]'].value=='')
	{
		alert('姓名不能为空');
		return false;
	}
	if(document.form1['ghform[gh_tel]'].value=='')
	{
		alert('电话不能为空');
		return false;
	}
	if(document.form1['ghform[gh_y]'].value=='')
	{
		alert('年份不能为空');
		return false;
	}
	if(document.form1['ghform[gh_m]'].value=='')
	{
		alert('月份不能为空');
		return false;
	}
	if(document.form1['ghform[gh_d]'].value=='')
	{
		alert('日期不能为空');
		return false;
	}
	if(document.form1['ghform[gh_ks]'].value=='')
	{
		alert('预约可是不能为空');
		return false;
	}
	if(document.form1['ghform[gh_zj]'].value=='')
	{
		alert('预约专家不能为空');
		return false;
	}
	if(document.form1['ghform[gh_about]'].value=='')
	{
		alert('病情描述不能为空');
		return false;
	}
	return true;
}
function submitjy()
{
	if(document.form2['jyform[jy_name]'].value=='')
	{
		alert('昵称不能为空');
		return false;
	}
	if(document.form2['jyform[jy_about]'].value=='')
	{
		alert('简述不能为空');
		return false;
	}
	return true;
}