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
        <a class="current">酒店订单处理</a>
    </p>
</div><!--//.crumbs-->

<div class="wrap">
    <p class="einfo">
        <span class="eitem">订单号：<b>3061985</b></span>
        <span class="eitem">订单状态：<b>正常</b></span>
        <span class="eitem">类型：<b>确认单</b></span>
    </p>
    <div class="colbox equalheight-box">
        <div class="colside equalheight-item">
            <table class="form-table form-inline">
                <tr>
                    <td class="label">确认结果：</td>
                    <td><b class="green">确认单接受</b></td>
                </tr>
                <tr>
                    <td class="label">确认人：</td>
                    <td>zxy</td>
                </tr>
                <tr>
                    <td class="label">确认时间：</td>
                    <td>2013-12-13 14:16</td>
                </tr>
                <tr>
                    <td class="label vtop">备注：</td>
                    <td></td>
                </tr>
                <tr>
                    <td class="label">酒店确认号：</td>
                    <td><input type="text" class="input-text"> <span class="gray">多个确认号请用“空格”空开</span></td>
                </tr>
                <tr>
                    <td></td>
                    <td><a href="javascript:;" class="btn btn-w btn-blue">更改</a></td>
                </tr>
            </table>
        </div>
        <div class="colmain equalheight-item">
            <table class="form-table form-inline">
                <tr>
                    <td class="label">客户姓名：</td>
                    <td>eat1</td>
                </tr>
                <tr>
                    <td class="label">客人手机：</td>
                    <td>15165213654</td>
                </tr>
                <tr>
                    <td class="label">住店日期：</td>
                    <td><span class="orange">2013-11-29</span> 至 <span class="orange">2013-12-13</span> <span class="gray">（共1晚）</span></td>
                </tr>
                <tr>
                    <td class="label">预订房型：</td>
                    <td><span class="orange">大床/双床</span>、<span class="orange">1间</span>/1晚</td>
                </tr>
                <tr>
                    <td class="label">付款方式：</td>
                    <td>支付给驴妈妈</td>
                </tr>
                <tr>
                    <td class="label">结算价：</td>
                    <td>共计RMB <b class="orange">20</b> 元 <span class="gray">（含服务费）</span></td>
                </tr>
                <tr>
                    <td class="label">特殊要求：</td>
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
