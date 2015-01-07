<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>页面组件</title>
<meta name="keywords" content=""/>
<meta name="description" content="">
<?php include("common/meta.html"); ?>
<style>

</style>
</head>
<body>
<?php include("common/header.html"); ?>

<div class="wrap">
    <!-- 操作步骤 -->
    <ol class="ui-step ui-step-3">
        <li class="ui-step1 ui-step-start ui-step-active">
            <div class="ui-step-arrow">
                <i class="arrow_r1">◆</i>
                <i class="arrow_r2">◆</i>
            </div>
            <span class="ui-step-text">1.填写订单信息</span>
        </li>
        <li class="ui-step2">
            <div class="ui-step-arrow">
                <i class="arrow_r1">◆</i>
                <i class="arrow_r2">◆</i>
            </div>
            <span class="ui-step-text">2.选择付款方式付款</span>
        </li>
        <li class="ui-step3 ui-step-end">
            <div class="ui-step-arrow">
                <i class="arrow_r1">◆</i>
                <i class="arrow_r2">◆</i>
            </div>
            <span class="ui-step-text">3.预订成功</span>
        </li>
    </ol> <!-- //操作步骤 -->
    
    
    <div class="order-content border">
        <div class="sidebar">
            <div class="sidebox">
                <div class="side-title">
                    <h3>订单费用结算</h3>
                </div>
                <div class="content">
                    <dl class="pro-num">
                    	<dt>产品费用</dt>
                    	<dd><span class="num"><dfn>&yen;270</dfn>×<i class="price">1</i></span>
                        <p>万盛黑山谷生态旅游区门票成人票</p>
                        </dd>
                        <dd><span class="num"><dfn>&yen;130</dfn>×<i class="price">1</i></span>
                        <p>万盛黑山谷生态旅游区门票儿童票</p>
                        </dd>
                    </dl>
                    <dl class="pro-num">
                    	<dt>附加产品费用</dt>
                    	<dd><span class="num"><dfn>&yen;35</dfn>×<i class="price">1</i></span>
                        <p>平安国内长途10日游意外险（特惠型）(国内)</p>
                        </dd>
                        <dd><span class="num"><dfn>&yen;90</dfn>×<i class="price">1</i></span>
                        <p>天目湖农家菜套餐</p>
                        </dd>
                    </dl>
                    <div class="total-price">
                        <span class="price-num"><dfn>4590</dfn>元</span>
                        <strong>订单金额：</strong>
                    </div>
                </div>
            </div>
        </div> <!-- //.sidebar -->
        
        <div class="main">
            <p>测试数据，这是一段测试数据，用于测试页面的一些布局特性，不属于页面展现的一部分，开发请忽略。测试数据，这是一段测试数据，用于测试页面的一些布局特性，不属于页面展现的一部分，开发请忽略。</p>
            <!-- 预订信息 -->
            <div class="order-title">
                <h3>预订信息</h3>
            </div>
            <div class="content">
                
            </div>
            
            
            <!-- 附加产品 -->
            <div class="order-title">
                <h3>附加产品</h3>
            </div>
            <div class="content">
                
            </div>
            
            
            <!-- 取票人信息 -->
            <div class="order-title">
                <h3>取票人信息</h3>
            </div>
            <div class="content">
                <div class="pa-info">
                    <dl class="dl-hor">
                        <dt>常用联系人：</dt>
                        <dd class="form-inline">
                            <label class="checkbox inline"><input type="checkbox" class="input-checkbox" />胡小小</label>
                            <label class="checkbox inline"><input type="checkbox" class="input-checkbox" />郑明明</label>
                            <label class="checkbox inline"><input type="checkbox" class="input-checkbox" />黄丽丽</label>
                            <label class="checkbox inline"><input type="checkbox" class="input-checkbox" />王山山</label>
                        </dd>
                    </dl>
                </div>
                <div class="person">
                    <dl class="dl-hor">
                        <dt>常用联系人：</dt>
                        <dd class="form-inline">
                            <label class="inline"><input type="text" class="input-text" /></label>
                        </dd>
                    </dl>
                    <dl class="dl-hor">
                        <dt><i class="req">*</i>手机号码：</dt>
                        <dd class="form-inline">
                            <label class="inline">
                            <input type="text" class="input-text" />
                            免费接受订单确认短信，请务必填写正确</label>
                        </dd>
                    </dl>
                    <dl class="dl-hor">
                        <dt>电子邮箱：</dt>
                        <dd>
                            <label class="inline"><input type="text" class="input-text" />
                            用于接收邮件订单详情、邮件出行通知、行程确认等服务</label>
                        </dd>
                    </dl>
                </div>
                
            </div>
            
            
            <!-- 预订须知 -->
            <div class="order-title">
                <h3>预订须知</h3>
            </div>
            <div class="content">
                <div class="booking-policy">
                    <dl class="dl-hor">
                    	<dt>入园方式：</dt>
                    	<dd>入园地址：上海市松江佘山上海欢乐谷检票处驴妈妈电子门票专用通道；<br>
                        开园时间：9:00-18:00；<br>
                        通关方式：刷二维码短信入园（二维码短信仅限游玩当天有效，请勿删除、转发无效）。
                        </dd>
                    </dl>
                    <dl class="dl-hor">
                    	<dt>退款说明：</dt>
                    	<dd>1.预订成功后如要修改或取消订单，请在游玩当天11:00前致电驴妈妈客服中心（1010 6060）；<br>
                        2.超过游玩当天11:00后的订单，一律不退不改，敬请谅解！
                        </dd>
                    </dl>
                </div>
                
               
                
                
            </div>
            
            
        </div> <!-- //.main -->
    
    </div>
    
    
</div>
<?php include("common/footer.html"); ?>
</body>
</html>
