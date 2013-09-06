<?php $page = "start" ?>
<?php $title="支付页"?>
<?php include("../common/order-meta.php"); ?>
</head>
<body class="order">
<?php include("../common/order-header.html"); ?>


<div class="wrap">
    
    <?php include("s-step33.html"); ?>
    
    
    <div class="order-main border">
        <div class="main">
            <div class="pay-feedback">
                <div class="tipbox tip-success tip-nowrap">
                    <span class="tip-icon-big tip-icon-big-success"></span>
                    <div class="tip-content">
                        <h3 class="tip-color-title">感谢您的预订。</h3>
                    </div>
                    <div class="tip-other tip-align pay-backinfo gray">
                        <div class="backinfo-item">
                            <h5>车票信息</h5>
                            <p>
                                <b class="pink">G101</b> <b class="pink">北京</b>（12：33） -  <b class="pink">上海虹桥</b>（22：23）2013-09-30 16:40（星期二） 
                            </p>
                            <p>座席：二等座</p>
                        </div>
                        
                        <div class="backinfo-item">
                            <h5>乘客信息</h5>
                            <table class="table-none">
                                <tr>
                                    <td>成人票</td>
                                    <td>徐牛牛</td>
                                    <td>身份证</td>
                                    <td>412725198603193850</td>
                                    <td>20元保险</td>
                                </tr>
                                <tr>
                                    <td>成人票</td>
                                    <td>徐牛牛</td>
                                    <td>身份证</td>
                                    <td>412725198603193850</td>
                                    <td>20元保险</td>
                                </tr>
                            </table>
                        </div>
                        
                        <div class="backinfo-item">
                            <h5>联系人信息</h5>
                            <table class="table-none">
                                <tr>
                                    <td>联系人：徐牛牛</td>
                                    <td>手机：13817131714</td>
                                    <td>邮箱：</td>
                                </tr>
                            </table>
                            <table class="table table-info table-minw table-center">
                                <thead>
                                    <tr>
                                        <th>座席价格</th>
                                        <th>保险费</th>
                                        <th>订单总价</th>
                                    </tr>
                                </thead>
                                <tr>
                                    <td>　成人票　二等座　<span class="price">&yen;270</span>×1　</td>
                                    <td><span class="price">&yen;20</span></td>
                                    <td><dfn class="B">&yen;270</dfn></td>
                                </tr>
                            </table>
                        </div>
                        
                        <div class="backinfo-item">
                            <!-- 手机客户端二维码 -->
                            <p><img src="http://pic.lvmama.com/img/v4/phoneapp.png" alt="扫描下载客户端" width="158" height="158" /></p>
                        </div>
                        
                        <div class="backinfo-item hide">
                            <span class="tiptext tip-default">
                                <p>下载驴妈妈手机客户端，随时掌握订单详情：</p>
                                <p></p>
                            </span>
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
