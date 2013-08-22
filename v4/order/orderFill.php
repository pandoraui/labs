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
                                <span class="oper-numbox"><a class="op-reduce op-disable-reduce J_reduce">-</a><input type="text" class="op-number" value="0" maxlength="8"><a class="op-increase J_increase">+</a></span>
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
                                <span class="oper-numbox"><a class="op-reduce J_reduce">-</a><input type="text" class="op-number" value="2" maxlength="8" title="请输入量"><a class="op-increase J_increase">+</a></span>
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
                            <div class="check-text"><label class="radio inline"><input class="input-radio" name="address" type="radio">始发站　7:30上海汇川路凯旋路路口（近龙之梦购物中心）</label></div>
                            <div class="check-text"><label class="radio inline"><input class="input-radio" name="address" type="radio">途经站点　8:00南方商城沪闵路万源路路口（非集合首发站，实际时间如有误差敬请见谅）</label></div>
                            <div class="check-text"><label class="radio inline"><input class="input-radio" name="address" type="radio">途经站点　8:20松江老城区高速收费口（非集合首发站，实际时间如有误差敬请见谅）</label></div>
                            <div class="tiptext tip-warning">集合地点为必选项</div>
                        </dd>
                    </dl>
                    
                    <dl class="xdl JS_check">
                        <dd class="dot_line">间隔线</dd>
                        <dt class="B">税金：</dt>
                        <dd class="check-radio-box">
                            <div class="check-text">
                                <label class="radio inline"><input class="input-radio" name="taxes" type="radio"></label><span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>苏梅岛机票税金（香港往返）</span>
                                <dfn>&yen;270</dfn>/人
                            </div>
                            <div class="tiptext tip-info check-content">
                                <span class="tip-close">&times;</span>
                                <div class="pre-wrap">税金说明</div>
                            </div>
                        </dd>
                        <dd class="check-radio-box">
                            <div class="check-text">
                                <label class="radio inline"><input class="input-radio" name="taxes" type="radio"></label><span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>马尔代夫新航机票税金（香港往返）</span>
                                <dfn>&yen;270</dfn>/人
                            </div>
                            <div class="tiptext tip-info check-content">
                                <span class="tip-close">&times;</span>
                                <div class="pre-wrap">税金说明</div>
                            </div>
                        </dd>
                        <dd class="check-radio-box">
                            <div class="check-text">
                                <label class="radio inline"><input class="input-radio" name="taxes" type="radio"></label><span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>马尔代夫机票税金（香港往返）</span>
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
                                <label class="radio inline"><input class="input-radio" name="safety" type="radio"></label><span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>平安国内长途10日游意外险（尊贵型）(国内)</span>
                                <dfn>&yen;270</dfn>/人
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
                                <label class="radio inline"><input class="input-radio" name="safety" type="radio"></label><span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>平安国内长途10日游意外险（特惠型）(国内)</span>
                                <dfn>&yen;35</dfn>/人
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
                                <label class="radio inline"><input class="input-radio no-check" name="safety" type="radio"><span class="no-check">不需要保险</span></label>
                                
                            </div>
                            <div class="tiptext tip-warning no-check-content hide">
                                <div class="pre-wrap">旅游保险能够给您的出行安全带来更多保障，所以驴妈妈建议您务必购买旅游保险。如您放弃购买，则行程中的风险和损失将由您自行承担。</div>
                            </div>
                        </dd>
                    </dl>
                    
                    
                    
                    <dl class="xdl JS_check form-inline">
                        <dd class="dot_line">间隔线</dd>
                        <dt class="B">自费产品：</dt>
                        <dd class="check-radio-box">
                            <div class="check-text"><label class="checkbox inline"><input class="input-checkbox" name="ownpro" type="checkbox"></label><span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>升级总统套房</span>
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
                            <div class="check-text"><label class="checkbox inline"><input class="input-checkbox" name="ownpro" type="checkbox"></label><span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>升级海景观景房</span>
                                <dfn>&yen;180</dfn>/间
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
                            <div class="check-text"><label class="checkbox inline"><input class="input-checkbox" name="ownpro" type="checkbox"></label><span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>升级豪华型套房</span>
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
                            <div class="check-text"><label class="radio inline"><input class="input-radio" name="taxes" type="radio"></label><span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>平邮</span>
                            <dfn>&yen;10</dfn>/人
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
                            <div class="check-text"><label class="radio inline"><input class="input-radio" name="taxes" type="radio"></label><span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>申通快递</span>
                                <dfn>&yen;18</dfn>/人
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
                            <div class="check-text"><label class="radio inline"><input class="input-radio" name="taxes" type="radio"></label><span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>顺丰</span>
                                <dfn>&yen;20</dfn>/人
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
                        <dt class="B">其他：</dt>
                        <dd class="check-radio-box">
                            <div class="check-text"><label class="checkbox inline"><input class="input-checkbox" name="ownpro" type="checkbox"></label><span class="check-radio-item"><i class="ui-arrow-bottom blue-ui-arrow-bottom"></i>美国签证</span>
                                <dfn>&yen;100</dfn>/份
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
