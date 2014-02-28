<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>订单处理</title>
<link rel="shortcut icon" type="image/x-icon" href="http://www.lvmama.com/favicon.ico">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="keywords" content="页面关键字">
<meta name="description" content="页面描述">
<?php include("common/meta.php"); ?>
</head>
<body class="order">
<?php include("common/header.php"); ?>

<div class="crumbs wrap">
    <p class="crumbs-link">
        <a href="#"><i class="icon icon-ihome"></i>首页</a> &gt; 
        <a href="#">产品管理</a> &gt; 
        <a href="#">酒店订单处理</a> &gt; 
        <a class="current">订单详情</a>
    </p>
</div><!--//.crumbs-->

<div class="wrap">
    <p class="einfo">
    	<a class="fr" href="#" target="_blank"><i class="icon icon-print"></i>打印订单</a>
        <span class="eitem">订单号：<b>3061985</b></span>
        <span class="eitem">类型：<b>确认单</b></span>
        <span class="eitem">订单状态：<b>正常</b></span>
    </p>
    <div class="colbox equalheight-box">
        <div class="colmain">
            <table class="form-table form-inline">
                <tr>
                    <td class="label">客户姓名：</td>
                    <td>eat1、eat2、eat3<span class="ml10">共<i class="orange">3</i>人</span></td>
                </tr>
                <tr>
                    <td class="label">住店日期：</td>
                    <td><span class="orange">2013-11-29 至 2013-12-13 （共1晚）</span></td>
                </tr>
                <tr>
                    <td class="label">预订房型：</td>
                    <td>高级间(中宾) 2 间 <span class="orange">(保留房)</span></td>
                </tr>
                <tr>
                    <td class="label vtop">房价：</td>
                    <td><span class="mr10">2013-12-11</span><span class="mr10">RMB 600.00</span>（含早2份）<br><span class="mr10">2013-12-12</span><span class="mr10">RMB 400.00</span>（不含早）</td>
                </tr>
                <tr>
                    <td class="label vtop">付款方式：</td>
                    <td><span class="mr20">前台现付（返佣）</span>共计 <span class="orange">RMB 1000.00</span> 元（含服务费）<span class="tip-icon tip-icon-warning ml20"></span> 此价格不要向客人透漏，否则由此造成的损失由酒店承担</td>
                </tr>
                <tr>
                    <td class="label">结算价：</td>
                    <td>共计RMB <b class="orange">20</b> 元 <span class="gray">（含服务费）</span></td>
                </tr>
                <tr>
                    <td class="label vtop">特殊要求：</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td class="label"></td>
                    <td></td>
                </tr>
            </table>
        </div>
        <div class="colside">
            <table class="form-table form-inline">
            	<tr>
                    <td class="label">确认结果：</td>
                    <td><b class="red">尚未处理</b></td>
                </tr>
                <tr>
                    <td class="label">酒店预定号：</td>
                    <td><input class="input-text"><span class="gray ml20">请输入酒店确认号，多个确认号请用逗号"，"隔开</span></td>
                </tr>
                <tr>
                    <td class="label"><span class="red">*</span>预定确认：</td>
                    <td>接受预定<span class="tip-icon tip-icon-warning ml20"></span> 如果有条件，不能通过请联系客服资源审核组电话：021-123456</td>
                </tr>
                <tr>
                    <td class="label">不接受原因：</td>
                    <td>
                    <select class="select"><option value="">全部</option><option value="">太贵</option></select>
                    <span class="tip-icon tip-icon-warning ml20"></span> 建议在备注框中注明原因并推荐其他房型
                    </td>
                </tr>
                <tr>
                    <td class="label vtop">备注：</td>
                    <td><textarea name="" style="width:290px;height:110px;"></textarea></td>
                </tr>
                <tr>
                    <td></td>
                    <td><a href="javascript:;" class="btn btn-w btn-blue">确认提交</a></td>
                </tr>
            </table>
        </div>
    </div>
	
    <p class="einfo mt30">
        <span class="eitem">原订单信息</span>
        <span class="eitem">订单号：<b>3061245</b></span>
    </p>
    <div class="colbox equalheight-box">
        <div class="colmain">
            <table class="form-table form-inline">
                <tr>
                    <td class="label">客户姓名：</td>
                    <td>eat1、eat2、eat3<span class="ml10">共<i class="orange">3</i>人</span></td>
                </tr>
                <tr>
                    <td class="label">住店日期：</td>
                    <td><span class="orange">2013-11-29 至 2013-12-13 （共1晚）</span></td>
                </tr>
                <tr>
                    <td class="label">预订房型：</td>
                    <td>高级间(中宾) 2 间 <span class="orange">(保留房)</span></td>
                </tr>
                <tr>
                    <td class="label vtop">房价：</td>
                    <td><span class="mr10">2013-12-11</span><span class="mr10">RMB 600.00</span>（含早2份）<br><span class="mr10">2013-12-12</span><span class="mr10">RMB 400.00</span>（不含早）</td>
                </tr>
                <tr>
                    <td class="label vtop">付款方式：</td>
                    <td><span class="mr20">前台现付（返佣）</span>共计 <span class="orange">RMB 1000.00</span> 元（含服务费）</td>
                </tr>
                <tr>
                    <td class="label vtop">特殊要求：</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td class="label"></td>
                    <td></td>
                </tr>
            </table>
        </div>
    </div>
</div>


<?php include("common/footer.php"); ?>

</body>
</html>
