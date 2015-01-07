<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>酒店产品</title>
<link rel="shortcut icon" type="image/x-icon" href="http://www.lvmama.com/favicon.ico">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="keywords" content="页面关键字">
<meta name="description" content="页面描述">
<?php include("common/meta.php"); ?>
</head>
<body class="product">
<?php include("common/header.php"); ?>

<div class="crumbs wrap">
    <p class="crumbs-link">
        <a href="#"><i class="icon icon-ihome"></i>首页</a> &gt; 
        <a href="#">产品管理</a> &gt; 
        <a class="current">酒店产品</a>
    </p>
</div><!--//.crumbs-->

<div class="wrap">
    <?php include("aside-product.php"); ?>
    
    <div class="main">
        <div class="formbox form-inline">
            <table class="form-table table-full">
                <tr>
                    <td class="label">供应商产品名称：</td>
                    <td><input type="text" class="input-text"></td>
                    <td class="label">上下线状态：</td>
                    <td><select class="select"><option value="">全部</option></select></td>
                    <td class="label">审核状态：</td>
                    <td><select class="select"><option value="">全部</option></select></td>
                </tr>
            </table>
        </div>
        <p class="tc mt10"><a href="#" class="btn btn-w btn-blue">查询</a></p>
        
        <?php include("hotel-list.php"); ?>

        <p class="tc"><a href="javascript:;" class="btn test1">查看日志</a></p>
        
    </div><!--//.main-->
    

</div>

<div id="dialog1" class="hide">
    <table class="table-list table-light">
        <thead>
            <tr>
                <th>创建时间</th>
                <th>操作人</th>
                <th>操作主题</th>
                <th>操作内容</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2013/12/03</td>
                <td>zxy</td>
                <td>新产品类型</td>
                <td>新增测试01 产品类别 成人价格</td>
            </tr>
            <tr>
                <td>2013/12/03</td>
                <td>zxy</td>
                <td>新产品类型</td>
                <td>新增测试01 产品类别 成人价格</td>
            </tr>
            <tr>
                <td>2013/12/03</td>
                <td>zxy</td>
                <td>新产品类型</td>
                <td>新增测试01 产品类别 成人价格</td>
            </tr>
            <tr>
                <td>2013/12/03</td>
                <td>zxy</td>
                <td>新产品类型</td>
                <td>新增测试01 产品类别 成人价格</td>
            </tr>
            <tr>
                <td>2013/12/03</td>
                <td>zxy</td>
                <td>新产品类型</td>
                <td>新增测试01 产品类别 成人价格</td>
            </tr>
            <tr>
                <td>2013/12/03</td>
                <td>zxy</td>
                <td>新产品类型</td>
                <td>新增测试01 产品类别 成人价格</td>
            </tr>
            <tr>
                <td>2013/12/03</td>
                <td>zxy</td>
                <td>新产品类型</td>
                <td>新增测试01 产品类别 成人价格</td>
            </tr>
        </tbody>
    </table>
    <?php include("paging.php"); ?>
</div>

<?php include("common/footer.php"); ?>

</body>
</html>
