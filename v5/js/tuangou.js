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

// promo Create:2012-3-26 for 方便控制的图片切换插件
(function(a){a.fn.extend({banner_thaw:function(b){b=a.extend({thumbObj:null,botPrev:null,botNext:null,thumbNowClass:"hover",thumbOverEvent:true,slideTime:1000,autoChange:true,clickFalse:true,overStop:true,changeTime:5000,delayTime:300},b||{});var h=a(this);var i;var k=h.size();var e=0;var g;var c;var f;function d(){if(e!=g){if(b.thumbObj!=null){a(b.thumbObj).removeClass(b.thumbNowClass).eq(g).addClass(b.thumbNowClass)}if(b.slideTime<=0){h.eq(e).hide();h.eq(g).show()}else{h.eq(e).fadeOut(b.slideTime);h.eq(g).fadeIn(b.slideTime)}e=g;if(b.autoChange==true){clearInterval(c);c=setInterval(j,b.changeTime)}}}function j(){g=(e+1)%k;d()}h.hide().eq(0).show();if(b.thumbObj!=null){i=a(b.thumbObj);i.removeClass(b.thumbNowClass).eq(0).addClass(b.thumbNowClass);i.click(function(){g=i.index(a(this));d();if(b.clickFalse==true){return false}});if(b.thumbOverEvent==true){i.mouseenter(function(){g=i.index(a(this));f=setTimeout(d,b.delayTime)});i.mouseleave(function(){clearTimeout(f)})}}if(b.botNext!=null){a(b.botNext).click(function(){if(h.queue().length<1){j()}return false})}if(b.botPrev!=null){a(b.botPrev).click(function(){if(h.queue().length<1){g=(e+k-1)%k;d()}return false})}if(b.autoChange==true){c=setInterval(j,b.changeTime);if(b.overStop==true){h.mouseenter(function(){clearInterval(c)});h.mouseleave(function(){c=setInterval(j,b.changeTime)})}}}})})(jQuery);


$(function(){
    function x_hover(box_hover,hover_class){
        $(box_hover).hover(
        function(){
            $(this).addClass(hover_class);
        },function(){
            $(this).removeClass(hover_class);
        })
    };
    //x_hover("dl.titem","titem-hover");
    
    $('dl.titem').hover(
    function(){
        $(this).addClass('titem-hover').find('.tintro').slideDown();
    },function(){
        $(this).removeClass('titem-hover').find('.tintro').stop().slideUp(200);
    });
    
    $(".countdown").ui('countdown',{
        format: 'dd:hh:mm'
    })
    
    
    
})