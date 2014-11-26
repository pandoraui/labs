// jQuery UI Create:2012-3-3 for 上海乐天网络信息技术有限公司 Author:CloudYan qq:1395093509
$(function(){
	var tab_nav_li = $('.tab_nav>li');//切换样式
	tab_nav_li.mouseover(function(){
		$(this).addClass('selected')
				 .siblings().removeClass('selected');
	var tab_nav_li_index = tab_nav_li.index(this);
	$('.tab_switch>.tabcon').eq(tab_nav_li_index).show()
					 .siblings().hide();
	}).hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');	
	});
});

