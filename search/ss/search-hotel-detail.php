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

<div class="ui-content wrap">
	<?php include("search-aside.html"); ?>
    <div class="search-main search-tickets">
    	<?php include("search-boxh.html"); ?>
        
        <!-- 搜素筛选\\ -->
        <div class="search-filter">
            <div class="filter-info clearfix"><span class="result-info">共找到<i>100</i>条结果。</span></div>
            <ul class="filter-tags">
                <li>
                    <span>酒店类型：</span>
                    <label><input name="hotel-type" value="" type="checkbox">度假酒店</label>
                    <label><input name="hotel-type" value="" type="checkbox">精品酒店</label>
                    <label><input name="hotel-type" value="" type="checkbox">高档酒店</label>
                    <label><input name="hotel-type" value="" type="checkbox">经济酒店</label>
                    <label><input name="hotel-type" value="" type="checkbox">客栈/农家乐</label>
                </li>
                <li>
                    <span>酒店星级：</span>
                    <label><input name="hotel-star" value="" type="checkbox">五星级/豪华型</label>
                    <label><input name="hotel-star" value="" type="checkbox">四星级/高档型</label>
                    <label><input name="hotel-star" value="" type="checkbox">三星级/舒适型</label>
                    <label><input name="hotel-star" value="" type="checkbox">二星级/简约型</label>
                </li>
                <li>
                    <span>酒店星级：</span>
                    <label><input name="hotel-app" value="" type="checkbox">宽带</label>
                    <label><input name="hotel-app" value="" type="checkbox">停车场</label>
                    <label><input name="hotel-app" value="" type="checkbox">健身房</label>
                    <label><input name="hotel-app" value="" type="checkbox">游泳池</label>
                    <label><input name="hotel-app" value="" type="checkbox">免费接机服务</label>
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
            </div><!-- //筛选排序 -->
        
        	<?php include("hotel.html"); ?>
        </div><!-- //线路搜索列表 -->
        
    </div><!-- // div .search-main -->
</div><!-- // div .ui-content -->

<?php include("common/footer.html"); ?>
</body>
</html>