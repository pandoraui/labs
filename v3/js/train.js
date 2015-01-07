$(function(){
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
	JS_tab_nav(".J-tabs>li",".J-switch>.tabcon","active","mouseover");
	JS_tab_nav(".JS_tabnav>li",".JS_tabsbox>.tabcon","selected","click");

    function onlyone_select(_box,hover_item,select_class,event_type){
		$(_box).delegate(hover_item,'hover',function(){
            $(this).addClass(select_class).siblings(hover_item).removeClass(select_class);
        });
	};
	onlyone_select("ul.JS_click_select","li","selected",'click');
    
});	