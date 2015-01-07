$(function(){
    $("#channel-box").hover(
	function(){
	    $(this).addClass("channel-box-hover");
	},function(){
	    $(this).removeClass("channel-box-hover");
	});

	$("#channel-box li").hover(
	function(){
	    $(this).addClass("item-hover");
	},function(){
	    $(this).removeClass("item-hover");
	});
	
	/* 
	$("ul.showbox").hover(
	function(){
	    $(this).addClass("showbox-hover");
	},function(){
	    $(this).removeClass("showbox-hover");
	});
	*/
	
	$("ul.showbox li").hover(
	function(){
	    $(this).addClass("item-hover");
	},function(){
	    $(this).removeClass("item-hover");
	});
	$("ul.subnav li").hover(
	function(){
	    $(this).addClass("item-hover");
	},function(){
	    $(this).removeClass("item-hover");
	});
	
	
	// 显示弹窗,并触发图片滚动函数
	$("#product li").click(function(){
	    $("#overlay").show();
	    $($(this).children("a").attr("href")).show();
		xh_picscoll();
	})
	
	$("#overlay,a.icon-return").click(function(){
	    $("#overlay,div.xh_dialog").hide();
	})
	
	
	// 图片滚动切换
	function xh_picscoll(){
	var slider = new Slider({
		icontainer : "nph_scrl_ct",
		idrag : "bar",
		plusBtn : "scrlPrev",
		reduceBtn : "scrlNext",
		panel : "thumb",
		content : "nph_scrl_main",	
		direction : "left",
		acceleration : 5,
		sliderAcc : 1		
	});
		var thumb_num = $("#thumb").children("li").length;
		$("#thumb").css("width", 118 * thumb_num);
		//$("#bar").css("width", 570 * 5 / thumb_num);
		
	var ul = xhsilde.get("nph_scrl_main"),
		list = ul.getElementsByTagName("li"),
		len = list.length,
		intervalD = Math.ceil( ul.scrollWidth / len ),
		intervalS = Math.ceil( slider.Max.left / len ),
		index = 1,
		photoPrev = xhsilde.get("photoPrev"),
		photoNext = xhsilde.get("photoNext"),
		photo = xhsilde.get("photo"),
		photoIndex = xhsilde.get("photoIndex"),
		photoDesc = xhsilde.get("photoDesc").getElementsByTagName("p")[0];
		// alert(ul.scrollWidth+"sd"+intervalS);
	function removeClass(){
		xhsilde.each(list, function(o, i){
			o.className = "";
		});
	}
	
	function Go(i, o){
		index = i;
		var _distance = 0;
		if(i > 2){
			slider.content.scrollLeft = intervalD * (i - 2);		
		}else{
			slider.content.scrollLeft = 0;
		}
		_distance = intervalS * i;
		if(i === len - 1){
			_distance = intervalS * (i + 1);
		}
		slider.idrag.style.left = Math.min(Math.max(_distance , 0),slider.Max.left)  + "px"
		removeClass();
		o.className = "nph_list_active";
		photo.src = o.getElementsByTagName("i")[0].innerHTML;
		photoDesc.innerHTML = o.getElementsByTagName("p")[0].innerHTML;
		photoIndex.innerHTML = i + 1;
	}
	
	Go(0, list[0]);
		
	xhsilde.each(list, function(o, i){
		xhsilde.addEvent(o, function(){
			Go(i, o);		
		},"click");
	});
	
	xhsilde.addEvent(photoNext, function(){
		index++;
		if(index >= len){
			index = len - 1;
			return;
		}
		Go(index, list[index]);
		
	},"click");
	
	xhsilde.addEvent(photoPrev, function(){
		index--;
		if(index < 0 ){
			index = 0;
			return;
		}
		Go(index, list[index]);
		
	},"click");
	
	};

});