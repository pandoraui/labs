// points 积分商城

$(function(){
    //滚动控制
    $(".scoll_box .scoll").jCarouselLite({
        btnNext: ".scoll_box .next",
        btnPrev: ".scoll_box .prev",
        visible: 8,
        scroll: 1,
        auto: 1500,
        speed: 500
    });

    //$('span.countdown').ui('countdown');

    $('span.countdown').ui('countdown',{
        format: "dd:hh:mm:ss",
        effect: true
    });
    $('span.details_countdown').ui('countdown',{
        format: "dd:hh:mm:ss",
        effect: true
    });
    
    
	$("#slide_point_details").slides({
		preload: true,
		preloadImage: 'http://pic.lvmama.com/img/new_v/ui_scrollLoading/loadingGIF46px.gif',
		container: 'J_slidebox',
		trigger: 'click', //click mouseenter
		effect: 'fade, fade', //slide fade
		crossfade: true,
		slideSpeed: 350,
		fadeSpeed: 500,
		play: 3000,
		//pause: 2500,
		// hoverPause: true,
        //generateNextPrev: true, 
		//prev: 'sns-prev',
		//next: 'sns-next',
        generatePagination: false,
		pagination: true,
		paginationClass: 'J_slidenav',
		currentClass: 'active'
	});
    
    
})

$(function(){
    function marquee(lh, speed, delay, domObj) { 
        var t, p = false, o = document.getElementById(domObj); 
        o.innerHTML += o.innerHTML; 
        o.onmouseover = function () { p = true } 
        o.onmouseout = function () { p = false } 
        o.scrollTop = 0; 
        function start() { 
            t = setInterval(scrolling, speed); 
            if (!p) { o.scrollTop += 1; } 
        } 
        function scrolling() { 
            if (o.scrollTop % lh != 0) { 
                o.scrollTop += 1; 
                if (o.scrollTop >= o.scrollHeight / 2) o.scrollTop = 0; 
                } else { 
                    clearInterval(t); 
                    setTimeout(start, delay); 
                } 
            } 
        setTimeout(start, delay); 
    } 

    marquee(24, 40, 4000, "marquee0") 

})

