<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>频道页面-景点门票</title>
<meta name="keywords" content=""/>
<meta name="description" content="">
<?php include("common/meta-channel.php"); ?>
</head>
<body class="train">
<?php include("common/header.html"); ?>

<!-- wrap\\ 1 -->
<div class="wrap wrap-quick">
    <div class="col-w-ticket">
        <div class="ticket-search train-search">
            <div class="innerbox">
                <div class="head">
                    <h1><span class="xicon icon-train"></span> 国内火车票</h1>
                </div>
                <div class="content form-hor">
                    <div class="form-columns">
                        <div class="control-group">
                            <label class="control-label" for=""><i class="req">*</i>出发城市：</label>
                            <div class="controls">
                                <input class="input-text" type="text" placeholder="中文/拼音">
                            </div>
                        </div>
                        <div class="control-group">
                            <label class="control-label" for=""><i class="req">*</i>到达城市：</label>
                            <div class="controls">
                                <input class="input-text" type="text" placeholder="中文/拼音">
                            </div>
                        </div>
                        <a href="javascript:;" class="xicon change-city" title="调换出发地和目的地">换</a>
                        
                    </div>
                    <div class="form-columns">
                        <div class="control-group">
                            <label class="control-label" for=""><i class="req">*</i>出发日期：</label>
                            <div class="controls">
                                <div class="dinput dinput-date">
                                    <input class="input-date" type="text" maxlength="10" placeholder="2013-6-10">
                                    <div class="date-info">
                                        <i class="icon-date"></i>
                                        <span class="text-info">星期五</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="control-group">
                            <label class="control-label" for=""><i class="req">*</i>车次：</label>
                            <div class="controls">
                                <input class="input-text" type="text" placeholder="如T26">
                            </div>
                        </div>
                        <p><button class="xicon searchbtn" type="button">搜索</button></p>
                    </div>
                </div>
            </div>
        </div> <!-- //.ticket-search -->
        <div class="hr_d"></div>
        
        <div class="cbox train-cbox">
            <div class="ctitle">
                <h3>热门高铁线路</h3>
                <ul class="tabnav JS_tabnav">
                	<li class="selected"><a href="javascript:;" hidefocus="false">上海<i class="css_arrow"></i></a></li>
                	<li><a href="javascript:;" hidefocus="false">杭州<i class="css_arrow"></i></a></li>
                	<li><a href="javascript:;" hidefocus="false">无锡<i class="css_arrow"></i></a></li>
                	<li><a href="javascript:;" hidefocus="false">宁波<i class="css_arrow"></i></a></li>
                	<li><a href="javascript:;" hidefocus="false">哈尔滨<i class="css_arrow"></i></a></li>
                </ul>
            </div>
            <div class="content JS_tabsbox">
                <div class="tabcon selected">
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                </div>
                <div class="tabcon">
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京2</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                </div>
                <div class="tabcon">
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京3</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                </div>
                <div class="tabcon">
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京4</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                </div>
                <div class="tabcon">
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京5</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="cbox train-cbox">
            <div class="ctitle">
                <h3>热门动车线路</h3>
                <ul class="tabnav JS_tabnav">
                	<li class="selected"><a href="javascript:;" hidefocus="false">上海<i class="css_arrow"></i></a></li>
                	<li><a href="javascript:;" hidefocus="false">杭州<i class="css_arrow"></i></a></li>
                	<li><a href="javascript:;" hidefocus="false">无锡<i class="css_arrow"></i></a></li>
                	<li><a href="javascript:;" hidefocus="false">宁波<i class="css_arrow"></i></a></li>
                	<li><a href="javascript:;" hidefocus="false">哈尔滨<i class="css_arrow"></i></a></li>
                </ul>
            </div>
            <div class="content JS_tabsbox">
                <div class="tabcon selected">
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                </div>
                <div class="tabcon">
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京2</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                </div>
                <div class="tabcon">
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京3</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                </div>
                <div class="tabcon">
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京4</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                </div>
                <div class="tabcon">
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京5</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                    <ul class="train-list">
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 北京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 南京</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 苏州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 广州</a></li>
                        <li><dfn>&yen;<i>350</i>起</dfn><a href="">上海 - 哈尔滨</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div> <!-- //.col-w-ticket -->
    
    <div class="aside-ticket">
        <div class="sidebox">
            <a href=""><img src="images/300-200.jpg" width="300" height="200" alt="" /></a>
        </div>
        <div class="hr_d"></div>
        
        <div class="train-brand">
            <div class="info_item">
                <h4>品牌保障</h4>
                <p>驴妈妈旗下产品</p>
            </div>
            <div class="info_item">
                <h4>免快递费</h4>
                <p>不收取快递费用</p>
            </div>
            <div class="info_item">
                <h4>取票自由</h4>
                <p>全国范围内取票</p>
            </div>
            <div class="info_item">
                <h4>退款无忧</h4>
                <p>无票全额退款</p>
            </div>
        </div>
        
        <div class="sidebox">
            <div class="head">
                <h4>铁友自取票常见问题</h4>
                <a class="link-more" href="#">更多帮助 &raquo;</a>
            </div>
            <div class="content">
                <ul class="train-faq JS_click_select">
                	<li class="selected">
                        <h4><b>Q1.</b>什么是铁友自取票？</h4>
                        <p><b>A1.</b>铁友自取票是铁友旅行网为方便广大用户的一项便民措施。用户只要在下单时选择【自取票】选项，出票成功后，可在任何火车站以及代售点取票。
                        </p>
                    </li>
                    <li>
                        <h4><b>Q2.</b>什么是铁友自取票？</h4>
                        <p><b>A2.</b>铁友自取票是铁友旅行网为方便广大用户的一项便民措施。用户只要在下单时选择【自取票】选项，出票成功后，可在任何火车站以及代售点取票。
                        </p>
                    </li>
                    <li>
                        <h4><b>Q3.</b>什么是铁友自取票？撒的发生的发生的非</h4>
                        <p><b>A3.</b>铁友自取票是铁友旅行网为方便广大用户的一项便民措施。用户只要在下单时选择【自取票】选项，出票成功后，可在任何火车站以及代售点取票。
                        </p>
                    </li>
                    <li>
                        <h4><b>Q4.</b>什么是铁友自取票？撒的发生撒的发生的</h4>
                        <p><b>A4.</b>铁友自取票是铁友旅行网为方便广大用户的一项便民措施。用户只要在下单时选择【自取票】选项，出票成功后，可在任何火车站以及代售点取票。
                        </p>
                    </li>
                    <li>
                        <h4><b>Q5.</b>什么是铁友自取票？</h4>
                        <p><b>A5.</b>铁友自取票是铁友旅行网为方便广大用户的一项便民措施。用户只要在下单时选择【自取票】选项，出票成功后，可在任何火车站以及代售点取票。
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div> <!-- //.aside-ticket -->
        
</div> <!-- //.wrap 1 -->









<div class="padbox wrap">
	<a href="#"><img src="images/big.jpg" width="1000" height="80"></a>
</div> <!-- //.adbox -->

<script src="http://pic.lvmama.com/js/common/copyright.js"></script>

<div class="hh_cooperate">
    <p><b>合作网站：</b><span>
        <a target="_blank" href="http://www.kchance.com/">旅游规划</a>
        <a target="_blank" href="http://www.joyuyx.com/">旅游营销</a>
        <a target="_blank" href="http://lvyou.baidu.com">百度旅游</a>
        </span>
    </p>

    <p><b>友情链接：</b><span>
        <a target="_blank" href="http://go.qq.com/#attach=qqlvyou_169_13_0">特价酒店</a>
        <a target="_blank" href="http://www.zhuna.cn/">酒店预订</a>
        </span>
    </p>
</div>

<script src="http://pic.lvmama.com/min/index.php?f=/js/new_v/jquery-1.7.2.min.js,/js/ui/lvmamaUI/lvmamaUI.js,/js/new_v/top/header-air_new.js,/js/v3/plugins.js"></script>

<script src="http://pic.lvmama.com/js/v3/train.js"></script>

</body>
</html>
