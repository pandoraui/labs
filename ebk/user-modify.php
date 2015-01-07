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
        <a href="#">用户管理</a> &gt; 
        <a class="current">修改密码</a>
    </p>
    <a class="fr link-down" href="#">
        <i class="icon icon-down"></i>用户管理操作PPT下载
    </a>
</div><!--//.crumbs-->

<div class="wrap">
    <div class="ebox">
        <div class="etitle">
            <h3>修改密码</h3>
        </div>
        <div class="content">
            <form action="" method="post">
                <table class="form-table form-inline bc">
                    <tr>
                        <td class="label">原密码：</td>
                        <td><input type="password" class="input-password"></td>
                    </tr>
                    <tr>
                        <td class="label">新密码：</td>
                        <td><input type="password" class="input-password"></td>
                    </tr>
                    <tr>
                        <td class="label">确认新密码：</td>
                        <td><input type="password" class="input-password"></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="button" value="确定" class="btn btn-w btn-blue"><input type="reset" value="清空" class="btn btn-w btn-gray"></td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
    

</div>

<?php include("common/footer.php"); ?>

</body>
</html>
