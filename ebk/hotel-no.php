<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>产品管理</title>
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
                    <td class="label">审核时间：</td>
                    <td><input type="text" class="input-date"> - <input type="text" class="input-date"></td>
                </tr>
            </table>
        </div>
        <p class="tc mt10"><a href="#" class="btn btn-w btn-blue">查询</a></p>

        <!--订单列表-->
        <div class="plist mt20">
            <table class="table-list table-blue">
                <thead>
                    <tr>
                        <th>供应商产品名称</th>
                        <th>驴妈妈产品经理</th>
                        <th>提交内容</th>
                        <th>修改时间</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>布丁酒店</td>
                        <td>王娇娇</td>
                        <td>新增价格库存</td>
                        <td>2013-08-12<br>15:00:33</td>
                        <td><a href="#">编辑</a>　<a href="#">查看原因</a></td>
                    </tr>
                    <tr>
                        <td>布丁酒店</td>
                        <td>王娇娇</td>
                        <td>新增价格库存</td>
                        <td>2013-08-12<br>15:00:33</td>
                        <td><a href="#">编辑</a>　<a href="#">查看原因</a></td>
                    </tr>
                    <tr>
                        <td>布丁酒店</td>
                        <td>王娇娇</td>
                        <td>新增价格库存</td>
                        <td>2013-08-12<br>15:00:33</td>
                        <td><a href="#">编辑</a>　<a href="#">查看原因</a></td>
                    </tr>
                    <tr>
                        <td>布丁酒店</td>
                        <td>王娇娇</td>
                        <td>新增价格库存</td>
                        <td>2013-08-12<br>15:00:33</td>
                        <td><a href="#">编辑</a>　<a href="#">查看原因</a></td>
                    </tr>
                    <tr>
                        <td>布丁酒店</td>
                        <td>王娇娇</td>
                        <td>新增价格库存</td>
                        <td>2013-08-12<br>15:00:33</td>
                        <td><a href="#">编辑</a>　<a href="#">查看原因</a></td>
                    </tr>
                    <tr>
                        <td>布丁酒店</td>
                        <td>王娇娇</td>
                        <td>新增价格库存</td>
                        <td>2013-08-12<br>15:00:33</td>
                        <td><a href="#">编辑</a>　<a href="#">查看原因</a></td>
                    </tr>
                </tbody>
            </table>
            <?php include("paging.php"); ?>
        </div>


    </div><!--//.main-->
    

</div>

<?php include("common/footer.php"); ?>

</body>
</html>
