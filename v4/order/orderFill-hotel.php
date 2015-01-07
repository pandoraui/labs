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
            <div class="order-title">
                <h3>预订信息</h3>
            </div>
            <div class="order-content">
                <div class="xdl-hor">
                    <dl class="xdl">
                        <dt class="B">您预订：</dt>
                        <dd>
                            <a class="B" target="_blank" href="#">酒店产品名称XXXXXXX</a>
                        </dd>
                    </dl>
                    <dl class="xdl">
                        <dt class="B"><i class="req">*</i>入住时间：</dt>
                        <dd>
                            <span class="ib">2013-6-18入住——2013-6-19退房</span>&nbsp;&nbsp;&nbsp;&nbsp;<a class="B" href="#">不可修改预订时间</a>
                        </dd>
                    </dl>
                    <dl class="xdl JS_check">
                        <dt class="B"><i class="req">*</i>预订数量：</dt>
                        <dd class="check-radio-box">
                            <div class="check-text">
                                <span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>该产品下类别产品A</span> 价格：<dfn>&yen;<i>270</i></dfn>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span class="oper-numbox"><a class="op-reduce op-disable-reduce J_reduce">-</a><input type="text" class="op-number" value="0" maxlength="8"><a class="op-increase J_increase">+</a></span>
                            </div>
                            <div class="tiptext tip-info check-content">
                                <span class="tip-close">&times;</span>
                                <div class="pre-wrap">3.游客可以在17点后进水世界游玩一次；
2.夜场开放时间为16:00-22:30；
1.仅限游玩当天入园。</div>  </div>
                        </dd>
                        <dd class="check-radio-box">
                            <div class="check-text">
                                <span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>该产品下类别产品A</span> 价格：<dfn>&yen;<i>270</i></dfn>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span class="oper-numbox"><a class="op-reduce op-disable-reduce J_reduce">-</a><input type="text" class="op-number" value="0" maxlength="8"><a class="op-increase J_increase">+</a></span>
                            </div>
                            <!-- 说明：如果要实现带换行的格式化文本，请添加.pre-wrap样式 -->
                            <div class="tiptext tip-info check-content">
                                <span class="tip-close">&times;</span>
                                <div class="pre-wrap">1.游客可以在17点后进水世界游玩一次；
2.夜场开放时间为16:00-22:30；
3.仅限游玩当天入园。</div>  </div>
                        </dd>
                    </dl>
                    
                    
                </div>
            </div> <!-- //预订信息 -->
            
            
            <!-- 入住人信息 -->
            <?php include("s1-contact-in.html"); ?>
            
            
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
