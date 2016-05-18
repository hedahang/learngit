//广告类
var ad=function(){
	//保存广告的函数
	var saveHandler=function(){
		$('.btn-success').on('click',function(){
			$('form').submit();
		})
	}

	//验证表单的函数
	var validateHandler=function(){
		var $form=$('form');
		$form.bootstrapValidator().on('success.form.bv',function(e){
			e.preventDefault();
			$form.ajaxSubmit({
				dataType:'json',
				success:function(json){
					if(json.type=="success"){
						Beyond.alert("success",json.content);
						setTimeout(function(){
							location.href="list.jhtml";
						},800);
					}else{
						Beyond.alert("error",json.content);
					}
				}
			})
		})
	}

	//上传图片的函数
	var uploadHandler=function(){
		var file=document.getElementById('file');
		if(file==null){
			return;
		}
		file.addEventListenner('change',function(){
			console.log('hs');
		})
	}

	return{
		init:function(){
			//初始化保存广告的函数
			saveHandler();

			//初始化表单验证
			validateHandler();

			//初始化上传函数
			uploadHandler();
		}
	}
}();
ad.init();