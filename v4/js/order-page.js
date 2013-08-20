
/**
 * 订单页面交互js
***/

$(function(){
    
    // 单选项
    //function JS_check(_box,check_radio_box,check_radio_item,active){
	//	$(_box).delegate(check_radio_item,'click',function(){
    //        $(this).parents(check_radio_box).toggleClass(active).siblings(check_radio_box).removeClass(active);
    //    });
	//};
    //JS_check(".JS_check",".check-radio-box",".check-radio-item","selected");
    
    
    
    $(".JS_check").delegate(".check-radio-item",'click',function(){
        var _thisbox = $(this).parents(".check-radio-box");
        _thisbox.toggleClass("selected").siblings(".check-radio-box").removeClass("selected");
    });
    $(".JS_check").delegate(".check-content .tip-close","click",function(){
        $(this).parents(".check-radio-box").find(".check-radio-item").click();
    });
    
    
    $(".slidedown-orderlist").click(function(){
        $(this).toggleClass("active").parent().find(".order-list").toggleClass("hide");
        
    })
    
    $("b.countdown").ui("countdown",{
        format: "mm:ss",
        overtips : "此订单已过期"
    });
    
    
    
    /* select模拟 */
    $("div.selectbox").click(function(e){
		var obj = e.target || e.srcElement;
		if(obj.className!="selectbox-drop"){
			$(this).toggleClass("selectbox-active active");
		}
	}).mouseleave(function(){
		var e = this;
		e.timeId = setTimeout(function(){
			$(e).removeClass("selectbox-active active");
		},200)
	}).mouseenter(function(){
		clearTimeout(this.timeId)
	})
    
    $("div.selectbox-drop").delegate("[data-value]","click",function(){
        var _selectbox = $(this).parents("div.selectbox");
        _selectbox.find("[data-value]").removeClass("selected");
        $(this).addClass("selected")
        _selectbox.find(".select-value").text($(this).text())
        
    })
    
    
})

