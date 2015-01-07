/* ebk.js */

$(function(){
    function ebk_hover(box_hover,hover_class){
        $(box_hover).hover(
        function(){
            $(this).addClass(hover_class);
        },function(){
            $(this).removeClass(hover_class);
        })
    };
    ebk_hover("li.nav-item","nav-item-hover");
    ebk_hover("div.nav-quick li","hover");
    
    
    // tabs
    function JS_tab_nav(tab_nav,tab_con,selected,tri_type){
        $tab_obj=$(tab_nav);
        $tab_obj.bind(tri_type,function(){
            var tab_li_index = $(tab_nav).index(this);
            $(this).addClass(selected).siblings().removeClass(selected);
            $(tab_con).eq(tab_li_index).show().siblings().hide();
            // return false;
        });
    };
    JS_tab_nav(".J-tabs li",".J-switch>.tabcon","current","click");
    
})


$(function(){ 
    
/*登陆页时间日期*/
    $(function(){
       function new_time(){ 
        var timee = new Date();
        var yy= timee.getFullYear();
        var MM= timee.getMonth()+1;
        var rr= timee.getDate();
        var ww= timee.getDay();
        var days= ["日","一","二","三","四","五","六" ]
          var n="今天是："+yy+"年" +MM +"月" + rr+"日　" + "星期"+days[ww];
        $('.login_time').text(n);
            };
        new_time();
        setInterval(new_time,5000); 
    });
    
    
    $('.index_remind span').toggle(function(){ 
        $(this).addClass('icon_kai');
    },function(){ 
        $(this).removeClass('icon_kai');
    });
	
	
	/*时间价格表弹层*/
	$('.nodate').live('click',function(){ 
		var L1 = $(this).offset().left+$(this).width()+24;
		var L2 = $(this).offset().left-$('.maintain_tan').width()-4;
		var T = $(this).offset().top;
		if(L1+360>$(window).width()){
			$('.maintain_tan').show().css({'left':L2,'top':T}).find('.i_left').addClass('i_right');
			
		}else{
			$('.maintain_tan').show().css({'left':L1,'top':T}).find('.i_left').removeClass('i_right');
		}
	});
	
	/*关闭时间价格表弹层*/
	$('.js_close').live('click',function(){ 
		$('.maintain_tan').hide();
	});
	
	$('.maintain_tab li').click(function(){ 
		var num = $(this).index();
		$(this).addClass('tab_this').siblings('li').removeClass('tab_this');
		if(num == 1){
			$('.table_bianjia').hide();
			$('.table_fangtai').show();
		}else{
			$('.table_fangtai').hide();
			$('.table_bianjia').show();
		};
	});
	

/*页面底部电话展开*/
    if($('.telephone_list li').length>4){
        $('.btn_show').show();
    }
    var nowH = $('.h_162').height();
    $('.btn_show').toggle(function(){ 
        var Stop = $('.telephone_box').offset().top;
        $(this).find('i').addClass('btn_hide');
        $(this).siblings('.telephone_list').css('height','auto').removeClass('h_162');
        $('html,body').animate({'scrollTop':Stop},500)
    },function(){ 
        $(this).find('i').removeClass('btn_hide');
        $(this).siblings('.telephone_list').animate({'height':nowH},300,function(){$(this).addClass('h_162');});
    });
    

/*公告信息展开收起*/
    $('.announcement_list_t h4').toggle(function(){ 
        var This = this;
        $(This).parent().next().slideDown(300,function(){
            $(This).siblings('.icon_down').addClass('icon_up');
        });
        $(This).parents('li').addClass('yidu gg_bg');
    },function(){ 
        var This = this;
        $(This).parent().next().slideUp(300,function(){
            $(This).siblings('.icon_down').removeClass('icon_up');
        });
        $(This).parents('li').removeClass('gg_bg');
    });
    
    
/*检测是否有附件*/
    var ggList = $('.js_announcement li');
    for(var i=0;i<ggList.length;i++){
        if(ggList.eq(i).find('.fujian').length>0){
            ggList.eq(i).addClass('has_fujian');
        };
    };
    
    
});


$(function(){
    // 弹窗全局配置
    (function (d) {
        d["skin"] = "dialog-blue";
        d["okClassName"] = "btn-ok";
        d["cancelClassName"] = "btn-cancel";
    }(pandora.dialog.defaults));
    
    $(".test1").click(function(){
        pandora.dialog({
            wrapClass: "dialog-info",
            width: 780,
            title: "操作日志",
            content:$("#dialog1")
        });
    })

})


