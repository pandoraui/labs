<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>住宿</title>
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
                <h2 class="htit">上海住宿</h2>
            </div>
            <div class="xcontent">
                <div class="xtabs lytabs clearfix J-tabs">
                    <ul class="fl ul-hor clearfix">
                        <li class="selected"><a href="javascript:;">上海住宿攻略<i class="arr"></i></a></li>
                        <li><a href="javascript:;">上海住宿推荐<i class="arr"></i></a></li>
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
                        
                        <h4 class="xtit"><a href="#" class="view_more">搜索更多上海酒店</a>上海超值酒店</h4>
                        <?php include("stay-list.php"); ?>
                        
                    </div><!--//.tabcon-->
                </div><!--//.J-switch-->
            </div>
        </div><!--//.xbox-->
    </div><!--//.main-->
</div><!--//.wrap -->

<?php include("common/footer.php"); ?>

</body>
</html>
