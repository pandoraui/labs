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
    <a class="fr link-down" href="#">
        <i class="icon icon-down"></i>订单处理操作PPT下载
    </a>
</div><!--//.crumbs-->

<div class="wrap">
    <?php include("aside-order.php"); ?>
    
    <div class="main">
        <div class="formbox form-inline">
            <table class="form-table table-full">
                <tr>
                    <td class="label">订单状态：</td>
                    <td><select class="select"><option value="">全部</option></select></td>
                    <td class="label">订单号：</td>
                    <td><input type="text" class="input-text"></td>
                    <td class="label">客人姓名：</td>
                    <td><input type="text" class="input-text"></td>
                </tr>
                <tr>
                    <td class="label">酒店确认号：</td>
                    <td><input type="text" class="input-text"></td>
                    <td class="label">确认人：</td>
                    <td><select class="select"><option value="">全部</option></select></td>
                    <td class="label">支付状态：</td>
                    <td><input type="text" class="input-text"></td>
                </tr>
                <tr>
                    <td class="label">确认状态：</td>
                    <td><select class="select"><option value="">全部</option></select></td>
                    <td class="label">支付状态：</td>
                    <td><select class="select"><option value="">全部</option></select></td>
                    <td class="label"></td>
                    <td></td>
                </tr>
            </table>
        </div>
        <p class="tc mt10"><a href="#" class="btn btn-w btn-blue">查询</a></p>

        <?php include("order-list.php"); ?>
        
    </div><!--//.main-->





</div>


<?php include("common/footer.php"); ?>

</body>
</html>
