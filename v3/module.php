<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>页面组件</title>
<meta name="keywords" content=""/>
<meta name="description" content="">
<?php include("common/meta.php"); ?>
<style>
h1,h2,h3{margin:0.8em 0 0.6em;}
h1{font-size:30px;}
h2{font-size:24px;}
h3{font-size:20px;}

.module{margin:10px 0;}
h3 small{font-size: 12px;}



</style>
</head>
<body>
<?php include("common/header.html"); ?>

<div class="wrap">
    <h1>tags 标签集合 <small>2013-06-21更新</small></h1>
    
    <p>使用前检查，tags标签所依赖样式表 http://pic.lvmama.com/styles/new_v/ob_common/ui-components.css</p>
    <pre>&lt;link rel="stylesheet" href="http://pic.lvmama.com/styles/new_v/ob_common/ui-components.css"&gt;</pre>
    
    <div class="module">
        <h3>纯色标签 tags10*</h3>
        <p>&lt;span class="tags101"&gt;文字&lt;/span&gt;
            <span class="tags101">多人多惠</span>
            <span class="tags101">促销</span>
        </p>
        <p>&lt;span class="tags102"&gt;文字&lt;/span&gt;
            <span class="tags102">元旦</span>
            <span class="tags102">国庆</span>
            <span class="tags102">端午</span>
            <span class="tags102">微旅游日</span>
            <span class="tags102">中秋</span>
            <span class="tags102">清明</span>
            <span class="tags102">五一</span>
        </p>
        <p>&lt;span class="tags103"&gt;文字&lt;/span&gt;
            <span class="tags103">热卖</span><br>
        </p>
        <p>&lt;span class="tags104"&gt;文字&lt;/span&gt;
            <span class="tags104">新品</span><br>
        </p>
        <p>&lt;span class="tags105"&gt;文字&lt;/span&gt;
            <span class="tags105">精华</span><br>
        </p>
        
        <h3>促销标签 tags20*</h3>
        <p>
            &lt;span class="tags201"&gt;促销&lt;/span&gt; 
            <span class="tags201">信用卡促销</span>
            <span class="tags201">多人促销</span>
            <span class="tags201">早订惠</span>
            <span class="tags201">招 行</span>
        </p>
        
        
        <h3>分类标签 tags30*</h3>
        <p>
            &lt;span class="tags301"&gt;超级自由行&lt;/span&gt; 
            <span class="tags301">超级自由行</span>
        </p>
        <p>
            &lt;span class="tags302"&gt;开心驴行&lt;/span&gt; 
            <span class="tags302">开心驴行</span>
        </p>
        
        
        <h3>放到文字中看看效果：标题中 <span class="tags101">多人多惠</span><span class="tagsback"><em>折扣</em><i>7.9折</i></span><span class="tags301">超级自由行</span></h3>
        
        <p>段落中：驴妈妈的<span class="tags101">多人多惠</span>、<span class="tags301">超级自由行</span>产品一直在<span class="tags103">热卖</span>，并且<span class="tags102">节假日</span>还时常发布<span class="tags104">新品</span>并伴随<span class="tags101">促销</span>活动<span class="tags302">开心驴行</span>，转发<span class="tags102">微博</span>还有好礼不断哦！</p>
        
        
        <h3>返现类标签 <small>橙色</small></h3>
        <p>
            <span class="tagsback" tip-title="提示标题" tip-content="提示内容"><em>折扣</em><i>7.9折</i></span>
                
            <span class="tagsback" tip-title="提示标题" tip-content="提示内容"><em>销量</em><i>1208</i></span>
            
            <span class="tagsback" tip-title="提示标题" tip-content="提示内容"><em>返</em><i>5元</i></span>
            
            <span class="tagsback" tip-title="提示标题" tip-content="提示内容。这个内容很多，宽度会自适应，但有个最大的宽的于是会自动折行"><em>折扣返现</em><i>20元</i></span>
            <pre>&lt;span class="tagsback" tip-title="提示标题" tip-content="提示内容"&gt;&lt;em&gt;折扣&lt;/em&gt;&lt;i&gt;7.9折&lt;/i&gt;&lt;/span&gt;</pre>
        </p>
        
        <p>
            <span class="tagsback tagblue" tip-title="提示标题" tip-content="提示内容"><em>送</em><i>积分100分</i></span>
            <pre>&lt;span class="tagsback tagblue" tip-title="提示标题" tip-content="提示内容"&gt;&lt;em&gt;送&lt;/em&gt;&lt;i&gt;积分100分&lt;/i&gt;&lt;/span&gt;</pre>
        </p>
       <h4>激活tooltip提醒：</h4>
       <p>tooltip依赖jquery和lvmamaUI：http://pic.lvmama.com/min/index.php?f=/js/new_v/jquery-1.7.2.min.js,/js/ui/lvmamaUI/lvmamaUI.js</p>
<pre>
$('span[class^="tags"]').ui('lvtip'); 
</pre>
       <p>默认提醒下方居中显示，详情参看，<a href="/pandora/docs/modules/tooltip.html">tooltip插件</a></p>

        
    </div>
    
    <h1>其他组件 <small></small></h1>
    <div class="module"></div>
    
    
    
</div>

<div class="dock" id="pDock">
    <div class="pDockOuter">
        <div class="pDockStart"></div>
    </div>
    <div class="dvDockList">
        
    </div>
    <div class="dvFullList"></div>
</div>
<script src="http://pic.lvmama.com/min/index.php?f=/js/new_v/jquery-1.7.2.min.js,/js/ui/lvmamaUI/lvmamaUI.js,/js/new_v/top/header-air_new.js"></script>
<script>
$(function(){
    $('span[class^="tags"]').ui('lvtip');
})
</script>

</body>
</html>
