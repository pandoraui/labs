
$(function(){
    $("ul.sub-info-list li:last").find("span.icon-item").addClass("icon-item-last");

	function xh_hover(box_hover,hover_class){
		$(box_hover).hover(
    	function(){
    		$(this).addClass(hover_class);
    	},function(){
    		$(this).removeClass(hover_class);
    	})
	};
	
	xh_hover("ul.side-info-list li","info-item-hover");

	/* 搜索筛选标签 */
	
	//$("#tags-list a.s-tag").bind('click',function(){
	//	$(this)//.addClass("selected")
	//	.parent(".tags-item").hide();
	//	var tag_value = $(this).html();
	//	$("#your-choices").show().children("dt").append('<dd><a href=""><h6>包含地区：</h6>'+tag_value+'<span class="icon-close"></span></a></dd>')

		//console.log($(this).html())

	//})
	
	$("#tags-list li p").each(function(){
		if($(this).height()>42){
			$(this).siblings("a").show();
		}
	})
	
	$("#tags-list a.view-more").toggle(
		function(){
			$(this).addClass("hide-more").html('收起<i class="arrow"></i>').parent().addClass("more");
		},function(){
		    $(this).removeClass("hide-more").html('更多<i class="arrow"></i>').parent().removeClass("more");
		}
	);
	
	
	$(".J_price .input-text").bind({
		focus:function(){
		    
			//$(this).val('');
			//$(this).parent().addClass("expand");
		}//,
	   //blur:function() {
	   //		$("#J_FilterPrice").removeClass("expand");
	   //}
	});
	
	function xh_clear_input(input_box,input_default_text){
		$(input_box).bind({
		focus:function() {
			$(this).addClass("input-focus").parent(".J_price").addClass("expand");
			var input_text = $(this).val();
			if(input_text == input_default_text) {
				$(this).val('');
				
			}},
		blur:function() {
			var input_text = $(this).val();
			if(input_text == ""){
				$(this).val(input_default_text).removeClass("input-focus");
			}}
		})
		var _input_text = $(input_box).val();
		if(_input_text != input_default_text) {
			$(input_box).addClass("input-focus");
		}else{
			$(input_box).removeClass("input-focus");
		}
		
	};
	
	xh_clear_input(".J_price .input-text:eq(0)","最低价");
	xh_clear_input(".J_price .input-text:eq(1)","最高价");
	xh_clear_input("input.input-result-search","在结果中搜索");
	$(".J_price .input-text").keydown(function(e){
		var code = e.keyCode;
		//if(!((code>=48 && code<=57) || (code>=96 && code<=105) || code==39 || code==37 || code==8 || code==9)){
		if(!/^((4[89]|5[0-7])|(9[6-9]|10[0-5])|37|39|8|9)$/.test(code)){
			return false;
		}
	})
	
	
	/*
	function emptyActive(_input,_text){
	    $(_input).keyup(function() {
			var input_text = $(this).val();
			if(input_text != _text) {
				$(this).siblings(".empty").addClass("reset-empty");
			}else{
				$(this).siblings(".empty").removeClass("reset-empty");
			}
		})
		var input_text = $(_input).val();
		if(input_text != _text) {
			$(_input).siblings(".empty").addClass("reset-empty");
		}else{
			$(_input).siblings(".empty").removeClass("reset-empty");
		}
	}
	emptyActive("input.input-result-search","在结果中搜索");
	emptyActive(".J_price .input-text:eq(0)","最低价");
	emptyActive(".J_price .input-text:eq(1)","最高价");
	*/
	
	/*
	$("input.input-result-search,.J_price .input-text").keyup(function() {
		var input_text = $(this).val();
		if(input_text != "在结果中搜索") {
			$(this).siblings(".empty").addClass("reset-empty");
		}else{
			$(this).siblings(".empty").removeClass("reset-empty");
		}
	})
	*/
	
	var buy = $("a.booking"); 
	var prev = null; 
    var eltThis = null; 
	buy.each(function(){ 
		var eltThis = $(this); 
		eltThis.click(function(){ 
			if(prev!=null && prev!=this){ 
				var sb = $(prev).parent().siblings(); 
				sb.filter(".item-calendar").slideUp(); 
				sb.filter(".item-detail").slideUp(); 
			} 
			var sb = $(this).parent().siblings(); 
			var bl = sb.filter(".item-calendar").is(":hidden"); 
			sb.filter(".item-calendar").slideToggle(); 
			sb.filter(".item-detail").slideUp(); 
			prev = this; 
			if($.trim($("#timePrice"+$(this).attr("data-pid")+$(this).attr("data-bid")).html())!=""){ 
				bl = false; 
				$("#timePrice"+$(this).attr("data-pid")+$(this).attr("data-bid")).html(""); 
				$("#timePrice"+$(this).attr("data-pid")+$(this).attr("data-bid")).show(); 
			} 
			return true; 
		}); 
		var obja = $(this).parent().siblings().filter(".item-calendar").find(".item-calendar-hide");
		obja.click(function(){ 
			eltThis.click(); 
		}); 
	}); 
	var prevDd = null; 
	var _product = $("div.room-service dt.product-name");
	_product.each(function(){ 
		var sb = $(this).siblings(); 
        var _this = $(this);
		$(this).click(function(){ 
			if(prevDd!=null && prevDd!=this){ 
				var sb1 = $(prevDd).siblings(); 
				sb1.filter(".item-calendar").slideUp(); 
				sb1.filter(".item-detail").slideUp(); 
			} 
			sb.filter(".item-detail").slideToggle(); 
			sb.filter(".item-calendar").slideUp(); 
			prevDd = this; 
		}); 
		sb.filter(".item-detail").find(".item-detail-hide").click(function(){ 
			_this.click(); 
		}); 
	});
	
	$("body").click(function(e){
		var p = $(".J_price");
		if(p.length==0){
			return;
		}
		var obj = e.target || e.srcElement;
	   if(p[0]==obj || p[0].contains(obj)){
			return;
	   }
	   p.removeClass("expand");
	});
	/*
	$("i.reset-empty").live('click',function() {
		$(this).removeClass("reset-empty");
		$(this).siblings("input.input-text").removeClass("inout-focus").val("").blur().eq(0).focus();
	})
	*/
	// 酒店项更多介绍展开与收起-默认显示两条
	$("p.intro-text a.view-more").toggle(
	function () {
		$(this).html('收起<i class="arrow"></i>').addClass("hide-more").parent().addClass("text-detail");
	},
	function () {
		$(this).html('更多介绍<i class="arrow"></i>').removeClass("hide-more").parent().removeClass("text-detail");
	});
	
	// 酒店项信息与日历展开与收起
	/*
	var _item_detail = $('dd.item-detail');
	
	$("dt.product-name").bind('click',function(){
		var _itemcur =$(this).parent().children("dd.item-detail");
		if(_itemcur.css("display")=="block"){
			_itemcur.slideUp('fast');
		}else{
			_item_detail.slideUp('fast');
			_item_calendar.slideUp('fast');
			_itemcur.slideDown('fast');
		}
	});
	
	var _item_calendar = $('dd.item-calendar');
	$("a.booking").bind('click',function(){
		var _itemcur =$(this).parent().siblings("dd.item-calendar");
		if(_itemcur.css("display")=="block"){
			_itemcur.slideUp('fast');
		}else{
			_item_detail.slideUp('fast');
			_item_calendar.slideUp('fast');
			_itemcur.slideDown('fast');
		}
	});
	
	$("a.item-detail-hide,a.item-calendar-hide").click(function(){
		$(this).parent().slideUp('fast');
		//$("dt.product-name").click();
	});
	*/
	
	
	
	
	// 酒店项默认折叠展开与收起
	$("div.search-tickets-list div.item-service").each(function(i){
		// 酒店项更多产品展开与收起
		var _plistitem = $(this).find("dl.plist-item").length;
		if( _plistitem < 4){
		    $(this).find("a.more-list").hide();
		}else{
			var _more_item = $(this).find("dl.plist-item:gt(2)");
			_more_item.hide();
			$(this).find("a.more-list").toggle(
			function () {
				$(this).html('收起<i class="arrow"></i>').addClass("hide-more").parent().addClass("");
				_more_item.show();
			},
			function () {
				$(this).html('更多门票产品<i class="arrow"></i>').removeClass("hide-more").parent().removeClass("");
				_more_item.hide();
			});
		};
	});
	
	// 房型服务展开与收起
	$("div.room-service").each(function(i){
	    // 酒店项更多产品展开与收起
	    var _plistitem = $(this).find("dl.plist-item").length;
		if( _plistitem < 4){
		    $(this).find("a.more-list").hide();
		}else{
			var _more_room = $(this).find("dl.plist-item:gt(2)");
			_more_room.hide();
			$(this).find("a.more-list").toggle(
			function () {
				$(this).html('收起<i class="arrow"></i>').addClass("hide-more").parent().addClass("");
				_more_room.show();
			},
			function () {
				$(this).html('查看全部房型<i class="arrow"></i>').removeClass("hide-more").parent().removeClass("");
				_more_room.hide();
			});
		};
	});
	// 套餐服务展开与收起	
	$("div.sub-service").each(function(i){
		// 酒店项更多产品展开与收起
		var _plistitem = $(this).find("dl.plist-item").length;
		if( _plistitem < 4){
		    $(this).find("a.more-list").hide();
		}else{
			var _more_sub = $(this).find("dl.plist-item:gt(2)");
			_more_sub.hide();
			$(this).find("a.more-list").toggle(
			function () {
				$(this).html('收起<i class="arrow"></i>').addClass("hide-more").parent().addClass("");
				_more_sub.show();
			},
			function () {
				$(this).html('查看所有套餐<i class="arrow"></i>').removeClass("hide-more").parent().removeClass("");
				_more_sub.hide();
			});
		};
	});	
	
	/* 酒店搜索结果详细/简约切换及翻页控制 ,displayType=detail为详细(默认)  simple为简约 */
//	var _type_showbox = $("#viewpoint-box");
//	$("li.type_detail").bind("click",function(){
//		_type_showbox.removeClass("type_simple_result").addClass("type_detail_result");
//		_type_showbox.find("div.item-service").each(function(){
//			  $(this).children("dl").show().siblings().hide();
//		})
//	})
//	$("li.type_simple").bind("click",function(){
//		_type_showbox.removeClass("type_detail_result").addClass("type_simple_result");
//		$("a.all_service").html('全部房型').addClass("show_service").removeClass("hide-more");
//		_type_showbox.find("div.item-service dl").hide();
//	})
	
	$("a.all_service").each(function(i){
		// 酒店项更多产品展开与收起
		var _more_item = $(this).parent().find("dl:not(.viewpoint-info)");
		//_more_item.show();
//		if($(this).hasClass("show_service")){
//			$(this).html('收起<i class="arrow"></i>').addClass("hide-more").removeClass("show_service");
//			_more_item.show();
//		}else{
//		  $(this).html('全部房型').addClass("show_service").removeClass("hide-more");
//			_more_item.hide();
//		}
		
		$(this).toggle(
		function () {
			$(this).html('收起<i class="arrow"></i>').addClass("hide-more").removeClass("show_service");
			_more_item.show();
		},
		function () {
			$(this).html('全部房型').addClass("show_service").removeClass("hide-more");
			_more_item.hide();
		});
		
	});	
	
	$("body").append('<iframe class="xh_overlay"></iframe><div class="xh_overlay"></div><div class="xh_dialog"><div class="xh_dialog-bg"></div><div class="xh_dialog-box tc"><p><img src="http://pic.lvmama.com/img/new_v/ui_scrollLoading/loadingGIF46px.gif" width="46" height="46"></p><p>驴妈妈正在努力为您查找，请稍后...</p></div></div>');
	
	$("#test_loading").click(function(){
		xh_dialog();
	});
	
	function xh_dialog(){
		var top=$(document).scrollTop();
		$("div.xh_dialog").css("_top",top+220+"px").show();
		$("div.xh_overlay").show().height($(document).height());
		if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
			$("iframe.xh_overlay").show().height($(document).height());
		}
	}
	
	
	
/*	$(".xh_btn-ok,.xh_btn-cancel,.xh_close").bind('click',function(){
		$("div.xh_dialog,div.xh_overlay,div.guide_step").hide();
	})

	$("span.close-this").bind('click',function(){
		$(this).parents("div.xh_dialog,div.xh_overlay").hide();
		$("div.xh_overlay").hide();
	})*/

	
	
		

	$('a[class^="icon30"]')
	.tooltip({
		placement: 'bottom-left',
		delay: 100
	})
	$('dl.line-info').tooltip({
      selector: 'a[class=cashback]',
	  placement: 'bottom-right'
    })

    $('dd.plist-info').tooltip({
      selector: 'a[class=icon202]',
	  placement: 'bottom-right',
	  offset:[0,20]
    })

	
	$('dt.product-name').tooltip({
      selector: 'a[class=cashback]',
	  placement: 'bottom-left'
    })

	$('a[class=icon201]')
	.tooltip({
		placement: 'bottom-left'
	})


	$('dt.product-name a[class=icon202]').tooltip({
	  placement: 'bottom-left',
	  offset:[0,-24]
    })
	

});

