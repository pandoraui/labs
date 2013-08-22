
/**
 * 订单页面交互js
***/

$(function(){
    
    
    
    $(".JS_check").delegate(".check-radio-item",'click',function(){
        var _thisbox = $(this).parents(".check-radio-box");
        _thisbox.toggleClass("selected").siblings(".check-radio-box").removeClass("selected").find(".check-radio-item").removeClass("active");
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }else{
            $(this).addClass("active");
        }
        
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
    
    //pandora.OperNumber = 
        
    $(".oper-numbox").delegate(".J_increase","click",function(){
        //console.log($(this).prev().val());
        var _number = parseInt($(this).prev().val());
        _number < 99999999 && _number ++;
        $(this).prev().val(_number);
    })
    $(".oper-numbox").delegate(".J_reduce","click",function(){
        //console.log($(this).next().val());
        var _number = parseInt($(this).next().val());
        _number > 0 && _number --;
        $(this).next().val(_number);
    })
        
    
    
    
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
    
    
    /* 复选中后显示数量操作 */
    $('.input-checkbox').live("click",function(){
        //console.log(!!$(this).attr("checked"));
        var _thatNum = $(this).parents(".check-text").find(".selectbox");
        if(!!$(this).attr("checked") && _thatNum){
            _thatNum.removeClass("hide");
        }else{
            _thatNum.addClass("hide");
        }
    })
    /* 单选中后显示数量操作 */
    $('.input-radio').live("click",function(){
        //console.log(!!$(this).attr("checked"));
        var _thisbox = $(this).parents(".JS_check").find(".selectbox");
        var _thatNum = $(this).parents(".check-text").find(".selectbox");
        if(!!$(this).attr("checked")){
            _thisbox.addClass("hide");
            _thatNum.removeClass("hide");
            //$(this).parents(".check-radio-box").siblings().find(".check-content").hide();
            console.log($(this).hasClass("no-check"));
            if($(this).hasClass("no-check")){
                $(this).parents(".check-radio-box").find(".check-content").show();
            }else{
                $(this).parents(".check-radio-box").siblings(".check-radio-box").find(".check-content").hide();
            }
            
        }else{
            _thatNum.addClass("hide");
            
        }
        
        
        
        //if(!!$("input.no-check").attr("checked")){
        //    $(this).parents(".check-radio-box").find(".check-content").removeClass("hide");
        //}
        
    })
    
    
    
})

