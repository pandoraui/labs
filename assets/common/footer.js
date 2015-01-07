
/* footer.js
 * 底部统一调用结构
 * 结构如下：
<div id="lv-footer">
    以下由js组合生成
    <div class="footer-inner wrap">
        <div class="copyinfo"></div>
        <p class="footer-link"></p>
        <div class="lv-copyright"></div>
        <div class="lv-safety"></div>
    </div>
</div>
 * 
 */

$(function() {
    var startfooter = '<!-- 公共底部  --><div class="footer-inner wrap">',
        copyinfo    = '<div class="copyinfo" style="margin:10px auto 10px;"><img src="http://pic.lvmama.com/img/v3/copyinfo.png" width="1000" height="70"></div>',
        footerlink  = '<p class="footer-link">'
                    + '   <a href="http://www.lvmama.com/public/about_lvmama" rel="nofollow">关于我们</a> | '
                    + '   <a href="http://www.lvmama.com/public/site_map">网站地图</a> | '
                    + '   <a href="http://www.lvmama.com/public/help" rel="nofollow">帮助中心</a> | '
                    + '   <a href="http://www.lvmama.com/public/links">友情链接</a> | '
                    + '   <a href="http://www.lvmama.com/public/jobs" rel="nofollow">诚聘英才</a> | '
                    + '   <a href="http://www.lvmama.com/userCenter/user/transItfeedBack.do" rel="nofollow">意见反馈</a> | '
                    + '   <a rel="nofollow" href="http://www.lvmama.com/public/adwy">广告业务</a> | '
                    + '   <a href="http://www.lvmama.com/info/public/ued/">用户体验平台</a>'
                    + '</p>',
        copyright   = '<p class="lv-copyright">Copyright &copy; 2013 www.lvmama.com. 上海景域文化传播有限公司版权所有&#12288;<a href="http://www.miitbeian.gov.cn" target="_blank" rel="nofollow">沪ICP备13011172号-3</a>&#12288;增值电信业务经营许可证编号：<a rel="nofollow" href="http://pic.lvmama.com/img/ICP.jpg" target="_blank">沪B2-20100030</a></p>',
        safety      = '<div class="lv-safety">'
                    + '    <a class="safety1" target="_blank" rel="nofollow" title="上海市旅游行业协会在线分会" href="http://www.shtour.org/tourlist_onlineid4.html"></a>'
                    + '    <a class="safety2" target="_blank" rel="nofollow" title="经营性网站备案信息" href="http://www.miibeian.gov.cn/"></a>'
                    + '    <a class="safety3" target="_blank" rel="nofollow" title="网络110报警服务" href="http://www.cyberpolice.cn"></a>'
                    + '    <a class="safety4" target="_blank" rel="nofollow" title="支付宝特约商家" href="https://www.alipay.com/aip/aip_validate_list.htm?trust_id=AIP0102495"></a>'
                    + '    <a class="safety5" target="_blank" rel="nofollow" title="AAA级信用企业" href="http://www.itrust.org.cn/yz/pjwx.asp?wm=1664396140"></a>'
                    + '    <a class="safety6" target="_blank" rel="nofollow" title="上海工商" href="http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&amp;entyId=20110930103539539"></a>'
                    + '    <a class="safety7" target="_blank" rel="nofollow" title="可信网站" href="https://ss.cnnic.cn/verifyseal.dll?sn=2010101800100002662&amp;ct=df&amp;pa=590007"></a>'
                    + '    <a class="safety8" target="_blank" rel="nofollow" title="诚信认证示范企业" href="https://search.szfw.org/cert/l/CX20120921001712001762" id="___szfw_logo___" hidefocus="false"></a>'
                    + '    <a class="safety9" target="_blank" rel="nofollow" title="网络社会征信网" href="http://www.zx110.org"></a>'
                    + '    <a class="safety10" target="_blank" rel="nofollow" title="360网站安全检测" href="http://webscan.360.cn"></a>'
                    + '</div>',
        endfooter   = '</div><!-- 公共底部结束  -->';
    
	// 通用底部
	$("#lv-footer").html(startfooter + copyinfo + footerlink + copyright + safety + endfooter);
    
    // 订单底部
	$("#order-footer").html(startfooter + copyright + safety + endfooter);
});
