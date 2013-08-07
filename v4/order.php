<?php $page = "start" ?>
<?php $title="开始使用"?>
<?php include("common/order-meta.php"); ?>

<!-- 临时使用的内嵌样式style，不要上线此style -->
<style>

</style>

</head>
<body class="order">
<?php include("common/order-header.html"); ?>


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
    
    
    <div class="order-content border equalheight-box">
        <div class="sidebar equalheight-item">
            <div class="sidebox side-setbox">
                <div class="side-title">
                    <h3>订单费用结算</h3>
                </div>
                <div class="content">
                    <dl class="pro-setbox">
                    	<dt>产品费用</dt>
                    	<dd>
                            <span class="num"><dfn>&yen;562702</dfn>&times;<i class="price">220</i></span>
                            <p>万盛黑山谷生态旅游区门票成人票</p>
                        </dd>
                        <dd>
                            <span class="num"><dfn>&yen;130</dfn>&times;<i class="price">1</i></span>
                            <p>万盛黑山谷生态旅游区门票儿童票</p>
                        </dd>
                    </dl>
                    <dl class="pro-setbox">
                    	<dt>附加产品费用</dt>
                    	<dd>
                            <span class="num"><dfn>&yen;35</dfn>&times;<i class="price">1</i></span>
                            <p>平安国内长途10日游意外险（特惠型）(国内)</p>
                        </dd>
                        <dd>
                            <span class="num"><dfn>&yen;90</dfn>&times;<i class="price">1</i></span>
                            <p>天目湖农家菜套餐</p>
                        </dd>
                    </dl>
                    <dl class="pro-setbox">
                    	<dt>优惠</dt>
                    	<dd>
                            <span class="num save-price"><dfn>- &yen;<b>10</b></dfn></span>
                            <p>早订早惠</p>
                        </dd>
                        <dd>
                            <span class="num save-price"><dfn>- &yen;<b>10</b></dfn></span>
                            <p>多订多惠</p>
                        </dd>
                        <dd>
                            <span class="num save-price"><dfn>- &yen;<b>50</b></dfn></span>
                            <p>使用优惠券</p>
                        </dd>
                    </dl>
                    <div class="total-price">
                        <span class="price-num"><dfn>459080</dfn> 元</span>
                        <strong>订单金额：</strong>
                    </div>
                </div>
            </div>
        </div> <!-- //.sidebar -->
        
        <div class="main equalheight-item">
            
            <!-- 预订信息 -->
            <div class="order-title">
                <h3><span>预订信息</span></h3>
            </div>
            <p>测试文本，这是一段测试文本12px/22px，用于测试页面的一些布局特性，不属于页面展现的一部分，开发请忽略。这是一段测试文本，具有比较长的文本内容，测试通栏显示效果及行高，通常含有比较变态的文本内容，测试特殊情况下文本对布局的影响，以及如何处理，如折断换行等。qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm1234567890qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm1234567890</p>
            
            <div class="content">
                
                <div class="xlist-hor">
                    <dl class="xdl-hor">
                        <dt class="B">您预订：</dt>
                        <dd>
                            <a class="B" href="#">东方明珠广播电视塔二球、上海历史发展陈列馆【亲子/家庭 套票】</a>
                        </dd>
                    </dl>
                    <dl class="xdl-hor">
                        <dt class="B"><i class="req">*</i>游玩日期：</dt>
                        <dd>
                            <div class="dinput dinput-date">
                                <input class="input-date" type="text" maxlength="10" placeholder="2013-6-10">
                                <div class="date-info">
                                    <i class="icon-date"></i>
                                    <span class="text-info">星期五</span>
                                </div>
                            </div>
                        </dd>
                    </dl>
                    <dl class="xdl-hor">
                        <dt class="B"><i class="req">*</i>订单数量：</dt>
                        <dd>
                            <a href="#">亲子套餐</a> <dfn>&yen;<i>270</i></dfn>
                        </dd>
                    </dl>
                    <dl class="xdl-hor">
                        <dt class="B">税金：</dt>
                        <dd>
                            <div class="check-text"><label class="radio inline"><input class="input-radio" name="taxes" type="radio">苏梅岛机票税金（香港往返）</label><dfn>&yen;270</dfn>/人</div>
                            <div class="check-text"><label class="radio inline"><input class="input-radio" name="taxes" type="radio">马尔代夫新航机票税金（香港往返）</label><dfn>&yen;270</dfn>/人</div>
                            <div class="check-text"><label class="radio inline"><input class="input-radio" name="taxes" type="radio">马尔代夫机票税金（香港往返）</label><dfn>&yen;270</dfn>/人</div>
                        </dd>
                    </dl>
                    
                    <div class="dot_line">间隔线</div>
                    
                    <dl class="xdl-hor">
                    	<dt class="B">可享优惠：</dt>
                    	<dd>
                            <p>1.可参加优惠活动或使用优惠券；<br>
                            2.付款时可使用奖金抵扣；<br>
                            3.选择浦发银行在线付款立减10元。</p>
                            <p><a class="B" href="#">+参加优惠活动或使用优惠券</a>　<span class="save-price"><dfn>- &yen;<b>50</b></dfn></span></p>
                        </dd>
                    </dl>
                </div>
            </div> <!-- //预订信息 -->
            
            
            <!-- 附加产品 -->
            <div class="order-title">
                <h3><span>附加产品</span></h3>
            </div>
            <div class="content">
                <div class="xlist-hor">
                    <dl class="xdl-hor">
                        <dt class="B">保险：</dt>
                        <dd>
                            <div class="check-text"><label class="radio inline"><input class="input-radio" name="safety" type="radio">平安国内长途10日游意外险（尊贵型）(国内)</label><dfn>&yen;270</dfn>/人</div>
                            <div class="check-text"><label class="radio inline"><input class="input-radio" name="safety" type="radio">平安国内长途10日游意外险（特惠型）(国内)</label><dfn>&yen;35</dfn>/人</div>
                        </dd>
                    </dl>
                    <dl class="xdl-hor">
                        <dt><i class="req">*</i>投保人1：</dt>
                        <dd>
                            <input type="text" class="input-text" />
                        </dd>
                    </dl>
                    <dl class="xdl-hor">
                        <dt><i class="req">*</i>投保人2：</dt>
                        <dd>
                            <input type="text" class="input-text" />
                        </dd>
                    </dl>
                    <dl class="xdl-hor">
                        <dt></dt>
                        <dd>
                            <button class="btn btn-small btn-white">修改</button>
                        </dd>
                    </dl>
                    <dl class="xdl-hor">
                        <dt></dt>
                        <dd>
                            <label class="radio inline"><input class="input-radio" name="safety" type="radio">不需要保险</label>
                        </dd>
                    </dl>
                    
                    <div class="dot_line">间隔线</div>
                    
                    <dl class="xdl-hor">
                        <dt class="B">税金：</dt>
                        <dd>
                            <div class="check-text"><label class="checkbox inline"><input class="input-checkbox" name="taxes" type="checkbox">升级总统套房</label><dfn>&yen;100</dfn>/人</div>
                            <div class="check-text"><label class="checkbox inline"><input class="input-checkbox" name="taxes" type="checkbox">升级海景观景房</label><dfn>&yen;180</dfn>/人</div>
                            <div class="check-text"><label class="checkbox inline"><input class="input-checkbox" name="taxes" type="checkbox">升级豪华型套房</label><dfn>&yen;200</dfn>/人</div>
                        </dd>
                    </dl>
                    
                    <dl class="xdl-hor">
                        <dt class="B">您预订：</dt>
                        <dd>
                            <a class="B" href="#">东方明珠广播电视塔二球、上海历史发展陈列馆【亲子/家庭 套票】</a>
                        </dd>
                    </dl>
                    <dl class="xdl-hor">
                        <dt class="B"><i class="req">*</i>游玩日期：</dt>
                        <dd>
                            <div class="dinput dinput-date">
                                <input class="input-date" type="text" maxlength="10" placeholder="2013-6-10">
                                <div class="date-info">
                                    <i class="icon-date"></i>
                                    <span class="text-info">星期五</span>
                                </div>
                            </div>
                        </dd>
                    </dl>
                    <dl class="xdl-hor">
                        <dt class="B"><i class="req">*</i>订单数量：</dt>
                        <dd>
                            <a href="#">亲子套餐</a> <dfn>&yen;<i>270</i></dfn>
                        </dd>
                    </dl>
                    <dl class="xdl-hor">
                        <dt class="B">税金：</dt>
                        <dd>
                            <div class="check-text"><label class="radio inline"><input class="input-radio" name="taxes" type="radio">苏梅岛机票税金（香港往返）</label><dfn>&yen;270</dfn>/人</div>
                            <div class="check-text"><label class="radio inline"><input class="input-radio" name="taxes" type="radio">马尔代夫新航机票税金（香港往返）</label><dfn>&yen;270</dfn>/人</div>
                            <div class="check-text"><label class="radio inline"><input class="input-radio" name="taxes" type="radio">马尔代夫机票税金（香港往返）</label><dfn>&yen;270</dfn>/人</div>
                        </dd>
                    </dl>
                    
                    <div class="dot_line">间隔线</div>
                    
                    <dl class="xdl-hor">
                    	<dt class="B">可享优惠：</dt>
                    	<dd>
                            <p>1.可参加优惠活动或使用优惠券；<br>
                            2.付款时可使用奖金抵扣；<br>
                            3.选择浦发银行在线付款立减10元。</p>
                            <p><a class="B" href="#">+参加优惠活动或使用优惠券</a>　<span class="save-price"><dfn>- &yen;<b>50</b></dfn></span></p>
                        </dd>
                    </dl>
                </div>
                
            </div> <!-- //附加产品 -->
            
            
            <!-- 取票人信息 -->
            <div class="order-title">
                <h3><span>取票人信息</span></h3>
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
                
            </div> <!-- //取票人信息 -->
            
            
            <!-- 预订须知 -->
            <div class="order-title">
                <h3><span>预订须知</span></h3>
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
                
               
                
                
            </div> <!-- //预订须知 -->
            
            
        </div> <!-- //.main -->
    
    </div>
    
    
</div>

<?php include("common/order-footer.php"); ?>

</body>
</html>
