
/**
 * 订单页面交互js
***/
// placeholder 功能扩展
window.onload = function(){
    var doc = document,
    inputs = doc.getElementsByTagName('input'),
    supportPlaceholder = 'placeholder' in doc.createElement('input'),
    placeholder = function(input){
        var text = input.getAttribute('placeholder'),
            defaultValue = input.defaultValue;
        if(input.value=="" || input.value==text){
            input.value=text;
            input.style.color = 'gray';
        }
        
        input.onfocus = function(){
            if(input.value === text){
                this.value = '';
                this.style.color = '';
            }
        }
        input.onblur = function(){
            if(input.value === ''){
                input.style.color = 'gray';
                this.value = text;
            }
        }
        input.onkeydown = function(){
            this.style.color = '';
        }
    };
    if(!supportPlaceholder){
        for(var i = 0, len = inputs.length; i < len; i++){
            var input = inputs[i], text = input.getAttribute('placeholder');
            if(input.type === 'text' && text){
                placeholder(input);
            }
        }    
    }
}
$(function(){
    $("select[data-class]").selectModel();
    
    
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
        timeauto: true,
        format: "dd:hh:mm:ss",
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
        
    
    
    $("body").ui("calendar",{
       input : ".date-birthday",
       parm:{dateFmt:'yyyy-MM-dd'}
    })
    

    
    
    /* select模拟 */
    //$("body").delegate(".selectbox","click",(function(e){
    $(".selectbox").live("click",function(e){
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
        var _selectbox = $(this).parents(".selectbox");
        _selectbox.find("[data-value]").removeClass("selected");
        $(this).addClass("selected")
        _selectbox.find(".select-value").text($(this).text())
        
        if($(this).parents(".selectbox").hasClass("certtype")){
            if($(this).text() == "台湾通行证" ){
                $(this).parents(".xdl").find(".form-more").removeClass("hide");
            }else{
                $(this).parents(".xdl").find(".form-more").addClass("hide");
            }
        }
        
        
        
    });
    
    
    //$("div.selectbox-drop").live()
    
    
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
                $(this).parents(".check-radio-box").find(".no-check-content").show();
            }else{
                $(this).parents(".check-radio-box").siblings(".check-radio-box").find(".no-check-content").hide();
            }
            
        }else{
            _thatNum.addClass("hide");
            
        }
        
        
        
        //if(!!$("input.no-check").attr("checked")){
        //    $(this).parents(".check-radio-box").find(".check-content").removeClass("hide");
        //}
        
    })
    
    $.fn.smartFloat = function() {
        var position = function(element) {
            var top = element.position().top, pos = element.css("position");
            $(window).scroll(function() {
                var scrolls = $(this).scrollTop();
                if (scrolls > top) {
                    if (window.XMLHttpRequest) {
                        element.css({
                            position: "fixed",
                            top: 0
                        });    
                    } else {
                        element.css({
                            top: scrolls
                        });    
                    }
                }else {
                    element.css({
                        position: "absolute",
                        top: top
                    });    
                }
            });
        };
        return $(this).each(function() {
            position($(this));                         
        });
    };

    //绑定
    $(".side-setbox").smartFloat();
    
})




$(function(){
    /* 添加/删除 乘客 */
    var additembox = $(".passenger-box");
    var currentItem;
    additembox.delegate(".xdl","mouseenter",function(){
        currentItem = this;
    });
    
    additembox.delegate(".remove-this","click",function(){
        if($(currentItem).siblings(".xdl").length==0){
            return;
        }
        $(currentItem).fadeOut(300,function(){
            $(this).remove();
            $("i.passenger-num").each(function(i,n){
                $(this).html(i+1);
            });
        });
    });
    $("a.add-item").click(function(){
        var obj = $("#itemTemplete").find(".xdl").clone(true);
        if(additembox.find(".xdl").length>4){
            $.msg("每个人预订票数不能超过5张！");
            return;
        }
        additembox.append(obj);
        obj.hide().fadeIn(300);
        $("i.passenger-num").each(function(i,n){
            $(this).html(i+1);
        });
        
        $("body").ui("calendar",{
           input : ".date-birthday",
           parm:{dateFmt:'yyyy-MM-dd'}
        })
        
        return false;
    });
    
    
})