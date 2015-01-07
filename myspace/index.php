<?php include("../common/doctype.html"); ?>
<head>
<meta charset="utf-8">
<title>首页-我的驴妈妈</title>
<meta name="keywords" content="" />
<meta name="description" content="" />
<?php include("../common/lv-meta.html"); ?>
</head>
<body>
<div id="wrap" class="ui-container lvmama-bg">
<?php include("../common/header.html"); ?>
    <div class="lv-nav wrap"><p><a href="">首页</a> > <a class="current" href="">我的驴妈妈</a></p></div>
    <div class="wrap ui-content lv-bd">
		<?php include("../common/lv-nav.html"); ?>
		<div class="lv-content">
			<?php include("mod-account-info.html"); ?>
            
			<?php include("mod-product.html"); ?>
            
            <?php include("mod-guess-product.html"); ?>
			
			<?php include("../common/ad-right.html"); ?>
		</div>
	</div>
<div id="step1" class="guide_step">
  <div class="guide_box ie6png">
  	<b class="xh_close"></b>
    <div class="g_btn"><a class="prev"></a><a href="#step2" class="next"></a></div>
  </div>
</div>
<div id="step2" class="guide_step">
  <div class="guide_box ie6png">
  	<b class="xh_close"></b>
    <div class="g_btn"><a href="#step1" class="prev"></a><a href="#step3" class="next"></a></div>
  </div>
</div>
<div id="step3" class="guide_step">
  <div class="guide_box ie6png">
  	<b class="xh_close"></b>
    <div class="g_btn"><a href="#step2" class="prev"></a><a href="#step4" class="next"></a></div>
  </div>
</div>
<div id="step4" class="guide_step">
  <div class="guide_box ie6png">
  	<b class="xh_close"></b>
    <div class="g_btn"><a href="#step3" class="prev"></a><a href="#step5" class="next"></a></div>
  </div>
</div>
<div id="step5" class="guide_step">
  <div class="guide_box ie6png">
  	<b class="xh_close"></b>
    <div class="g_btn"><a href="#step4" class="prev"></a><a href="#step6" class="next"></a></div>
  </div>
</div>
<div id="step6" class="guide_step">
  <div class="guide_box ie6png">
  	<b class="xh_close"></b>
    <div class="g_btn"><a href="#step5" class="prev"></a><a class="xh_close" title="立即进入新版"></a></div>
  </div>
</div>
<?php include("../common/lv-footer.html"); ?>
