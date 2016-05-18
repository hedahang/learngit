//热门商家类
var HightMerchant=function(){
	//提交表单的函数
	var submitHandler=function(){
		$('form').bootstrapValidator().on("success.form.bv",function(e){
			e.preventDefault();
			$('form').ajaxSubmit({
				dataType:"json",
				success:function(json){
					console.log(json);
					if(json.type=='success'){
						Beyond.alert("success","添加成功");
						setTimeout(function(){
							location.href="list.jhtml";
						},800);
					}else{
						Beyond.alert("error","添加失败")
					}
				}
			})
		})
	}

	//提交函数
	var submitAction=function(){
		$('.btn-success').on("click",function(){
			$('form').submit();
		})
	}
	//上传图片的函数
	var uploadHandler=function(){
		var file=document.getElementById('file');
		if(file==null){
			return;
		}
	}

	return{
		init:function(){
			//初始化保存热门的函数
			submitAction();

			//初始化表单验证
			submitHandler();

			//初始化上传函数
			uploadHandler();
		}
	}
}();
HightMerchant.init();