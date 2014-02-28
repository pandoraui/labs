<!DOCTYPE html>
<head>
<meta charset="utf-8">
<title>搜索（线路）周边自由行无产品但其他类型有产品</title>
<meta name="keywords" content="" />
<meta name="description" content="" />
<?php include("common/meta.html"); ?>
</head>
<body>
<?php include("common/header.html"); ?>

<div class="lv-crumbs wrap">
    <p><b>您当前所处的位置：</b><a href="">首页</a> &gt; <a href="">上海站</a> &gt; 上海出发到马尔代夫</p>
</div><!-- // div .lv-crumbs -->

<?php include("search-box.html"); ?>

<div class="ui-content wrap">
	<?php include("search-aside.html"); ?>
    <div class="search-main search-line">
        
        <!-- 搜素筛选\\ -->
        <div class="search-filter">
            <div class="filter-info clearfix"><span class="result-info">共找到<i>100</i>条结果。</span>
                <dl id="your-choices" class="your-choices">
                    <dt>您已选择：</dt>
                    <dd><a href=""><h6>包含地区：</h6>上海<span class="icon-close"></span></a></dd>
                    <dd><a href=""><h6>包含地区：</h6>上海<span class="icon-close"></span></a></dd>
                    <dd><a href=""><h6>包含地区：</h6>上海<span class="icon-close"></span></a></dd>
                    <dd><a href=""><h6>包含地区：</h6>上海<span class="icon-close"></span></a></dd>
                    <dd><a href=""><h6>包含地区：</h6>上海<span class="icon-close"></span></a></dd>
                    <dd><a href=""><h6>包含地区：</h6>上海<span class="icon-close"></span></a></dd>
                    <dd class="tags-empty"><a href="">清空全部</a></dd>
                </dl>
            </div>
        </div><!-- //搜素筛选 -->
        
        <!-- 线路搜索列表\\ -->
		<div class="search-result-box search-line-list">
            <!-- 筛选排序\\  .filter-order filter-commont filter-commont-desc -->
            <div class="filter-order">
                <span class="default-order current-order">默认排序：驴妈妈推荐</span>
                <span class="comment-order">点评数<i class="ico-order"></i></span>
                <span class="price-order current-order order-desc">价格<i class="ico-order"></i></span>
                <span class="priceform">
                    <form id="J_FilterPrice">
                        <input type="text" value="最低价" class="input-price"> - <input type="text" value="最高价" class="input-price">
                        <input type="button" class="button" value="确定">
                    </form>
                </span>
                <label><input class="input-checkbox" type="checkbox">促销产品</label>
                <div class="result-search">
                <div class="pageoper">
                    <span>1/8</span>
                    <span class="page-prev">上一页<span class="page-arrow page-arrow-left"></span></span>
                    <span class="page-next">下一页<span class="page-arrow page-arrow-right"></span></span>
                    <a class="page-prev" href="">上一页<span class="page-arrow page-arrow-left"></span></a>
                    <a class="page-next" href="">下一页<span class="page-arrow page-arrow-right"></span></a>
                </div>
                <form class="form-result-search">
                <input type="text" class="input-text input-result-search" value="在结果中搜索"><input type="button" class="button" value="搜索"><i class="empty">清空</i>
                </form></div>
            </div><!-- //筛选排序 -->
            
            <div class="msg-warn"><span class="msg-ico02"></span>
                <h4>没有找到符合您条件的产品！查看<a href="">全部产品</a></h4>
            </div><!-- // div .msg-warn -->
            
        </div><!-- //线路搜索列表 -->
        
    </div><!-- // div .search-main -->
</div><!-- // div .ui-content -->

<?php include("common/footer.html"); ?>
</body>
</html>