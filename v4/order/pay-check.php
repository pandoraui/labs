<?php $page = "start" ?>
<?php $title="资源审核页面"?>
<?php include("../common/order-meta.php"); ?>
</head>
<body class="order">
<?php include("../common/order-header.html"); ?>


<div class="wrap">
    
    <?php include("s-step32.html"); ?>
    
    
    <div class="order-main border">
        <div class="main">
            <div class="hr_a"></div>
            <div class="c-title">
                <h3>您预订：东方明珠广播电视塔二球、上海历史发展陈列馆【亲子/家庭 套票】</h3>
                <div class="total-price">
                    <span class="price-num"><dfn>459080</dfn> 元</span>
                    <strong>订单金额：</strong>
                </div>
            </div>
            <div style="height:30px;"></div>
            <div class="pay-feedback">
                <div class="tipbox tip-success tip-nowrap">
                    <span class="tip-icon-big tip-icon-big-success"></span>
                    <div class="tip-content">
                        <h3 class="tip-color-title">订单提交成功</h3>
                        <p>您可在<a href="#">我的订单</a>中查看订单状态！</p>
                    </div>
                    
                    
                    <div class="tip-other tip-align pay-backinfo">
                        
                        <div class="backinfo-item">
                            <!-- 手机客户端二维码 -->
                            <?php include("./s3-codeapp.html"); ?>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div> <!-- //.main -->
        
    </div>
    
    
</div>

<?php include("../common/order-footer.php"); ?>

</body>
</html>
