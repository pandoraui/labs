<?php $page = "start" ?>
<?php $title="支付页"?>
<?php include("../common/order-meta.php"); ?>
</head>
<body class="order">
<?php include("../common/order-header.html"); ?>


<div class="wrap">
    
    <?php include("s-step32.html"); ?>
    
    <div class="order-main paynew">
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
            <div class="order-details hide J-detailbox">
                <div class="order-list ">
                    <div class="dot_line"></div>
                    <!-- 订单信息 -->
                    <table class="order-buy">
                        <tr>
                            <td>订单名称：</td>
                            <td>房间名称商务大床房</td>
                        </tr>
                        <tr>
                            <td>入住时间：</td>
                            <td>2014-01-08 至 2014-01-09</td>
                        </tr>
                        <tr>
                            <td>预订间数：</td>
                            <td>2间</td>
                        </tr>
                        <tr>
                            <td>入住人姓名：</td>
                            <td>张三、李四</td>
                        </tr>
                        <tr>
                            <td>联系方式：</td>
                            <td>138****4562</td>
                        </tr>
                        <tr>
                            <td>补充说明：</td>
                            <td>要求要无烟房</td>
                        </tr>
                    </table>
                </div> <!-- //订单列表 -->
                <span class="view-details slidedown-orderlist active J-detail">
                订单详情<i class="ui-arrow-bottom white-ui-arrow-bottom"></i>
            </span>
            </div><!-- //.order-details -->
            <span class="view-details slidedown-orderlist J-detail">
                订单详情<i class="ui-arrow-bottom white-ui-arrow-bottom"></i>
            </span>
        </div> <!-- //.main -->
            
            
        <!-- 支付方式 -->
        <div class="paynewbox clearfix">
            <div class="paytips">
                <p>友情提示：您的预订信息已提交，请在 <b class="red">2012-07-30 12:00</b> 前完成付款，<span class="timebox">剩余付款时间：<b class="countdown red">3605000</b></span></p>
            </div>
            <div class="dot_line"></div>
            
            <div class="check-text"><label class="checkbox inline"><input class="input-checkbox" name="ownpro" type="checkbox">使用驴妈妈存款账户余额</label></div>
            <div class="check-text"><label class="checkbox inline"><input class="input-checkbox" name="ownpro" type="checkbox">使用驴妈妈储值卡</label></div>
            <div class="check-text"><label class="checkbox inline"><input class="input-checkbox" name="ownpro" type="checkbox">使用奖金账户余额</label> <small>可使用<b>50</b>元</small></div>
            
            <div class="dot_line"></div>
            
            <h4 class="pay-price">您还需继续付款 <dfn><i>4100</i></dfn> 元</h4>
            
        </div><!--//.paynewbox-->
            
        <!-- 选择支付方式 -->
        <div class="payment form-inline">
            <div class="pay-title ui-tab-trigger">
                <h4 class="pay-type">付款方式：</h4>
                <ul class="tabnav order-tabnav clearfix J-tabs">
                    <li class="selected"><a href="javascript:;">支付平台/银行卡</a></li>
                    <li><a href="javascript:;">分期付款</a></li>
                    <li><a href="javascript:;">电话支付</a></li>
                    <li><a href="javascript:;">线下支付</a></li>
                </ul>
            </div>
            <div class="tab-switch payment-list J-switch">
                <!--支付平台/银行卡\\-->
                <div class="tabcon selected">
                    <ul class="bank-list clearfix">
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank alipay      " title="支付宝"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank tenpay      " title="财付通"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank shengpay    " title="盛付通"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank unionpay    " title="银联支付"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank lakala      " title="拉卡拉"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank cmpay       " title="中国移动手机支付"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank alipay-quick" title="支付宝快捷支付"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank tenpay-quick" title="财付通快捷支付"></i></label></li>
                    </ul>
                    <div class="dot_line"></div>
                    <ul class="bank-list clearfix">
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank abc   " title="中国农业银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank boc   " title="中国银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank ccb   " title="中国建设银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank icbc  " title="中国工商银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank psbc  " title="中国邮政储蓄银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank ceb   " title="中国光大银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank cmbc  " title="中国民生银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank cmb   " title="招商银行"></i></label><span class="poptip-mini poptip-mini-warning"><div class="tip-sharp tip-sharp-bottom"></div>立减10元</span></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank comm  " title="交通银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank bjbank" title="北京银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank shbank" title="上海银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank jsbank" title="江苏银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank hzbank" title="杭州银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank nbcb  " title="宁波银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank njcb  " title="南京银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank wzcb  " title="温州银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank gzcb  " title="广州银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank bjrcb " title="北京农村商业银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank srcb  " title="上海农村商业银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank sdb   " title="深圳发展银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank spdb  " title="浦发银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank cib   " title="兴业银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank cgb   " title="广发银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank hxb   " title="华夏银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank hkbea " title="东亚银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank cbhb  " title="渤海银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank ecitic" title="中信银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank pingan" title="平安银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank fudian" title="富滇银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank "></i></label></li>
                    </ul>
                </div>
                <!--分期付款\\-->
                <div class="tabcon">
                    <p><img src="../img/paytype1.png" alt="分期付款" /></p>
                    <!--<p><img src="http://pic.lvmama.com/img/v4/order/paytype1.png" alt="分期付款" /></p>-->
                    <p class="typetit">选择以下银行信用卡分期付款</p>
                    <ul class="bank-list clearfix">
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank cmb   " title="招商银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank ccb   " title="中国建设银行"></i></label></li>
                        <li><label class="radio inline"><input class="input-radio" name="bankpay" type="radio"><i class="bank boc   " title="中国银行"></i></label></li>
                    </ul>
                    <div class="dot_line"></div>
                    <p><b>分期方式</b></p>
                    <p>在线分期（立即得知审核结果）</p>
                    <div class="hr_a"></div>
                    <p><b>期数及规则</b><span class="gray">（注：当金额不能被分期的期数整除时，具体每期还款金额以银行计算为准）</span></p>
                    <table class="xtable-data table-full table-center">
                        <tr>
                            <th>期数</th>
                            <th>手续费</th>
                            <th>第一期</th>
                            <th>以后每期</th>
                            <th>总计</th>
                        </tr>
                        <tr>
                            <td class="phase"><label class="radio inline"><input class="input-radio" name="bankpay" type="radio">3期<span class="orange">(推荐)</span></td>
                            <td>3.6%</td>
                            <td>1250元</td>
                            <td>1200元</td>
                            <td>3650元</td>
                        </tr>
                        <tr>
                            <td class="phase"><label class="radio inline"><input class="input-radio" name="bankpay" type="radio">6期</td>
                            <td>3.6%</td>
                            <td>1250元</td>
                            <td>1200元</td>
                            <td>3650元</td>
                        </tr>
                        <tr>
                            <td class="phase"><label class="radio inline"><input class="input-radio" name="bankpay" type="radio">12期</td>
                            <td>3.6%</td>
                            <td>1250元</td>
                            <td>1200元</td>
                            <td>3650元</td>
                        </tr>
                    </table>
                    
                </div>
                <!--电话支付\\-->
                <div class="tabcon">
                    <p><img src="../img/paytype2.png" alt="电话支付" /></p>
                    <!--<p><img src="http://pic.lvmama.com/img/v4/order/paytype2.png" alt="电话支付" /></p>-->
                    <p class="typetit">以下银行的<span class="orange">借记卡</span>，支持电话支付，无需开通网银也能支付：<span class="orange">（单笔及日累计额度均为4万）</span></p>
                    <ul class="bank-list clearfix">
                        <li><label class="radio inline"><i class="bank cmb   " title="招商银行"></i></label></li>
                        <li><label class="radio inline"><i class="bank ccb   " title="中国建设银行"></i></label></li>
                        <li><label class="radio inline"><i class="bank boc   " title="中国银行"></i></label></li>
                        <li><label class="radio inline"><i class="bank cmb   " title="招商银行"></i></label></li>
                        <li><label class="radio inline"><i class="bank ccb   " title="中国建设银行"></i></label></li>
                        <li><label class="radio inline"><i class="bank boc   " title="中国银行"></i></label></li>
                    </ul>
                    <p class="typetit">以下银行的<span class="orange">信用卡</span>，支持电话支付，无需开通网银也能支付：<span class="orange">（单笔及日累计额度均为4万）</span></p>
                    <ul class="bank-list clearfix">
                        <li><label class="radio inline"><i class="bank cmb   " title="招商银行"></i></label></li>
                        <li><label class="radio inline"><i class="bank ccb   " title="中国建设银行"></i></label></li>
                        <li><label class="radio inline"><i class="bank boc   " title="中国银行"></i></label></li>
                        <li><label class="radio inline"><i class="bank cmb   " title="招商银行"></i></label></li>
                        <li><label class="radio inline"><i class="bank ccb   " title="中国建设银行"></i></label></li>
                        <li><label class="radio inline"><i class="bank boc   " title="中国银行"></i></label></li>
                    </ul>
                </div>
                <!--线下支付\\-->
                <div class="tabcon">
                    <div class="tiptext tip-warning">温馨提示：由于订单有效期为 <b class="orange">1440</b> 分钟，请谨慎选择线下拉卡拉刷卡机支付和店面支付。</div>
                    <p class="typetit">1.拉卡拉支付<span class="gray">（不用网银也能支付！支持所有银行卡刷卡支付！）</span></p>
                    <ul class="bank-list list-block clearfix">
                        <li><label class="radio inline"><i class="bank lakala      " title="支付宝"></i></label>
                            <span><a href="#">获取拉卡拉账单号</a>　如何使用拉卡拉？　哪里有拉卡拉？</span>
                        </li>
                    </ul>
                    <p class="typetit">2.驴妈妈店面支付<span class="gray">（在驴妈妈指定的店面地址进行付款）</span></p>
                    <p class="text">
                        店面地址：<br>
                        上海：上海市普陀区金沙江路1759号圣诺亚大厦B座7F<br>
                        上海：上海市普陀区金沙江路1759号圣诺亚大厦B座7F<br>
                        杭州：上海市普陀区金沙江路1759号圣诺亚大厦B座7F<br>
                    </p>
                </div>
            </div>
            <div class="order-btn"><button class="pbtn pbtn-big pbtn-orange">&nbsp;&nbsp;下一步&nbsp;&nbsp;</button></div>
            
            <div class="order-btn ">
                <button class="pbtn pbtn-orange btn11">&nbsp;&nbsp;存款账户-验证码&nbsp;&nbsp;</button>
                <button class="pbtn pbtn-orange btn12">&nbsp;&nbsp;存款账户-手机号&nbsp;&nbsp;</button>
                <button class="pbtn pbtn-orange btn13">&nbsp;&nbsp;存款账户-手机验证&nbsp;&nbsp;</button><br>
                <button class="pbtn pbtn-orange btn21">&nbsp;&nbsp;驴妈妈储值卡&nbsp;&nbsp;</button>
                <button class="pbtn pbtn-orange btn31">&nbsp;&nbsp;奖金账户&nbsp;&nbsp;</button>
                <button class="pbtn pbtn-orange btn41">&nbsp;&nbsp;付款状态&nbsp;&nbsp;</button>
            </div>
        </div> <!-- //.payment选择支付方式 -->
        
    </div>
    
    
</div>

<div id="test13" class="hide">
    <p>您的存款账户可支付余额 <span class="dfn">9</span> 元，用存款账户余额付款  本次支付将使用 <span class="dfn">9</span> 元，剩余金额 <span class="dfn">100</span> 元可选择“在线支付”付款。</p>
    <div class="dot_line"></div>
    <p>您的账户已绑定手机 <b>138****1714</b>，为了您的账户安全需要进行验证。</p>
    <div class="hr_a"></div>
    <div class="form-hor form-inline form-w">
        <div class="control-group">
            <label class="control-label">短信校验码：</label>
            <div class="controls">
                <p><input type="text" class="input-text" /></p>
                <p style="height:30px;">
                    <a id="send-verifycode" class="pbtn pbtn-small">免费获取校验码</a>
                    <span id="JS_countdown" class="hide">
                        <span class="tiptext tip-success tip-line">
                            <span class="tip-icon tip-icon-success"></span>校验码已发送成功，请查看手机
                        </span>
                        <span class="tiptext tip-default tip-line">60秒内没有收到短信? <a href="javascript:;" class="pbtn pbtn-small pbtn-gray">(<span class="J_num">60</span>)秒后再次发送</a>
                        </span>
                    </span>
                </p>
                <p><span class="tiptext tip-error tip-line"><span class="tip-icon tip-icon-error"></span>已超过每日发送上限，请于次日再试</span></p>
                <p><span class="tiptext tip-warning tip-line"><span class="tip-icon tip-icon-warning"></span>当前IP发送频率过快，请稍候重试</span></p>
            </div>
        </div>
        <div class="control-group">
            <label class="control-label">&nbsp;</label>
            <div class="controls">
                <button class="pbtn pbtn-orange">确定</button>
            </div>
        </div>
    </div>
    <div class="form-hor form-inline form-w">
        <div class="control-group">
            <div class="controls">
                <p><a href="#">选择其他方式付款</a></p>
            </div>
        </div>
    </div>
</div>


<div id="test1" class="hide"> 
    <p>您的存款账户可支付余额 <span class="dfn">9</span> 元，用存款账户余额付款  本次支付将使用 <span class="dfn">9</span> 元，剩余金额 <span class="dfn">100</span> 元可选择“在线支付”付款。</p>
    <div class="dot_line"></div>
    <div class="hr_a"></div>
    <div class="form-hor form-inline form-w">
        <div class="control-group">
            <label class="control-label">邮箱地址：</label>
            <div class="controls">
                <p>1382****@139.com <a href="#" >该邮箱地址已不再使用</a></p>
                <p>
                    <a href="javascript:;" class="pbtn pbtn-mini pbtn-white">获取邮箱验证码</a>
                    &nbsp;&nbsp;没收到邮件?&nbsp;&nbsp;
                    <a href="#">再次发送</a>
                </p>
            </div>
        </div>
        
        <div class="control-group">
            <label class="control-label">验证码：</label>
            <div class="controls">
                <p><input type="text" class="input-text input-mini" /></p>
            </div>
        </div>
    </div>
    
    <div class="dot_line"></div>
    
    <h4>订单信息验证</h4>
    <p class="gray-info">您在驴妈妈的第一笔订单：<a href="#">1111</a>，上海欢乐谷成人门票2两，联系人为：向** 方** </p>
    <p>请输入任一联系人手机号码，以便验证。</p>
    <div class="form-hor form-inline form-w">
        <div class="control-group">
            <label class="control-label">手机号码：</label>
            <div class="controls">
                <input type="text" class="input-text" />
            </div>
        </div>
        
        <div class="control-group">
            <div class="controls">
                <button class="pbtn pbtn-orange">确认支付</button>
            </div>
        </div>
    </div>
    
    <div class="form-hor form-inline form-w">
        <div class="control-group">
            <label class="control-label">&nbsp;</label>
            <div class="controls">
                <p><a href="#">选择其他方式付款</a></p>
            </div>
        </div>
    </div>
</div>

<div id="test2" class="hide">
    <p>您的存款账户可支付余额 <span class="dfn">9</span> 元，用存款账户余额付款  本次支付将使用 <span class="dfn">9</span> 元，剩余金额 <span class="dfn">100</span> 元可选择“在线支付”付款。</p>
    <div class="dot_line"></div>
    <h4>订单信息验证</h4>
    <p class="gray-info">您在驴妈妈的第一笔订单：<a href="#">1111</a>，上海欢乐谷成人门票2两，联系人为：向** 方** </p>
    <p>请输入任一联系人手机号码，以便验证。</p>
    <div class="form-hor form-inline form-w">
        <div class="control-group">
            <label class="control-label">手机号码：</label>
            <div class="controls">
                <input type="text" class="input-text" />
            </div>
        </div>
        
        <div class="control-group">
            <label class="control-label">&nbsp;</label>
            <div class="controls">
                <button class="pbtn pbtn-orange">确认支付</button>
            </div>
        </div>
    </div>
    
    <div class="form-hor form-inline form-w">
        <div class="control-group">
            <label class="control-label">&nbsp;</label>
            <div class="controls">
                <p><a href="#">选择其他方式付款</a></p>
            </div>
        </div>
    </div>
</div>

<div id="test3" class="hide">
    <p>友情提示：驴妈妈储卡相关说明。</p>
    <div class="dot_line"></div>
    <div class="hr_a"></div>
    <div class="form form-hor form-inline form-w">
        <div class="control-group">
            <label class="control-label">储值卡卡号：</label>
            <div class="controls">
                <input type="text" class="input-text" />
            </div>
        </div>
        <div class="control-group">
            <label class="control-label">验证码：</label>
            <div class="controls">
                <input type="text" class="input-text" /> <img class="vmiddle" src="http://placehold.it/70x30" width="70" height="30" alt="" /> <a href="javascript:;"> 看不清？换一个</a>
            </div>
        </div>
        <div class="control-group">
            <label class="control-label">&nbsp;</label>
            <div class="controls">
                <button class="pbtn pbtn-orange">确定</button>
            </div>
        </div>
        <div class="control-group">
            <label class="control-label">&nbsp;</label>
            <div class="controls">
                <p><a href="#">选择其他方式付款</a></p>
            </div>
        </div>
    </div>
</div>

<div id="test4" class="hide">
    <h4>请根据您的情况点击以下按钮：</h4>
    <p><a class="pbtn pbtn-big pbtn-pink" href="#">&nbsp;&nbsp;已完成付款&nbsp;&nbsp;</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a class="pbtn pbtn-big pbtn-pink" href="#">&nbsp;&nbsp;付款遇到问题&nbsp;&nbsp;</a></p>
    <p><a href="#">选择其他方式付款</a></p>
</div>



<?php include("../common/order-footer.php"); ?>
<script>
$(function(){
    function JS_countdown(_cdbox){
        var _InterValObj;   //timer变量，控制时间
        var _count = 6;    //间隔函数，1秒执行
        var _curCount;      //当前剩余秒数
        
        sendMessage(_count);
        
        function sendMessage(_count){
            _curCount = _count;
            $(_cdbox).text(_curCount);
            _InterValObj = setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
        }
        
        //timer处理函数
        function SetRemainTime() {
            if (_curCount == 0) {
                clearInterval(_InterValObj);     //停止计时器
                var expr = _cdbox.indexOf("-old")>0?"-old":"";
                $("#JS_countdown"+expr).find(".tip-success").html('<span class="tip-icon tip-icon-success"></span>校验码已发送成功，以最近发送的验证码为准').end().hide();
                $("#send-verifycode"+expr).html("重新发送验证码").show();
            } else {
                _curCount--;
                $(_cdbox).text(_curCount);
                //alert("aaa");
            }
        }
    }
    
    $("#send-verifycode").click(function(){
        $(this).hide();
        $("#JS_countdown").show();
        JS_countdown("#JS_countdown span.J_num");
        //return false;
    })
});


$(function(){
    // tabs
    function JS_tab_nav(tab_nav,tab_con,selected,tri_type){
        $tab_obj=$(tab_nav);
        $tab_obj.bind(tri_type,function(){
            var tab_li_index = $(tab_nav).index(this);
            $(this).addClass(selected).siblings().removeClass(selected);
            $(tab_con).eq(tab_li_index).show().siblings(tab_con).hide();
            // return false;
        });
    };
    JS_tab_nav(".J-tabs li:not('.paylink')",".J-switch>.tabcon","selected","click");

$(".btn11").click(function(){

    // 使用驴妈妈存款账户余额
    pandora.dialog({
        title: "使用驴妈妈存款账户余额",
        content: $("#test1"),
        wrapClass: "dialog-middle"
    })
})
$(".btn12").click(function(){
    // 使用驴妈妈存款账户余额
    pandora.dialog({
        title: "使用驴妈妈存款账户余额",
        content: $("#test2"),
        wrapClass: "dialog-middle"
    })
})
$(".btn13").click(function(){
    // 使用驴妈妈存款账户余额
    pandora.dialog({
        title: "使用驴妈妈存款账户余额",
        content: $("#test13"),
        width: "780px"
    })
})
$(".btn21").click(function(){
    // 使用驴妈妈储值卡
    pandora.dialog({
        title: "使用驴妈妈储值卡",
        content: $("#test3"),
        wrapClass: "dialog-middle"
    })
})

$(".btn31").click(function(){
    // 提示
    pandora.dialog({
        title: "提示",
        content: '<h4>放弃使用驴妈妈存款账户余额付款！</h4><p>您可以选择其他方式继续付款。</p>',
        button: [{
            value: "确定",
            className: "pbtn-orange"
        }],
        cancel: true
    })
})

$(".btn41").click(function(){
    // 付款状态
    pandora.dialog({
        title: "付款状态",
        content: $("#test4")
    })

})





})

</script>
</body>
</html>
