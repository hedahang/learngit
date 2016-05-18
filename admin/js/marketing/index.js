//营销的类文件
var Marketing=function(){
	//提交表单的函数
	var submitHandler=function(){
		$('form').bootstrapValidator().on("success.form.bv",function(e){
			e.preventDefault();
			var  percentager =$("#percentager").val();
			if(percentager>100 || percentager<0){
				Beyond.alert("warning","请填入0到100的数");
				return;
			}
			$('form').ajaxSubmit({
				dataType:"json",
				success:function(json){
					if(json.type=='success'){
						Beyond.alert("success","添加营销成功");
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

	//上传营销的图片
	var uploadImage=function(){
		var file=document.getElementById("imagefile");
		if(!file){
			return;
		}
		file.addEventListener("change",function(){
			var  files= this.files;
			var file=files[0];
			if(file.type.indexOf("image")!=0){
				Beyond.alert("warning","只能上传图片文件");
				return;
			}
			var fd = new FormData();
			fd.append("fileType","marketing");
			fd.append("file",file);
			var xhr= new XMLHttpRequest();
			xhr.open("POST","../file/upload.jhtml");
			xhr.addEventListener("load",function(e){
				var result=e.target.responseText;
				result=JSON.parse(result);
				if(result.message.type="success"){
					console.log(result);
					var image="<img src='"+result.url+"'/>";
					$('#imgbox').find('img').remove();
					$('#imgbox').append(image).children('a').remove();
					$('#image').val(result.url);
				}else{
					Beyond.alert("error","上传图片失败");
				}
			},false);
			xhr.send(fd);
		},false)
	}

	//添加商品到营销
	var addproductTomarketingHandler=function(){
		$('.btn-success').on('click',function(){
			var ids="";
			$('input[name=ids]:checked').each(function(){
				if(ids==""){
					ids=$(this).val();
				}else{
					ids+=","+$(this).val();
				}
				
			});
			$.ajax({
					type:"post",
					data:{productIds:ids,id:id},
					url:"save_product.jhtml",
					dataType:"json",
					success:function(json){
						if(json.type=="success"){
							Beyond.alert("success","添加商品成功");
							setTimeout(function(){
								location.href="list.jhtml";
							},800);
						}else{
							Beyond.alert("error","添加商品失败");
						}
					}
				})
		})
	}

	//添加商户到服务的函数
	var addMerchantToMarketing=function(){
		$('.btn-success').on('click',function(){
			var ids ="";
			$('input[name=ids]:checked').each(function(){
				if(ids==""){
					ids=$(this).val();
				}else{
					ids+=","+$(this).val();
				}
			})
			$.ajax({
				type:"post",
				url:"save_merchant.jhtml",
				data:{id:id,merchantIds:ids},
				dataType:"json",
				success:function(json){
					if(json.type=="success"){
						Beyond.alert("success","天加商户成功");
						setTimeout(function(){
							location.href="list.jhtml";
						},800);
					}else{
						Beyond.alert("error","添加商户失败");
					}
				}
			})
		})
	}

	return{
		init:function(){
			//提交表单
			submitHandler();
			//上传图片
			uploadImage();
			//提价表单
			submitAction();
		},
		addProdut:function(){
			addproductTomarketingHandler()
		},
		addMerchant:function(){
			addMerchantToMarketing();
		}
	}
}();
Marketing.init();
//提交表单的函数
