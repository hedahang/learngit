var Merchant = function(){

	//禁用或启用商户函数
	var activeHandler = function(){
		$('table').on('click','a.btn-purple',function(){
			var id=$(this).data('id');
			var parem= new Object();
			parem.id =id;
			if($(this).children('i').hasClass('fa-stop')){
				parem.disabled=true;
			}else{
				parem.disabled=false;
			}
			$.ajax({
				type:'post',
				url:"activate.jhtml",
				data:parem,
				dataType:'json',
				success:function(json){
					if (json.type=='success') {
						var content="";
						if(parem.disabled==true){
							content="禁用成功";
						}else{
							content="启用成功";
						}
						Beyond.alert('success',content);
						setTimeout(function(){
							location.reload(true);
						},800);
					}else{
						Beyond.alert('error','操作失败');
					}
				}
			})
		})
	};

	//初始化公用函数
	var initcommonHandler = function(){
		var $dom =$('.porlet-title');
		Beyond.init($dom);
	}
	return{
		init:function(){
			activeHandler();
			initcommonHandler();
		}
	}
}();
Merchant.init();