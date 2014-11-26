/* jQuery jtClite beta_v0.1  */
/*.scoll_box>>>.s_box>>>.s_con至少需要三级目录*/
(function($){$.fn.jCarouselLite=function(o){o=$.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:200,easing:null,vertical:false,circular:true,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null},o||{});return this.each(function(){var b=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var c=$(this),ul=$("ul",c),tLi=$("li",ul),tl=tLi.size(),v=o.visible;if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v}var f=$("li",ul),itemLength=f.size(),curr=o.start;c.css("visibility","visible");f.css({overflow:"hidden",float:o.vertical?"none":"left"});ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});c.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var g=o.vertical?height(f):width(f);var h=g*itemLength;var j=g*v;f.css({width:f.width(),height:f.height()});ul.css(sizeCss,h+"px").css(animCss,-(curr*g));c.css(sizeCss,j+"px");if(o.btnPrev)$(o.btnPrev).click(function(){return go(curr-o.scroll)});if(o.btnNext)$(o.btnNext).click(function(){return go(curr+o.scroll)});if(o.btnGo)$.each(o.btnGo,function(i,a){$(a).click(function(){return go(o.circular?o.visible+i:i)})});if(o.mouseWheel&&c.mousewheel)c.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll)});if(o.auto)setInterval(function(){go(curr+o.scroll)},o.auto+o.speed);function vis(){return f.slice(curr).slice(0,v)};function go(a){if(!b){if(o.beforeStart)o.beforeStart.call(this,vis());if(o.circular){if(a<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*g)+"px");curr=a==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll}else if(a>=itemLength-v+1){ul.css(animCss,-((v)*g)+"px");curr=a==itemLength-v+1?v+1:v+o.scroll}else curr=a}else{if(a<0||a>itemLength-v)return;else curr=a}b=true;ul.animate(animCss=="left"?{left:-(curr*g)}:{top:-(curr*g)},o.speed,o.easing,function(){if(o.afterEnd)o.afterEnd.call(this,vis());b=false});if(!o.circular){$(o.btnPrev+","+o.btnNext).removeClass("disabled");$((curr-o.scroll<0&&o.btnPrev)||(curr+o.scroll>itemLength-v&&o.btnNext)||[]).addClass("disabled")}}return false}})};function css(a,b){return parseInt($.css(a[0],b))||0};function width(a){return a[0].offsetWidth+css(a,'marginLeft')+css(a,'marginRight')};function height(a){return a[0].offsetHeight+css(a,'marginTop')+css(a,'marginBottom')}})(jQuery);
/*promo*/
(function($){$.fn.jtSlide=function(iSet){iSet=$.extend({Nav:null,Field:null,K:0,CurCls:'current',Auto:false,AutoTime:4000,OutTime:100,InTime:150,CrossTime:60},iSet||{});var acrossFun=null,hasCls=false,autoSlide=null;function changeFun(n){iSet.Field.filter(':visible').fadeOut(iSet.OutTime,function(){iSet.Field.eq(n).fadeIn(iSet.InTime).siblings().hide();});iSet.Nav.eq(n).addClass(iSet.CurCls).siblings().removeClass(iSet.CurCls);}
changeFun(iSet.K);iSet.Nav.hover(function(){iSet.K=iSet.Nav.index(this);if(iSet.Auto){clearInterval(autoSlide);}
hasCls=$(this).hasClass(iSet.CurCls);acrossFun=setTimeout(function(){if(!hasCls){changeFun(iSet.K);}},iSet.CrossTime);},function(){clearTimeout(acrossFun);if(iSet.Ajax){iSet.AjaxFun();}
if(iSet.Auto){autoSlide=setInterval(function(){iSet.K++;changeFun(iSet.K);if(iSet.K==iSet.Field.size()){changeFun(0);iSet.K=0;}},iSet.AutoTime)}}).eq(0).trigger('mouseleave');}})(jQuery);
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
  var tab_menu_li = $('.tab_menu li');//高亮当前选项
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
	$('.tab_switch .tabcon').eq(tab_nav_li_index).show()
					 .siblings().hide();
	}).hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');	
	});
	
	$(document).jtSlide({//幻灯控制
		Nav:$('ul.promo_nav>li'),
		Field:$('div.promo_box>div.p_con'),
		Auto: true,
		CrossTime:120,
		OutTime:200,
		AutoTime:4000,
		InTime:300
		});
		
	$(".zj_intro .scoll").jCarouselLite({
		visible: 2,
		scroll: 1,
		auto: 4000,
		speed: 1000
    });
	$(".tabcon1 .scoll").jCarouselLite({//滚动控制
		btnNext: ".tabcon1 .next",
		btnPrev: ".tabcon1 .prev",
		visible: 5,
		scroll: 1,
		auto: 1200,
		speed: 500
    });
	$(".tabcon2 .scoll").jCarouselLite({
		btnNext: ".tabcon2 .next",
		btnPrev: ".tabcon2 .prev",
		visible: 5,
		scroll: 1,
		auto: 1200,
		speed: 500
    });
	$(".tabcon3 .scoll").jCarouselLite({
		btnNext: ".tabcon3 .next",
		btnPrev: ".tabcon3 .prev",
		visible: 5,
		scroll: 1,
		auto: 1200,
		speed: 500
    });
	$(".rzjgd .scoll").jCarouselLite({
		btnNext: ".rzjgd .next",
		btnPrev: ".rzjgd .prev",
		visible: 1,
		scroll: 1,
		auto: 2000,
		speed: 1000
    });
	$(".yyjs_zjjs .scoll").jCarouselLite({
		btnNext: ".yyjs_zjjs .next",
		btnPrev: ".yyjs_zjjs .prev",
		visible: 1,
		scroll: 1,
		auto: 1000,
		speed: 1000
    });
		
	$(".yyjs_wh .scoll").jCarouselLite({
		visible: 4,
		scroll: 1,
		auto: 1500,
		speed: 500
    });
	
	$(".bz_ktsy .scoll").jCarouselLite({
		visible: 5,
		scroll: 1,
		auto: 1500,
		speed: 500
    });
});