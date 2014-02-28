<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>首页</title>
<meta name="keywords" content="页面关键字">
<meta name="description" content="页面描述">
<?php include("common/meta.php"); ?>
</head>
<body>
<?php include("common/header.php"); ?>

<!--.wrap 1\\-->
<div class="wrap">
    <?php include("search.html"); ?>
    
    <div class="aside">
        <?php include("quick-menu.php"); ?>
    </div><!--//.aside-->
    
    <?php include("slidebox.html"); ?>
    
    <div class="hr_c"></div>
    
    <div class="aside">
        <?php include("aside-index.html"); ?>
    </div><!--//.aside-->
    
    <div class="main">
        <div class="xbox guide-rec">
            <div class="xtitle">
                <h1 class="htit">官方攻略推荐</h1>
                <a rel="nofollow" class="xfollow" href="#"><i class="icon icon-sina"></i>加关注</a>
                <a rel="nofollow" class="view_more" href="#">更多&gt;&gt;</a>
            </div>
            <div class="xcontent">
                <ul class="ul-hor clearfix">
                    <li><a rel="nofollow" href="#"><img src="//placehold.it/108x150" width="108" height="150" alt="哈尔滨旅游攻略" /><p>哈尔滨</p></a><span>2013-12-31</span></li>
                    <li><a rel="nofollow" href="#"><img src="//placehold.it/108x150" width="108" height="150" alt="哈尔滨旅游攻略" /><p>哈尔滨</p></a><span>2013-12-31</span></li>
                    <li><a rel="nofollow" href="#"><img src="//placehold.it/108x150" width="108" height="150" alt="哈尔滨旅游攻略" /><p>哈尔滨</p></a><span>2013-12-31</span></li>
                    <li><a rel="nofollow" href="#"><img src="//placehold.it/108x150" width="108" height="150" alt="哈尔滨旅游攻略" /><p>哈尔滨</p></a><span>2013-12-31</span></li>
                    <li><a rel="nofollow" href="#"><img src="//placehold.it/108x150" width="108" height="150" alt="哈尔滨旅游攻略" /><p>哈尔滨</p></a><span>2013-12-31</span></li>
                </ul>
            </div>
        </div><!--//.xbox-->
        
        <div class="xbox travel-rec">
            <div class="xtitle">
                <h3 class="htit">游记推荐</h3>
            </div>
            <div class="xcontent">
                <div class="xtabs lytabs clearfix J-tabs">
                    <ul class="fl ul-hor clearfix">
                        <li class="selected"><a href="javascript:;">旅程<i class="arr"></i></a></li>
                        <li><a href="javascript:;">攻略游记<i class="arr"></i></a></li>
                    </ul>
                </div>
                <div class="tabs-switch J-switch">
                    <div class="tabcon selected">
                        <a rel="nofollow" class="xlink" href="#"><i class="icon icon-write"></i>创建旅程</a>
                        <p class="intro">
                            <img src="img/intro8-1.png" alt="开启一次旅程，分享一段故事，将每一个拍摄点串联成故事的情节，用相册来展示故事的精彩，最后再用问在来说说你的旅途心情和经验..." />
                        </p>
                        
                        <div class="solid_line">间隔线</div>
                        
                        <?php include("travel-list.php"); ?>
                        
                        <?php include("paging.html"); ?>
                        
                    </div><!--//.tabcon-->
                    <div class="tabcon">
                        <a href="#" class="xlink"><i class="icon icon-write"></i>创建攻略</a>
                        <p class="intro">
                            <img src="img/intro8-2.png" alt="在这里，你可以发表任何你想分享的内容，可以是一小段心情文字，可以是几张即兴图片，也可以是图文皆精美的游记文章等等...方便快捷，随心所欲..." />
                        </p>
                        
                        <div class="solid_line">间隔线</div>
                        
                        <?php include("guide-list.php"); ?>
                        
                        <?php include("paging.html"); ?>
                        
                    </div><!--//.tabcon-->
                </div><!--//.J-switch-->
            </div>
        </div><!--//.xbox-->
        
        
    </div><!--//.main-->
</div><!--//.wrap -->

<?php include("common/footer.php"); ?>

</body>
</html>
