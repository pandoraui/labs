$(function(){
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
	$("#J_FilterPrice input.input-price").bind({
		focus:function(){

			$(this).val('');
			$("#J_FilterPrice").addClass("expand");
		}//,
	   //blur:function() {
	   //		$("#J_FilterPrice").removeClass("expand");
	   //}
	});
	
	xh_clear_input("input.input-price:eq(0)","最低价");
	xh_clear_input("input.input-price:eq(1)","最高价");
	xh_clear_input("input.input-result-search","在结果中搜索");

	function xh_clear_input(input_box,input_default_text){
		$(input_box).bind({
		focus:function() {
			$(this).addClass("input-focus");
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
	};
	
	$("input.input-result-search").keyup(function() {
		var input_text = $(this).val();
		if(input_text != "在结果中搜索") {
			$(this).siblings(".empty").addClass("reset-empty");
		}else{
			$(this).siblings(".empty").removeClass("reset-empty");
		}
	})
	
	$("i.empty").bind('click',function() {
		$(this).removeClass("reset-empty");
		$(this).siblings("input.input-text").removeClass("inout-focus").val("").focus();
	})
	
	
	// 酒店项更多介绍展开与收起-默认显示两条
	$("p.intro-text a.view-more").toggle(
	function () {
		$(this).html('收起<i class="arrow"></i>').addClass("hide-more").parent().addClass("text-detail");
	},
	function () {
		$(this).html('更多介绍<i class="arrow"></i>').removeClass("hide-more").parent().removeClass("text-detail");
	});
	
	
	// 酒店项信息与日历展开与收起
	//var _itemprev = null;
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
	
	// 酒店项默认折叠展开与收起
	$("div.search-tickets-list div.item-service").each(function(i){
		// 酒店项更多产品展开与收起
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
		
	});
	
	// 房型服务展开与收起
	$("div.room-service").each(function(i){
		// 酒店项更多产品展开与收起
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
		
	});
	// 套餐服务展开与收起
	$("div.sub-service").each(function(i){
		// 酒店项更多产品展开与收起
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

	
	
		
/*	$('span[class^="icon"]').tooltip({
		position: "bottom left",
	   offset: [10, 50],
	   effect: 'slide'	
	});*/
	
	
//	$("a.more-list").toggle(
//	function () {
//		$(this).html('收起<i class="arrow"></i>').addClass("hide-more")//.parent().addClass("text-detail");
//			
//	},
//	function () {
//		$(this).html('更多介绍<i class="arrow"></i>').removeClass("hide-more").parent().removeClass("text-detail");
//	});


//	$("a[rel=tooltip]")
//	.tooltip({
//		placement: 'bottom-left'
//	})
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
//    $('section [href^=#]').click(function (e) {
//      e.preventDefault()
//    })
	//$('a[class=icon202]')
	//.tooltip({
	//	placement: 'bottom-right',
	//	offset:[0,20]
	//})

	$('dt.product-name a[class=icon202]').tooltip({
	  placement: 'bottom-left',
	  offset:[0,-24]
    })
	
	/*	$("a[rel=tooltip]")
		.tooltip({
			placement: 'bottom-left'
		})
      .click(function(e) {
        e.preventDefault()
      })*/
    //$('.popover-test').popover()
//
//    // popover demo
//    $('span[class^="icon"]')
//      .popover({trigger: 'hover'})
//      .click(function(e) {
//        e.preventDefault()
//      })
});

