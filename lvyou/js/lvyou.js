// 大内容js

$(function(){
    // tabs
    function JS_tab_nav(tab_nav,tab_con,selected,tri_type){
        $tab_obj=$(tab_nav);
        $tab_obj.bind(tri_type,function(){
            var tab_li_index = $(tab_nav).index(this);
            $(this).addClass(selected).siblings().removeClass(selected);
            $(tab_con).eq(tab_li_index).show().siblings(tab_con).hide();
            // return false;
        });
    };
    JS_tab_nav(".J-tabs li",".J-switch>.tabcon","selected","click");
    
    
    function x_hover(box_hover,hover_class){
        $(box_hover).hover(
        function(){
            $(this).addClass(hover_class);
        },function(){
            $(this).removeClass(hover_class);
        })
    };
    $(".userigone").click(function(){
        $(this).parent().next().removeClass("hide");
    })
    $(".ui-close").click(function(){
        $(this).parent().addClass("hide");
    })
    
    $(".J_sildedown li:not('.xt1')").hover(
    function(){
        var _top = $(this).height() - $(this).find(".c-text").height();
        _top = _top>0 ? _top : 0;
        $(this).find(".c-text").stop().animate({"top":_top},200);
    },function(){
        var _top = $(this).height() - 35;
        $(this).find(".c-text").stop().animate({"top":_top},300);
    })
    $(".J_sildedown li.xt1").hover(
    function(){
        var _top = $(this).height() - $(this).find(".c-text").height()-$(this).find(".c-text").find("p").height()-15;
        _top = _top>0 ? _top : 0;
        $(this).find(".c-text").stop().animate({"top":_top},200);
    },function(){
        var _top = $(this).height() - 45;
        $(this).find(".c-text").stop().animate({"top":_top},300);
    })
    
    //目的地3-图片轮播
    function activeSlide(index){
        $('.slide-content li').eq(index).addClass('active').siblings('li').removeClass('active');
        $('.slide-nav li').eq(index).addClass('active').siblings('li').removeClass('active');
    }
    $('.slide-nav li').on('mouseover', function(){
        clearInterval(slideTime);
        var index = $(this).index();
        activeSlide(index);
    });
    $('.slide-nav li').on('mouseout', function(){
        slideTime = setInterval(autoSlide,5000);
    })

    function autoSlide(){
        var index = $('.slide-nav').find('.active').index() || 0;
        index > 2 ? index = 0 : index++;
        activeSlide(index);
    }
    var slideTime = setInterval(autoSlide,5000);
    
    function quickmenu(menu_nav,menu_drop){
        var prev = null;
        var times;
        var self;
        function timeFun(){
            $(self).removeClass("menu-item-hover");
            _index = $(".menu-item").index(self);
            $(menu_drop).eq(_index).hide();
            clearTimeout(self.timeId);
        }
        $(menu_nav).mouseenter(function(){
            _index = $(".menu-item").index(this);
            $(this).addClass("menu-item-hover");
            if(prev!=this && prev!=null){
                clearTimeout(prev.timeId);
                $(menu_drop).eq(_index).show();
            }else{
                var e = this;
                 _index = $(".menu-item").index(e);
                e.timeId = setTimeout(function(){
                    $(menu_drop).eq(_index).show(200);
                },300);
            }
            prev = this;
        }).mouseleave(function(){
                self = this
            times = setTimeout(timeFun,10);
        });
        $('.quick-menu').mouseleave(function(){
            prev = null;
        })
        $(menu_drop).mouseenter(function(){
            clearTimeout(times);
        })
        $(menu_drop).mouseleave(function(){
            times = setTimeout(timeFun,10);
        })
    }

    quickmenu("div.menu-item",".quick-menu-drop");
    
    $(".sea-info").mouseenter(function(e){
        var obj = e.target || e.srcElement;
        if(obj.className!="iwant-list"){
            $(this).toggleClass("sea-info-hover");
        }
    }).mouseleave(function(){
        var e = this;
        e.timeId = setTimeout(function(){
            $(e).removeClass("sea-info-hover");
        },200)
    }).mouseenter(function(){
        clearTimeout(this.timeId)
    })
    
    
})



