var Active = function(){
	//选择分类
	var checkcategoryHandler = function(){
		$('.well').on('click','li',function(){
			$(this).parent().children().removeClass('active');
			$(this).addClass('active');
			var id= $(this).data('id');
			if($(this).parent().parent().attr('id')=="categorybox"){
				$.ajax({
					type:"get",
					url:'../productCategory/get_child.jhtml',
					data:{parentId:id},
					dataType:'json',
					success:function(json){
						if(json.message.type=="success")
						{
							var categories= json.categories;
							console.log(categories);
							if(categories.length>0){
								var html="<div class='categorybox'><ul>";
								for(var i = 0; i<categories.length; i++){
									html+='<li data-id="'+categories[i].id+'">';
									html+=categories[i].name;
									html+='</li>';
								}
								html+="</ul></div>";
							}else{
								var html="";
							}
						}
						if($('#categorybox').next().length==0){
							$('#categorybox').after(html);
						}else{
							$('#categorybox').nextAll().remove();
							$('#categorybox').after(html)
						}
					}
				});
			}else{

				$('#categoryId').val(id);
				var name= $(this).text();
				var btn='<a href="javascript:void(0);" class="btn btn-labeled btn-primary btn-xs">';
				btn+='<i class="btn-label glyphicon glyphicon-remove"></i>'
				btn+=name+'</a>';
				$('#cate').html(btn);
			}
		});

		$('#cate').on('click','i.btn-label',function(){
			$(this).parent().remove();
			$('#categoryId').val('');
			$('.categorybox:eq(1)').remove();
			$('.categorybox').find('li').removeClass('active');
		})
	};

	//初始化函数
	var initHandler = function(){
		$('input[type=checkbox],input[type=radio]').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue',
                increaseArea: '20%'
        });
        $('.tab-pane').on("blur",'#price',function(){
        	var str=$(this).val();
        	$('input[name=prices]:eq(0)').val(str);
        });
        $('.tab-pane').on('blur','input[name=prices]:eq(0)',function(){
        	var str=$(this).val();
        	$('#price').val(str);
        });
        $('.tab-pane').on('blur','#stock',function(){
        	var str =$(this).val();
        	$('input[name=stocks]:eq(0)').val(str);
        });
        $('.tab-pane').on('blur','input[name=stocks]:eq(0)',function(){
        	var str=$(this).val();
        	$('#stock').val(str);
        })
	}

	//添加规格
	var specifationHandler = function(){
		$('#specifation').on('click','a.btn-warning',function(){
			if($('#specifation').find('a.btn-primary').length==0){
				Beyond.alert('warning','请添加规格属性');
				return;
			}
			if($('#specifation').find('tr:eq(0)').find('input').length>0){
				Beyond.alert('warning','您还有未定义的规格属性');
				return;
			}
			var specifationarr= [];
			$('#specifation').find('td').each(function(){
				if($(this).children('a').hasClass('btn-primary')){
					specifationarr.push($(this).children('a').data('name'));
				}
			});
			var tr="<tr>";
			for(var i=0; i<specifationarr.length; i++){
				tr+="<td><input type='text' name='"+specifationarr[i]+"'></td>";
			}
			var price=$('#price').val();
			var stock=$('#stock').val();
			tr+="<td><input type='text' name='prices' value='"+price+"'></td>";
			tr+="<td><input type='text' name='stocks' value='"+stock+"'></td>";
			tr+="<td><a href='javascript:;' class='btn btn-xs red'>";
			tr+="<i class='fa fa-times'></i>删除</a></td></tr>"
			$('#specifation').find('table').append(tr);	
		});
		$('#specifation').on('click','a.yellow',function(){
			if($(this).parent().prev().length==0){
				var td="<td class='spetd'><input type='text'></td><td>价格</td>";
				td+='<td>库存</td>';
				$(this).parent().before(td);
			}else{
				var td="<td><input type='text'></td>";
				$(this).parent().prevAll('td.spetd').after(td);
				if($('#specifation').find('tr').length>1){
					$('#specifation').find('tr').each(function(){
						if($(this).index()!=0){
							$(this).children('td:eq(0)').after('<td><input type="text"></td>');
						}
					})
				}
			}
		});
		$('#specifation table tr:eq(0)').on('blur','input',function(){
			var str=$(this).val();
			if(str==""){
				if($('#specifation').find('a.btn-primary').length==0){
					$('#specifation').find('a.yellow').parent()
					.prevAll().remove();
				}else{
					$(this).parent().remove();
				}
				if($('#specifation').find('tr').length>0){
					var index=$(this).index();
					$('#specifation').find('tr').each(function(){
						if($(this).index()>0){
							$(this).children('td:eq('+index+')').remove();
						}
					})
				}
				return;
			}
			var arr= [];
			$('#specifation a.btn-primary').each(function(){
				arr.push($(this).data('name'));
			});
			if(arr.isHas(str)){
				Beyond.alert('warning','规格属性重复');
				return;
			}
			var btn='<a href="javascript:void(0);" class="btn btn-labeled btn-primary btn-xs"  data-name="'+str+'">';
				btn+='<i class="btn-label glyphicon glyphicon-remove"></i>'
				btn+=str+'</a>';
				if($('#specifation').find('tr').length>0){
					var index=$(this).parent().index();
					$('#specifation').find('tr').each(function(){
						if($(this).index()>0){
							$(this).children('td:eq('+index+')')
							.children('input').attr('name',str);
						}
					})
				}
			$(this).parent().html(btn);
		});
		$('#specifation').on('click','a.red',function(){
			$(this).parent().parent().remove();	
		});
		$('#specifation').on('click','i.btn-label',function(e){
			 e.stopPropagation();
			 if($('#specifation table').find('a.btn-primary').length!=1){
			 	var index=$(this).parent().parent().index();
				 if($('#specifation').find('tr').length>0){
				 	$(this).parent().parent().remove();
						$('#specifation').find('tr').each(function(){
							if($(this).index()>0){
								$(this).children('td:eq('+index+')').remove();
							}
						})
					}
				}else{
					$('#specifation a.yellow').parent().prevAll().remove();
					$('#specifation tr').each(function(){
						if($(this).index()>0){
							$(this).remove();
						}
					})
				}
		});
		$('#specifation').on('click','a.btn-primary',function(){
			var name= $(this).text();
			$(this).parent().html('<input type="text" value="'+name+'">');
		})
	};


	//删除图片的函数
	var deleteHandler= function(){
		$('#portlet_tab2').on('click','a.red',function(){
			$(this).parent().parent().remove();
			var url=$(this).data('url');
			$('input[name=images]').each(function(){
				if($(this).val()==url){
					$(this).remove();
				}
			});
			console.log($('input[name=images]').length);
		})
	}

	//提交数据给服务器
	var SubmitHandler = function(){
		var $form=$('#addform');

		if(!$form){
			return;
		}
		$form.bootstrapValidator().on('success.form.bv',function(e){
            e.preventDefault();
         	if($('#marketPrice').val()*1<$('#price').val()*1){
				Beyond.alert('warning','市场价必须大于等于价格');
				return;
			}
			 $('input').removeAttr('disabled');
		if($('input[name=images]').length==0){
			Beyond.alert('warning','请上传产品图片');
			return;
		}
		var specifationarr = [];
			$('input[type=text]').each(function(){
				$(this).val($(this).val().trim())
			});
            var categoryId=$('#categoryId').val();
            $('#dtype').val($('#goodsType').val());
            if($('input[name=prices]').length==0){
            	var prices="<input type='text' name='prices' value="+$('#price').val()+">";
            	$('form').append(prices);
            }
            if($('input[name=stocks]').length==0){
            	var stocks="<input type='text' name='stocks' value="+$('#stock').val()+">";
            	$('form').append(stocks);
            }
            $('#specifation tr').each(function(){
            	if($(this).index()>0){
            		var parem = new Object();
            		$(this).children().each(function(){
            			if($(this).children('input').length>0){
            				var $input=$(this).children('input');
            				if($input.attr('name')!='prices' && $input.attr('name')!='stocks'){
            					parem[$input.attr('name')]=$input.val();
            					
            				}
            			}
            		});

            		specifationarr.push(parem);
            	}	
            });

            specifationarr=JSON.stringify(specifationarr);
            var url=$('.imgra:checked').data('url');
			if(url){
				$('input[name=images]').each(function(){
					if($(this).val()==url){
						$input=$(this);
						$('input[name=images]:eq(0)').before($(this));
					};
				});
			}
             $('#specifications').val(specifationarr);
            $('input[type=checkbox]').each(function(){
            	if($(this).prop('checked')){
            		var id=$(this).attr('id');
            		$('input[name='+id+']').val(true);
            	}
            })
         var specifationarr = [];
         //判断规格是否重复
          $('#specifation tr').each(function(){
            	if($(this).index()>0){
            		var parem = new Object();
            		$(this).children().each(function(){
            			if($(this).children('input').length>0){
            				var $input=$(this).children('input');
            				if($input.attr('name')!='prices' && $input.attr('name')!='stocks'){
            					parem[$input.attr('name')]=$input.val();
            					
            				}
            			}
            		});
            		parem= JSON.stringify(parem);
            		specifationarr.push(parem);
            	}	
            });
            if(isquied(specifationarr)){
            	Beyond.alert("warning",'规格不能重复');
            	return;
            }
            $form.ajaxSubmit({
            	dataType:'json',
            	success:function(json){
            		if(json.type=='success'){
            			if($form.data('name')!="update"){
            				Beyond.alert('success','添加商品成功');
            			}else{
            				Beyond.alert('success','修改商品成功');
            			}
            			setTimeout(function(){
            				location.href='list.jhtml';
            			},800);
            		}else{
            			if($form.data('name')!= 'update'){
            				Beyond.alert("error",'添加商品失败');
            			}else{
            				Beyond.alert('success','修改商品失败');
            			}

            		}
            	}
            })
        });
        $('.portlet-title').on('click','a.green',function(){
        	$form.submit(); 
        })
	};
	return{
		init:function(){  
			checkcategoryHandler();
			specifationHandler();
			initHandler();
			SubmitHandler();
			deleteHandler();
		}
	}
}();
Active.init();