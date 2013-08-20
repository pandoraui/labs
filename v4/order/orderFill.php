<?php $page = "start" ?>
<?php $title="订单信息填写"?>
<?php include("../common/order-meta.php"); ?>
</head>
<body class="order">
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
                <h3>预订信息</h3>
            </div>
            <div class="order-content">
                <div class="xdl-hor">
                    <dl class="xdl">
                        <dt class="B">您预订：</dt>
                        <dd>
                            <a class="B" target="_blank" href="#">东方明珠广播电视塔二球、上海历史发展陈列馆【亲子/家庭 套票】</a>
                        </dd>
                    </dl>
                    <dl class="xdl">
                        <dt class="B"><i class="req">*</i>游玩日期：</dt>
                        <dd>
                            <div class="dinput dinput-date"><input class="input-date" type="text" maxlength="10" placeholder="2013-6-10">
                                <span class="date-info"><i class="xicon icon-date"></i><span class="text-info">星期五</span></span>
                            </div>
                        </dd>
                    </dl>
                    <dl class="xdl JS_check">
                        <dt class="B"><i class="req">*</i>订单数量：</dt>
                        <dd class="check-radio-box">
                            <div class="check-text">
                                <span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>亲子套餐</span>
                                <span class="oper-numbox"><a class="op-reduce op-disable-reduce J_reduce">-</a><input type="text" class="op-number" value="0" maxlength="4"><a class="op-increase J_increase">+</a></span>
                                （单价<dfn>&yen;<i>270</i></dfn>）
                            </div>
                            <div class="tiptext tip-info check-content">
                                <span class="tip-close">&times;</span>
                                <div class="pre-wrap">3.游客可以在17点后进水世界游玩一次；
2.夜场开放时间为16:00-22:30；
1.仅限游玩当天入园。</div>  </div>
                        </dd>
                        <dd class="check-radio-box">
                            <div class="check-text">
                                <span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>家庭套餐</span>
                                <span class="oper-numbox"><a class="op-reduce J_reduce">-</a><input type="text" class="op-number" value="2" maxlength="4" title="请输入量"><a class="op-increase J_increase">+</a></span>
                                （单价<dfn>&yen;<i>270</i></dfn>）
                            </div>
                            <!-- 说明：如果要实现带换行的格式化文本，请添加.pre-wrap样式 -->
                            <div class="tiptext tip-info check-content">
                                <span class="tip-close">&times;</span>
                                <div class="pre-wrap">1.游客可以在17点后进水世界游玩一次；
2.夜场开放时间为16:00-22:30；
3.仅限游玩当天入园。</div>  </div>
                        </dd>
                    </dl>
                    
                    <dl class="xdl">
                        <dd class="dot_line">间隔线</dd>
                        <dt class="B"><i class="req">*</i>集合地点：</dt>
                        <dd>
                            <div class="check-text"><label class="radio inline"><input class="input-radio" name="taxes" type="radio">始发站　7:30上海汇川路凯旋路路口（近龙之梦购物中心）</label></div>
                            <div class="check-text"><label class="radio inline"><input class="input-radio" name="taxes" type="radio">途经站点　8:00南方商城沪闵路万源路路口（非集合首发站，实际时间如有误差敬请见谅）</label></div>
                            <div class="check-text"><label class="radio inline"><input class="input-radio" name="taxes" type="radio">途经站点　8:20松江老城区高速收费口（非集合首发站，实际时间如有误差敬请见谅）</label></div>
                            <div class="tiptext tip-warning">集合地点为必选项</div>
                        </dd>
                    </dl>
                    
                    <dl class="xdl JS_check">
                        <dt class="B">税金：</dt>
                        <dd class="dot_line">间隔线</dd>
                        <dd class="check-radio-box">
                            <div class="check-text">
                                <label class="radio inline">
                                    <input class="input-radio" name="taxes" type="radio"><span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>苏梅岛机票税金（香港往返）</span>
                                </label>
                                <dfn>&yen;270</dfn>/人
                            </div>
                            <div class="tiptext tip-info check-content">
                                <span class="tip-close">&times;</span>
                                <div class="pre-wrap">税金说明</div>
                            </div>
                        </dd>
                        <dd class="check-radio-box">
                            <div class="check-text">
                                <label class="radio inline">
                                    <input class="input-radio" name="taxes" type="radio"><span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>马尔代夫新航机票税金（香港往返）</span>
                                </label>
                                <dfn>&yen;270</dfn>/人
                            </div>
                            <div class="tiptext tip-info check-content">
                                <span class="tip-close">&times;</span>
                                <div class="pre-wrap">税金说明</div>
                            </div>
                        </dd>
                        <dd class="check-radio-box">
                            <div class="check-text">
                                <label class="radio inline">
                                    <input class="input-radio" name="taxes" type="radio"><span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>马尔代夫机票税金（香港往返）</span>
                                </label>
                                <dfn>&yen;270</dfn>/人
                            </div>
                            <div class="tiptext tip-info check-content">
                                <span class="tip-close">&times;</span>
                                <div class="pre-wrap">税金说明</div>
                            </div>
                        </dd>
                    </dl>
                    <dl class="xdl">
                        <dd class="dot_line">间隔线</dd>
                        <dt> </dt>
                        <dd>
                            <h5>以下信息存在请勾选，方便我们更好地为您服务</h5>
                            <div class="check-text"><label class="checkbox inline"><input class="input-checkbox" name="otherinfo" type="checkbox">出游人中存在16岁以下未成年人</label></div>
                            <div class="check-text"><label class="checkbox inline"><input class="input-checkbox" name="otherinfo" type="checkbox">出游人中存在70岁以上老人</label></div>
                            <div class="check-text"><label class="checkbox inline"><input class="input-checkbox" name="otherinfo" type="checkbox">出游人中有外籍友人（包含港澳台同胞）</label></div>
                            <div class="check-text"><label class="checkbox inline"><input class="input-checkbox" name="otherinfo" type="checkbox">出游人中有身体不健康者</label></div>
                            
                        </dd>
                    </dl>
                    
                </div>
            </div> <!-- //预订信息 -->
            
            
            
            <div class="hr_a"></div>
            <!-- 附加产品 -->
            <div class="order-title">
                <h3>附加产品</h3>
            </div>
            <div class="order-content xdl-hor">
                <div class="form-small">
                    <dl class="xdl JS_check">
                        <dt class="B">保险：</dt>
                        <dd class="check-radio-box">
                            <div class="check-text">
                                <label class="radio inline ">
                                    <input class="input-radio" name="safety" type="radio"><span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>平安国内长途10日游意外险（尊贵型）(国内)</span>
                                </label>
                                <dfn>&yen;270</dfn>/人
                            </div>
                            <div class="tiptext tip-info check-content">
                                <span class="tip-close">&times;</span>
                                <div class="pre-wrap">1.详细信息请见“<a target="_blank" href="#">平安境内长线保险</a>”说明，请仔细阅读“<a target="_blank" href="#">保险条款</a>”；
2.航班延误超过4小时请第一时间联系保险公司进行报案，并确认相应理赔材料；
3.包含健康咨询服务，提供电话健康和医疗咨询，包括病情咨询和建议、推荐适合的医疗机构及专家。有效期为自保险起期开始的一年内，不限咨询次数。
2012-01-01至2013-12-31 :投保人为被保险人投保须征得被保险人同意，被保险人为未成年人的，须征得其监护人同意。
2012-01-01至2013-12-31 :90周岁以上不承保。
2012-01-01至2013-12-31 :为确保投保无误，请准确填写个人信息。
2012-01-01至2013-12-31 :18周岁以下的被保险人，意外死亡的赔偿限额不得超过中国保监会所规定的最高限额10万元人民币。
2012-01-01至2013-12-31 :71至80周岁的被保险人，“其意外身故、烧伤及残疾保障”和“双倍给付意外伤害”的保险金额为保单所载金额的一半，81至90周岁的被保险人，其“意外身故、烧伤及残疾保障”和“双倍给付意外伤害”的保险金额为保单所载金额的四分之一。每人每次限购1份。</div>                           </div>
                        </dd>
                        <dd class="check-radio-box">
                            <div class="check-text">
                                <label class="radio inline">
                                    <input class="input-radio" name="safety" type="radio"><span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>平安国内长途10日游意外险（特惠型）(国内)</span>
                                </label>
                                <dfn>&yen;35</dfn>/人
                            </div>
                            <div class="tiptext tip-info check-content">
                                <span class="tip-close">&times;</span>
                                <div class="pre-wrap">1.详细信息请见“<a target="_blank" href="#">平安境内长线保险</a>”说明，请仔细阅读“<a target="_blank" href="#">保险条款</a>”；
2.航班延误超过4小时请第一时间联系保险公司进行报案，并确认相应理赔材料；
3.包含健康咨询服务，提供电话健康和医疗咨询，包括病情咨询和建议、推荐适合的医疗机构及专家。有效期为自保险起期开始的一年内，不限咨询次数。
2012-01-01至2013-12-31 :投保人为被保险人投保须征得被保险人同意，被保险人为未成年人的，须征得其监护人同意。
2012-01-01至2013-12-31 :90周岁以上不承保。
2012-01-01至2013-12-31 :为确保投保无误，请准确填写个人信息。
2012-01-01至2013-12-31 :18周岁以下的被保险人，意外死亡的赔偿限额不得超过中国保监会所规定的最高限额10万元人民币。
2012-01-01至2013-12-31 :71至80周岁的被保险人，“其意外身故、烧伤及残疾保障”和“双倍给付意外伤害”的保险金额为保单所载金额的一半，81至90周岁的被保险人，其“意外身故、烧伤及残疾保障”和“双倍给付意外伤害”的保险金额为保单所载金额的四分之一。每人每次限购1份。</div>                           </div>
                        </dd>
                        <dd class="check-radio-box">
                            <div class="check-text">
                                <label class="radio inline">
                                    <input class="input-radio" name="safety" type="radio"><span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>不需要保险</span>
                                </label>
                            </div>
                            <div class="tiptext tip-warning check-content">
                                <div class="pre-wrap">旅游保险能够给您的出行安全带来更多保障，所以驴妈妈建议您务必购买旅游保险。如您放弃购买，则行程中的风险和损失将由您自行承担。</div>
                            </div>
                        </dd>
                    </dl>
                    
                    
                    
                    <dl class="xdl JS_check form-inline">
                        <dd class="dot_line">间隔线</dd>
                        <dt class="B">自费产品：</dt>
                        <dd class="check-radio-box">
                            <div class="check-text"><label class="checkbox inline"><input class="input-checkbox" name="ownpro" type="checkbox"><span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>升级总统套房</span></label>
                                <dfn>&yen;100</dfn>/间
                                <div class="selectbox selectbox-mini hide">
                                    <p class="select-info like-input">
                                        <span class="select-arrow"><i class="ui-arrow-bottom dark-ui-arrow-bottom"></i></span>
                                        <span class="select-value">1 份</span>
                                    </p>
                                    <div class="selectbox-drop">
                                        <ul class="select-results">
                                            <li data-value="选择项1">1 份</li>
                                            <li data-value="选择项2">2 份</li>
                                            <li data-value="选择项3">3 份</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="tiptext tip-info check-content">
                                <span class="tip-close">&times;</span>
                                <div class="pre-wrap">详细说明</div>
                            </div>
                        </dd>
                        <dd class="check-radio-box">
                            <div class="check-text"><label class="checkbox inline"><input class="input-checkbox" name="ownpro" type="checkbox"><span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>升级海景观景房</span></label>
                                <dfn>&yen;180</dfn>/间
                                <div class="selectbox selectbox-mini">
                                    <p class="select-info like-input">
                                        <span class="select-arrow"><i class="ui-arrow-bottom dark-ui-arrow-bottom"></i></span>
                                        <span class="select-value">1 份</span>
                                    </p>
                                    <div class="selectbox-drop">
                                        <ul class="select-results">
                                            <li data-value="选择项1">1 份</li>
                                            <li data-value="选择项2">2 份</li>
                                            <li data-value="选择项3">3 份</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="tiptext tip-info check-content">
                                <span class="tip-close">&times;</span>
                                <div class="pre-wrap">详细说明</div>
                            </div>
                        </dd>
                        <dd class="check-radio-box">
                            <div class="check-text"><label class="checkbox inline"><input class="input-checkbox" name="ownpro" type="checkbox"><span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>升级豪华型套房</span></label>
                                <dfn>&yen;200</dfn>/间
                                <div class="selectbox selectbox-mini hide">
                                    <p class="select-info like-input">
                                        <span class="select-arrow"><i class="ui-arrow-bottom dark-ui-arrow-bottom"></i></span>
                                        <span class="select-value">1 份</span>
                                    </p>
                                    <div class="selectbox-drop">
                                        <ul class="select-results">
                                            <li data-value="选择项1">1 份</li>
                                            <li data-value="选择项2">2 份</li>
                                            <li data-value="选择项3">3 份</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="tiptext tip-info check-content">
                                <span class="tip-close">&times;</span>
                                <div class="pre-wrap">详细说明</div>
                            </div>
                        </dd>
                    </dl>
                    
                    <dl class="xdl JS_check">
                        <dd class="dot_line">间隔线</dd>
                        <dt class="B">快递：</dt>
                        <dd class="check-radio-box">
                            <div class="check-text"><label class="radio inline"><input class="input-radio" name="taxes" type="radio"><span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>平邮</span></label><dfn>&yen;10</dfn>/人</div>
                            <div class="tiptext tip-info check-content">
                                <span class="tip-close">&times;</span>
                                <div class="pre-wrap">详细说明</div>
                            </div>
                        </dd>
                        <dd class="check-radio-box">
                            <div class="check-text"><label class="radio inline"><input class="input-radio" name="taxes" type="radio"><span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>申通快递</span></label><dfn>&yen;18</dfn>/人</div>
                            <div class="tiptext tip-info check-content">
                                <span class="tip-close">&times;</span>
                                <div class="pre-wrap">详细说明</div>
                            </div>
                        </dd>
                        <dd class="check-radio-box">
                            <div class="check-text"><label class="radio inline"><input class="input-radio" name="taxes" type="radio"><span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>顺丰</span></label><dfn>&yen;20</dfn>/人</div>
                            <div class="tiptext tip-info check-content">
                                <span class="tip-close">&times;</span>
                                <div class="pre-wrap">详细说明</div>
                            </div>
                        </dd>
                    </dl>
                    
                    <dl class="xdl JS_check">
                        <dd class="dot_line">间隔线</dd>
                        <dt class="B">其他：</dt>
                        <dd class="check-radio-box">
                            <div class="check-text"><label class="checkbox inline"><input class="input-checkbox" name="ownpro" type="checkbox"><span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>美国签证</span></label><dfn>&yen;100</dfn>/份</div>
                            <div class="tiptext tip-info check-content">
                                <span class="tip-close">&times;</span>
                                <div class="pre-wrap">详细说明</div>
                            </div>
                        </dd>
                    </dl>
                    
                    <div class="hide">
                    <!-- 默认可编辑状态 -->
                    <dl class="xdl">
                        <dt><i class="req">*</i>收件人姓名：</dt>
                        <dd>
                            <input type="text" class="input-text" value="胡小小" />
                        </dd>
                    </dl>
                    <dl class="xdl">
                        <dt><i class="req">*</i>手机号码：</dt>
                        <dd>
                            <input type="text" class="input-text" value="13817131714" />
                        </dd>
                    </dl>
                    <dl class="xdl">
                        <dt><i class="req">*</i>省份：</dt>
                        <dd>
                            <select class="" name="" id="">
                                <option value="">上海市</option>
                            </select>
                            <select class="" name="" id="">
                                <option value="">上海市</option>
                            </select>
                        </dd>
                    </dl>
                    <dl class="xdl">
                        <dt><i class="req">*</i>收件地址：</dt>
                        <dd>
                            <input type="text" class="input-text input-big" value="金沙江路1759号圣诺亚大厦B座10楼" />
                        </dd>
                    </dl>
                    <dl class="xdl">
                        <dt>邮编：</dt>
                        <dd>
                            <input type="text" class="input-text input-mini" value="200333" />
                        </dd>
                    </dl>
                    <dl class="xdl">
                        <dt></dt>
                        <dd>
                            <button class="pbtn pbtn-mini pbtn-blue">保存</button>
                        </dd>
                    </dl>
                    <!-- //默认可编辑状态 -->
                    
                    
                    
                    <!-- 保存后状态 -->
                    <dl class="xdl">
                        <dt><i class="req">*</i>收件人姓名：</dt>
                        <dd>
                            <span class="input-info">胡小小</span>
                        </dd>
                    </dl>
                    <dl class="xdl">
                        <dt><i class="req">*</i>手机号码：</dt>
                        <dd>
                            <span class="input-info">13817131714</span>
                        </dd>
                    </dl>
                    <dl class="xdl">
                        <dt><i class="req">*</i>省份：</dt>
                        <dd>
                            <span class="input-info input-mini">上海市</span>
                            <span class="input-info input-mini">长宁区</span>
                        </dd>
                    </dl>
                    <dl class="xdl">
                        <dt><i class="req">*</i>收件地址：</dt>
                        <dd>
                            <span class="input-info input-big">金沙江路1759号圣诺亚大厦B座10楼</span>
                        </dd>
                    </dl>
                    <dl class="xdl">
                        <dt>邮编：</dt>
                        <dd>
                            <span class="input-info">200333</span>
                        </dd>
                    </dl>
                    <dl class="xdl">
                        <dt></dt>
                        <dd>
                            <button class="btn btn-smallhite">修改</button>
                        </dd>
                    </dl>
                    <!-- //保存后状态 -->
                    </div>
                    
                </div>
                
            </div> <!-- //附加产品 -->
            
            
            
            <!-- 联系人信息 -->
            <div class="order-title">
                <h3>订单联系人信息</h3>
            </div>
            <div class="order-content xdl-hor">    
                <div class="form-small"> 
                    <div class="choose-info">
                        <dl class="xdl">
                            <dt>常用联系人：</dt>
                            <dd class="form-inline">
                                <label class="radio inline"><input name="order-person" type="radio" class="input-radio" />胡小小</label>
                                <label class="radio inline"><input name="order-person" type="radio" class="input-radio" />郑明明</label>
                                <label class="radio inline"><input name="order-person" type="radio" class="input-radio" />黄丽丽</label>
                                <label class="radio inline"><input name="order-person" type="radio" class="input-radio" />王山山</label>
                            </dd>
                        </dl>
                    </div>
                    <div class="person">
                        <dl class="xdl">
                            <dt>常用联系人：</dt>
                            <dd class="form-inline">
                                <label class="inline"><input type="text" class="input-text" /></label>
                            </dd>
                        </dl>
                        <dl class="xdl">
                            <dt><i class="req">*</i>手机号码：</dt>
                            <dd class="form-inline">
                                <label class="inline">
                                <input type="text" class="input-text" />
                                <span class="help-inline">免费接受订单确认短信，请务必填写正确</span></label>
                            </dd>
                        </dl>
                        <dl class="xdl">
                            <dt>电子邮箱：</dt>
                            <dd>
                                <label class="inline"><input type="text" class="input-text" />
                                <span class="help-inline">用于接收邮件订单详情、邮件出行通知、行程确认等服务</span></label>
                            </dd>
                        </dl>
                        <dl class="xdl">
                        <dt></dt>
                        <dd>
                            <button class="pbtn pbtn-mini pbtn-blue">保存</button>
                            <p class="help-block">友情提示：准确填写订单联系人信息，便于我们跟你联系。</p>
                        </dd>
                    </dl>
                    </div>
                    
                    
                    
                </div>
                
            </div> <!-- //联系人信息 -->
            
            
            
            <div class="hr_a"></div>
            <!-- 游玩人信息 -->
            <div class="order-title">
                <h3>游玩人信息</h3>
            </div>
            <div class="order-content xdl-hor">    
                <div class="form-small form-inline">    
                    <div class="choose-info">
                        <dl class="xdl">
                            <dt>常用联系人：</dt>
                            <dd class="form-inline">
                                <label class="checkbox inline"><input type="checkbox" class="input-checkbox" />胡小小</label>
                                <label class="checkbox inline"><input type="checkbox" class="input-checkbox" />郑明明</label>
                                <label class="checkbox inline"><input type="checkbox" class="input-checkbox" />黄丽丽</label>
                                <label class="checkbox inline"><input type="checkbox" class="input-checkbox" />王山山</label>
                            </dd>
                        </dl>
                    </div>
                    <dl class="xdl">
                        <dt><i class="req">*</i>游玩人1：</dt>
                        <dd>
                            <label><input type="text" class="input-text" /></label>
                            <div class="select-group">
                                <div class="selectbox selectbox-small">
                                    <p class="select-info like-input">
                                        <span class="select-arrow"><i class="ui-arrow-bottom dark-ui-arrow-bottom"></i></span>
                                        <span class="select-value">身份证</span>
                                    </p>
                                    <div class="selectbox-drop">
                                        <ul class="select-results">
                                            <li data-value="选择项1">身份证</li>
                                            <li data-value="选择项2">护照</li>
                                            <li data-value="选择项3">港澳通行证</li>
                                        </ul>
                                    </div>
                                </div>
                                <input type="text" class="input-text input-middle" value="412725198603193850" />
                                <input type="text" class="input-text" value="13817131714" />
                            </div>
                        </dd>
                    </dl>
                    <dl class="xdl">
                        <dt><i class="req">*</i>游玩人2：</dt>
                        <dd>
                            <label><input type="text" class="input-text" /></label>
                            <div class="select-group">
                                <div class="selectbox selectbox-small">
                                    <p class="select-info like-input">
                                        <span class="select-arrow"><i class="ui-arrow-bottom dark-ui-arrow-bottom"></i></span>
                                        <span class="select-value">身份证</span>
                                    </p>
                                    <div class="selectbox-drop">
                                        <ul class="select-results">
                                            <li data-value="选择项1">身份证</li>
                                            <li data-value="选择项2">护照</li>
                                            <li data-value="选择项3">港澳通行证</li>
                                        </ul>
                                    </div>
                                </div>
                                <input type="text" class="input-text input-middle" value="" />
                                <input type="text" class="input-text" value="" />
                            </div>
                        </dd>
                    </dl>
                    <dl class="xdl">
                        <dt></dt>
                        <dd>
                            <button class="pbtn pbtn-mini pbtn-blue">保存</button>
                            <p class="help-block">友情提示：游玩人信息可以到我的订单中补全。</p>
                        </dd>
                    </dl>
                    
                </div>
                
            </div> <!-- //游玩人信息 -->
            
            
            
            <div class="hr_a"></div>
            <!-- 紧急联系人信息 -->
            <div class="order-title">
                <h3>紧急联系人信息</h3>
            </div>
            <div class="order-content xdl-hor">  
                <div class="form-small">
                    <div class="choose-info">
                        <dl class="xdl">
                            <dt>常用联系人：</dt>
                            <dd class="form-inline">
                                <label class="radio inline"><input name="em-person" type="radio" class="input-radio" />胡小小</label>
                                <label class="radio inline"><input name="em-person" type="radio" class="input-radio" />郑明明</label>
                                <label class="radio inline"><input name="em-person" type="radio" class="input-radio" />黄丽丽</label>
                                <label class="radio inline"><input name="em-person" type="radio" class="input-radio" />王山山</label>
                            </dd>
                        </dl>
                    </div>
                    <dl class="xdl">
                        <dt><i class="req">*</i>联系人姓名：</dt>
                        <dd>
                            <label><input type="text" class="input-text" /></label>
                        </dd>
                    </dl>
                    <dl class="xdl">
                        <dt><i class="req">*</i>手机号码：</dt>
                        <dd>
                            <label><input type="text" class="input-text" /></label>
                            <span class="help-inline">免费接受订单确认短信，请务必填写正确</span>
                        </dd>
                    </dl>
                    <dl class="xdl">
                        <dt></dt>
                        <dd>
                            <button class="pbtn pbtn-mini pbtn-blue">保存</button>
                            <p class="help-block">友情提示：紧急联系人信息不能与游玩人相同。</p>
                        </dd>
                    </dl>
                </div>
                
            </div> <!-- //紧急联系人信息 -->
            
            
            
            <div class="hr_a"></div>
            <!-- 预订须知 -->
            <div class="order-title">
                <h3>预订须知</h3>
            </div>
            <div class="order-content xdl-hor">
                <div class="hr_a"></div>
                <div class="booking-policy">
                    <dl class="xdl">
                    	<dt class="B">入园方式：</dt>
                    	<dd>入园地址：上海市松江佘山上海欢乐谷检票处驴妈妈电子门票专用通道；<br>
                        开园时间：9:00-18:00；<br>
                        通关方式：刷二维码短信入园（二维码短信仅限游玩当天有效，请勿删除、转发无效）。
                        </dd>
                    </dl>
                    <div class="dot_line"></div>
                    <dl class="xdl">
                    	<dt class="B">退款说明：</dt>
                    	<dd>1.预订成功后如要修改或取消订单，请在游玩当天11:00前致电驴妈妈客服中心（1010 6060）；<br>
                        2.超过游玩当天11:00后的订单，一律不退不改，敬请谅解！
                        </dd>
                    </dl>
                </div>
            </div> <!-- //预订须知 -->
            
            
            
            <div class="hr_a"></div>
            <!-- 优惠信息 -->
            <div class="order-title">
                <h3>优惠信息</h3>
            </div>
            <div class="order-content xdl-hor form-small"> 
                <dl class="xdl">
                    <dt class="B">可享优惠：</dt>
                    <dd class="mb10">
                        <div class="selectbox selectbox-big">
                            <p class="select-info like-input">
                                <span class="select-arrow"><i class="ui-arrow-bottom dark-ui-arrow-bottom"></i></span>
                                <span class="select-value">不使用任何优惠</span>
                            </p>
                            <div class="selectbox-drop">
                                <ul class="select-results">
                                    <li data-value="选择项1">优惠活动名称 满200减50</li>
                                    <li data-value="选择项1">优惠活动名称 满1000减300</li>
                                    <li data-value="选择项2">使用优惠券</li>
                                </ul>
                            </div>
                        </div>
                    </dd>
                    <dd>
                        <p class="text-gray">1.可参加优惠活动或使用优惠券；<br>
                        2.付款时可使用奖金抵扣；<br>
                        3.选择浦发银行在线付款立减10元。</p>
                    </dd>
                </dl>
            </div> <!-- //优惠信息 -->
            
            
            <!-- 同意协议/提交订单 -->
            <div class="order-content xdl-hor">
                <div class="hr_d"></div>
                <dl class="xdl">
                    <dt class="tl"><a href="#" class="vmiddle">&lt; 返回上一步</a></dt>
                    <dd><button class="pbtn pbtn-big pbtn-orange">提交订单</button>
                    </dd>
                </dl>
                <dl class="xdl">
                    <dt class="tl"><a href="#" class="vmiddle">&lt; 返回上一步</a></dt>
                    <dd><button class="pbtn pbtn-big pbtn-orange">同意以下预订协议并提交订单</button>
                    </dd>
                </dl>
                <div class="lv-agree">
                    <h3>驴妈妈旅游网预订条款</h3>
                    <h5>1.驴妈妈预订条款的确认</h5>
                    <p>驴妈妈旅游网（以下简称“驴妈妈”）各项服务的所有权与运作权归景域旅游运营集团所有。本服务条款具有法律约束力。一旦您点选“确认下单"成功提交订单后，即表示您自愿接受本协议之所有条款，并同意通过驴妈妈订购旅游产品。</p>
                    <h5>2.服务内容</h5>
                    <p>2.1 　驴妈妈服务的具体内容由景域旅游运营集团根据实际情况提供，驴妈妈对其所提供之服务拥有最终解释权。</p>
                    <p>2.2 　景域旅游运营集团在驴妈妈上向其会员提供相关网络服务。其它与相关网络服务有关的设备（如个人电脑、手机、及其他与接入互联网或移动网有关的装置）及所需的费用（如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费等）均由会员自行负担。</p>
                </div>
            </div> <!-- 同意协议/提交订单 -->
            
            
            
        </div> <!-- //.main -->
    
    </div>
    
    
</div>

<?php include("../common/order-footer.php"); ?>

</body>
</html>
