$(function(){
    
    // 更多主题
    $("div.JS_slideDown").click(function(e){
		var obj = e.target || e.srcElement;
		if(obj.className!="JS_slideDown"){
			$(this).toggleClass("active");
            
		}
	}).mouseleave(function(){
		var e = this;
		e.timeId = setTimeout(function(){
			$(e).removeClass("active");
		},200)
	}).mouseenter(function(){
		clearTimeout(this.timeId)
	})
    
    
    $(".countdown").ui("countdown",{
        prezero: false,
        timediff: 86400000
    });
    
    function p_hover_enter(_box,hover_item,hover_class){
		$(_box).delegate(hover_item,'mouseenter',function(){
            if(bool(this)){
                $(this).addClass(hover_class);
            }
        });
	};
    function p_hover_leave(_box,hover_item,hover_class){
		$(_box).delegate(hover_item,'mouseleave',function(){
            if(bool(this)){
                $(this).removeClass(hover_class);
            }
        });
	};
    
	p_hover_enter("div.JS_sildename","a.text-cover","slidehover");
	p_hover_leave("div.JS_sildename","a.text-cover","slidehover");
    
    
    function bool(that){
        if(getByte($(that).find('i').text()) > 26){
            return true;
        }else{
            return false;
        }
    }
    
    function getByte(str){
        var num = 0; 
        for (var i = 0, l = str.length; i < l; i++) { 
            if (str.charCodeAt(i) > 255) { 
                num += 2; 
            } else { 
                num++; 
            } 
        } 
        return num;
    }   
});	


$(function(){

    var _flight_search_tabnav = $('.drop-searchbox-flight .tablabel label.radio');
    var _flight_search_tabcon = $('.drop-searchbox-flight .flight-menusearchbox');
    
    _flight_search_tabnav.bind('click',function(){
        var _tab_li_index = $(_flight_search_tabnav).index(this);
        $(_flight_search_tabcon).eq(_tab_li_index).show().siblings().hide();
    })
    
    
})


