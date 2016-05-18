//管理员的类函数
var Admin=function(){

	//初始化页面用到的组件
	var plugsHandler=function(){
		$('input[type=checkbox],input[type=radio]').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue',
                increaseArea: '20%'
        });
	}

	//验证是否选择权限
	var validateRoleHandler=function(){
		var roles=$('input[name=roleIds]:checked');
		if(roles.length==0){
			return false;
		}
		return true;
	}

	//验证表单的函数
	var vadlidateHandler=function(){
		$form=$('form');
		$form.bootstrapValidator().on('success.form.bv',function(e){
			e.preventDefault();
			console.log("cdsahxkg");
			if(!validateRoleHandler()){
				Beyond.alert('error','请选择角色');
				return;
			}
			$form.ajaxSubmit({
				dataType:'json',
				success:function(json){
					if(json.type=="success"){
						Beyond.alert('success','操作成功');
						setTimeout(function(){
							location.href="list.jhtml";
						},800);
					}else{
						Beyond.alert('error',json.content);
					}
				}
			});
		})
	}

	//添加管理员函数
	var addAdminHandler = function(){
		$('.portlet').on('click','.btn-success',function(){
			$form=$('form');
			$form.submit();
		})
	} 
	//初始化函数
	return {
		init:function(){
			//初始化组件的函数
			plugsHandler();
			//添加管理员的初始化函数
			addAdminHandler();
			//初始化验证的函数
			vadlidateHandler();
		}
	}
}();
//调用类的初始化函数
Admin.init();