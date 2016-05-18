var UserAdd = function(){

	//加验证效果
	var validateHandler = function(){
		$form=$('#usrForm');
		$form.bootstrapValidator({
			fields: {
            username: {
                message: 'The username is not valid',
                validators: {
                    // The validator will create an Ajax request
                    // sending { username: 'its value' } to the back-end
                    remote: {
                        message: '用户名已存在',
                        url: 'validate_username.jhtml'
                    }
                }
            }
        }
		});
		$('#usrForm input[type=radio]').iCheck({
              checkboxClass: 'icheckbox_square-blue',
              radioClass: 'iradio_square-blue',
              increaseArea: '20%'
            });
        ComponentsPickers.init();
	};
	return{

		init:function(){
			validateHandler();
		}
	}
}();
UserAdd.init();