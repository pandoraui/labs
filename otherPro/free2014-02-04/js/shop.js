/**
 * Created with JetBrains PhpStorm.
 * User: xukai1
 * Date: 14-1-9
 * Time: 下午3:01
 * To change this template use File | Settings | File Templates.
 */
$(function(){
    var shopFn = {
        allKind:function(){
            var btn =$(".mod_pro_kind h4");
            btn.eq(0).find("i").addClass("icon_slide_up");
            btn.eq(0).siblings(".sub_list").show();
            btn.click(function(){
                if(!$(this).siblings(".sub_list").is(":hidden")){
                    $(this).siblings(".sub_list").slideUp();
                    $(this).find("i").addClass("icon_slide_down").removeClass("icon_slide_up");
                }
                else{
                    //btn.find("i").addClass("icon_slide_down").removeClass("icon_slide_up");
                    //btn.siblings(".sub_list").slideUp();
                    $(this).find("i").addClass("icon_slide_up").removeClass("icon_slide_down");
                    $(this).siblings(".sub_list").slideDown();
                }
            });
        },
        headerSubBar:function(){
            var m = $("#header_sub_bar h3"),sub=$("#header_sub_bar .sub_list"),subLi=$("#header_sub_bar .sub_list .sub_li"),list2 = $("#header_sub_bar .list_2");
            m.mouseenter(function(){
                sub.show();
            })
//            m.mouseleave(function(){
//                    sub.hide();
//                })
            sub.mouseleave(function(){
                sub.hide();
            })
            subLi.mouseenter(function(){
                $(this).find(".list_2").show();
                $(this).addClass("cur");
            })
            subLi.mouseleave(function(){
                $(this).find(".list_2").hide();
                $(this).removeClass("cur");
            })
        },
        bidBaner:function(){
            var time = "";
            var index = 1;
            $(function () {
                showimg(index);
                //鼠标移入移出
                $(".imgnum span").hover(function () {
                    clearTimeout(time);
                    var icon=$(this).text();
                    $(".imgnum span").removeClass("onselect").eq(icon-1).addClass("onselect");
                    $("#banner_img li").hide().stop(true,true).eq(icon-1).fadeIn("slow");
                }, function () {
                    index=$(this).text()> 4 ? 1 :parseInt($(this).text())+1;
                    time = setTimeout("showimg(" + index + ")", 3000);
                });
            });

            function showimg(num) {
                index = num;
                $(".imgnum span").removeClass("onselect").eq(index-1).addClass("onselect");
                $("#banner_img li").hide().stop(true,true).eq(index-1).fadeIn("slow");
                index = index + 1 > 5 ? 1 : index + 1;
                time = setTimeout("showimg(" + index + ")", 3000);
            }
        },
        main:function(){
            this.allKind();
            this.headerSubBar();
            this.bidBaner();
        }
    }
    shopFn.main();
})