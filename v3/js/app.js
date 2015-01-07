$(function(){
	var _search_box= $("div.search-box");
	var _data_source =_search_box.attr("data-source");
	var _current_city = _search_box.attr("data-city-name");
	var _keyword = _search_box.attr("data-search");
	
	var loadRecommendWords = function(id){ 
		$.get("http://www.lvmama.com/search/ajax/recommendword.do?code="+id,function(data){ 
			if(data!=""){ 
				var _span_words = _search_box.find(".hot-travel"); 
				if(_span_words.length>0){ 
					_span_words.html(""); 
					var _html_words =""; 
					$.each(data,function(n,i){ 
						_html_words+="<a href=\""+i.url+"\" target=\"_blank\">"+i.title+"</a>\n"; 
					}); 
					_span_words.html(_html_words); 
				} 
			} 
		}); 
	}; 
	var base_a = _search_box.find("a[data-name='"+_current_city+"']");
	var initCode = base_a.attr("data-code");
	var initId = base_a.attr("data-id");
	if(_data_source == "search_result" ){ 
		if(typeof initCode=='undefined'){
			initCode="SH";
			initId=79;
		}
		_search_box.attr("data-city-id",initId);
		loadRecommendWords(initCode);
	}
	//绑定切换城市的click事件
	$("div.citylist a").click(function(){
		var data_refresh = false;
		if(_data_source == "home"){
			data_refresh = true;
		}
		
		var placeName = $(this).attr("data-name");
		var placeCode = $(this).attr("data-code");
		var placeId = $(this).attr("data-id");
		_search_box.attr("data-city-name",placeName);
		_search_box.attr("data-city-id",placeId);
		if(data_refresh && $(this).attr("data-refresh") == "true"){
			var _form = $("<form method=\"post\" >"+
    				"<input type=\"hidden\" name=\"fromPlaceCode\" value=\""+placeCode+"\" />"+
    				"<input type=\"hidden\" name=\"fromPlaceId\" value=\""+placeId+"\" />"+
    				"<input type=\"hidden\" name=\"fromPlaceName\" value=\""+placeName+"\" /></form>");
			_search_box.prepend(_form);
			_form.submit();
		}else if(_data_source == "search_result" && $(this).attr("data-refresh") == "true"){ 
			loadRecommendWords($(this).attr("data-code")); 
			$('.city > b').html(placeName); 
		}else{ 
			$('.city > b').html(placeName); 
		}
		
	});
});


// 频道级别app

$(function(){
    // 出发城市
	function x_hover(box_hover,hover_class){
		$(box_hover).hover(
    	function(){
    		$(this).addClass(hover_class);
    	},function(){
    		$(this).removeClass(hover_class);
    	})
	};
    x_hover("div.from-city","from-city-hover");
    x_hover(".JS_hover li","active");
    x_hover("div.menu-item","menu-item-hover");
    x_hover(".JS_hover_show li.point-item","point-item-hover");
    
    function hover_select(_box,hover_item,select_class){
		$(_box).delegate(hover_item,'hover',function(){
            $(this).addClass(select_class).siblings(hover_item).removeClass(select_class);
        });
	};
	hover_select("div.JS_hover_select","dl","selected");
	hover_select("ul.JS_hover_select","li","selected");
        
	
	$("div.from-city").click(function(e){
		var obj = e.target || e.srcElement;
		if(obj.className!="citylist"){
			$(this).toggleClass("from-city-selected");
		}
	}).mouseleave(function(){
		var e = this;
		e.timeId = setTimeout(function(){
			$(e).removeClass("from-city-selected");
		},200)
	}).mouseenter(function(){
		clearTimeout(this.timeId)
	})

    //$(菜单selector).menu(内容selector)
	$("div.menu-item").menu(".quick-menu-drop");
	
	$("ul.slide-nav li").focusImg({
		content : "ul.slide-content li",
		speed : 500,
		lazyTime : 3500 
	});
	   
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
    
    // 反选tabs
	function JS_vtab_nav(tab_nav,tab_con,selected,tri_type){
		$tab_obj=$(tab_nav);
		$tab_obj.bind(tri_type,function(){
			var tab_li_index = $(tab_nav).index(this);
			$(this).removeClass(selected).siblings().addClass(selected);
			$(tab_con).eq(tab_li_index).show().siblings().hide();
			// return false;
		});
	};
	JS_vtab_nav(".JS_vtabnav>li",".JS_vtabsbox>.tabcon","selected","click");

	//新版自动补全插件
	var opt = {
		fromChannel : ".search-box",
		newChannel : $("li.info-item-selected").attr("newChannel") || "",
		clickSearch : "button.btn-search"
	}
	$(".input-search").ui("autoCompleteV2",opt).keydown(function(e){
		if(e.keyCode==13){
			setTimeout(function(){
				$(opt.clickSearch).click();
			},80);
			return false;
		}
	});
	
});	

/* AB测试
$(function(){
	$("#slides").slides({
		preload: true,
		preloadImage: 'http://pic.lvmama.com/img/new_v/ui_scrollLoading/loadingGIF46px.gif',
		container: 'slide-content',
		trigger: 'mouseenter',
		play: 5000,
		//pause: 2500,
		// hoverPause: true,
		pagination: true,
		paginationClass: 'slide-nav2',
		generateNextPrev: true, 
		prev: 'slide-prev',
		next: 'slide-next',
		currentClass: 'active'
	});
});	
*/
