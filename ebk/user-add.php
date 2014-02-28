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
        <a class="current">添加新用户</a>
    </p>
    <a class="fr link-down" href="#">
        <i class="icon icon-down"></i>用户管理操作PPT下载
    </a>
</div><!--//.crumbs-->

<div class="wrap">
    <p class="tr lh30"><a class="link-down" href="#"><i class="icon icon-return"></i>返回用户管理</a></p>
    
    <div class="newUser_box wrap">
        <div class="newUser_l">
            <h3 class="box_title">用户资料</h3>
            <table class="ziliao form-inline table-full form-table">
                <tr>
                    <td class="label"><span class="req">*</span>用户名：</td><td><input class="input-text" type="text"></td>
                </tr>
                <tr>
                    <td class="label"><span class="req">*</span>密码：</td><td><input class="input-text" type="password"></td>
                </tr>
                <tr>
                    <td class="label"><span class="req">*</span>姓名：</td><td><input class="input-text" type="text"></td>
                </tr>
                <tr>
                    <td class="label"><span class="req">*</span>部门：</td><td><input class="input-text" type="text"></td>
                </tr>
                <tr>
                    <td class="label">固定电话：</td><td><input class="input-text" type="text"></td>
                </tr>
                <tr>
                    <td class="label">手机：</td><td><input class="input-text" type="text"></td>
                </tr>
                <tr>
                    <td class="label">邮箱：</td><td><input class="input-text" type="text"></td>
                </tr>
                <tr>
                    <td class="label">状态：</td>
                    <td>
                    <label class="radio"><input class="input-radio" type="radio" name="newUsers_zt">开启</label>
                    <label class="radio"><input class="input-radio" type="radio" name="newUsers_zt">关闭</label>
                    </td>
                </tr>
            </table>
        </div>
        
        <div class="newUser_l">
            <span class="newUser_jt"></span>
            <h3 class="box_title">权限范围</h3>
            <div class="quanxian_box">
                <img src="images/quanxian.gif" width="174" height="351" alt="">
            </div>
        </div>
        
    </div>
    <p class="mt10"><a class="btn btn-w btn-blue">保存</a></p>
</div>

<?php include("common/footer.php"); ?>

</body>
</html>
