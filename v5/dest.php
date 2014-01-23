<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>景点门票详情页</title>
<meta name="keywords" content=""/>
<meta name="description" content="">

<!--生产线引用-->
<link rel="stylesheet" href="http://pic.lvmama.com/min/index.php?f=/styles/v5/base.css,/styles/v5/common.css,/styles/new_v/header-air.css" >
<link rel="stylesheet" href="http://pic.lvmama.com/min/index.php?f=/styles/v5/modules/form.css,/styles/v5/modules/button.css,/styles/v5/modules/table.css,/styles/v5/modules/tags.css,/styles/v5/modules/tip.css,/styles/v5/modules/paging.css" />
<!--<link rel="stylesheet" href="http://pic.lvmama.com/min/index.php?f=/styles/v5/dest.css" />-->

<!--本地样式-->
<link rel="stylesheet" href="css/dest.css" />
</head>
<body class="dest" data-spy="scroll" data-target=".J_scrollnav">

<!-- 公共头部开始  -->
<!-- 
 * 此示例展示，暂时使用了js来展现，
 * 但开发上线，务必请引用头部的那个公共模块，参考其他项目
-->
<script src="http://www.lvmama.com/zt/web/common/header.js"></script>
<!-- 公共头部结束  -->


<!-- wrap\\ 1 -->
<div class="wrap">
    
    <!--面包屑导航-->
    <div class="crumbs clearfix">
        <p class="crumbs-link">
            <a href="#">驴妈妈首页</a> &gt; 
            <a href="#">景点门票</a> &gt; 
            <a href="#">上海景点门票</a> &gt; 
            <a class="current">上海长风海洋世界</a>
        </p>
        <span class="other-info">近一周2376人预订</span>
    </div>
    
    <div class="overview">
        <div class="dtitle clearfix">
            <span class="xorder">
                <span class="price"><dfn>&yen;<i>138</i></dfn>起</span>
                <a href="#destorder" class="btn btn-large cbtn-orange"><span class="btn-text">立即预订</span><i class="icon icon-r dicon-rarr"></i></a>
            </span>
            <div class="titbox">
                <h1 class="tit">上海长风海洋世界</h1><span class="tags tags-lightblue">折扣</span><span class="tags tags-lightblue">促销</span>
            </div>
        </div>
        <div class="dcontent clearfix">
            <ul class="dimg ul-hor J_photo">
                <li class="big-img">
                    <img src="//placehold.it/405x270" data-big-img="//placehold.it/600x400" width="405" height="270" alt="某某景点">
                </li>
                <li><img src="//placehold.it/198x132" data-big-img="//placehold.it/600x400" width="198" height="132" alt="某某景点"></li>
                <li><img src="//placehold.it/198x132" data-big-img="//placehold.it/600x400" data-big-img="" width="198" height="132" alt="某某景点"></li>
            </ul>
            <div class="dinfo">
                <div class="sec-info">
                    <div class="sec-inner">
                        <a href="#" class="xlink"><i class="icon dicon-local"></i>地图</a>
                        <dl class="dl-hor">
                            <dt>景点地址</dt>
                            <dd><p class="linetext">上海市普陀区大渡河路451号，文本过长会隐藏</p></dd>
                        </dl>
                        <dl class="dl-hor">
                            <dt>入园时间</dt>
                            <dd>
                                <p>10:00-18:00（周一至周五）</p>
                                <p>10:00-18:00（周一至周五）</p>
                                <div class="J-more hide">
                                    <p>10:00-18:00（周一至周五）</p>
                                    <p>09:00-20:00（周六周日）</p>
                                </div>
                            </dd>
                        </dl>
                        <dl class="dl-hor link-active">
                            <dt><span class="tags-active">景点活动</span></dt>
                            <dd>
                                <a href="#activity">上海长风公园海洋馆3D灯光秀</a>
                                <a href="#activity">上海长风公园海洋馆太空舱全新改版啦！</a>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div class="comment-info">
                    <dl class="dl-hor">
                        <dt>好 评 率</dt>
                        <dd><span class="dnum"><i class="orange">23244</i> 人真实评价</span><dfn><i>96.7</i>%</dfn></dd>
                    </dl>
                    <div class="dot-line"></div>
                    <a class="quote" href="#comments" title="查看详细">
                        <i class="icon dicon-comment"></i>
                        <i class="qstart">“</i>
                        <i class="qend">”</i>
                        <p>很好的地方，对孩子来说，能开眼界，学会很多知识，值得一来，收获不少！</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
    
    <div class="dest-main">
        <div id="destorder" class="tab-outer">
            <div class="tab-dest tab-fixed J_scrollnav">
                <ul class="ul-hor">
                    <li class="active"><a href="#destorder">订票</a></li>
                    <li><a href="#dfreetour">自由行</a></li>
                    <li><a href="#dtuangou">跟团游</a></li>
                    <li><a href="#policy">预订须知</a></li>
                    <li><a href="#activity">景点活动</a></li>
                    <li><a href="#introduction">景点介绍</a></li>
                    <li><a href="#traffic">交通指南</a></li>
                    <li><a href="#comments">用户点评<span>(2615)</span></a></li>
                </ul>
            </div>
        </div>
        <div class="dcontent">
            <div class="tiptext tip-warning"><span class="tip-icon tip-icon-warning"></span><p>园区通知：很抱歉，该园因娱乐设施维修，故从2014-1-10起至2014-1-12停止营业3天。如果字段很长，可以自适应换行，这里排版不会有什么问题。如果字段很长，可以自适应换行，这里排版不会有什么问题。</p></div>
            
            <?php include("dpro-list.php"); ?>
        </div>
        <div class="dside">
            <?php include("dside.php"); ?>
        </div><!--//.dside-->
        <div class="dmain">
            <div id="policy" class="dbox policy">
                <div class="dtitle">
                    <h3 class="dtit"><i class="icon dicon-policy"></i>预订须知</h3>
                </div>
                <div class="dcontent">
                    <div class="dactive">
                        <h5>预订限制</h5>
                        <p>
                            1. 该景区网络（包括其他商家平台在内）预订，每个手机号每天至多限订限取5张门票，请勿超限预订。<br>
                            2. 本产品须提前至少1天预订并完成支付。<br>
                            3. 由于预订本产品2小时后才能取票，所以需至少提前两小时预订。
                        </p>
                        <h5>优惠人群</h5>
                        <p>
                            1. 身高低于1.2米(不含1.2米)的儿童免票。<br>
                            2. 身高1.2米至1.5米(不含1.5米)的儿童购半价票入园。<br>
                            3. 身高1.5米以上(含1.5米)的儿童购全价票入园。<br>
                            4. 年龄在65周岁至69周岁（含65周岁)的老人凭有效证件或上海市老年优待证购半价票入园。<br>
                            5. 年龄在70周岁以上(含70周岁)的老人凭有效证件或上海市老年优待证免费入园。
                        </p>
                        <h5>温馨提示</h5>
                        <p>
                            1. 本产品是“上海欢乐谷”与“驴妈妈旅游网”面向散客推出的上海欢乐谷优惠电子门票。<br>
                            2. 在本平台预订并完成支付后，我们将以短信的形式把“二维码”电子门票发送到您指定的手机。<br>
                            3. 凭电子门票至上海欢乐谷游玩时，请到电子票专用通道直接刷码通关，无须排队换票，更无须组团。<br>
                            4. 上海欢乐谷共有多个入园通道，右侧第3个为电子门票专用通道。<br>
                            5. 用户如需发票可致电驴妈妈客服1010 6060索要。<br>
                            6. 为防止恶意倒票，现我司规定二维码短信持有人必须先刷码，并与其他人一同入园方可，否则无效。<br>
                            7. 门票仅限当日使用有效。<br>
                            8. 本产品为夜场门票，1.2米以下儿童免票，需17:30以后方可入园，园区内大型游乐项目夜场关闭不能游玩。
                        </p>
                    </div>
                </div>
            </div><!--//.dbox-->
            
            <div id="activity" class="dbox activity">
                <div class="dtitle">
                    <h3 class="dtit"><i class="icon dicon-activity"></i>景点活动</h3>
                </div>
                <div class="dcontent">
                    <h5>50岁以上免费畅玩欢乐谷</h5>
                    <ul class="ul">
                        <li>活动时间：2013年11月25日 - 12月31日</li>
                        <li>活动详情：11月15日至12月31日，上海市50周岁以上市民凭本人身份证原件可免费畅玩欢乐谷。</li>
                    </ul>
                    <hr>
                    <h5>上海欢乐谷冰雪圣诞嘉年华</h5>
                    <ul class="ul">
                        <li>活动时间：2013年11月25日 - 12月31日</li>
                        <li>活动详情：12月07日- 01月05日，欢乐谷进行冰雪圣诞季，届时每周末将举办大型主题表演。</li>
                    </ul>
                    <img src="//placehold.it/720x240" width="720" height="240" alt="某景点图片" />
                </div>
            </div><!--//.dbox-->
            
            <div id="introduction" class="dbox introduction">
                <div class="dtitle">
                    <h3 class="dtit"><i class="icon dicon-introduction"></i>景点介绍</h3>
                </div>
                <div class="dcontent">
                    <h4>您需要知道的“上海长风海洋世界”</h4>
                    <ul class="ul">
                        <li>最能代表当今游乐技术的先进性</li>
                        <li>充分发挥华侨城在大型演艺方面的特色和优势</li>
                        <li>突出中西合璧的多元文化体验</li>
                        <li>突出环境生态和园林绿化</li>
                        <li>利用丰富的水资源开展多层次的水上娱乐项目</li>
                        <li>多个大型室内场馆使其成为全天候的旅游场所</li>
                    </ul>
                    <h4>上海长风海洋世界简介</h4>
                    <p>长风海洋世界坐落在风景优美的长风公园内，与杜莎夫人蜡像馆同样，它是隶属于莫林集团旗下，集大型海洋动物表演与水族馆鱼类展览为一体的综合海洋主题公园。长风海洋世界的极地白鲸表演馆是中国内地最大，华东地区首家拥有白鲸的海洋动物表演馆，可同时容纳2000人。馆内除了小白鲸，还有加州海狮，海豚等海洋哺乳动物精灵的精彩表演，游客能亲身感受人和动物和谐相处的惊喜。</p>
                    <h4>上海长风海洋世界详情</h4>
                    <img src="//placehold.it/720x270" width="720" height="270" alt="某景点图片" />
                    <h6>海马王国</h6>
                    <p>本次海马特展，上海长风海洋世界将集中展出十几种珍稀海马物种，并且此次展出的海马均为人工繁殖。水族师精心为他们准备了合适的饵料和适宜的养殖环境，确保水质的温度、盐度、溶解氧和酸碱度等指标都符合他们的生存需要。到了繁殖季节，雌海马就把卵产在雄海马的孵卵囊中并受精。受精卵在孵卵囊中获取所需要的养分进行胚胎发育，经过一段时间后，雄性海马会生产出小海马。</p>
                    <div class="imgbox">
                        <img src="//placehold.it/355x234" width="355" height="234" alt="某景点图片" /><img src="//placehold.it/355x234" width="355" height="234" alt="某景点图片" />
                    </div>
                    <h6>白鲸表演</h6>
                    <p>丰厚圆润的前额，微笑优美的唇部，白亮光滑的肌肤和肥满可爱的前鳍，加上清晰悦耳的歌喉，使白鲸称为“海中金丝雀”。在白鲸馆观看白鲸水上芭蕾、人鲸共舞等精彩节目，倾听白鲸的呼吸声和美妙的“歌喉”，以及主持人默契配合幽默风趣，让你第一次尝试与极地海洋动物亲密接触，亲身感受人和动物和谐相处的惊喜。</p>
                    <h4>不可错过的体验</h4>
                    <ul class="ul-imgtext">
                        <li>
                            <img src="//placehold.it/220x128" width="220" height="128" alt="某景点图片" />
                            <h6>迪士尼贴心服务</h6>
                            <p>殷切贴心的景区服务，特别为您安排了米老鼠早晨传呼、睡前电视播放精彩迪士尼故事等等，让您享受与众不同的假期。</p>
                        </li>
                        <li>
                            <img src="//placehold.it/220x128" width="220" height="128" alt="某景点图片" />
                            <h6>迪士尼贴心服务</h6>
                            <p>殷切贴心的景区服务，特别为您安排了米老鼠早晨传呼、睡前电视播放精彩迪士尼故事等等，让您享受与众不同的假期。</p>
                        </li>
                        <li>
                            <img src="//placehold.it/220x128" width="220" height="128" alt="某景点图片" />
                            <h6>迪士尼贴心服务</h6>
                            <p>殷切贴心的景区服务，特别为您安排了米老鼠早晨传呼、睡前电视播放精彩迪士尼故事等等，让您享受与众不同的假期。</p>
                        </li>
                        <li>
                            <img src="//placehold.it/220x128" width="220" height="128" alt="某景点图片" />
                            <h6>迪士尼贴心服务</h6>
                            <p>殷切贴心的景区服务，特别为您安排了米老鼠早晨传呼、睡前电视播放精彩迪士尼故事等等，让您享受与众不同的假期。</p>
                        </li>
                        <li>
                            <img src="//placehold.it/220x128" width="220" height="128" alt="某景点图片" />
                            <h6>迪士尼贴心服务</h6>
                            <p>殷切贴心的景区服务，特别为您安排了米老鼠早晨传呼、睡前电视播放精彩迪士尼故事等等，让您享受与众不同的假期。</p>
                        </li>
                        <li>
                            <img src="//placehold.it/220x128" width="220" height="128" alt="某景点图片" />
                            <h6>迪士尼贴心服务</h6>
                            <p>殷切贴心的景区服务，特别为您安排了米老鼠早晨传呼、睡前电视播放精彩迪士尼故事等等，让您享受与众不同的假期。</p>
                        </li>
                    </ul>
                </div>
            </div><!--//.dbox-->
            
            <div id="traffic" class="dbox traffic">
                <div class="dtitle">
                    <h3 class="dtit"><i class="icon dicon-traffic"></i>交通指南</h3>
                </div>
                <div class="dcontent">
                    <div class="traffic-map">
                        交通地图
                    </div>
                    <h5>公共交通</h5>
                    <p>
                    公交路线<br>
                    背包客们可乘坐44、67、94、754、837、846路；旅游车6A，6B长风公园站下车均可到达。<br>
                    地铁线路<br>
                    地铁二号线（中山公园站）、地铁三、四号线（金沙江路站）下车后需步行20分钟左右到达。
                    </p>
                    <h5>自驾车线路</h5>
                    <p>
                    A8: 松江出口沿嘉松公路向北到沈砖公路向西行百米。<br>
                    A9: 赵巷佘山出口沿嘉松公路向南走到沈砖公路向西行百米。<br>
                    A5: 莘砖公路出口沿莘砖公路向西行至嘉松南路口继续西行百米。<br>
                    上海出发：从市中心到佘山大概30公里左右。从延安路高架上A9高速公路佘山出口下左转，沿嘉松中路到林荫大道右转2公里即到上海欢乐谷。<br>
                    </p>
                </div>
            </div><!--//.dbox-->
            
            <div id="comments" class="dbox comments">
                <div class="dtitle">
                    <h3 class="dtit"><i class="icon dicon-comments"></i>用户点评</h3>
                </div>
                <div class="dcontent">
                    <?php include("dcomment.php"); ?>
                </div>
            </div><!--//.dbox-->
            
        </div>
        
    </div>
</div> <!-- //.wrap 1 -->

<!--鼠标room 大图 -->
<div class="J_img_wrap img-wrap"></div>

<!--公共底部-->
<script src="http://pic.lvmama.com/js/v4/copyright.js"></script>

<!-- 频道公用js-->
<script src="http://pic.lvmama.com/min/index.php?f=/js/new_v/jquery-1.7.2.min.js,/js/ui/lvmamaUI/lvmamaUI.js,/js/new_v/top/header-air_new.js"></script>
<script src="http://pic.lvmama.com/min/index.php?f=/js/v5/modules/placeholder.js"></script>
<!--线上引用
<script src="http://pic.lvmama.com/min/index.php?f=/js/v5/newhotel.js"></script>
-->
<!--本地引用-->
<script src="js/bt-affix.js"></script>
<script src="js/bt-scrollspy.js"></script>
<script src="js/dest.js"></script>

</body>
</html>
