<?php $page = "start" ?>
<?php $title="支付页"?>
<?php include("../common/order-meta.php"); ?>
</head>
<body class="order">
<?php include("../common/order-header.html"); ?>


<div class="wrap">
    
    <?php include("s-step33.html"); ?>
    
    
    <div class="order-main border">
        <div class="main">
            <div class="pay-feedback">
                <div class="tipbox tip-success tip-nowrap">
                    <span class="tip-icon-big tip-icon-big-success"></span>
                    <div class="tip-content">
                        <h3 class="tip-color-title">您的订单已经支付成功。</h3>
                    </div>
                    
                    <div class="tip-other tip-align pay-backinfo">
                        <div class="backinfo-item">
                            <p class="f14">您的游玩日期是 <b class="pink">2013-8-22—2013-8-24</b>，游玩人数为 <b class="pink">2</b> 人。</p>
                            <p>系统已向 1388XXXX333 发送了预订成功短信以及其它相关短信，请您妥善保存短信，出游中如有需要，可根据短信中订单号拨打1010-6060 由驴妈妈专属客服为您解决，您也可通过 <a href="#">我的驴妈妈</a> &gt; <a href="#">我的订单</a> 重发凭证短信。</p>
                            
                            <div class="dot_line"></div>
                            
                            <p>游玩归来后发表点评可获得 <b class="red">10</b> 元点评返现，以及 <b class="red">100</b> 驴妈妈积分。  <a href="#">什么是积分？什么是奖金？</a></p>
                            <p>游玩归来后您可在 <a href="#">我的驴妈妈</a> &gt; <a href="#">我的订单</a> 中索取发票。</p>
                        </div>
                        
                        <div class="backinfo-item">
                            <!-- 手机客户端二维码 -->
                            <?php include("./s3-codeapp.html"); ?>
                        </div>
                    
                </div>
                
            </div>
        </div> <!-- //.main -->
        
    </div>
    
</div>

<?php include("../common/order-footer.php"); ?>

</body>
</html>
