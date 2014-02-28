<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>ebk首页</title>
<link rel="shortcut icon" type="image/x-icon" href="http://www.lvmama.com/favicon.ico">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="keywords" content="页面关键字">
<meta name="description" content="页面描述">
<?php include("common/meta.php"); ?>
</head>
<body class="login">


<div class="login_all">
    <div class="login_main">
        <span class="login_logo"></span>
        <p class="login_time"></p>
        <div class="login_box">
            <h2>用户登录</h2>
            <ul class="login_list form-inline">
                <li>
                    <p>用户名:</p>
                    <input class="border_red input-text" type="text">
                </li>
                <li>
                    <p><a class="forget" href="javascript:void(0)" target="_self"><i class="tip-icon tip-icon-help"></i>忘记密码？</a>密码：</p>
                    <input class="input-text" type="password">
                </li>
                <li class="yanzhengma">
                    <input class="w_86 input-text" type="text">
                    <img src="images/yanzhengma.gif" width="98" height="38" alt="验证码">
                    <a href="javascript:void(0)" target="_self">换一个</a>
                </li>
            </ul>
            <a class="btn_login" href="#">立即登录</a>
            <p class="login_prompt"><i class="tip-icon tip-icon-error"></i><span>请输入正确内容</span></p>
        </div>
    </div>
</div>


<?php include("common/footer.php"); ?>

</body>
</html>
