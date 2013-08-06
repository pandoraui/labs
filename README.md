labs
====

pandora项目的实践，展示布局规划及模块应用

## 项目结构规划

    |- docs             // 说明文档，见pandora项目
    |- assets           // 成熟的模块组件等 
    |   |- css
    |   |   |- pa-base      // 对应基础base文件夹的css（reset.css && combo.css）
    |   |   |- pa-modules   // 对应模块modules文件夹的css（众多模块）
    |   |- js
    |   |- img
    |
    |- demos            // 示例代码
    |- .gitignore       // 屏蔽提交的文件
    |- README.md 
    |- v3               // v3版本预览
    |   |- css          // 包含有模块样式，规划相对混乱
    |   |- js
    |   |- img
    |   |- common
    |   |- *.php        // 使用php方便include公共文件
    |   |- README.md    
    |   |- help
    |
    |- v4               // 筹划中的新版测试，推荐结构规划
    |   |- css          // css/js仅仅包含页面项目的样式及交互
    |   |- js
    |   |- img
    |   |- common
    |   |- *.php        // 使用php方便include公共文件
    |   |- README.md    
    |   |- help


在 v3 基础上优化出 v4 版本，适应当前的驴妈妈网站系统，同时兼顾以后的规划，良好的项目布局、结构等。

## 此项目制定并展示如下细节：

- 适用于预览的项目结构（如v3目录）
- 页面代码结构（基本的排版布局结构）
- 特定的class类及固定的模块、代码用法。

请使用页面代码结构书写新的页面，有利于统一维护管理，并在此基础上构建新的代码模块。有关代码规范请参见pandora项目，此项目预览计划为pandora项目的实践实例。


