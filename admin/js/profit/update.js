var Profit = function(){

	var initHandler = function(){
		var $form = $('form');
		var $input = $form.find('input[type = text]');
		$input.each(function(){
			var str=$(this).val();
			if(!isNaN(str*1)){
				str = str*100;

				$(this).val(str);
			}
		})
		$('.portlet').on('click','.btn-primary',function(){
			$form=$('form');
			var isNan= true;
			var $input= $form.find('input[type= text]');
			$input.each(function(){
				if($(this).attr('disabled') == true){
					return;
				}
				var str =$(this).val();
				if(isNaN(str*1)){
				}else{
					str =str /100;
					$(this).val(str);
				}
			})				
			
			if(isNan){
			Beyond.ajaxSubmit($form,'set');
		}
		})
	};
	return {
		init:function(){
			initHandler();
		}
	}
}()
Profit.init();