var User = function (){
	//初始化请求按钮
	var initHandler = function(){
		Beyond.init($('table'));
	};
	return {
		init:function(){
			initHandler();
		}
	}
}();
User.init();