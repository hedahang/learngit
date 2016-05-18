var Commproduct= function(){
	//选择不通过时给她选择审核备注
	$('select[name=status]').on('change',function(){
		var status=$(this).val();
		if(status=='fail'){
			$('select[name=checkNote]').removeAttr('disabled');
		}else{
			$('select[name=checkNote]').attr('disabled','disabled');
		}
	})
	//审核时触发的函数
	var auditHandler = function(){
		$('.tab-pane').on('click','a.btn-primary',function(){
			console.log("uhwfsiojh");
			$("#auditform").ajaxSubmit({
				dataType:"json",
				success:function(json){
					if(json.type == 'success'){
						Beyond.alert("success",'审核成功');
						setTimeout(function(){
							location.reload(true);
						},800);
					}else{
						Beyond.alert("error",'审核失败');
					}
				}
			})
		})
	};

	//商品上下架
	var setmarketableHandler=function(){
		$('.portlet').on('click','a.btn',function(){
			var parem =new Object();
			parem.id=$(this).data('id');
			if($(this).hasClass('btn-success')){
				parem.isMarketable=true;
			}else if($(this).hasClass('btn-purple')){
				parem.isMarketable=false;
			}else if($(this).hasClass('btn-primary')){
				return;
			}
			$.ajax({
				type:"post",
				url:"setMarketable.jhtml",
				data:parem,
				dataType:'json',
				success:function(json){
					var content=""
					if(json.type=='success'){
						if($(this).hasClass('btn-success')){
							content="商品上架成功";
						}else{
							content="商品下架成功";
						}
						Beyond.alert("success",content);
						setTimeout(function(){
							location.reload(true);
						},300);
					}else{
						if($(this).hasClass('btn-success')){
							content="商品上架失败";
						}else{
							content="商品下架失败";
						}
						Beyond.alert("error",content);
					}
				}
			})
		})
	}
	return{
		init:function(){
			auditHandler();
			setmarketableHandler();
		}
	}
}();
Commproduct.init();