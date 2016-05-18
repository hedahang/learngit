var View = function (){
	
	//点击审核实现的函数
	var checkHandler = function(){
		$('.portlet').on('click','a.btn-purple',function(){
			$('#checkModal').modal();
		});
		$('#checkModal').on('click','a.btn-primary',function(){
			$('#checkModal').hide();
			Beyond.ajaxSubmit($('form'),'check');
			location.href="list.jhtml";
		});
		$('#checkModal').on('change','select',function(){
			console.log($(this).val());
			if($(this).val()=="pass"){
				$('#isMarketable').attr('disabled',false)
			}else{
				$('#isMarketable').attr('disabled',true);
			}
		});
		$('#isMarketable').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue',
                increaseArea: '20%'
        });
	};
	return {
		init:function(){
			checkHandler();
		}
	}
}()
View.init();