<!-- 个人资料>> -->
<div id="tabs" class="ui-box mod-edit userinfo-edit">
	<div class="ui-tab-title"><h3>个人资料</h3>
    <ul class="tab-nav hor"><li><a href="#tabs-1">个人资料</a></li><li><a href="#tabs-2">修改头像</a></li></ul></div>
	<div id="tabs-1" class="ui-tab-box">
    	<!-- 个人信息>> -->
    	<div class="edit-box clearfix userinfo-edit-box">
        	<div class="edit-inbox">
            <form>
            <p><label><span>*</span>用户名：</label><span class="u-info f16">LV13601603229</span>　<a href="">修改</a>　<i class="lv-cc">(用户名只能修改一次)</i></p>
            <p><label><span>*</span>Email：</label>未绑定　<a href="">立即绑定</a></p>
            <p><label><span>*</span>手机号码：</label>未绑定　<a href="">立即绑定</a>　<span class="tips-ico03 tips-show"></span></p>
            <!-- <<未绑定 -->
            <p><label><span>*</span>Email：</label><input type="text" name="" value="aazine@163.com" class="input-text input-email disabled" disabled/><a href="">立即验证</a>　<i class="lv-cc">未验证</i></p>
            <p><label><span>*</span>手机号码：</label><input type="text" name="" value="138 1713 1714" class="input-text input-phone disabled" disabled/><a href="">立即验证</a>　<i class="lv-cc">未验证</i></p>
            <!-- <<未验证 -->
            <p><label><span>*</span>Email：</label><input type="text" name="" value="aazine@163.com" class="input-text input-email disabled" disabled/><a href="">修改</a>　<i class="lv-cc">已验证</i></p>
            <p><label><span>*</span>手机号码：</label><input type="text" name="" value="138 1713 1714" class="input-text input-phone disabled" disabled/><a href="">修改</a>　<i class="lv-cc">已验证</i></p>
            <!-- <<修改 -->
            <p><label>真实姓名：</label><input type="text" name="" value="" class="input-text input-uname"/></p>
            <p class="clearfix"><label>性别：</label>
            <label class="sex"><input name="lv-sex" type="radio" value="0">男</label>
            <label class="sex"><input name="lv-sex" type="radio" value="1">女</label></p>
            <p><label>生日：</label><select class="lv-select s-wa">
            <option value="">年</option>
            <option value=""></option>
            <option value=""></option>
            </select><select class="lv-select s-wc">
            <option value="">月</option>
            <option value=""></option>
            <option value=""></option>
            </select><select class="lv-select s-wc">
            <option value="">日</option>
            <option value=""></option>
            <option value=""></option>
            </select></p>
            <p><label>所在地：</label><select class="lv-select s-wa">
            <option value="">上海市</option>
            <option value=""></option>
            <option value=""></option>
            </select><select class="lv-select s-wb">
            <option value="">区</option>
            <option value=""></option>
            <option value=""></option>
            </select></p>
            <p><a class="ui-btn ui-button"><i>&nbsp;保 存&nbsp;</i></a>　　　<a href="" class="edit-cancel">取消</a></p>
            </form></div>
        </div>
        <!-- <<个人信息 -->
	</div>
    <div id="tabs-2" class="ui-tab-box photo-edit">
    	<!-- 修改头像>> -->
        
		
        <?php include("lv-upload.php"); ?>
        

        
        
	    <?php
	    //Only display the javacript if an image has been uploaded
	    if(strlen($large_photo_exists)>0){
	    	$current_large_image_width = getWidth($large_image_location);
	    	$current_large_image_height = getHeight($large_image_location);?>
	    <script type="text/javascript">
	    function preview(img, selection) { 
	    	var scaleX = <?php echo $thumb_width;?> / selection.width; 
	    	var scaleY = <?php echo $thumb_height;?> / selection.height; 
	    	
	    	$('#thumbnail + div > img').css({ 
	    		width: Math.round(scaleX * <?php echo $current_large_image_width;?>) + 'px', 
	    		height: Math.round(scaleY * <?php echo $current_large_image_height;?>) + 'px',
	    		marginLeft: '-' + Math.round(scaleX * selection.x1) + 'px', 
	    		marginTop: '-' + Math.round(scaleY * selection.y1) + 'px' 
	    	});
	    	$('#x1').val(selection.x1);
	    	$('#y1').val(selection.y1);
	    	$('#x2').val(selection.x2);
	    	$('#y2').val(selection.y2);
	    	$('#w').val(selection.width);
	    	$('#h').val(selection.height);
	    } 
	    
	    $(document).ready(function () { 
	    	$('#save_thumb').click(function() {
	    		var x1 = $('#x1').val();
	    		var y1 = $('#y1').val();
	    		var x2 = $('#x2').val();
	    		var y2 = $('#y2').val();
	    		var w = $('#w').val();
	    		var h = $('#h').val();
	    		if(x1=="" || y1=="" || x2=="" || y2=="" || w=="" || h==""){
	    			alert("You must make a selection first");
	    			return false;
	    		}else{
	    			return true;
	    		}
	    	});
	    }); 
	    
	    $(window).load(function () { 
	    	$('#thumbnail').imgAreaSelect({ aspectRatio: '1:<?php echo $thumb_height/$thumb_width;?>', onSelectChange: preview }); 
	    });
	    
	    </script>
	    <?php }?>
    	
        
        
        
        
		<?php
		//Display error message if there are any
		if(strlen($error)>0){
			echo "<ul><li><strong>Error!</strong></li><li>".$error."</li></ul>";
		}
		if(strlen($large_photo_exists)>0 && strlen($thumb_photo_exists)>0){
			echo $large_photo_exists."&nbsp;".$thumb_photo_exists;
			echo "<p><a href=\"".$_SERVER["PHP_SELF"]."?a=delete&t=".$_SESSION['random_key'].$_SESSION['user_file_ext']."\">Delete images</a></p>";
			echo "<p><a href=\"".$_SERVER["PHP_SELF"]."\">Upload another</a></p>";
			//Clear the time stamp session and user file extension
			$_SESSION['random_key']= "";
			$_SESSION['user_file_ext']= "";
		}else{
				if(strlen($large_photo_exists)>0){?>
                <div class="edit-box clearfix">
		        	<div class="edit-inbox">
		            
		                <div class="view-photo">
		                <p>仅支持JPG、GIF、PNG图片文件，且文件小于500KB</p>
		                <div class="show-photo"><img id="thumbnail" alt="Create Thumbnail" src="<?php echo $upload_path.$large_image_name.$_SESSION['user_file_ext'];?>" /></div>
		                </div>
		                <div class="view-photo view-photo120">
		                <p>您上传的头像会自动生成两种尺寸，<br>请注意小尺寸的头像是否清晰</p>
		                <div id="thumbnail_120" class="show-photo" style="border:position:relative; overflow:hidden; width:<?php echo $thumb_width;?>px; height:<?php echo $thumb_height;?>px;"><img src="<?php echo $upload_path.$large_image_name.$_SESSION['user_file_ext'];?>" style="position: relative;" alt="Thumbnail Preview" /></div>
		                <p>大尺寸头像，120×120像素</p>
		                </div>
		                <div class="view-photo view-photo60">
		                <div id="thumbnail_60" class="show-photo"></div>
		                <p>小尺寸头像<br>60×60像素</p>
		                </div>
		                <div class="hr_b"></div>
		                <p><a class="ui-btn ui-button"><i>&nbsp;保 存&nbsp;</i></a>　　　<a href="" class="edit-cancel">取消</a></p>
		            </div>
	        	</div>
				<form name="thumbnail" action="<?php echo $_SERVER["PHP_SELF"];?>" method="post">
					<input type="hidden" name="x1" value="" id="x1" />
					<input type="hidden" name="y1" value="" id="y1" />
					<input type="hidden" name="x2" value="" id="x2" />
					<input type="hidden" name="y2" value="" id="y2" />
					<input type="hidden" name="w" value="" id="w" />
					<input type="hidden" name="h" value="" id="h" />
					<input type="submit" name="upload_thumbnail" value="Save Thumbnail" id="save_thumb" />
				</form>
		
	<?php 	} ?>
    <form name="photo" enctype="multipart/form-data" action="<?php echo $_SERVER["PHP_SELF"];?>" method="post">
                <p class="up-photo"><span class="ui-btn btn-up-photo"></span>
                <input type="file" name="image" size="30" class="file" />
                <!--<input type="file" exts="jpg|bmp" id="selectFile" name="file">--><input type="submit" name="upload" value="Upload"></p>
                </form>
	<?php } ?>
        <!-- <<修改头像 -->
	</div>
</div>
<!-- <<个人资料 -->
