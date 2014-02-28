<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>景点</title>
<meta name="keywords" content="页面关键字">
<meta name="description" content="页面描述">
<?php include("common/meta.php"); ?>
</head>
<body>
<?php include("common/header.php"); ?>

<!--.wrap 1\\-->
<div class="wrap">

<?php include("search.html"); ?>

<?php include("crumbs.html"); ?>

<?php include("intro.html"); ?>

    <div class="aside">
        <?php include("side-nav.html"); ?>
        
        <div class="hr_c"></div>
        
        <?php include("aside.html"); ?>
    </div><!--//.aside-->
    
    <div class="main">
        <div class="xbox hot-sec">
            <div class="xtitle">
                <h3 class="htit">上海必游景点</h3>
            </div>
            <div class="xcontent">
                <ul class="ul-hor J_sildedown clearfix">
                    <li class="xt1"><a rel="nofollow" href="#" class="text-cover"><img src="//placehold.it/340x230" width="340" height="230" alt="某地某景点" /><div class="c-text"><span class="tit"><i class="num">1</i>上海科技馆</span><p>上海科技馆很好玩，有许多精彩的好玩的项目</p></div></a></li>
                    <li><a rel="nofollow" href="#" class="text-cover"><img src="//placehold.it/150x110" width="150" height="110" alt="某地某景点" /><div class="c-text"><span class="tit"><i class="num">2</i>上海科技馆</span><p>上海科技馆很好玩，有许多精彩的好玩的项目</p></div></a></li>
                    <li><a rel="nofollow" href="#" class="text-cover"><img src="//placehold.it/150x110" width="150" height="110" alt="某地某景点" /><div class="c-text"><span class="tit"><i class="num">3</i>上海科技馆</span><p>上海科技馆很好玩，有许多精彩的好玩的项目</p></div></a></li>
                    <li><a rel="nofollow" href="#" class="text-cover"><img src="//placehold.it/150x110" width="150" height="110" alt="某地某景点" /><div class="c-text"><span class="tit"><i class="num">4</i>上海科技馆</span><p>上海科技馆很好玩，有许多精彩的好玩的项目上海科技馆很好玩，有许多精彩的好玩的项目</p></div></a></li>
                    <li><a rel="nofollow" href="#" class="text-cover"><img src="//placehold.it/150x110" width="150" height="110" alt="某地某景点" /><div class="c-text"><span class="tit"><i class="num">5</i>上海科技馆</span><p>上海科技馆很好玩，有许多精彩的好玩的项目</p></div></a></li>
                </ul>
            </div>
        </div><!--//.xbox-->
        <div class="xbox">
            <div class="xtitle">
                <h3 class="htit">上海热门景点</h3>
                <a rel="nofollow" class="view_more" href="#">更多&gt;&gt;</a>
            </div>
            <div class="xcontent">
                <?php include("sec-list.php"); ?>
            </div>
        </div><!--//.xbox-->
    </div><!--//.main-->
</div><!--//.wrap -->

<?php include("common/footer.php"); ?>

</body>
</html>
