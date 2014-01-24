/*获取元素位置*/
function elt_position(elt,position,fixed){
    if(elt.length){
        var fixed = (fixed ? $(document).scrollTop() :0);
        var elt_pos = elt.offset();
        switch(position){
            case "top":
                return elt_pos.top - fixed;
                break;
            case "bottom":
                return elt_pos.top + elt.outerHeight(true);
                break;
            case "left":
                return elt_pos.left;
                break;
            case "right":
                return elt_pos.top + elt.outerWidth(true) -fixed;
                break;
            default :
                return elt_pos.top;
            ;
        }
    }else{
        return -1; //不存在该元素
    }
}
    
// 门票dest目的地页面
$(function(){
    //鼠标room 大图
    $("body").append('<div class="J_img_wrap img-wrap"></div>')

    function JS_tab_nav(tab_nav,tab_con,selected,tri_type){
        $tab_obj=$(tab_nav);
        $tab_obj.bind(tri_type,function(){
            var tab_li_index = $(tab_nav).index(this);
            $(this).addClass(selected).siblings().removeClass(selected);
            $(tab_con).eq(tab_li_index).show().siblings(tab_con).hide();
            // return false;
        });
    };
    JS_tab_nav(".JS_tabnav>li",".JS_tabsbox .tabcon","selected","click");
    
    function x_hover(box_hover,hover_class){
        $(box_hover).hover(
        function(){
            $(this).addClass(hover_class);
        },function(){
            $(this).removeClass(hover_class);
        })
    };
    //x_hover("div.sec-info","sec-info-hover");
    
    $("div.sec-info").hover(
    function(){
        $(this).find(".J-more").stop().slideDown(150)
    },function(){
        $(this).find(".J-more").stop().slideUp(300)
    })
    
    $(".dpro-list").delegate("a.ptlink","click",function(){
        var currentItem = $(this).parent().parent();
        //var otherItem = $(".dpro-list").find(".ptditem");
        if(currentItem.hasClass("ptditem-selected")){
            currentItem.find(".pdetails").hide();
            currentItem.removeClass("ptditem-selected");
        }else{
            //otherItem.removeClass("ptditem-selected");
            //otherItem.find(".pdetails").hide();
            currentItem.find(".pdetails").show();
            currentItem.addClass("ptditem-selected");
        }
        return false;
    })
    $(".dpro-list").delegate("a.view-details","click",function(){
        var currentItem = $(this).parent().parent();
        currentItem.hide();
        currentItem.parent().removeClass("ptditem-selected");
        return false;
    })
    
    //elt_position($(".dest-main"),"bottom")
    var $window = $(window);
    
    /*滚动定位*/
    function xscrollspy(scrollnav){
        var _scrollTop = $(document).scrollTop();
        if( elt_position($(".dest-main"),"top") < _scrollTop && _scrollTop < elt_position($(".dest-main"),"bottom") ){
            scrollnav.addClass("affix").css({"width":$(".wrap").width()})
        }else{
            scrollnav.removeClass("affix");
        }
    }
    
    xscrollspy($(".J_scrollnav"))
    
    $(window).scroll(function() {
        xscrollspy($(".J_scrollnav"))
    });
    
    
    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    });
    
    
    // 大图
    var $PHOTO = $(".J_photo"),
        $IMG_WRAP = $(".J_img_wrap");

    $PHOTO.find("img").hover(function (event) {
        var src = $(this).attr("data-big-img"),
            outbox = $(this).parent().parent(),
            //offset = outbox.offset(),
            offset = $(this).offset(),
            left = offset.left + $(this).outerWidth(true),
            top = offset.top;// + outbox.outerHeight(true);

        if (src === "") {
            return;
        }

        $IMG_WRAP.css({
            left: left,
            top: top
        }).html('<img src="' + src + '" />').stop().fadeIn("slow");

    }, function () {
        $IMG_WRAP.hide();
    });

});

$(function () {
    // 点击回复显示回复框
    $(".comments").delegate('a.dcomuser','click',function(){
        var _thisbox = $(this).parent().next();
        var _this = _thisbox.find('.feeds-reply-box');
        var _thisnum = _thisbox.find('.j-feed-comments>li').length;
        if(_thisnum < 1 ){
            if(_thisbox.css('display') == 'none'){
                _thisbox.show();
                _this.show();
            }else{
                _thisbox.hide();
            }
        }else{
            if(_this.css('display') == 'none'){
                _this.show();
            }else{
                _this.hide();
            }
        }
        
    })
    
    
    function xscroll(){
        var scrollTop = $(window).scrollTop();
        var windowheight = $(window).height();
        var buynowPos = elt_position($(".dorder-list"),"bottom");
        if(scrollTop>windowheight){
            $(".xgotop").slideDown();
        }else{
            $(".xgotop").slideUp();
        }
        if(scrollTop>buynowPos){
            $(".xbuynow").slideDown();
        }else{
            $(".xbuynow").slideUp();
        }
        
    }
    $(window).scroll(function(){ 
        xscroll();
    })
    
})
$(function(){
    dynamicNum($(".scorebox"));
    dynamicNum($(".comlevel"),true);
    function dynamicNum(dynamicBox,format){
        var dynamicItem = dynamicBox.find('[data-mark="dynamicNum"]'),
            arrT = [],
            j = 0;
        function fenRun(){
            for(var i=0;i < dynamicItem.length;i++){
                if(dynamicItem.eq(i).attr("data-level")){
                    var levelNum = dynamicItem.eq(i).attr("data-level");
                    
                    if(!format){
                        dynamicItem.eq(i).animate({'width':levelNum*20+"%"},1000);
                    }else{
                        runNum(levelNum,i);
                    }
                }
            }
        }
        //function runNum(levelNum,i){
        //    var j=levelNum-parseInt(levelNum);
        //    var bool = false;
        //    //console.log(i)
        //    while(j<=levelNum){
        //        if(!bool){
        //            clearTimeout(ttt);
        //            bool = false;
        //            j+=0.1;
        //            dynamicItem.eq(i).text(j.toFixed(1));
        //        }else{
        //            var ttt = setTimeout(function(){;
        //            },1000)
        //            bool = true;
        //        }
        //    }
        //}
        function runNum(levelNum,i){
            var j=levelNum-parseInt(levelNum);
            var xtime= setInterval(function(){
                dynamicItem.eq(i).text(j.toFixed(1));
                j+=1.1;
                if(j>=levelNum){
                    clearInterval(xtime);
                    j = levelNum;
                    dynamicItem.eq(i).text(levelNum);
                }
            },1);
            
        }
        
        for(var i=0;i<dynamicItem.length;i++){
            arrT.push(dynamicItem.eq(i).offset().top);
        }
        scrollRun();
        $(window).scroll(function(){ 
            scrollRun();
        })
        function scrollRun(){
            var scoreboxTop = dynamicBox.offset().top;
            for(var i=0;i<arrT.length;i++){
                if($(window).scrollTop()+$(window).height()>arrT[i]){
                    if(j==0){
                        fenRun();
                        j+=1;
                    }
                }
            }
        }
    }
})