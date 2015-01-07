/* jQuery jtClite beta_v0.1  */
/*.scoll_box>>>.s_box>>>.s_con至少需要三级目录*/
(function($){$.fn.jCarouselLite=function(o){o=$.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:200,easing:null,vertical:false,circular:true,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null},o||{});return this.each(function(){var b=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var c=$(this),ul=$("ul",c),tLi=$("li",ul),tl=tLi.size(),v=o.visible;if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v}var f=$("li",ul),itemLength=f.size(),curr=o.start;c.css("visibility","visible");f.css({overflow:"hidden",float:o.vertical?"none":"left"});ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});c.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var g=o.vertical?height(f):width(f);var h=g*itemLength;var j=g*v;f.css({width:f.width(),height:f.height()});ul.css(sizeCss,h+"px").css(animCss,-(curr*g));c.css(sizeCss,j+"px");if(o.btnPrev)$(o.btnPrev).click(function(){return go(curr-o.scroll)});if(o.btnNext)$(o.btnNext).click(function(){return go(curr+o.scroll)});if(o.btnGo)$.each(o.btnGo,function(i,a){$(a).click(function(){return go(o.circular?o.visible+i:i)})});if(o.mouseWheel&&c.mousewheel)c.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll)});if(o.auto)setInterval(function(){go(curr+o.scroll)},o.auto+o.speed);function vis(){return f.slice(curr).slice(0,v)};function go(a){if(!b){if(o.beforeStart)o.beforeStart.call(this,vis());if(o.circular){if(a<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*g)+"px");curr=a==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll}else if(a>=itemLength-v+1){ul.css(animCss,-((v)*g)+"px");curr=a==itemLength-v+1?v+1:v+o.scroll}else curr=a}else{if(a<0||a>itemLength-v)return;else curr=a}b=true;ul.animate(animCss=="left"?{left:-(curr*g)}:{top:-(curr*g)},o.speed,o.easing,function(){if(o.afterEnd)o.afterEnd.call(this,vis());b=false});if(!o.circular){$(o.btnPrev+","+o.btnNext).removeClass("disabled");$((curr-o.scroll<0&&o.btnPrev)||(curr+o.scroll>itemLength-v&&o.btnNext)||[]).addClass("disabled")}}return false}})};function css(a,b){return parseInt($.css(a[0],b))||0};function width(a){return a[0].offsetWidth+css(a,'marginLeft')+css(a,'marginRight')};function height(a){return a[0].offsetHeight+css(a,'marginTop')+css(a,'marginBottom')}})(jQuery);
/*promo*/
(function(a){a.fn.extend({banner_thaw:function(b){b=a.extend({thumbObj:null,botPrev:null,botNext:null,thumbNowClass:"hover",thumbOverEvent:true,slideTime:1000,autoChange:true,clickFalse:true,overStop:true,changeTime:5000,delayTime:300},b||{});var h=a(this);var i;var k=h.size();var e=0;var g;var c;var f;function d(){if(e!=g){if(b.thumbObj!=null){a(b.thumbObj).removeClass(b.thumbNowClass).eq(g).addClass(b.thumbNowClass)}if(b.slideTime<=0){h.eq(e).hide();h.eq(g).show()}else{h.eq(e).fadeOut(b.slideTime);h.eq(g).fadeIn(b.slideTime)}e=g;if(b.autoChange==true){clearInterval(c);c=setInterval(j,b.changeTime)}}}function j(){g=(e+1)%k;d()}h.hide().eq(0).show();if(b.thumbObj!=null){i=a(b.thumbObj);i.removeClass(b.thumbNowClass).eq(0).addClass(b.thumbNowClass);i.click(function(){g=i.index(a(this));d();if(b.clickFalse==true){return false}});if(b.thumbOverEvent==true){i.mouseenter(function(){g=i.index(a(this));f=setTimeout(d,b.delayTime)});i.mouseleave(function(){clearTimeout(f)})}}if(b.botNext!=null){a(b.botNext).click(function(){if(h.queue().length<1){j()}return false})}if(b.botPrev!=null){a(b.botPrev).click(function(){if(h.queue().length<1){g=(e+k-1)%k;d()}return false})}if(b.autoChange==true){c=setInterval(j,b.changeTime);if(b.overStop==true){h.mouseenter(function(){clearInterval(c)});h.mouseleave(function(){c=setInterval(j,b.changeTime)})}}}})})(jQuery);
/*<a href="javascript:bookmark()" title="将本页加入收藏" target="_self">加入收藏</a>*/
function bookmark(){
var title=document.title
var url=document.location.href
if (window.sidebar)
	window.sidebar.addPanel(title, url,""); 
else if( window.opera && window.print ){ 
	var mbm = document.createElement('a'); 
	mbm.setAttribute('rel','sidebar'); 
	mbm.setAttribute('href',url); 
	mbm.setAttribute('title',title); 
	mbm.click();} 
else if( document.all )
	window.external.AddFavorite( url, title);
else alert("加入失败！请按ctrl+d来手工添加！"); 
}
/*<a title="设置为浏览器首页(启始页)" target="_self" href="#" onClick="setHome(this,window.location)"></a>*/
function setHome(obj,vrl){
	try{obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);}
	catch(e){
		if(window.netscape){
			try {netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");}
			catch(e){alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入'about:config'并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
			}
		var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
		prefs.setCharPref('browser.startup.homepage',vrl);
		}
	}
}
$(function(){
	
	var tab_menu_li = $('.hmjbtj dl');//高亮当前选项
  tab_menu_li.mouseover(function(){
  	$(this).addClass('selected')
  			 .siblings().removeClass('selected');
  });
	
	var tab_menu_li = $('.leftnav dd');//高亮当前选项
  tab_menu_li.mouseover(function(){
  	$(this).addClass('selected')
  			 .siblings().removeClass('selected');
  });
	
	var tab_menu_li = $('.tabmenu li');//高亮当前选项
  tab_menu_li.mouseover(function(){
  	$(this).addClass('selected')
  			 .siblings().removeClass('selected');
  });
  
  
  var scoll_nav_li = $('.scoll_nav li');//切换加滚动样式
  scoll_nav_li.mouseover(function(){
  	$(this).addClass('selected')
  			 .siblings().removeClass('selected');
  var scoll_nav_li_index = scoll_nav_li.index(this);   
  $('.scoll_switch .scoll_box').eq(scoll_nav_li_index).addClass('selected')
  				 .siblings().removeClass('selected');
  });
  	
	var tab_nav_li = $('.tab_nav li');//切换样式
	tab_nav_li.mouseover(function(){
		$(this).addClass('selected')
				 .siblings().removeClass('selected');
	var tab_nav_li_index = tab_nav_li.index(this);
	$('.tab_switch>.tabcon').eq(tab_nav_li_index).show()
					 .siblings().hide();
	}).hover(function(){
		$(this).addClass('');
	},function(){
		$(this).removeClass('');	
	});
	

	$(".tabcon2 .scoll").jCarouselLite({//滚动控制
		visible: 4,
		scroll: 1,
		auto: 1200,
		speed: 2000
    });
	
	$(".tabcon1 .scoll").jCarouselLite({//滚动控制
		visible: 4,
		scroll: 1,
		auto: 1200,
		speed: 2000
    });
	
	$(".tabcon3 .scoll").jCarouselLite({//滚动控制
		visible: 4,
		scroll: 1,
		auto: 1200,
		speed: 2000
    });
	
	$(".tabcon4 .scoll").jCarouselLite({//滚动控制
		visible: 4,
		scroll: 1,
		auto: 1200,
		speed: 2000
    });
	
	$(".listyb .ybzj").jCarouselLite({//滚动控制
		btnNext: ".listyb .next",
		btnPrev: ".listyb .prev",
		visible: 1,
		scroll: 1,
		auto: 1200,
		speed: 2000
    });

	$("#JS_promo_s img").banner_thaw({
		thumbObj: "#JS_promo_s_num li",
		thumbNowClass: "current",
		changeTime:3000,
		slideTime:1000
	});

});