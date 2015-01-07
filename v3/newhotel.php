<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>新酒店频道</title>
<meta name="keywords" content=""/>
<meta name="description" content="">
<?php include("common/meta-channel.php"); ?>
</head>
<body class="hotel">
<?php include("common/header.html"); ?>

<!-- wrap\\ 1 -->
<div class="wrap">
    <div class="search-dhotel">
        <div class="dhtitle">
            <ul>
                <li class="desthotel"><a href="javascript:;"><i class="icon icon-dhotel"></i>我们精选了<b class="orange">89,345</b>家国内酒店</a></li>
                <li class="globalhotel"><a href="javascript:;"><i class="icon icon-ghotel"></i>国外酒店</a></li>
            </ul>
        </div>
        <div class="content">
            <div class="hform-group">
                <lable><span class="label-name">目 的 地</span><input type="text" class="input-text" placeholder="城市/地区/区或特定酒店名称"></lable>
                <lable><span class="label-name">入住日期</span><input type="text" class="input-text" placeholder="2013-12-16"></lable>
                <lable><span class="label-name">退房日期</span><input type="text" class="input-text" placeholder="2013-12-18"></lable>
                <lable><span class="label-name">&nbsp;</span><a class="search-dhotel-btn" href="javascript:;">搜索</a></lable>
            </div>
        </div>
    </div>
    <div id="hslides" class="slide-box hslide-hotel">
        <ul class="slide-content">
            <li><a href="#"><img src="images/banner4.jpg"></a></li>
            <li><a href="#"><img src="images/banner2.jpg"></a></li>
            <li><a href="#"><img src="images/banner4.jpg"></a></li>
            <li><a href="#"><img src="images/banner2.jpg"></a></li>
            <li><a href="#"><img src="images/banner4.jpg"></a></li>
            <li><a href="#"><img src="images/banner2.jpg"></a></li>
        </ul> 
        <ul class="slide-nav">
            <li class="active">中国好温泉</li>
            <li>出境抄底游</li>
            <li>欢乐谷半价</li>
            <li>摄影之旅</li>
            <li>浪漫度蜜月</li>
            <li>国内抄底游</li>
        </ul>
    </div><!-- //.slide-box -->
</div> <!-- //.wrap 1 -->

<div class="hr_d"></div>

<div class="wrap">
    <div class="cbox dhotel-list">
        <div class="ctitle">
            <h3>国内景点酒店</h3>
            <ul class="tabnav JS_tabnav">
                <li class="selected"><a href="javascript:;">上海</a></li>
                <li><a href="javascript:;">北京</a></li>
            </ul>
        </div>
        <div class="content JS_tabsbox">
            <div class="tabcon selected">
                <ul class="dhotel-list">
                    <li>切换1</li>
                    <li>切换1</li>
                </ul>
            </div>
            <div class="tabcon">
                <ul class="dhotel-list">
                    <li>切换2</li>
                    <li>切换2</li>
                </ul>
            </div>
        </div>
    </div><!--国内酒店-->
    
    <div class="cbox ghotel-list">
        <div class="ctitle">
            <h3>国内景点酒店</h3>
            <ul class="tabnav JS_tabnav">
                <li class="selected"><a href="javascript:;">上海</a></li>
                <li class="selected"><a href="javascript:;">北京</a></li>
            </ul>
        </div>
        <div class="content JS_tabsbox">
            <div class="tabcon selected">
                <ul class="dhotel-list">
                    <li>切换1</li>
                    <li>切换1</li>
                </ul>
            </div>
            <div class="tabcon">
                <ul class="dhotel-list">
                    <li>切换2</li>
                    <li>切换2</li>
                </ul>
            </div>
        </div>
    </div><!--海外酒店-->
</div> <!-- //.wrap 2 -->








<div class="padbox wrap">
    <a href="#"><img src="images/big.jpg" width="980" height="80"></a>
</div> <!-- //.adbox -->

<?php include("common/footer-channel.php"); ?>
</body>
</html>
