<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>签证</title>
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
        <div class="xbox">
            <div class="xtitle">
                <h2 class="htit">签证产品</h2>
            </div>
            <div class="xcontent">
                <!--列表-->
                <div class="travel-list">
                    <dl class="dl-imgtext clearfix">
                        <dt><a rel="nofollow" href="#"><img src="//placehold.it/180x120" width="180" height="120" alt="某某景点" /></a></dt>
                        <dd class="fr">
                            <dfn>&yen;<i>449</i>起</dfn>
                            <a rel="nofollow" href="#" class="btn cbtn-orange">去看看</a>
                        </dd>
                        <dd>
                            <b><a class="tit" href="#">城隍庙旅游区</a></b>
                            <p class="gray">上海出发 七天</p>
                            <p><span class="gray">出发时间：</span>12/04,12/05,12/06,12/07,12/09,12/09,12/10,12/11</p>
                        </dd>
                    </dl>
                </div><!--//.travel-list-->
            </div>
            <div class="xcontent xtypo">
                <!--富文本区域-->
                <?php include("xtypo.html"); ?>
            </div><!--//.xtypo-->
            
        </div><!--//.xbox-->
    </div><!--//.main-->
</div><!--//.wrap -->

<?php include("common/footer.php"); ?>

</body>
</html>
