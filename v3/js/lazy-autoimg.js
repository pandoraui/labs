

$(function(){
    
    // 图片的延迟加载(滚动加载)
    
    /*=============图片延迟加载=============*/
	$.expr[":"].loading=function(elt,index){
		var height=$(window).height();
		var top=$(elt).offset().top;
		return top>$(window).scrollTop()&&top<(height+$(window).scrollTop())
	};
	$.expr[":"].loaded=function(elt,index){
		var height=$(window).height();
		var top=$(elt).offset().top;
		return top<height;
	};
    
	var loadImg=function(){
        if($(this).parent().hasClass('auto_img')){
            getImgSize($(this),"to");
        }else{
            this.src=$(this).attr("to");
            $(this).removeAttr("to");
        }
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
    
   // $('.text-cover').each(function(){
   //     getImgSize($(this).find('img'));
   // });
    
    
    // 获取图片路径
    function getPhoto(thisbox) { 
        var _thisbox = thisbox;
        // _thisbox.find('img').attr("src",_thisimg.attr("data-original")).removeAttr("data-original");
        getImgSize(_thisbox.find('img'));
    }
    
    
    // 获取图片的真实宽高
    function getImgSize(thisimg,original) { 
        var i = new Image(); //新建一个图片对象 
        var _thisimg = thisimg;
        var _original = original || 'original';
        var _src = _thisimg.attr(_original);
        //var _src = _thisimg.attr("to");
        i.onload = function() {
            if(_thisimg.attr("src")!=_thisimg.attr(_original)){
                _thisimg.attr("src",_thisimg.attr(_original)).removeAttr(_original);
            };
            autoImgSize(i.width,i.height,_thisimg);
            
            i.onload = function(){};
        };
        
        i.src = _src;
    };
    
    // 图片等比缩放(要求图片的直接父级要有宽高设定并带有class="auto_img")
    function autoImgSize(img_tw,img_th,thisimg,boxw,boxh){
        
        var _thisimg = thisimg;
        
        // 图片真实宽高
        var w_original = img_tw;
        var h_original = img_th; 
        
        // 盒子宽高（预定高度）
        var _wbox = boxw || _thisimg.parent().innerWidth();
        var _hbox = boxh || _thisimg.parent().innerHeight();
        
        // 缩放后的宽高初始化
        var w = w_original, h = h_original;
        //console.log(w,h,w_original,h_original)
        
        // 缩放逻辑 图片宽度大于预定宽度时
        if (w > _wbox) { 
        
            //宽度等于预定宽度，高度按等比取值
            h = h_original * (_wbox / w_original);
            w = _wbox; 
            
            // 如果按比例缩放后的高度小于于预定高度，则使高度等于预定高度，而宽度按等比取值
            if (h < _hbox) { 
                
                w = w_original * (_hbox / h_original); 
                h = _hbox; 
                // h = _hbox > h_original ? _hbox : h_original; 
            } else{
                // 保持原图大小
                // h = w_original;
                // w = _wbox; 
            }
        }
        
        console.log(w,h,w_original,h_original)
        
        // 调整实现垂直及水平的居中显示
        if(w > _wbox){
            var _w = (_wbox - w)* 0.5;
        }
        
        if(h != _hbox){
            var _h = (_hbox - h)* 0.5;
        }
        
        // 图片等比缩放并居中显示
        $(_thisimg).attr({width:w,height:h}).css({'margin-top':_h,'margin-left':_w});
    };
    
});

