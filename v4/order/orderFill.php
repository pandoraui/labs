<?php $page = "start" ?>
<?php $title="订单信息填写"?>
<?php include("../common/order-meta.php"); ?>
</head>
<body class="order">
<?php include("../common/order-header.html"); ?>


<div class="wrap">
    
    <?php include("s-step31.html"); ?>
    
    <div class="order-main border equalheight-box">
    
        <?php include("s1-sidebar.html"); ?>
        
        <div class="main equalheight-item">
            
            <!-- 预订信息 -->
            <?php include("s1-order-info.html"); ?>
            
            
            <!-- 附加产品 -->
            <?php include("s1-append-pro.html"); ?>
            
            
            <!-- 联系人信息 -->
            <?php include("s1-contact.html"); ?>
            
            
            <!-- 游玩人信息 -->
            <?php include("s1-contact-play.html"); ?>
            
            
            <!-- 紧急联系人信息 -->
            <?php include("s1-contact-em.html"); ?>
            
            
            <!-- 预订须知 -->
            <?php include("s1-booking-policy.html"); ?>
            
            
            <!-- 优惠信息 -->
            <?php include("s1-coupon.html"); ?>
            
            
            <!-- 同意协议/提交订单 -->
            <?php include("s1-submit-order.html"); ?>
            
            
            
        </div> <!-- //.main -->
    
    </div>
    
    
</div>

<?php include("../common/order-footer.php"); ?>

</body>
</html>
