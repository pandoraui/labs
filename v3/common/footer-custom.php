
<?php include("footer.html"); ?>


<div id="xh_dialog" class="xh_dialog custon-form">
	<div class="xh_title">
		<span class="close">×</span>
		<h3>旅程信息</h3>
	</div>
	<div class="content">
		<form class="custom-start form-inline form-small">
			<p>　为方便我们为您提供服务，带有 <i class="req">*</i> 字段为必填字段。</p>
			<dl class="dl-hor">
				<dt>游玩类型：</dt>
				<dd>
					<label class="radio"><input class="input-radio" name="play_types" type="radio" value="business" checked="">公务考察</label>
					<label class="radio"><input class="input-radio" name="play_types" type="radio" value="meeting">商务会务</label>
					<label class="radio"><input class="input-radio" name="play_types" type="radio" value="visiting">观光型</label>
					<label class="radio"><input class="input-radio" name="play_types" type="radio" value="kuozhan">团队拓展</label>
					<label class="radio"><input class="input-radio" name="play_types" type="radio" value="wenquan">温泉游</label>
					<label class="radio"><input class="input-radio" name="play_types" type="radio" value="other">其他</label>
				</dd>
			</dl>
			<dl class="dl-hor">
				<dt><i class="req">*</i>出发地：</dt>
				<dd>
					<select name="starting" id="starting">
						<option value="shanghai" selected="selected">上海</option>
						<option value="beijing">北京</option>
						<option value="guangzhou">广州</option>
						<option value="chengdu">成都</option>
						<option value="hangzhou">杭州</option>
					</select>
				</dd>
			</dl>
			<dl class="dl-hor">
				<dt><i class="req">*</i>目的地：</dt>
				<dd>
					<input name="destination" id="destination" type="text">
				</dd>
			</dl>
			<dl class="dl-hor">
				<dt><i class="req">*</i>出发日期：</dt>
				<dd>
					<input name="start_time" id="start_time" type="text">
				</dd>
			</dl>
			<dl class="dl-hor">
				<dt><i class="req">*</i>游玩天数：</dt>
				<dd>
					<select name="play_days"> 
						<option value="1">1天</option>
						<option value="2" selected="selected">2天</option>
						<option value="3">3天</option>
						<option value="4">4天</option>
						<option value="5">5天</option>
						<option value="6">6天</option>
						<option value="7">7天</option>
						<option value="8">8天</option>
						<option value="9">9天</option>
					</select>
				</dd>
			</dl>
			<dl class="dl-hor">
				<dt><i class="req">*</i>出游人数：</dt>
				<dd><input class="input-min" name="people_number" id="people_number" type="text"> 人 
					<label class="inline">　其中包含老人 <input class="input-min" name="old_man" id="old_man" type="text" value="0"> 人</label>
					<label class="inline">　包含儿童 <input class="input-min" name="children" id="children" type="text" value="0"> 人</label>　　<span class="red hide">请输入人数</span>
				</dd>
			</dl>
			<dl class="dl-hor">
				<dt><i class="req">*</i>出游预算：</dt>
				<dd>
					<input class="input-min" type="text"> 元/人
				</dd>
			</dl>
			<dl class="dl-hor">
				<dt>学生团队：</dt>
				<dd>
					<label class="radio"><input class="input-radio" name="student" type="radio">是</label>
					<label class="radio"><input class="input-radio" name="student" type="radio">否</label>
				</dd>
			</dl>
			<dl class="dl-hor">
				<dt>交通方式：</dt>
				<dd>
					<label class="radio"><input class="input-radio" name="traffic" type="radio">旅游巴士</label>
					<label class="radio"><input class="input-radio" name="traffic" type="radio">火车</label>
					<label class="radio"><input class="input-radio" name="traffic" type="radio">轮船</label>
					<label class="radio"><input class="input-radio" name="traffic" type="radio">飞机</label>
					<label class="radio"><input class="input-radio" name="traffic" type="radio">无需安排</label>
				</dd>
			</dl>
			<dl class="dl-hor">
				<dt>住宿标准：</dt>
				<dd>
					<label class="radio"><input class="input-radio" name="hotel" type="radio" value="twinroom" checked="">普通双标间</label>
					<label class="radio"><input class="input-radio" name="hotel" type="radio" value="economic">经济型</label>
					<label class="radio"><input class="input-radio" name="hotel" type="radio" value="3star">三星级</label>
					<label class="radio"><input class="input-radio" name="hotel" type="radio" value="4star">四星级</label>
					<label class="radio"><input class="input-radio" name="hotel" type="radio" value="5star">五星级</label>
					<label class="radio"><input class="input-radio" name="hotel" type="radio" value="not">无需安排</label>
				</dd>
			</dl>
			<dl class="dl-hor">
				<dt>用餐标准：</dt>
				<dd>
					<label class="radio"><input class="input-radio" name="dinner" type="radio" value="20" checked="">20～30元/人/餐</label>
					<label class="radio"><input class="input-radio" name="dinner" type="radio" value="30">30～40元/人/餐</label>
					<label class="radio"><input class="input-radio" name="dinner" type="radio" value="40">40～50元/人/餐</label>
					<label class="radio"><input class="input-radio" name="dinner" type="radio" value="50">50元以上/人/餐</label>
					<label class="radio"><input class="input-radio" name="dinner" type="radio" value="not">无需安排</label>
				</dd>
			</dl>
			<dl class="dl-hor">
				<dt>导游要求：</dt>
				<dd>
					<label class="radio"><input class="input-radio" name="guide" type="radio" value="M" checked="">男导游</label>
					<label class="radio"><input class="input-radio" name="guide" type="radio" value="F">女导游</label>
					<label class="radio"><input class="input-radio" name="guide" type="radio" value="MF">男女均可</label>
				</dd>
			</dl>
			<dl class="dl-hor">
				<dt>语言要求：</dt>
				<dd>
					<label class="radio"><input class="input-radio" name="language" type="radio" value="cn" checked="">中文导游</label>
					<label class="radio"><input class="input-radio" name="language" type="radio" value="ce">中文英导游</label>
				</dd>
			</dl>
			<dl class="dl-hor">
				<dt>购物要求：</dt>
				<dd>
					<label class="radio"><input class="input-radio" name="buy_space" type="radio" value="not">不需要安排</label>
					<label class="radio"><input class="input-radio" name="buy_space" type="radio" value="bit" checked="">少量安排</label>
				</dd>
			</dl>
			<dl class="dl-hor">
				<dt>会议安排：</dt>
				<dd>
					<label class="radio"><input class="input-radio" name="meeting" type="radio" value="need">需要</label>
					<label class="radio"><input class="input-radio" name="meeting" type="radio" value="not" checked="">不需要</label>
				</dd>
			</dl>
			<dl class="dl-hor">
				<dt>备注：</dt>
				<dd>
					<textarea name="remark"></textarea>
				</dd>
			</dl>
			<h3 class="pepe_messg">联系人信息</h3>
			<dl class="dl-hor">
				<dt><i class="req">*</i>联系人：</dt>
				<dd>
					<input name="contact" id="contact" type="text">　　
					<label class="radio"><input class="input-radio" name="gender" type="radio" value="M" checked="">男</label> 
					<label class="radio"><input class="input-radio" name="gender" type="radio" value="F">女</label>
				</dd>
			</dl>
			<dl class="dl-hor">
				<dt><i class="req">*</i>联系人电话：</dt>
				<dd>
					<input name="mobile" id="mobile" type="text">
				</dd>
			</dl>
			<dl class="dl-hor">
				<dt>常用邮箱：</dt>
				<dd>
					<input name="email" id="email" type="text">
				</dd>
			</dl>
			<dl class="dl-hor">
				<dt>回复时间：</dt>
				<dd>
					<label class="radio"><input class="input-radio" name="reply_time" type="radio" value="anytime" checked="">随时</label>
					<label class="radio"><input class="input-radio" name="reply_time" type="radio" value="worktime">工作时间</label>
					<label class="radio"><input class="input-radio" name="reply_time" type="radio" value="nonworktime">非工作时间</label>
				</dd>
			</dl>
			<dl class="dl-hor">
				<dt>优先回复：</dt>
				<dd>
					<label class="radio"><input class="input-radio" name="prior" type="radio" value="email">邮箱</label>
					<label class="radio"><input class="input-radio" name="prior" type="radio" value="mobile" checked="">电话</label>
				</dd>
			</dl>
			<dl class="dl-hor">
				<dt>验证码：</dt>
				<dd>
					<input class="input-min" name="verification" id="verification" type="text">
					<img src="http://www.lvmama.com/others/big_client/imgcode.php" id="verImg" alt="看不清楚，换一张" align="absmiddle" style="cursor: pointer;" />
				</dd>
			</dl>
			<p class="tc"><button id="custom_sumbit" class="btn btn-pink" type="button">&nbsp;&nbsp;提&nbsp;交&nbsp;&nbsp;</button></p>
		</form>
    </div>
</div>


<script src="http://pic.lvmama.com/min/index.php?f=/js/new_v/jquery-1.7.2.min.js,/js/ui/lvmamaUI/lvmamaUI.js,/js/new_v/top/header-air_new.js,/js/v3/plugins.js,/js/v3/app.js"></script>
<!--
<script src="http://pic.lvmama.com/min/index.php?f=/js/new_v/jquery-1.7.2.min.js,/js/ui/lvmamaUI/lvmamaUI.js,/js/new_v/top/header-air_new.js"></script>
<script src="js/plugins.js"></script>
<script src="js/app.js"></script>
-->
<script>



$(function(){
    $("body").append('<iframe class="xh_overlay"></iframe><div class="xh_overlay"></div>');
	// $('#goto_custom').ui("login");

    function xh_dialog(){
		var top=$(document).scrollTop();
		$("div.xh_dialog").css({"top":top+0+"px","width":"800px","margin-left":"-400px"}).show();
		$("div.xh_overlay").show().height($(document).height());
		if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
			$("iframe.xh_overlay").show().height($(document).height());
		}
	}
	
	//刷新验证码
	function newgdcode(obj,url) {
		//alert(1)
		obj.src = url+ '?nowtime=' + new Date().getTime();
		//后面传递一个随机参数，否则在IE7和火狐下，不刷新图片
	}
	
	$("#verImg").click(function(){
		newgdcode(this,this.src);
	})
	
	$(".xh_dialog .close").click(function(){
		$(".xh_dialog,.xh_overlay").hide();
	})
	$("#goto_custom").click(function(){
		xh_dialog();
	})
	$("body").ui("calendar",{
	   input : "#start_time",
	   parm:{dateFmt:'yyyy-MM-dd'}
	})

	$("#mobile").ui("validate",{
		active : "请输入电话号码",
		empty : "不允许为空",
		phone : "电话号码格式不正确"
	});
	
	$("#destination").ui("validate",{
		active : "请填写您的目的地",
		empty : "请认真填写您的目的地，以便我们为您提供服务"
	});
	$("#contact").ui("validate",{
		active : "请填写联系人",
		empty : "请认真填写联系人"
	});
	
	//出发日期
	if (trim($("#start_time").val()) == "") {
		$("#start_timeError").show();
		$("#start_time").focus();
		return;
	}

})

</script>
<script src="http://pic.lvmama.com/js/common/losc.js"></script>