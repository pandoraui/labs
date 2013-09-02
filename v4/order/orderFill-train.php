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
            <div class="tiptext tip-warning check-content">
                <div class="pre-wrap">温馨提示：
1.驴妈妈火车票代购非100%有票。若无票我们会第一时间短信通知。不代购儿童票、学生票、军人票等，敬请  谅解。如有变动，请以请以火车站当日售票信息为准。
2.发车前1天的改签或退票，保险会自动改签，或退还到原支付账户。</div>
            </div>
            
            
            <!-- 车票信息 -->
            <div class="order-title">
                <h3>车票信息</h3>
            </div>
            <div class="order-content">
                <div class="xdl-hor">
                    <dl class="xdl">
                        <dt> </dt>
                        <dd>
                            G101 北京（12：33）- 上海虹桥（22：23） <a href="#">修改车次</a>
                        </dd>
                    </dl>
                    <dl class="xdl">
                        <dt>日期：</dt>
                        <dd>
                            <div class="dinput dinput-date ib"><input class="input-date" type="text" maxlength="10" placeholder="2013-6-10"><span class="date-info"><i class="xicon icon-date"></i><span class="text-info">星期五</span></span>
                            </div>
                            &nbsp;&nbsp;<a href="#" class="pbtn pbtn-white">订返程</a>
                        </dd>
                    </dl>
                    <dl class="xdl">
                        <dt>座席：</dt>
                        <dd>
                            <div class="check-text">
                                <label class="radio inline check-radio-item"><input class="input-radio" name="seat" type="radio"> 二等座453.0元</label>
                            </div>
                            <div class="check-text">
                                <label class="radio inline check-radio-item"><input class="input-radio" name="seat" type="radio"> 一等座553.0元</label>
                            </div>
                            <div class="check-text">
                                <label class="radio inline check-radio-item"><input class="input-radio" name="seat" type="radio"> 硬卧653.0元</label>
                            </div>
                            
                        </dd>
                    </dl>
                    
                    
                </div>
            </div> <!-- //车票信息 -->
            
            
            <!-- 填写乘客信息 -->
            <?php include("s1-contact-passenger.html"); ?>
            
            
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
