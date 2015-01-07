$(function(){
	var detailsMain = {
		/*图片切换*/
		tabImgShow:function(){
			var boxId = $(".Mod_imgShow");
			var pic = boxId.find(".big_img img");
			var liArr = boxId.find(".thumb_list li");
			/*鼠标经过缩略图*/
			liArr.mouseenter(function(e){
				var url = $(this).find("img").attr("data-img");
				pic.attr("src",url).css("opacity",0).stop().animate({"opacity":1});
				$(this).addClass("cur").siblings().removeClass("cur");
			})
			
		},
        changeKind:function(){
            $(".kind_list li").click(function(){
                $(this).siblings("li").removeClass("cur");
                $(this).addClass("cur");
            })
        },
        changeNun:function(){
            var ipt = $("#ipt_num .input_num");
            $("#ipt_num .btn_more").click(function(){
                var n = parseInt(ipt.val());
                if(n>=0){
                    ipt.val(n+1);
                }
            });
            $("#ipt_num .btn_less").click(function(){
                var n = parseInt(ipt.val());
                if(n>0){
                    ipt.val(n-1);
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
		tabListChange:function(){
			var $div_li=$(".tab_list_box .list_tab li");
			$div_li.click(function(){
				$(this).addClass("cur").siblings().removeClass("cur");
				var index=$div_li.index(this);
				$(".tab_list_box > div").eq(index).show()
									 .siblings("div").hide();
			});
		},
		init:function(){
			detailsMain.tabImgShow();
            detailsMain.changeKind();
            detailsMain.changeNun();
			detailsMain.headerSubBar();
			detailsMain.allKind();
			//detailsMain.tabListChange();
		}
	}
	window.onload = function(){
		detailsMain.init();
	}
});






















