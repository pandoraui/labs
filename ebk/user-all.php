<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>用户管理</title>
<link rel="shortcut icon" type="image/x-icon" href="http://www.lvmama.com/favicon.ico">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="keywords" content="页面关键字">
<meta name="description" content="页面描述">
<?php include("common/meta.php"); ?>
</head>
<body class="user">
<?php include("common/header.php"); ?>

<div class="crumbs wrap">
    <p class="crumbs-link">
        <a href="#"><i class="icon icon-ihome"></i>首页</a> &gt; 
        <a class="current">用户管理</a>
    </p>
    <a class="fr link-down" href="#">
        <i class="icon icon-down"></i>用户管理操作PPT下载
    </a>
</div><!--//.crumbs-->

<div class="wrap">
    <?php include("aside-user.php"); ?>
    
    <div class="main">
        <p class="tr lh30"><a class="link-down" href="#"><i class="icon icon-adduser"></i>新建用户</a></p>

        <!--列表-->
        <div class="plist">
            <table class="table-list table-blue">
                <thead>
                    <tr>
                        <th>用户名</th>
                        <th>姓名</th>
                        <th>所属部门</th>
                        <th>是否可用</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>zhangeven</td>
                        <td>zhangeven</td>
                        <td>产品中心</td>
                        <td>是</td>
                        <td><a href="#">修改</a>　<a href="#">初始化密码</a></td>
                    </tr>
                    <tr>
                        <td>zhangeven</td>
                        <td>zhangeven</td>
                        <td>产品中心</td>
                        <td>否</td>
                        <td><a href="#">修改</a></td>
                    </tr>
                    <tr>
                        <td>zhangeven</td>
                        <td>zhangeven</td>
                        <td>产品中心</td>
                        <td>是</td>
                        <td><a href="#">修改</a>　<a href="#">初始化密码</a></td>
                    </tr>
                    <tr>
                        <td>zhangeven</td>
                        <td>zhangeven</td>
                        <td>产品中心</td>
                        <td>否</td>
                        <td><a href="#">修改</a></td>
                    </tr>
                    <tr>
                        <td>zhangeven</td>
                        <td>zhangeven</td>
                        <td>产品中心</td>
                        <td>否</td>
                        <td><a href="#">修改</a></td>
                    </tr>
                    <tr>
                        <td>zhangeven</td>
                        <td>zhangeven</td>
                        <td>产品中心</td>
                        <td>是</td>
                        <td><a href="#">修改</a>　<a href="#">初始化密码</a></td>
                    </tr>
                    <tr>
                        <td>zhangeven</td>
                        <td>zhangeven</td>
                        <td>产品中心</td>
                        <td>否</td>
                        <td><a href="#">修改</a></td>
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
