//商家的类
var merchant=function(){
	//商家审核函数
	var checkHandler=function(){
		$('.btn-primary').on('click',function(){
			$('#checkform').ajaxSubmit({
				dataType:"json",
				success:function(json){
					if(json.type=="success"){
						Beyond.alert("success","操作成功");
						setTimeout(function(){
							location.reload(true);
						},800)
					}else{
						Beyond.alert("error","操作失败");
					}
				}
			})
		});
		$('#checktypeselect').on('change',function(){
			var str=$(this).val();
			if(str != "pass"){
				$("#adminName").attr("disabled",true);
			}else{
				$("#adminName").removeAttr("disabled");
			}
			
			if(str=="fail"){
				$("#checkmarker").removeAttr("disabled");
			}else{
				$("#checkmarker").attr("disabled",true);
			}
		})
	}
			
		
	//禁用或启用的函数
	var disabledHandler=function(){
		$('.red').on('click',function(){
			var id=$(this).data('id');
			var disabled=false;
			if($(this).children().hasClass('fa-stop')){
				disabled=true;
			}
			var str=$("#checktypeselect").val();
			if(str == "pass"){
				if($("#adminName").val() == "" || $("#adminName").val() == null || $("#adminName").val() == undefine){
					$("#file").attr("disabled",true);
				}else{
					$("#file").removeAttr("disabled");
				}
			}
			var parem= new Object();
			parem.merchantId=id;
			parem.isDisabled=disabled;
			$.ajax({
				type:"post",
				url:"set.jhtml",
				data:parem,
				dataType:"json",
				success:function(json){
					if(json.type=='success'){
						Beyond.alert('success','设置成功');
						setTimeout(function(){
							location.reload(true);
						},800);
					}else{
						Beyond.alert("error","设置失败");
					}
				}
			})
		})
	}

	//编辑商户的函数
	var editHandler=function(){
		$('.portlet-title').on('click','.btn-primary',function(){
			$('#portlet_tab1').find('input').removeAttr('disabled');
			$('#portlet_tab1').find('select').removeAttr('disabled');
			$(this).removeClass('btn-primary').addClass('btn-success');
			$(this).children('i').attr('class','glyphicon glyphicon-save');
			$(this).html('<i class="glyphicon glyphicon-save"></i>保存');
		});
		$('.portlet-title').on('click','.btn-success',function(){
			$('#updateform').ajaxSubmit({
				dataType:"json",
				success:function(json){
					if(json.type=="success"){
						Beyond.alert("success",json.content);
						setTimeout(function(){
							location.reload(true);
						},800)
					}else{
						Beyond.alert('error',json.content);
					}
				}
			})
		})
	}

	return{
		init:function(){
			//初始化商家审核函数
			checkHandler();
			//初始化禁用或启用函数
			disabledHandler();
			//初始化编辑的函数
			editHandler();
		}
	}
}();
merchant.init();
