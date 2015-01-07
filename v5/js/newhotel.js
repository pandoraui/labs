// 新酒店频道

$(function(){
    //悬浮滑动
    $("body").delegate("a.text-cover","mouseenter",function(){
        var thiscover = $(this).find(".ctext");
        var _height = thiscover.outerHeight();
        thiscover.stop().animate({ "bottom":"0" }, 300);
    })
    $("body").delegate("a.text-cover","mouseleave",function(){
        var thiscover = $(this).find(".ctext");
        var _height = thiscover.outerHeight();
        thiscover.stop().animate({"bottom": -_height}, 500);
    })
    
    
    if ( $.browser.msie && $.browser.version <= 8 ){
        responsive();
        $(window).resize(function(){
            responsive();
        })
    }
    
    function responsive(){
        var $width = $(window).width();
        if($width < 1200){
            $(".wrap").css({"width":1000});
            $("#hslides").css({"width":580});
        }else{
            $(".wrap").css({"width":1200});
            $("#hslides").css({"width":780});
        }

        //if $width 
    }
    
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
    
    
})



$(function(){
    /*promo*/
    (function(a){a.fn.extend({banner_thaw:function(b){b=a.extend({thumbObj:null,botPrev:null,botNext:null,thumbNowClass:"hover",thumbOverEvent:true,slideTime:1000,autoChange:true,clickFalse:true,overStop:true,changeTime:5000,delayTime:300},b||{});var h=a(this);var i;var k=h.size();var e=0;var g;var c;var f;function d(){if(e!=g){if(b.thumbObj!=null){a(b.thumbObj).removeClass(b.thumbNowClass).eq(g).addClass(b.thumbNowClass)}if(b.slideTime<=0){h.eq(e).hide();h.eq(g).show()}else{h.eq(e).fadeOut(b.slideTime);h.eq(g).fadeIn(b.slideTime)}e=g;if(b.autoChange==true){clearInterval(c);c=setInterval(j,b.changeTime)}}}function j(){g=(e+1)%k;d()}h.hide().eq(0).show();if(b.thumbObj!=null){i=a(b.thumbObj);i.removeClass(b.thumbNowClass).eq(0).addClass(b.thumbNowClass);i.click(function(){g=i.index(a(this));d();if(b.clickFalse==true){return false}});if(b.thumbOverEvent==true){i.mouseenter(function(){g=i.index(a(this));f=setTimeout(d,b.delayTime)});i.mouseleave(function(){clearTimeout(f)})}}if(b.botNext!=null){a(b.botNext).click(function(){if(h.queue().length<1){j()}return false})}if(b.botPrev!=null){a(b.botPrev).click(function(){if(h.queue().length<1){g=(e+k-1)%k;d()}return false})}if(b.autoChange==true){c=setInterval(j,b.changeTime);if(b.overStop==true){h.mouseenter(function(){clearInterval(c)});h.mouseleave(function(){c=setInterval(j,b.changeTime)})}}}})})(jQuery);
    
    

    $("#hslides .hslideimg li").banner_thaw({
        thumbObj: ".hslidenav li",
        thumbNowClass: "active",
        botPrev:"span.hprev",
        botNext:"span.hnext",
        overStop: true,
        changeTime: 3000
    });
    
}); 