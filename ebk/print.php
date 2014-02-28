<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>打印订单</title>
<link rel="shortcut icon" type="image/x-icon" href="http://www.lvmama.com/favicon.ico">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="keywords" content="页面关键字">
<meta name="description" content="页面描述">
<?php include("common/meta.php"); ?>
<link rel="stylesheet" media="print" href="http://pic.lvmama.com/styles/v5/print.css" >
<link rel="stylesheet" media="print" href="css/print.css" >
</head>
<body>
<?php include("common/tempnav.html"); ?>

<div class="print_all">
    <div class="print_t">
        <p>订单号：<b>3061985</b>类型：<b>新订单</b>订单状态：<b>取消</b></p>
        驴妈妈预订客房通知单<strong>布丁酒店</strong>
    </div>
    <div class="print_box">
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
                <td class="label vtop">确认结果：</td>
                <td><b class="red">客人取消</b></td>
            </tr>
            <tr>
                <td class="label vtop">确认人：</td>
                <td>张三</td>
            </tr>
            <tr>
                <td class="label vtop">酒店预订号：</td>
                <td>无</td>
            </tr>
            <tr>
                <td class="label vtop">备注：</td>
                <td>无</td>
            </tr>
        </table>
    </div>
</div>
<div class="print_btn">
	<span class="btn btn-blue btn_print">打印订单</span><span class="btn btn-gray btn_print_close">取消</span>
</div>

<script src="http://pic.lvmama.com/js/new_v/jquery-1.7.2.min.js"></script>
<script>
$(function(){ 
	$('.btn_print').click(function(){
		window.print();
	});
});

</script>
</body>
</html>
