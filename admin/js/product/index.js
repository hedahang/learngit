var Product = function(){

	//初始化公用函数
	var initHandler = function(){
		var $dom = $('table')
		Beyond.init($dom);
	}

	//商品刷新的函数
	var refreshHandler = function(){
		$('.portlet').on('click','a.btn-primary',function(){
			$.ajax({
				type:'get',
				url:'flush.jhtml',
				dataType:'json',
				success:function(json){
					if(json.type=='success'){
						Beyond.alert("success",'商品刷新成功');
					}else{
						Beyond.alert("error",'商品刷新失败');
					}
				}
			})
		})
	}
	return{
		init:function(){
			initHandler();
			refreshHandler();
		}
	}
}()
Product.init();