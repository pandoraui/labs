
/*
 * 景点详情页面js
 */
$(function () {
    // 点击回复显示回复框
    $('div.p_comment').delegate('a.j-recomment','click',function(){
        $(this).parent().next().show();
    })
    
    
    $('.jd_check li').bind('click', function () {
        $(this).siblings('li').removeClass('active_li').end().addClass('active_li')
    })
    $('.jd_group_trip i').bind('click', function () {
        $(this).siblings('i').removeClass('active_city').end().addClass('active_city');
    })
    $('.jd_click_tag').live('click',function(){
        var nextTr = $(this).parents('tr').next();
        if(nextTr.is(':visible')){
            nextTr.hide();
        }else{
            $(this).parents('tr').siblings('.jd-item-detail').hide();
            $(this).parents('tr').siblings('.jd-item-calendar').hide();
            nextTr.show('slow');
        }
    })
    $('.hide-more').bind('click',function(){
        $(this).parents('tr').hide();
    })
    $('.jd_order_btn').live('click',function(){
        var triTr = $(this).parents('tr').next().next();
        if(triTr.is(':visible')){
            triTr.hide();
        }else{
            $(this).parents('tr').siblings('.jd-item-detail').hide();
            $(this).parents('tr').siblings('.jd-item-calendar').hide();
            triTr.show('slow');
        }
    })
    $('.tabsNav a').live('click', function () {
        $('.tabsNav a').removeClass('tabsNav_on');
        $(this).addClass('tabsNav_on');
    })
    $("#slide").slide({ isPlay: false, page: { isPage: true } });
});