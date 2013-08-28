<?php $page = "start" ?>
<?php $title="支付页"?>
<?php include("../common/order-meta.php"); ?>
</head>
<body class="order cnbtn">
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
            
            <!-- 订单列表 -->
            <div class="order-list hide">
                <div class="dot_line"></div>
                
                <!-- 订单信息 -->
                <div class="c-title"><h4>订单信息</h4></div>
                <table class="table-full order-buy">
                    <thead>
                        <tr>
                            <th>订单号</th>
                            <th>游玩日期</th>
                            <th>游玩人数</th>
                            <th>产品信息</th>
                        </tr>
                    </thead>
                    <tbody class="table-vtop">
                        <tr>
                            <td>5201236</td>
                            <td>2013-6-21</td>
                            <td>2</td>
                            <td>
                                <p>万盛黑山谷生态旅游区门票成人票&nbsp;&nbsp;<span class="num"><dfn>&yen;270</dfn>&times;<i class="price">1</i></span></p>
                                <p>万盛黑山谷生态旅游区门票儿童票&nbsp;&nbsp;<span class="num"><dfn>&yen;130</dfn>&times;<i class="price">1</i></span></p>
                                <p>平安国内长途10日游意外险（特惠型）(国内)&nbsp;&nbsp;<span class="num"><dfn>&yen;35</dfn>&times;<i class="price">2</i></span></p>
                                <p>全场满500减20优惠券&nbsp;&nbsp;<span class="num save-price"><dfn>- &yen;<b>50</b></dfn></span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            </div> <!-- //订单列表 -->
            <div class="hr_c"></div>
            <span class="view-details slidedown-orderlist">
                订单详情<i class="ui-arrow-bottom white-ui-arrow-bottom"></i>
            </span>
        </div> <!-- //.main -->
            
        <!-- 支付方式 -->
        <div class="lightbox paybox clearfix">
            
            <div class="paytips">
                <p>友情提示：您的预订信息已提交，请在 <b class="red">2012-07-30 12:00</b> 前完成付款，<span class="timebox">剩余付款时间：<b class="countdown red">2800000</b></span></p>
            </div>
            <div class="dot_line"></div>
            
            <div class="check-text"><label class="checkbox inline"><input class="input-checkbox" name="ownpro" type="checkbox">使用驴妈妈存款账户余额</label></div>
            <div class="check-text"><label class="checkbox inline"><input class="input-checkbox" name="ownpro" type="checkbox">使用驴妈妈储值卡</label></div>
            <div class="check-text"><label class="checkbox inline"><input class="input-checkbox" name="ownpro" type="checkbox">使用奖金账户余额</label> <small>可使用<b>50</b>元</small></div>
            
            
            <!-- 选择支付方式 -->
            <div class="payment form-inline">
                <div class="pay-title ui-tab-trigger">
                    <h4 class="pay-price">您还需继续付款 <dfn><i>4100</i></dfn> 元</h4>
                    <ul class="tabnav order-tabnav clearfix">
                    	<li class="selected"><a href="javascript:;">支付平台/银行卡</a></li>
                    	<li class="paylink"><a href="javascript:;">其他方式<i class="ui-arrow-right blue-ui-arrow-right"></i></a></li>
                    </ul>
                </div>
                <div class="tab-switch payment-list">
                    <div class="tabcon">

                        <ul class="bank-list clearfix">
                            <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="icon-bank alipay"></i></label></li>
                            <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="icon-bank shengpay"></i></label></li>
                        </ul>
                        <div class="dot_line"></div>
                        <ul class="bank-list clearfix">
                            <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="icon-bank alipay"></i></label></li>
                            <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="icon-bank shengpay"></i></label></li>
                            <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="icon-bank shengpay"></i></label></li>
                            <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="icon-bank shengpay"></i></label></li>
                            <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="icon-bank shengpay"></i></label></li>
                            <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="icon-bank shengpay"></i></label></li>
                            <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="icon-bank shengpay"></i></label><span class="poptip-mini poptip-mini-warning"><div class="tip-sharp tip-sharp-bottom"></div>立减10元</span></li>
                            <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="icon-bank shengpay"></i></label></li>
                            <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="icon-bank shengpay"></i></label></li>
                            <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="icon-bank shengpay"></i></label></li>
                            <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="icon-bank shengpay"></i></label></li>
                        </ul>
                    </div>
                    <div class="tabcon">
                        
                    </div>
                </div>
                <div class="order-btn"><button class="pbtn pbtn-big pbtn-orange">&nbsp;&nbsp;下一步&nbsp;&nbsp;</button></div>
            </div> <!-- //选择支付方式 -->
            
        </div> <!-- //支付方式 -->
        
    </div>
    
    
</div>

<?php include("../common/order-footer.php"); ?>
<script>
$(function(){
    $.alert("hello");
    
})

</script>
</body>
</html>
