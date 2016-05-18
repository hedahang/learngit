//未审核商品控制器

var UncheckProduct = function (){
	//绑定公用的类函数
	var bindHandler = function(){
		var $dom = $('table');
		Beyond.init($dom);
	}
	return{
		init:function(){
			bindHandler();
		}
	}
}();
UncheckProduct.init();