var Tag =function(){

	var isClick = false;
	var plugasHandler = function(){
		var $dom = $("#tagtab");
		Beyond.init($dom);
	};

	//添加按钮执行的函数
	var addbtnhandler = function(){
		$('.portlet-title').on('click','a.yellow',function(){
			isClick =true;
			var html="<tr><td></td><td>";
			html +="<form action='save.jhtml' method='post' id='addform' class='form-horizontal'><input type='text' name='name' ";
			html +="  maxLength='30'  ";
			html += "/></form></td><td></td><td></td><td>";
			html +="<a href='javascript:;' class='btn green btn-xs'><i class='fa fa-save'></i>保存</a>";
			html +="<a href='javascript:;' class='btn btn-xs btn-default'><i class='fa fa-file-excel-o'></i>取消</a></td></tr>";
			if($('tbody').children().length > 0){
				$('tbody').children('tr:first').before(html);
				$('form').on('blur','input',function(){
					var str=$(this).val();
					if(str==""){
						$(this).parent().parent().parent().remove();
					}
				});
			}else{
				$('tbody').append(html);
			}
			$(this).addClass('disabled');
			$("#addform").bootstrapValidator().on('success.form.bv',function(e){
				var str=$('#addform').find('input').val();
				if(str==null || str==""){
					Beyond.alert('warning','标签名称不能为空');
					return;
				}
            	e.preventDefault();
            	isClick = false;
            	Beyond.ajaxSubmit($(this),'add')
        	});
        	$('a.green').on('click',function(){
        		$('#addform').submit();
        	});

        	$('table').on('click','a.btn-default',function(){
        		$(this).parents('tr').remove();
        		$('a.yellow').removeClass('disabled');
        		isClick=false;
        	})
		});
	};

	//修改执行的函数
	var editHandler = function(){
		$('table').on('click','td.tagname',function(){
			console.log(isClick);
			if(isClick){
				return;
			}
			isClick = true;
			$('a.yellow').addClass('disabled');
			var id=$(this).data('id');
			var name=$(this).data('name');
			var order= $(this).data('order');
			var html="<form action='update.jhtml' method='post' id='updateform' class='form-horizontal'>";
			html +="<input type='hidden' name='id' value='"+id+"'/>";
			html +="<input type='text' name='name'";
			html +="data-bv-notempty maxLength='30' data-bv-notempty-message='标签名称不能为空'";
			html +="value='"+name+"' /><input type='hidden' name='order' value='"+order+"'></form>";
			$(this).html(html);
			$(this).find('input[name=name]').focus();
			
			$('#updateform').bootstrapValidator().on('success.form.bv',function(e){
	            	e.preventDefault();
	            	$('a.yellow').removeClass('disabled');
	            	Beyond.ajaxSubmit($(this),'add')
	        	});
			$('input[name = name]').on('change',function(){
				$('#updateform').submit();
			}).on('blur',function(){
				$('a.yellow').removeClass('disabled');
				$(this).parent().parent().html(name);
				isClick=false;
			})
		});
		};

	return {
		init:function(){
			plugasHandler();
			addbtnhandler();
			editHandler();
		}
	}
}()
Tag.init();