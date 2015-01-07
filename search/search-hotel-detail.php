<!DOCTYPE html>
<head>
<meta charset="utf-8">
<title>线路搜索结果页</title>
<meta name="keywords" content="" />
<meta name="description" content="" />
<?php include("common/meta.html"); ?>
<link href="http://pic.lvmama.com/styles/new_v/ui_plugin/calendar.css" rel="stylesheet">

</head>
<body>
<?php include("common/header.html"); ?>

<div class="lv-crumbs wrap">
    <p><b>您当前所处的位置：</b><a href="">首页</a> &gt; <a href="">上海站</a> &gt; 上海出发到马尔代夫</p>
</div><!-- // div .lv-crumbs -->

<?php include("search-box.html"); ?>

<div class="ui-content wrap">
	<?php include("search-aside.html"); ?>
    <div class="search-main search-tickets">
        
        <!-- 搜素筛选\\ -->
        <div class="search-filter">
            <div class="filter-info clearfix"><span class="result-info">共找到<i>100</i>条结果。</span></div>
            <ul class="filter-tags">
                <li class="checkbox">
                    <span>酒店类型：</span>
                    <a class="selected" href="###">度假酒店</a></a>
                    <a href="###">精品酒店</a></a>
                    <a href="###">高档酒店</a></a>
                    <a href="###">经济酒店</a></a>
                    <a href="###">客栈/农家乐</a></a>
                </li>
				<li class="radio">
                    <span>房价范围：</span>
                    <a href="###">不限</a>
                    <a href="###">200元以下</a>
                    <a href="###">200-499元</a>
                    <a href="###">500-799元</a>
                    <a href="###">800元以上</a>
                </li>
                <li class="checkbox">
                    <span>酒店星级：</span>
                    <a href="###">五星级/豪华型</a>
                    <a href="###">四星级/高档型</a>
                    <a href="###">三星级/舒适型</a>
                    <a href="###">二星级/简约型</a>
                </li>
                <li class="checkbox">
                    <span>酒店星级：</span>
                    <a href="###">宽带</a>
                    <a href="###">停车场</a>
                    <a href="###">健身房</a>
                    <a href="###">游泳池</a>
                    <a href="###">免费接机服务</a>
                </li>
            </ul>
        </div><!-- //搜素筛选 -->
        
        <!-- 线路搜索列表\\ type_detail_result type_simple_result-->
        <div id="viewpoint-box" class="search-result-box viewpoint-box type_detail_result">
        
            <!-- 筛选排序\\  .filter-order filter-commont filter-commont-desc -->
            <div class="filter-order">
                <ul class="per_type">
                    <li class="type_detail"><a href="./search-hotel-detail.php"><i></i>详细</a></li>
                    <li class="type_simple"><a href="./search-hotel-simple.php"><i></i>简约</a></li>
                </ul>
                <span class="lv-order current-order">默认排序：驴妈妈推荐</span>
                <span class="comment-order current-order">点评数<i class="ico-order"></i></span>
                <span class="feedback-order current-order order-desc">好评率<i class="ico-order"></i></span>
                <span class="price-order">价格<i class="ico-order"></i></span>
                <label><input class="input-checkbox" type="checkbox">促销产品</label>
                
                <span class="checkbox"><a class="selected" href="">促销产品</a></span>
                
            </div><!-- //筛选排序 -->
        
        	<?php include("hotel.html"); ?>
        </div><!-- //线路搜索列表 -->
        
    </div><!-- // div .search-main -->
</div><!-- // div .ui-content -->

<?php include("common/footer.html"); ?>
</body>
</html>