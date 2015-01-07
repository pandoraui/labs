<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>行程</title>
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
                <h2 class="htit">上海行程</h2>
            </div>
            <div class="xcontent">
                <div class="xtabs lytabs clearfix J-tabs">
                    <ul class="fl ul-hor clearfix">
                        <li class="selected"><a href="javascript:;">上海行程攻略<i class="arr"></i></a></li>
                        <li><a href="javascript:;">上海行程推荐<i class="arr"></i></a></li>
                    </ul>
                </div>
                <div class="tabs-switch J-switch">
                    <div class="tabcon selected">
                        <div class="hr_c"></div>
                        <div class="xtypo">
                            <!--富文本区域-->
                            <?php include("xtypo.html"); ?>
                        </div><!--//.xtypo-->
                    </div><!--//.tabcon-->
                    <div class="tabcon">
                        <h4 class="xtit">自由行产品推荐[景点+酒店]</h4>
                        <?php include("travel-list2.php"); ?>
                        
                        <h4 class="xtit">跟团游产品推荐</h4>
                        <?php include("travel-list2.php"); ?>
                    </div><!--//.tabcon-->
                </div><!--//.J-switch-->
            </div>
        </div><!--//.xbox-->
    </div><!--//.main-->
</div><!--//.wrap -->

<?php include("common/footer.php"); ?>

</body>
</html>
