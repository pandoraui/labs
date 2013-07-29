v4 版本
=======

筹划中的新版，是v3项目的下一版本

## 规定

### 文件结构如下：

    v4
    |  静态资源
    |- css      样式
    |- js       交互
    |- less     测试文件
    |- img      样式图片
    |- images   排版用图片，不上线
    |
    |  页面
    |- common/          页面公共部分提取（如头部，底部等）
    |- *.php            demo页面)
	|- README.md

### 资源说明：(pa为pandora项目实践前缀)
    
    pa-base.css     基础样式
    pa-lvmama.css   公共样式（头部、底部等）
    pa-modeuls.css  模块样式
    
    page-common.css 页面公共样式（几个页面公用的，但非全站使用的）
    
    pa-common.js    通用js
    lv-common.js    头部交互、登录状态等
    footer.js       输出公共底部的html
    pa-modules.js   模块交互js，后期使用加载器自动加载

### 页面结构都必须满足以下条件：

    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <link rel="dns-prefetch" href="//pic.lvmama.com">
    <link rel="dns-prefetch" href="//s1.lvjs.com.cn">
    <link rel="dns-prefetch" href="//s2.lvjs.com.cn">
    <link rel="dns-prefetch" href="//s3.lvjs.com.cn">
    <title>页面标题</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="image/x-icon" href="http://www.lvmama.com/favicon.ico">
    <meta name="keywords" content="页面关键字">
    <meta name="description" content="页面描述">
    <link rel="stylesheet" href="http://pic.lvmama.com/min/index.php?f=/styles/v3/pa-base.css,/styles/v3/lv-common.css,/styles/v3/pa-modules.css" >
    <link rel="stylesheet" href="propage.css">
    </head>
    <body>
        <div class="wrap">
            <div class="main">
                
            </div>
            <div class="aside">
                
            </div>
        </div>
    
    <!-- jQuery以及通用js -->
    <script src="http://pic.lvmama.com/min/index.php?f=/js/new_v/jquery-1.7.2.min.js,/js/v4/pa-common.js,/js/common/lv-common.js,/js/common/footer.js"></script>

    <!-- 页面项目js及插件 -->
    <script src="http://pic.lvmama.com/js/v4/propage.js"></script>

    <!-- 统计代码 -->
    <script src="http://pic.lvmama.com/js/common/losc.js"></script>
    </body>
    </html>

### 其他说明：

dns-prefetch 预解析
页面结构如上，注意排版顺序
body内结构对应html5标签的排版，实现良好的语义化布局

