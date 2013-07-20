<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>频道页面-景点门票</title>
<meta name="keywords" content=""/>
<meta name="description" content="">
<?php include("common/meta-channel.php"); ?>
</head>
<body class="hotel">
<?php include("common/header.html"); ?>

<!-- wrap\\ 1 -->
<div class="wrap wrap-quick">
    <div class="aside-big">
        <div class="pro-search search-hotel">
            <div class="search-nav">
                <ul class="hor JS_vtabnav clearfix">
                    <li><a href="javascript:;">国内景区酒店</a></li>
                    <li class="selected"><a href="javascript:;">境外景点酒店</a></li>
                </ul>
            </div>
            <div class="content JS_vtabsbox">
                <div class="hotel-domestic tabcon selected">
                    <form class="form-hor">
                        <p>您可通过景区或酒店名称进行搜索</p>
                        <div class="control-group">
                            <label class="control-label" for="">酒店名称：</label>
                            <div class="controls">
                                <input class="input-text" type="text" placeholder="中文/拼音" />
                            </div>
                        </div>
                        <div class="control-group">
                            <label class="control-label" for="">景区名称：</label>
                            <div class="controls">
                                <input class="input-text" type="text" placeholder="中文/拼音" />
                            </div>
                        </div>
                        <div class="control-group">
                            <label class="control-label" for=""> </label>
                            <div class="controls">
                                <label class="checkbox inline"><input class="input-checkbox" name="hotelType" type="checkbox">度假酒店</label>
                                <label class="checkbox inline"><input class="input-checkbox" name="hotelType" type="checkbox">精品酒店</label>
                                <label class="checkbox inline"><input class="input-checkbox" name="hotelType" type="checkbox">高档酒店</label>
                                <label class="checkbox inline"><input class="input-checkbox" name="hotelType" type="checkbox">经济酒店</label>
                                <label class="checkbox inline"><input class="input-checkbox" name="hotelType" type="checkbox">客栈/农家乐</label>
                            </div>
                        </div>
                        <button class="xicon searchbtn" type="button">搜索</button>
                    </form>
                </div> <!-- //.tabcon -->
                <div class="hotel-global tabcon">
                    <form class="form-hor">
                        <div class="control-group">
                            <label class="control-label" for="">入住城市：</label>
                            <div class="controls">
                                <input class="input-text" type="text" placeholder="中文/拼音" />
                            </div>
                        </div>
                        <div class="control-group">
                            <label class="control-label" for="">入住日期：</label>
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
                            <label class="control-label" for="">离店日期：</label>
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
                            <label class="control-label" for="">人数：</label>
                            <div class="controls">
                                <select class="select input-small" id="" name="">
                                    <option>1 成人</option>
                                    <option>2 成人</option>
                                    <option>3 成人</option>
                                    <option>4 成人</option>
                                </select>
                                
                                <select class="select input-small" id="" name="">
                                    <option>1 儿童</option>
                                    <option>2 儿童</option>
                                    <option>3 儿童</option>
                                    <option>4 儿童</option>
                                </select>
                            </div>
                        </div>
                        <div class="control-group">
                            <label class="control-label" for="">入住：</label>
                            <div class="controls">
                                <select class="select input-small" id="" name="">
                                    <option>1 间</option>
                                    <option>2 间</option>
                                    <option>3 间</option>
                                    <option>4 间</option>
                                </select>
                            </div>
                        </div>
                        <button class="xicon searchbtn" type="button">搜索</button>
                    </form>
                </div> <!-- //.tabcon -->
            </div> <!-- //.JS_vtabsbox -->
        </div> <!-- //.pro-search -->
        
        <div class="hr_d"></div>
        
        <div class="side-box border hotel-cside1">
            <div class="head">
                <h4>热门国内酒店目的地</h4>
            </div>
            <div class="content">
                <ul class="hotdest">
                	<li><b>华东地区</b>
                        <a href="#">上海</a>
                        <a href="#">杭州</a>
                        <a href="#">常州</a>
                        <a href="#">无锡</a>
                        <a href="#">千岛湖</a>
                        <a href="#">苏州</a>
                        <a href="#">安吉</a>
                        <a href="#">扬州</a>
                        <a href="#">象山</a>
                        <a href="#">宁波</a>
                        <a href="#">黄山</a>
                        <a href="#">南京</a>
                        <a href="#">舟山</a>
                        <a href="#">桐庐</a>
                        <a href="#">绍兴</a>
                        <a href="#">溧阳</a>
                        <a href="#">嘉兴</a>
                        <a href="#">上饶</a>
                        <a href="#">临安</a>
                        <a href="#">厦门</a>
                    </li>
                	<li><b>华北地区</b>
                        <a href="#">北京</a>
                        <a href="#">青岛</a>
                        <a href="#">平遥</a>
                        <a href="#">哈尔滨</a>
                        <a href="#">长白山</a>
                        <a href="#">天津</a>
                    </li>
                	<li><b>华南华中</b>
                        <a href="#">三亚</a>
                        <a href="#">海口</a>
                        <a href="#">厦门</a>
                        <a href="#">广州</a>
                        <a href="#">深圳</a>
                        <a href="#">珠海</a>
                        <a href="#">惠州</a>
                        <a href="#">清远</a>
                        <a href="#">江门</a>
                        <a href="#">桂林</a>
                        <a href="#">阳朔</a>
                        <a href="#">澳门</a>
                        <a href="#">香港</a>
                    </li>
                    <li><b>西部地区</b>
                        <a href="#">成都</a>
                        <a href="#">丽江</a>
                        <a href="#">九寨沟</a>
                        <a href="#">峨眉山</a>
                        <a href="#">重庆</a>
                        <a href="#">绵阳</a>
                        <a href="#">遂宁</a>
                        <a href="#">广元</a>
                        <a href="#">南充</a>
                        <a href="#">西昌</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="side-box border hotel-cside2">
            <div class="head">
                <h4>热门境外酒店目的地</h4>
            </div>
            <div class="content">
                <ul class="hotdest">
                	<li><b>亚洲</b>
                        <a href="#">首尔</a>
                        <a href="#">曼谷</a>
                        <a href="#">东京</a>
                        <a href="#">河内</a>
                        <a href="#">新加坡</a>
                        <a href="#">香港</a>
                        <a href="#">芭提雅</a>
                        <a href="#">吉隆坡</a>
                        <a href="#">巴厘岛</a>
                        <a href="#">普吉岛</a>
                        <a href="#">苏梅岛</a>
                    </li>
                    <li><b>欧洲</b>
                        <a href="#">巴黎</a>
                        <a href="#">伦敦</a>
                        <a href="#">罗马</a>
                        <a href="#">马德里</a>
                        <a href="#">布拉格</a>
                        <a href="#">柏林</a>
                        <a href="#">维也纳</a>
                        <a href="#">布达佩斯</a>
                        <a href="#">阿姆斯特丹</a>
                        <a href="#">里斯本</a>
                    </li>
                    <li><b>北美洲</b>
                        <a href="#">纽约</a>
                        <a href="#">迈阿密</a>
                        <a href="#">洛杉矶</a>
                        <a href="#">旧金山</a>
                        <a href="#">华盛顿</a>
                        <a href="#">拉斯维加斯</a>
                        <a href="#">蒙特利尔</a>
                        <a href="#">多伦多</a>
                        <a href="#">温哥华</a>
                    </li>
                    <li><b>南美洲</b>
                        <a href="#">布宜诺斯</a>
                        <a href="#">里约热内卢</a>
                        <a href="#">圣保罗</a>
                        <a href="#">波哥大</a>
                        <a href="#">萨尔瓦多</a>
                        <a href="#">圣地亚哥</a>
                        <a href="#">利马</a>
                        <a href="#">库里提巴</a>
                        <a href="#">纳塔尔</a>
                    </li>
                    <li><b>大洋洲</b>
                        <a href="#">墨尔本</a>
                        <a href="#">悉尼</a>
                        <a href="#">凯恩斯</a>
                        <a href="#">奥克兰</a>
                        <a href="#">布里斯班伯斯</a>
                        <a href="#">阿德莱德</a>
                        <a href="#">基督城</a>
                        <a href="#">道格拉斯港</a>
                        <a href="#">皇后镇</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="side-box border hotel-tuan">
            <div class="head">
                <h4>酒店团购</h4>
                <a class="link-more" href="#">更多 &raquo;</a>
            </div>
            <div class="content">
                <ul class="hotel-buy">
                    <li>
                        <div class="imgtext">
                            <a class="text-cover" href="#">
                                <img src="images/buypic1.jpg"  width="180" height="120" alt="" />
                                <span></span>
                                <i>某酒店名称</i>
                            </a>
                            <div class="textbox">
                                <span class="countdown">2342354534</span>
                                <p>
                                    <dfn>&yen;<i>490</i></dfn>
                                    <span class="price">门店价：&yen;800</span>
                                </p>
                                <p><a class="btnbuy" href="#">抢购</a></p>
                            </div>
                        </div>
                        <p>住宿1晚除会员房（除会员房和专享房外，其他房型任选其一）</p>
                    </li>
                    <li>
                        <div class="imgtext">
                            <a class="text-cover" href="#">
                                <img src="images/buypic1.jpg"  width="180" height="120" alt="" />
                                <span></span>
                                <i>某酒店名称</i>
                            </a>
                            <div class="textbox">
                                <span class="countdown">2342354534</span>
                                <p>
                                    <dfn>&yen;<i>490</i></dfn>
                                    <span class="price">门店价：&yen;800</span>
                                </p>
                                <p><a class="btnbuy" href="#">抢购</a></p>
                            </div>
                        </div>
                        <p>住宿1晚（除会员房和专享房外，其他房型任选其一房型任选其一）</p>
                    </li>
                </ul>
            </div>
        </div>
    </div> <!-- //.aside-big -->
    
    <div class="col-w-small">
        <div id="slides" class="slide-box slide-hotel">
            <ul class="slide-content">
                <li><a href="#"><img src="images/banner4.jpg"></a></li>
                <li><a href="#"><img src="images/banner2.jpg"></a></li>
                <li><a href="#"><img src="images/banner3.jpg"></a></li>
                <li><a href="#"><img src="images/banner4.jpg"></a></li>
                <li><a href="#"><img src="images/banner2.jpg"></a></li>
                <li><a href="#"><img src="images/banner3.jpg"></a></li>
            </ul> 
            <ul class="slide-nav">
                <li class="active">中国好温泉</li>
                <li>出境抄底游</li>
                <li>欢乐谷半价</li>
                <li>摄影之旅</li>
                <li>浪漫度蜜月</li>
                <li>国内抄底游</li>
            </ul>
        </div> <!-- //.slide-box -->
        <div class="hr_d"></div>
        
        <div class="cbox hotel-cbox1">
            <div class="ctitle">
                <h3>国内景点酒店</h3>
                <ul class="tabnav JS_tabnav">
                	<li class="selected"><a href="javascript:;">上海<i class="css_arrow"></i></a></li>
                	<li><a href="javascript:;">杭州<i class="css_arrow"></i></a></li>
                	<li><a href="javascript:;">无锡<i class="css_arrow"></i></a></li>
                	<li><a href="javascript:;">宁波<i class="css_arrow"></i></a></li>
                	<li><a href="javascript:;">哈尔滨<i class="css_arrow"></i></a></li>
                </ul>
                <a class="link-more" href="#">更多 &raquo;</a>
            </div>
            <div class="content JS_tabsbox">
                <div class="tabcon selected">
                    <ul class="hotel-list">
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic1.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic2.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mk_star m_star3"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic3.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic1.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic2.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mk_star m_star3"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic3.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                    </ul>
                    <p class="link-more"><a href="#">— — 查看更多1 — —</a></p>
                </div>
                <div class="tabcon">
                    <ul class="hotel-list">
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic1.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic2.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mk_star m_star3"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic3.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic1.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic2.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mk_star m_star3"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic3.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                    </ul>
                    <p class="link-more"><a href="#">— — 查看更多2 — —</a></p>
                </div>
                <div class="tabcon">
                    <ul class="hotel-list">
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic1.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic2.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mk_star m_star3"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic3.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic1.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic2.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mk_star m_star3"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic3.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                    </ul>
                    <p class="link-more"><a href="#">— — 查看更多3 — —</a></p>
                </div>
                <div class="tabcon">
                    <ul class="hotel-list">
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic1.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic2.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mk_star m_star3"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic3.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic1.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic2.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mk_star m_star3"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic3.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                    </ul>
                    <p class="link-more"><a href="#">— — 查看更多4 — —</a></p>
                </div>
                <div class="tabcon">
                    <ul class="hotel-list">
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic1.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic2.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mk_star m_star3"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic3.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic1.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic2.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mk_star m_star3"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic3.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                    </ul>
                    <p class="link-more"><a href="#">— — 查看更多5 — —</a></p>
                </div>
            </div>
        </div> <!-- //国内景点酒店 -->
        
        
        <div class="cbox hotel-cbox2">
            <div class="ctitle">
                <h3>境外景点酒店</h3>
                <ul class="tabnav JS_tabnav">
                	<li class="selected"><a href="javascript:;">上海<i class="css_arrow"></i></a></li>
                	<li><a href="javascript:;">杭州<i class="css_arrow"></i></a></li>
                	<li><a href="javascript:;">无锡<i class="css_arrow"></i></a></li>
                	<li><a href="javascript:;">宁波<i class="css_arrow"></i></a></li>
                	<li><a href="javascript:;">哈尔滨<i class="css_arrow"></i></a></li>
                </ul>
                <a class="link-more" href="#">更多 &raquo;</a>
            </div>
            <div class="content JS_tabsbox">
                <div class="tabcon selected">
                    <ul class="hotel-list">
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic1.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic2.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mk_star m_star3"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic3.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic1.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic2.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mk_star m_star3"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic3.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                    </ul>
                    <p class="link-more"><a href="#">— — 查看更多1 — —</a></p>
                </div>
                <div class="tabcon">
                    <ul class="hotel-list">
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic1.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic2.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mk_star m_star3"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic3.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic1.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic2.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mk_star m_star3"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic3.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                    </ul>
                    <p class="link-more"><a href="#">— — 查看更多2 — —</a></p>
                </div>
                <div class="tabcon">
                    <ul class="hotel-list">
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic1.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic2.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mk_star m_star3"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic3.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic1.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic2.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mk_star m_star3"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic3.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                    </ul>
                    <p class="link-more"><a href="#">— — 查看更多3 — —</a></p>
                </div>
                <div class="tabcon">
                    <ul class="hotel-list">
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic1.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic2.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mk_star m_star3"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic3.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic1.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic2.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mk_star m_star3"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic3.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                    </ul>
                    <p class="link-more"><a href="#">— — 查看更多4 — —</a></p>
                </div>
                <div class="tabcon">
                    <ul class="hotel-list">
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic1.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic2.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mk_star m_star3"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic3.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic1.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic2.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mk_star m_star3"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                        <li>
                            <a class="text-cover" href="#">
                                <img src="images/hotel_pic3.jpg" width="200" height="130" alt="" />
                                <span></span>
                                <i>上海某酒店名称</i>
                            </a>
                            <p class="rank">
                                <dfn>&yen;<i>350</i>起</dfn>
                                <small class="m_star"><span class="mt_star m_star4"><i></i></span></small>
                            </p>
                            <p class="info">酒店位于素有“亚洲第一大道”之称的椰梦长廊三亚湾</p>
                            <p class="local">
                                <a class="link-more" href="#">更多酒店 &raquo;</a>
                                <span class="icon-local"></span> 上海某酒店名称
                            </p>
                        </li>
                    </ul>
                    <p class="link-more"><a href="#">— — 查看更多5 — —</a></p>
                </div>
            </div>
        </div> <!-- //境外景点酒店 -->
        
    </div> <!-- //.col-w-small -->
    
        
        
</div> <!-- //.wrap 1 -->









<div class="padbox wrap">
	<a href="#"><img src="images/big.jpg" width="980" height="80"></a>
</div> <!-- //.adbox -->

<?php include("common/footer-channel.php"); ?>
</body>
</html>
