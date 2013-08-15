<?php $page = "start" ?>
<?php $title="开始使用"?>
<?php include("../common/order-meta.php"); ?>

<!-- 临时使用的内嵌样式style，不要上线此style -->
<style>

</style>

</head>
<body>
<?php include("../common/order-header.html"); ?>

<div class="wrap">
    <!-- 操作步骤 -->
    <ol class="ui-step ui-step-3">
        <li class="ui-step1 ui-step-start ui-step-active">
            <div class="ui-step-arrow">
                <i class="arrow_r1"></i>
                <i class="arrow_r2"></i>
            </div>
            <span class="ui-step-text">1.填写订单信息</span>
        </li>
        <li class="ui-step2">
            <div class="ui-step-arrow">
                <i class="arrow_r1"></i>
                <i class="arrow_r2"></i>
            </div>
            <span class="ui-step-text">2.选择付款方式付款</span>
        </li>
        <li class="ui-step3 ui-step-end">
            <div class="ui-step-arrow">
                <i class="arrow_r1"></i>
                <i class="arrow_r2"></i>
            </div>
            <span class="ui-step-text">3.预订成功</span>
        </li>
    </ol> <!-- //操作步骤 -->
    
    
    <div class="order-main border equalheight-box">
        <div class="sidebar equalheight-item">
            <div class="sidebox side-setbox">
                sidebox
            </div>
        </div> <!-- //.sidebar -->
        
        <div class="main equalheight-item">
            <p class="">测试文本，这是一段测试文本12px/22px，用于测试页面的一些布局特性，不属于页面展现的一部分，开发请忽略。这是一段测试文本，具有比较长的文本内容，测试通栏显示效果及行高，通常含有比较变态的文本内容，测试特殊情况下文本对布局的影响，以及如何处理，如折断换行等。qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm1234567890qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm1234567890</p>
            
            <div class="order-title">
                <h3><span>一些说明文档</span></h3>
            </div>
            <div class="content">
                <div class="hr_a"></div>
                <p>支付成功页 buy/paysuccess#来源页面参数+产品ID如/paysuccess#hotel-Domestic-76985</p>
                <p>其他支付方式提醒 buy/other#来源页面参数+产品ID</p>  
            </div>
            
            
            <div class="order-title">
                <h3><span>预览路径引导</span></h3>
            </div>
            <div class="content">
                <div class="hr_a"></div>
                <div class="xdl-hor">
                    <dl class="xdl">
                        <dt class="B">填写订单信息：</dt>
                        <dd>
                            <a class="B" href="buy.php">buy</a>
                        </dd>
                    </dl>
                    <dl class="xdl">
                        <dt class="B">选择付款方式：</dt>
                        <dd>
                            <a class="B" href="order.php">order</a>
                        </dd>
                    </dl>
                    <dl class="xdl">
                        <dt class="B">支付成功页面：</dt>
                        <dd>
                            <a class="B" href="paysuccess.php">paysuccess</a>
                        </dd>
                    </dl>
                </div>
            </div>
        </div> <!-- //.main -->
    
    </div> 
</div>


<?php include("../common/order-footer.php"); ?>

</body>
</html>
