

//滚动悬浮
//(function(e){"use strict";e.fn.pin=function(t){var n=0,r=[],i=!1;t=t||{};var s=function(){for(var n=0,s=r.length;n<s;n++){var o=r[n];if(t.minWidth&&e(window).width()<=t.minWidth){o.parent().is(".pin-wrapper")&&o.unwrap(),o.css({width:"",left:"",top:"",position:""}),i=!0;continue}i=!1;var u=t.containerSelector?o.closest(t.containerSelector):e(document.body),a=o.offset(),f=u.offset(),l=o.offsetParent().offset();o.parent().is(".pin-wrapper")||o.wrap("<div class='pin-wrapper'>"),o.data("pin",{from:t.containerSelector?f.top:a.top,to:f.top+u.height()-o.outerHeight(),end:f.top+u.height(),parentTop:l.top}),o.css({width:o.outerWidth()}),o.parent().css("height",o.outerHeight())}},o=function(){if(i)return;n=window.scrollY;for(var t=0,s=r.length;t<s;t++){var o=e(r[t]),u=o.data("pin"),a=u.from,f=u.to;if(a+o.outerHeight()>u.end){o.css("position","");continue}a<n&&f>n?o.css("position")!="fixed"&&o.css({left:o.offset().left,top:0}).css("position","fixed"):n>=f?o.css({left:"",top:f-u.parentTop}).css("position","absolute"):o.css({position:"",top:"",left:""})}},u=function(){s(),o()};return this.each(function(){var t=e(this),n=e(this).data("pin")||{};if(n&&n.update)return;r.push(t),e("img",this).one("load",s),n.update=u,e(this).data("pin",n)}),e(window).scroll(o),e(window).resize(function(){s()}),s(),e(window).load(u),this}})(jQuery);

(function ($) {
    "use strict";
    $.fn.pin = function (options) {
        var scrollY = 0, elements = [], disabled = false, $window = $(window);

        options = options || {};

        var recalculateLimits = function () {
            for (var i=0, len=elements.length; i<len; i++) {
                var $this = elements[i];

                if (options.minWidth && $window.width() <= options.minWidth) {
                    if ($this.parent().is(".pin-wrapper")) { $this.unwrap(); }
                    $this.css({width: "", left: "", top: "", position: ""});
                    if (options.activeClass) { $this.removeClass(options.activeClass); }
                    disabled = true;
                    continue;
                } else {
                    disabled = false;
                }

                var $container = options.containerSelector ? $this.closest(options.containerSelector) : $(document.body);
                var offset = $this.offset();
                var containerOffset = $container.offset();
                var parentOffset = $this.offsetParent().offset();

                if (!$this.parent().is(".pin-wrapper")) {
                    $this.wrap("<div class='pin-wrapper'>");
                }

                $this.data("pin", {
                    from: options.containerSelector ? containerOffset.top : offset.top,
                    to: containerOffset.top + $container.height() - $this.outerHeight(),
                    end: containerOffset.top + $container.height(),
                    parentTop: parentOffset.top
                });

                $this.css({width: $this.outerWidth()});
                $this.parent().css("height", $this.outerHeight());
            }
        };

        var onScroll = function () {
            if (disabled) { return; }

            scrollY = $window.scrollTop();

            var elmts = [];
            for (var i=0, len=elements.length; i<len; i++) {
                var $this = $(elements[i]),
                    data  = $this.data("pin");

                if (!data) { // Removed element
                  continue;
                }

                elmts.push($this); 
                  
                var from  = data.from,
                    to    = data.to;
              
                if (from + $this.outerHeight() > data.end) {
                    $this.css('position', '');
                    continue;
                }
              
                if (from < scrollY && to > scrollY) {
                    !($this.css("position") == "fixed") && $this.css({
                        left: $this.offset().left,
                        top: 0
                    }).css("position", "fixed");
                    if (options.activeClass) { $this.addClass(options.activeClass); }
                } else if (scrollY >= to) {
                    $this.css({
                        left: "",
                        top: to - data.parentTop
                    }).css("position", "absolute");
                    if (options.activeClass) { $this.addClass(options.activeClass); }
                } else {
                    $this.css({position: "", top: "", left: ""});
                    if (options.activeClass) { $this.removeClass(options.activeClass); }
                }
          }
          elements = elmts;
        };

        var update = function () { recalculateLimits(); onScroll(); };

        this.each(function () {
            var $this = $(this), 
                data  = $(this).data('pin') || {};

            if (data && data.update) { return; }
            elements.push($this);
            $("img", this).one("load", recalculateLimits);
            data.update = update;
            $(this).data('pin', data);
        });
        
        $window.scroll(onScroll);
        $window.resize(function () { recalculateLimits(); });
        recalculateLimits();

        $window.load(update);

        return this;
      };
})(jQuery);


/*promo*/
(function(a){a.fn.extend({banner_thaw:function(b){b=a.extend({thumbObj:null,botPrev:null,botNext:null,thumbNowClass:"hover",thumbOverEvent:true,slideTime:1000,autoChange:true,clickFalse:true,overStop:true,changeTime:5000,delayTime:300},b||{});var h=a(this);var i;var k=h.size();var e=0;var g;var c;var f;function d(){if(e!=g){if(b.thumbObj!=null){a(b.thumbObj).removeClass(b.thumbNowClass).eq(g).addClass(b.thumbNowClass)}if(b.slideTime<=0){h.eq(e).hide();h.eq(g).show()}else{h.eq(e).fadeOut(b.slideTime);h.eq(g).fadeIn(b.slideTime)}e=g;if(b.autoChange==true){clearInterval(c);c=setInterval(j,b.changeTime)}}}function j(){g=(e+1)%k;d()}h.hide().eq(0).show();if(b.thumbObj!=null){i=a(b.thumbObj);i.removeClass(b.thumbNowClass).eq(0).addClass(b.thumbNowClass);i.click(function(){g=i.index(a(this));d();if(b.clickFalse==true){return false}});if(b.thumbOverEvent==true){i.mouseenter(function(){g=i.index(a(this));f=setTimeout(d,b.delayTime)});i.mouseleave(function(){clearTimeout(f)})}}if(b.botNext!=null){a(b.botNext).click(function(){if(h.queue().length<1){j()}return false})}if(b.botPrev!=null){a(b.botPrev).click(function(){if(h.queue().length<1){g=(e+k-1)%k;d()}return false})}if(b.autoChange==true){c=setInterval(j,b.changeTime);if(b.overStop==true){h.mouseenter(function(){clearInterval(c)});h.mouseleave(function(){c=setInterval(j,b.changeTime)})}}}})})(jQuery);

$(function(){
    if($.browser.msie&&$.browser.version<=7){
        $.fx.off=true
    };
    
    $(".pinned").pin({
        containerSelector: ".wrap"
    })
    
    $(".banner_list li").banner_thaw({
        thumbObj: ".banner_tab li",
        thumbNowClass: "active",
        overStop: true,
        changeTime: 4000,
        slideTime: 500
    });
    
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
    
    function JS_select(select_item,selected,tri_type){
        $select_obj=$(select_item);
        $select_obj.bind(tri_type,function(){
            var select_index = $(select_item).index(this);
            $(this).addClass(selected).siblings().removeClass(selected);
            $(tab_con).eq(tab_li_index).show().siblings(tab_con).hide();
            // return false;
        });
    };
    //JS_tab_nav(".J-tabs li",".J-switch>.tabcon","selected","click");
    
    var sidetime;
    $('.tsidebox li').bind('mouseover',function(){
        clearTimeout(sidetime);
        var that = this;
        sidetime = setTimeout(function(){
            $(that).find('dl').slideDown(300).end().siblings('li').find('dl').slideUp(300);
            var img = $(that).find('img');
            if(!img.attr('src')){
                img.attr('src',img.attr('to')).removeAttr('to');
            }
        },150)
    })
    
})

$(function(){ 

    /*选择我在的城市*/
    $('.js_city_btn').click(function(e){
        if($(this).siblings('.my_city').css('display')=='block' || $(this).siblings('.my_city').css('display')=='inline'){
            $(this).parent().removeClass('city_show');
        }else{
            e.stopPropagation();
            $(this).parent().addClass('city_show');
        }
    });
    
    $('.my_city').click(function(e){ 
        e.stopPropagation();
    });
    $('body,html').click(function(){
        $('.seach_city,.seach_gd_box').removeClass('city_show');
    });
    
    $('.my_city dd a').click(function(){ 
        var city = $(this).text();
        $(this).parents('.seach_city,.seach_gd_box').removeClass('city_show');
        $(this).parents('.seach_gd_box').addClass('gd_now_city').find('.add_city_now').text(city);
        $(this).parents('.seach_city').find('.now_city').text(city);
    });
    
    
    $('.btn_close').click(function(){ 
        $(this).parents('.seach_gd_box').removeClass('gd_now_city');
    });
    
    $('.seach_box_list:last').css('border-bottom-style','solid')
    

});

