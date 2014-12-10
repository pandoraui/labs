(function (global, $) {
    "use strict"  // 严格模式

    function Factory(options) {
        return new Map(options);
    }

    function Map(options) {
        this.container = options.container; // 地图容器id
        this.longitude = options.longitude; // 坐标 经度
        this.latitude = options.latitude; // 坐标 纬度
        this.num = options.num; // 第几条数据
        this.text = options.text; // 酒店名称

        // 初始化
        this._init(options);
    }

    Map.prototype = {
        constructor: Map,

        /**
        * 初始化地图
        */
        _init: function (option) {
            this.point = new BMap.Point(option.longitude, option.latitude); // 创建一个地理位置坐标

            // 创建map实例
            this.mapSource = new BMap.Map(option.container, {
                enableMapClick: false
            });
            this.mapSource.centerAndZoom(this.point, 15); // 初始化地图，设置中心点坐标和地图级别
            this.mapSource.addControl(new BMap.NavigationControl({
                anchor: BMAP_ANCHOR_TOP_LEFT,
                type: BMAP_NAVIGATION_CONTROL_ZOOM
            }));  //左下角，仅包含缩放按钮
            this.mapSource.enableScrollWheelZoom(); //启用滚轮放大缩小

            this.createCover(option);
            this.bindEvent();
        },

        // 创建自定义覆盖物
        createCover: function (option) {
            var myCompOverlay = null,
                that = this;

            // 自定义覆盖物
            function ComplexCustomOverlay(point, num, text) {
                this._point = point;
                this._num = num;
                this._text = text;
            }

            ComplexCustomOverlay.prototype = new BMap.Overlay();

            ComplexCustomOverlay.prototype.initialize = function (map) {
                var $wrap = this._$wrap = $('<div class="map-mark"><span class="map-num">' + this._num + '</span><div class="map-mark-inner">' + this._text + '</div></div>');

                this._map = map;
                that.mapSource.getPanes().labelPane.appendChild($wrap[0]);

                return $wrap[0];
            };

            ComplexCustomOverlay.prototype.draw = function () {
                var map = this._map,
                    pixel = map.pointToOverlayPixel(this._point);

                this._$wrap.css({
                    left: pixel.x - 13,
                    top: pixel.y - 32
                });
            }

            // 创建一个自定义的覆盖物
            myCompOverlay = new ComplexCustomOverlay(that.point, option.num, option.text);
            that.mapSource.addOverlay(myCompOverlay);

        },

        /**
        * 绑定事件
        */
        bindEvent: function () {

        }
    };

    global.mapMark = Factory;
}(this, jQuery));

mapMark({
    container: "container",
    longitude: 116.407845,
    latitude: 39.914101,
    num: 1,
    text: "哈哈哈"
});