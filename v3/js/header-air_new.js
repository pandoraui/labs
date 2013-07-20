function bookmark(){
	var title="驴妈妈旅游网";
	var url="http://www.lvmama.com/";
	if(window.sidebar)window.sidebar.addPanel(title,url,"");
	else if(window.opera&&window.print){
		var mbm=document.createElement('a');
		mbm.setAttribute('rel','sidebar');
		mbm.setAttribute('href',url);
		mbm.setAttribute('title',title);
		mbm.click()
	}
	else if(document.all)window.external.AddFavorite(url,title);
	else alert("请使用Ctrl+D添加收藏！")
};

function loginCas(){
	window.location="http://login.lvmama.com/nsso/login?service="+encodeURIComponent(document.location)
};

function xhshowtips(){
    $('.tapbar-inner').append('<span id="stips" class="stips"><i class="sarrow"></i>验证邮箱可获300积分，<a href="http://www.lvmama.com/myspace/userinfo.do" hidefocus="false">立即验证</a><i class="sclose">×</i></span>');
    var useremail = ""; 
    try{ 
        var userCookie= decodeURIComponent(document.cookie).match(/EMV\=.+/) + ""; 
        useremail = userCookie.replace('EMV=',''); 
            if(useremail.indexOf(";")>=0){ 
                useremail = useremail.substring(0,useremail.indexOf(";")); 
            }else{ 
                useremail = useremail.substring(0,useremail.length); 
            } 
    }catch(e){ 
        var userCookie = unescape(document.cookie).match(/EMV\=.+/)+""; 
        useremail = userCookie.replace('EMV=',''); 
        useremail = useremail.substring(0,useremail.indexOf(";")); 
        if(useremail.indexOf(";")>=0){ 
            useremail = useremail.substring(0,useremail.indexOf(";")); 
        }else{ 
            useremail = useremail.substring(0,useremail.length); 
        } 
    } finally{ 
        if(useremail=='U' || useremail=='E'){ 
            //显示
             return true;
        }else{
            // 不显示
            return false;
        } 
    }
    
}

$('.sclose').live('click',function(){
    $(this).parent().hide();
})

$(document).ready(function(){
	if($.browser.msie&&$.browser.version<=8){
		//$.fx.off=true
	};
	function loadUserName(){
		
		var username = "";
		try{
			username = decodeURIComponent(document.cookie).match(/UN\=.+\^!\^/);
		}catch(e){
			username = unescape(document.cookie).match(/UN\=.+\^!\^/);
		}
		$('#J_login').html(username!=null?"<span class='lv-welcome'>\u60a8\u597d\uff0c<a href='http://www.lvmama.com/myspace/index.do'>"+username[0].replace('UN=','').replace(/\+/g,' ').replace('^!^','')+
			"</a></span><a rel='nofollow' href='http://login.lvmama.com/nsso/logout' class='lv-logout'>[\u9000\u51fa]</a>":"<span class='lv-welcome'>\u60a8\u597d\uff0c\u6b22\u8fce\u6765\u5230\u9a74\u5988\u5988!</span><a onclick='javascript:loginCas();' class='link-login'>\u767b\u5f55</a><a href='http://login.lvmama.com/nsso/register/registering.do' rel='nofollow' class='link-register' >\u6ce8\u518c</a>");
        if(username!=null && xhshowtips()){
            $('#stips').show();
        }else{
            $('#stips').hide();
        }
	};
	loadUserName();
	function crumbEffNew(){
		var menuHd=$(".menu-hd"),t,menuBd=$(".menu-bd");
		function hidediv(obj,other){
			if($(obj).is(":hidden")){
				clearTimeout(t)
			}
			else{
				obj.hide();
				other.removeClass("current-crumb")
			}
		};
		menuHd.each(function(i){
			$(this).hover(function(){
				for(z=0;z<menuHd.length;z++){
					menuBd.eq(z).hide();
					menuHd.eq(z).removeClass("current-crumb");
					if(z==i){
						$(this).addClass("current-crumb");
						clearTimeout(t);
						menuBd.eq(i).show()
					}
				}
			}
			,function(){
				var _this=$(this);
				t=setTimeout(function(){
					hidediv(menuBd.eq(i),_this)
				}
				,500)
			})
		});
		menuBd.each(function(s){
			$(this).hover(function(){
				clearTimeout(t)
			}
			,function(){
				menuBd.eq(s).hide();
				menuHd.eq(s).removeClass("current-crumb")
			})
		})
	};
    
    /*
	$('ul.hh_shortcut_nav li.hh_link').hover(function(){
		$(this).prev().addClass('hh_background_none');
		$('.hh_lvmama_sub',this).show().css({
			"-moz-transition":"-moz-transform .5s ease-in, background .5s ease-in"
		});
		$('.hh_mylvmama',this).addClass('hh_mylvmama2')
	}
	,function(){
		$('.hh_shortcut_nav li').removeClass('hh_background_none');
		$('.hh_lvmama_sub',this).hide();
		$('.hh_mylvmama',this).removeClass('hh_mylvmama2')
	});
    */
    
	$("body").append('<a id="goTopBtn" href="javascript:;" title="返回顶部"></a><a href="http://www.lvmama.com/userCenter/user/transItfeedBack.do" target="_blank" id="Feedback" title="意见反馈"></a>');
    
	var backToTopFunc=function(){
		$("#Feedback").ui("floatDiv",{
			bottom:20,lazyload:500
		});
		$("#goTopBtn").ui("floatDiv",{
			bottom:60,hidetop:10,lazyload:500
		})
	};
	if($.fn.ui){
		backToTopFunc()
	}
	else{
		$.getScript("http://pic.lvmama.com/js/ui/lvmamaUI/lvmamaUI.js",function(){
			backToTopFunc()
		})
	};
	$('#goTopBtn').click(function(){
		$(document).scrollTop(0)
	});
    
	function getCurrentIframe(){
		var d=document;
		var winHeight=d.documentElement.clientHeight;
		var iframe=d.getElementsByTagName("IFRAME");
		var arr=[];
		for(var i=0;len=iframe.length,i<len;i++){
			var n=iframe[i];
			if(n.getAttribute("SRCTO")){
				arr.push(n)
			}
		};
		return arr
	};
	var d=document;
	var aLinks=d.getElementsByTagName("a");
	for(var i=0;len=aLinks.length,i<len;i++){
		aLinks[i].setAttribute("hideFocus","false")
	};
	var iframeload=function(){
		var arr=getCurrentIframe();
		for(var i=0;i<arr.length;i++){
			arr[i].src=arr[i].getAttribute("srcto")
		}
	};
	$(window).scroll(function(){
		var top=$(this).scrollTop();
		if(top>$(window).height()&&iframeload){
			iframeload();
			iframeload=undefined
		}
	});
	$("a.auto_local").live("click",function(){
		setTimeout(function(){
			var obj=$("input.button_search:visible");
			if(obj.size()==0){
				obj=$("#searchButton")
			};
			obj.click()
		}
		,20)
	});
    
    
	//$('#___szfw_logo___').bind("contextmenu",function(){
	//	return false
	//});
	//
	//var str=' <p class="y_s_one"><input type="text" class="yjdy_input" value="" id="y_input_b"/><a href="javascript:void(0)" class="yjdy_btn_b" id="yjdy_btn_b">订阅</a>'+'	 <a href="http://www.lvmama.com/edm/showSubscribeEmail.do" target="_blank" rel="nofollow" class="lvtg_link_blue" style="*position:relative;*top:-4px">高级订阅</a>'+'	 <span class="y_txt_info_b" id="y_txt_info_b">抢先获取【特价促销】信息</span>'+' </p>'+'	<p class="y_s_two dn"><img src="http://pic.lvmama.com/img/new_v/ob_yjdy/y_loading.gif"></p>'+'	<p class="y_s_three dn">恭喜您订阅成功!&nbsp;<a id="y_link_return_b" rel="nofollow" target="_blank" class="y_link_blue" href="http://www.lvmama.com/edm/showSubscribeEmail.do" hidefocus="false">查看更多订阅</a></p>'+'	<div class="y_error_msg" id="y_error_msg_b">'+'	 <i class="y_jiao"></i>'+'	 <label style="display: inline-block;">请输入你的Email地址</label>'+' </div>';
	//if($("span.hh_boke_box").length>0){
	//	$("span.hh_boke_box").html(str);
	//	$("body").append($("#y_error_msg_b"));
	//	UI.js(true,"http://pic.lvmama.com/js/new_v/ob_yjdy/edm_index_subscribe.js",function(){
	//		$("#y_input").val("").focus(function(){
	//			$("#y_error_msg").css({
	//				left:$(this).offset().left,top:$(this).offset().top+$(this).outerHeight(true)+10
	//			}).show()
	//		}).blur(function(){
	//			$("#y_error_msg").hide()
	//		})
	//	});
	//}
});

$(function(){
    /*=============图片延迟加载=============*/
	$.expr[":"].loading=function(elt,index){
		var height=$(window).height();
		var top=$(elt).offset().top;
		return top>$(window).scrollTop()&&top<(height+$(window).scrollTop())
	};
	$.expr[":"].loaded=function(elt,index){
		var height=$(window).height();
		var top=$(elt).offset().top;
		return top<height
	};
	var loadImg=function(){
        this.src=$(this).attr("to");
        $(this).removeAttr("to");
        
		this.onerror=function(){
			this.src="http://pic.lvmama.com/img/cmt/img_120_60.jpg"
		}
	};
	var imgTimeId=null;
	var scrollImgLoading=function(){
		clearTimeout(imgTimeId);
		imgTimeId=setTimeout(function(){
			$("img[to]:loading").each(function(){
				loadImg.call(this)
			});
			if($("img[to]").size()==0){
				$(window).unbind('scroll',scrollImgLoading)
			}
		}
		,200)
	};
	$(window).bind('scroll',scrollImgLoading);
	$("img[to]:loaded").each(function(){
		loadImg.call(this)
	});
	setTimeout(function(){
		$("img[to]:loaded").each(function(){
			loadImg.call(this)
		})
	}
	,1000);
	/*============延迟加载结束===========*/
   
});

(function($){
	$.fn.wb_ajaxTab=function(options){
		var opts=$.extend({},$.fn.wb_ajaxTab.defaults,options);
		$this=$(this);
		var $tabs=$this.find(opts._tabs).find("li"),$pane=$this.find(opts._panes),$inTabs=$this.find(opts._inTabs).find("a"),$inPane=$this.find(opts._inPane);
		var $moreTab=$this.find(opts._moreTabs),$morePanel=$this.find(opts._morePanel);
		$morePanel.hover(function(){
			$(this).addClass(opts._morePanelHover)
		}
		,function(){
			$(this).removeClass(opts._morePanelHover)
		});
		var $morePanelBtn=$morePanel.find("a");
		$morePanelBtn.click(function(){
			var _cityName=$(this).text();
			var _rightTabIndex;
			$tabs.each(function(index){
				var _tabCityName=$(this).find("a").text();
				if(_tabCityName===_cityName){
					_rightTabIndex=$(this).index()
				}
			});
			$moreTab.hide();
			$tabs.removeClass(opts._currentTab);
			$tabs.eq(_rightTabIndex).addClass(opts._currentTab);
			$tabs.eq(_rightTabIndex).css("display","block");
			$pane.hide();
			$pane.eq(_rightTabIndex).show();
			var _json=$tabs.eq(_rightTabIndex).find("a").attr("data-params");
			ajaxInsert(_json);
			$morePanel.removeClass(opts._morePanel)
		});
		$tabs.each(function(index){
			$(this).find("a").click(function(){
				$tabs.removeClass(opts._currentTab);
				$tabs.eq(index).addClass(opts._currentTab);
				$pane.hide();
				var $thisPane=$pane.eq(index),$thisLi=$thisPane.find("li");
				if($thisLi.length>0){
					$thisPane.show();
					$thisLi.eq(0).addClass(opts._inCurrentTab).siblings().removeClass(opts._inCurrentTab)
				};
				var _json=$(this).attr("data-params");
				ajaxInsert(_json)
			})
		});
		$inTabs.each(function(){
			$(this).click(function(){
				$(this).parents(opts._inTabs).find("li").removeClass(opts._inCurrentTab);
				$(this).parent("li").addClass(opts._inCurrentTab);
				var _json=$(this).attr("data-params");
				ajaxInsert(_json)
			})
		});
		function ajaxInsert(_params){
			var _url=opts.url;
			var $json=eval("("+_params+")");
			$.ajax({
				url:_url,data:$json,dataType:"html",cache:true,ifModified:true,success:function(data){
					$inPane.empty();
					$inPane.append(data)
				}
			})
		}
	}
})(jQuery);
function crumbEff(){
	var menuHd=$("a.menu-hd"),t,menuBd=$("div.menu-bd");
	function hidediv(obj,other){
		if($(obj).is(":hidden")){
			clearTimeout(t)
		}
		else{
			obj.hide();
			other.removeClass("current-crumb")
		}
	};
	menuHd.each(function(i){
		$(this).hover(function(){
			for(z=0;z<menuHd.length;z++){
				menuBd.eq(z).hide();
				menuHd.eq(z).removeClass("current-crumb");
				if(z==i){
					$(this).addClass("current-crumb");
					clearTimeout(t);
					menuBd.eq(i).show()
				}
			}
		}
		,function(){
			var _this=$(this);
			t=setTimeout(function(){
				hidediv(menuBd.eq(i),_this)
			}
			,500)
		})
	});
	menuBd.each(function(s){
		$(this).hover(function(){
			clearTimeout(t)
		}
		,function(){
			menuBd.eq(s).hide();
			menuHd.eq(s).removeClass("current-crumb")
		})
	})
};
$.cookie=function(name,value,options){
	if(typeof value!='undefined'){
		options=options||{};
		if(value===null){
			value='';
			options.expires=-1
		};
		var expires='';
		if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){
			var date;
			if(typeof options.expires=='number'){
				date=new Date();
				date.setTime(date.getTime()+(options.expires*24*60*60*1000))
			}
			else{
				date=options.expires
			};
			expires='; expires='+date.toUTCString()
		};
		var path=options.path?'; path='+(options.path):'';
		var domain=options.domain?'; domain='+(options.domain):'';
		var secure=options.secure?'; secure':'';
		document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('')
	}
	else{
		var cookieValue=null;
		if(document.cookie&&document.cookie!=''){
			var cookies=document.cookie.split(';');
			for(var i=0;i<cookies.length;i++){
				var cookie=jQuery.trim(cookies[i]);
				if(cookie.substring(0,name.length+1)==(name+'=')){
					cookieValue=decodeURIComponent(cookie.substring(name.length+1));
					break
				}
			}
		};
		return cookieValue
	}
}
function getLOSCCookie(objName){   
	var arrStr = document.cookie.split("; "); 
	var temp;
	for(var i = 0,l=arrStr.length;i < l;i++){    
		 temp=arrStr[i].split("=");    
		if(temp[0] == objName) {
			return unescape(temp[1]);   
		}
	}
}


/* 获取cookie添加右侧浮动 */

(function ($) {
    $.xcookie = {
        cookie: function (name, value, options) {
            var path = options.path ? '; path=' + (options.path) : '',
                domain = options.domain ? '; domain=' + (options.domain) : '',
                secure = options.secure ? '; secure' : '',
                expires = '';
            if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
                var date;
                if (typeof options.expires == 'number') {
                    date = new Date();
                    date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
                } else {
                    date = options.expires;
                }
                expires = '; expires=' + date.toUTCString();
            }
            document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
        },
        setCookie: function (name, value, options) {
            var options = options || {};
            this.cookie(name, value, options);
        },
        getCookie: function (name) {
            var cookieValue = null,
                doc = document;
            if (doc.cookie && doc.cookie != '') {
                var cookies = doc.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = $.trim(cookies[i]);
                    if (cookie.substring(0, name.length + 1) == (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        },
        deleteCookie: function (name, options) {
            var options = options || {},
                value = '';
            options.expires = -1;
            this.cookie(name, value, options);
        }
    }
})(jQuery);

$(function(){
        
    // html代码
    var _float_box = '<div class="sj_pop">'
            + ' <a href="http://shouji.lvmama.com" class="shoujiQRlink" target="_blank"><img src="http://pic.lvmama.com/img/v3/shoujiQR.png" width="104" height="104" class="shoujiQRimg">'
            + ' 点击或扫描马上<br>下载手机客户端</a>'
            + ' <a href="javascript:;" class="shoujiQRclose"></a>'
            + ' </div>';
    
    var COOKIE_NAME = 'floatRcookie';
    
    if(!$.xcookie.getCookie(COOKIE_NAME)){
        $('body:not("#xhindex")').append(_float_box);
    }
    
    // 浮动广告 设置cookie，通过时间间隔
    $(".shoujiQRclose").click(function(){
        $(".sj_pop").hide();
        $.xcookie.setCookie(COOKIE_NAME, 'floatRcookie', { path: '/', expires: 1 });
        return false;
    })
    
})

