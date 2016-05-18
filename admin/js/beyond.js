
 String.prototype.trim=function(){
　　    return this.replace(/(^\s*)|(\s*$)/g, "");
　　 }
　　 String.prototype.ltrim=function(){
　　    return this.replace(/(^\s*)/g,"");
　　 }
　　 String.prototype.rtrim=function(){
　　    return this.replace(/(\s*$)/g,"");
　　 }

//判断数组内是否有重复的项
 function isquied(arr){
	var n= [];
	for(var i=0; i<arr.length; i++){
		if(n.indexOf(arr[i])==-1){
			n.push(arr[i])
		}else{
			return true;
		}
	}
	return false;
}

Array.prototype.isHas=function(str){
	var isHas = false;
	for(var i =0 ; i<this.length; i++){
		if(str == this[i]){
			isHas = true;
		}
	}
	return isHas;
}
/*Show Notification*/
function Notify(message, position, timeout, theme, icon, closable) {
    toastr.options.positionClass = 'toast-' + position;
    toastr.options.extendedTimeOut = 0; //1000;
    toastr.options.timeOut = timeout;
    toastr.options.closeButton = closable;
    toastr.options.iconClass = icon + ' toast-' + theme;
    toastr['custom'](message);
}

//定义一个ajax公用的类
var Beyond = function(){
	//定义一个变量用于判断是否执行函数
	var isClick = false;

	//状态提醒函数
	var MessageHandler =function(type, message){
		isClick = true;

		var time = 800;

		var messageicon = message.type =="success" ? "fa-check" : "fa-times";

		var messagecontent = "";
		switch(type){
			case "add" :
				messagecontent = message.type == "success" ? "添加成功" : "添加失败";
				break;
			case "edit" :
				messagecontent = message.type == "success" ? "修改成功" : "修改失败";
				break;
			case "delete" :
				messagecontent = message.type == "success" ? "删除成功" : "删除失败";
				break;
			case "order" :
				messagecontent = message.type == "success" ? "排序成功" : "排序失败";	
				break;
			case "check" :
				messagecontent = message.type == "success" ? "审核成功" : "审核失败";
				break;
			case "upmarket":
				messagecontent = message.type == "success" ? "上架成功" : "上架失败";
				break;
			case "downmarket":
				messagecontent = message.type == "success" ? "下架成功" : "下架失败";
				break;
			case "set" :
				messagecontent = message.type == "success" ? "设置成功" : "设置失败"
				break;
			case "active" :
				messagecontent = message.type == "success" ? "该用户禁用成功" : "该用户未被禁用";
				break;
			case "play" :
			   messagecontent = message.type == "success" ? "该用户启用成功" : "该用户未被启用";
			   break;
			default:
				messagecontent = message.type == "success" ? "操作成功" : "操作失败";
				break;
		}

		var type = message.type == "success" ? "success" : "danger";

		Notify(messagecontent,"center-center",time,type,messageicon,true);
		
		setTimeout(function(){
			isClick = false;

			if(type == "check" && message.type == "success") 
			{ 
				location.href="list.jhtml";
			}

			message.type=="success" && location.reload(true);
		},time);
	}

   var alertHandler = function(type,content){

   	var messageicon = "fa-warning";
   	switch(type){
   		case "success":
   			messageicon ="fa-check";
   			break;
   		case "error":
   			messageicon ="fa-times";
   			break;
   	}
   	type= type=="error"?"danger":type;
   	Notify(content,"center-center",800,type,messageicon,true);
   }

	//删除函数
	var deleteHandler = function (type, json){
		
		var message = json.message ? json.message :json;

		MessageHandler(type,message)
	};

	//更加type来运行不同的函数
	var runHandler = function(type,json,fn){
		/*
		*
		*/

		switch(type){
			case "add":
				deleteHandler(type,json);
				break;
			case "delete":
				deleteHandler(type,json);
				break;
			case "order":
				deleteHandler(type,json);
				break;
			case "check":
				deleteHandler(type,json);
				break;
			case "fun":
				fn();
				break;
			default:
				deleteHandler(type,json);
				break;
			}
	};

	//ajax请求函数
	var AjaxResponsHandler = function(type, method, url, data, time){
		if(isClick){
			return;
		}
		setTimeout(function(){
			$.ajax({
				type:method,
				url:url,
				data:data,
				dataType:'json',
				cache:false,
				success:function(json){
					runHandler(type,json);
				}
			})
		},time)
	};

	//翻页的功能
	var pagintionHandler = function(){
		var $pagintion=$('.pagination');
		if($pagintion.length==0){
			return;
		}
		$pagintion.on('click','a',function(){
				if($(this).hasClass('more')){
					return false;
				}
				if($(this).hasClass('prev')){
					var pageNumber=$('#pageNumber').val();
					pageNumber--;
					$('#pageNumber').val(pageNumber);
				}else if($(this).hasClass('next')){
					var pageNumber=$('#pageNumber').val();
					pageNumber++;
					$('#pageNumber').val(pageNumber);
				}else{
					var pageNumber=$(this).data('page');
					$('#pageNumber').val(pageNumber);
				}
				$('#searchform').submit();
			})
	}

	//submitajax执行的函数
	var submitajaxHandler = function ($dom,type){
		$dom.ajaxSubmit({
			dataType:'json',
			success:function(data){
				runHandler(type,data);
			}
		});
	};

		//删除对话框的样式
	var deleteModalHandler = function(fn){
		if($('.modal-dialog').length==0){
			var htm='<div class="bootbox modal fade" tabindex="-1" role="dialog" aria-hidden="false" style="display: block; padding-right: 12px;">';
			htm+='<div class="modal-backdrop fade in" style="height: 955px;"></div><div class="modal-dialog">';
			htm+='<div class="modal-content"><div class="modal-body"><button type="button" class="bootbox-close-button close"';
			htm+=' data-dismiss="modal" aria-hidden="true" style="margin-top: -10px;">×</button>';
			htm+='<div class="bootbox-body">你确定删除吗?</div></div><div class="modal-footer">';
			htm+='<button data-bb-handler="cancel" data-dismiss="modal" type="button" class="btn btn-default">取消</button>';
			htm+='<button data-bb-handler="confirm" type="button" class="btn btn-primary">确定</button></div></div></div></div>';
			$('body').append(htm);
		}
		$('.bootbox').modal();
		$('.modal-dialog').on('click','.btn-primary',function(){
			$('.bootbox').modal('hide');
			fn();
		});
	};

	//删除函数进行的事件
	var deletebtnHandler = function($dom){
		$dom.on('click','a.red',function(){
			$this=$(this);
			deleteModalHandler(function(){
				var id = $this.data('id');
				var parem = new Object();
				parem.ids = id;
				AjaxResponsHandler("delete",'post','delete.jhtml',parem,300);
			});
		})
	};

	//用户禁用函数
	var activateHandler = function($dom){
		$dom.on('click','a.btn-magenta',function(){
			var id=$(this).data('id');
			var parem = new Object();
			parem.id = id;
			var type = 'active';
			if($(this).children('i').hasClass('fa-stop')){
				parem.isActived = false;
			}else{
				parem.isActived = true;
				type = 'play';
			}
			AjaxResponsHandler(type,"post","activate.jhtml",parem,300);
		})
	}

	//checkbox点击时触发的函数
	var checkboxHandler = function($dom){
		$dom.on('click','input[name = ids]',function(){
			if($(this).prop('checked')){
				$(this).parent().addClass('checked');
			}else{
				$(this).parent().removeClass('checked');
			}
			var len = $('input[type = checkbox]:checked').length;
			if(len > 0){
				$('.portlet-title').find('a.btn-danger').removeClass('disabled');
			}else{
				$('.portlet-title').find('a.btn-danger').addClass('disabled')
			}
		});
		$('thead').on('click','input[type=checkbox]',function(){
			if($(this).prop('checked')){
				$('input[name = ids]').each(function(){
					if(!$(this).prop('checked')){
						$(this).prop('checked',true);
						$(this).parent().addClass('checked');
					}
				})
				$(this).parent().addClass('checked');
				$('.portlet-title').find('a.btn-danger').removeClass('disabled');
			}else{
				$('input[name = ids]').each(function(){
					if($(this).prop('checked')){
						$(this).prop('checked',false);
						$(this).parent().removeClass('checked');
					}
				})
				$(this).parent().removeClass('checked');
				$('.portlet-title').find('a.btn-danger').addClass('disabled');
			}
		})
	};


	//点击查询按钮触发的事件
	var searchHandler = function(){
		$('.portlet-title').on('click','a.btn-purple',function(){
			var $dom=$('.portlet-body').children(".row:eq(0)");
			if($dom.height()==0){
				$dom.animate({
					'height':"150px"
				},300);
			}else{
				$dom.animate({
					'height':"0px"
				},300)
			}
		})
	}



	//商品上下架函数
	var marketableHandler = function($dom){
		$dom.on('click','a.btn-success',function(){
			var id=$(this).data('id');
			var parem = new Object();
			parem.id= id;
			parem.isMarketable= true;
			AjaxResponsHandler('upmarket','post','setMarketable.jhtml',parem,300);
		})
		$dom.on('click','a.btn-warning',function(){
			var parem = new Object();
			parem.id=$(this).data('id');
			parem.isMarketable =false;
			AjaxResponsHandler('downmarket','post','setMarketable.jhtml',parem,300);
		})
	}
	//审核的函数
	var checkedHandler = function ($dom){
		var parem = new Object();
		$dom.on('click','a.btn-purple',function(){
			parem.id = $(this).data('id');
			if($(this).hasClass('checked')){
				parem.isChecked =false
			}else{
				parem.isChecked = true;
			}
			AjaxResponsHandler('check','post','check.jhtml',parem,300);
		})
	}

	//多项删除函数
	var deletesomeHandler = function(){
		$('.portlet-title').on('click','a.btn-danger',function(){
			deleteModalHandler(function(){
				var ids= "";
				$('input[name=ids]:checked').each(function(){
					if(ids == ""){
						ids = $(this).val();
					}else{
						ids += ','+$(this).val();
					}
				})
				var parem = new Object();
				parem.ids= ids;
				AjaxResponsHandler('delete','post','delete.jhtml',parem,300);
			});
		});
	};

	//排序应该执行的函数
	var moveHandler =function($dom){
		var parem = new Object();
		$dom.on('click','a.btn-info',function(){
			var id = $(this).data('id');
			parem.id = id;
			parem.isMoveUp = true;
			AjaxResponsHandler('order','post','move.jhtml',parem,300);
		});

		$dom.on('click','a.btn-primary',function(){
			parem.id = $(this).data('id');
			parem.isMoveUp = false;
			AjaxResponsHandler('order','post','move.jhtml',parem,300);
		})
	};

	return {
		//初始化函数
		init:function($dom){
			deletebtnHandler($dom);
			deletesomeHandler();
			moveHandler($dom);
			checkboxHandler($dom);
			checkedHandler($dom);
			activateHandler($dom);
			marketableHandler($dom);
			pagintionHandler();
			searchHandler();
		},
		ajaxSubmit:function($form,type){
			submitajaxHandler($form,type);
		},
		alert:function(type,content){
			alertHandler(type,content);
		}
	}
}()

//拖放上传图片的代码
$(function(){
	var href=location.href;
   	var columm=href.split('admin/')[1].split('.jhtml')[0];
   	$('.sidebar').find('a').each(function(){
   		var href=$(this).attr('href');
   		if(href.indexOf(columm)>=0){
   			if(!$(this).parent().hasClass('has-sub')){
   				$(this).parent().addClass('active');
   			}
   		}
   	});
	$drop=$('#drop');
	$(document).on({
            dragleave:function(e){
                e.preventDefault();
                //$('.dashboard_target_box').removeClass('over');
            },
            drop:function(e){
                e.preventDefault();
                //$('.dashboard_target_box').removeClass('over');
            },
            dragenter:function(e){
                e.preventDefault();
                //$('.dashboard_target_box').addClass('over');
            },
            dragover:function(e){
                e.preventDefault();
                //$('.dashboard_target_box').addClass('over');
            }
        });
	var drop=$drop[0];
	if(!drop){
		return;
	}
	drop.addEventListener('drop',function(e){
		e.preventDefault();
		var len=$('#drop').children().length;
		if(len>5){
			Beyond.alert('warning','您已经上传了5张图片');
			return;
		}

		var filelist=e.dataTransfer.files;
		len=filelist.length+len;
		if(len>5){
			Beyond.alert('warning','最多只能上传5张图片');
			return;
		}
		for(var i=0; i<filelist.length; i++){
			var img =document.createElement('image');
			if(!filelist[i].type.indexOf('image')==0){
				Beyond.alert('warning','只能上传图片');
				return;
			}

			//实例化file reader对象
            var reader = new FileReader();
                reader.onload = function(e){
                    img.src = this.result;
                }
            reader.readAsDataURL(filelist[i]);
			var  xhr=new XMLHttpRequest();
			xhr.open('POST','../file/upload.jhtml',true);
			xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			var fd = new FormData();
			fd.append('fileType','goods_img');
            fd.append('file', filelist[i]);
            xhr.send(fd);
            xhr.addEventListener("load", function(e){
                var result = jQuery.parseJSON(e.target.responseText);
                if(result.message.type=="success"){
                	var str="<input type='hidden' name='images' value='"+result.url+"'>";
                	$('form').append(str);
                	var html='<div class="mix-inner col-lg-2 col-sm-4" style="margin:0 8%;"><div class="row" style="height:200px; overflow:hidden; position:relative;">';
                	html+="<div style='position:absolute; top:0; left:0; height:100%; width: 100%; background:#000; opacity:0.8; z-index: 300000;'></div>";
                	html+="<span style='display:block; height:50px; font-size: 20px; width:50px; border:#fff solid 1px; border-radius:50px; position:absolute; top: 75px; left: 50%; margin-left:-25px;z-index: 300000; line-height:50px; text-align:center;'>";
                	html+="<i class='fa fa-times'></i></span>";
                	html+="<img src='"+result.url+"'>";
                	html+="</div></div>";
                	if($('#drop').children().length==0){
                		$('#drop').html(html);
                	}else{
                		$('#drop').append(html);
                	}
                }
            }, false);
		}
	});
});

//商品图片点击上传多张图片
var goodsfile = document.getElementById('goodsfile');
if(goodsfile){
	goodsfile.addEventListener('change',function(e){
		$(goodsfile).attr('disabled',true);
		var filelist = this.files;
		for(var i=0; i<filelist.length; i++){
			if(filelist[i].type.indexOf('image')!=0){
				Beyond.alert('warning','只能上传图片');
				return;
			}
			var haslen=$('#portlet_tab2').find('img').length;
			var len=filelist.length*1+haslen;
			if(len>5){
				Beyond.alert('warning','商品图片不能超过5张');
				return;
			}
			/**
			*定义一个image的对象用于获取图片的分辨率
			**/
			var imageobject =new Image();
			imageobject.src=filelist[i];
			var xhr= new XMLHttpRequest();
			xhr.open('POST','../file/upload.jhtml',true);
			xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');
			var fd = new FormData();
			fd.append('fileType','goods_img');
			fd.append('file',filelist[i]);
			xhr.send(fd);
			xhr.addEventListener('load',function(e){
				var result = e.target.responseText;
				result=JSON.parse(result);
				var imageobject= new Image();
				imageobject.src=result.url;
				imageobject.onload=function(){
						if(result.message.type=='success'){

							var images="<input type='hidden' name='images' value='"+result.url+"'>";
							$('form').append(images);
							var html='<div class="col-lg-2 col-sm-4" style="margin-bottom: 10px;">';
							html+="<div class='imagebox'><img src='"+result.url+"' width='100%;' style='margin:0;'></div>";
							html+="<div class='buttongroup'><input class='imgra' type='radio' data-url='"+result.url+"' name='image'/>";
							html+="<a href='javascript:;' class='btn red btn-xs' data-url='"+result.url+"'>";
							html+="<i class='fa fa-times' style='margin-right: 5px;'></i>删除图片</a></div></div>";
							$('.imagebox:eq(0)').parent().before(html);
							$('input[type=radio]').iCheck({
				                checkboxClass: 'icheckbox_square-blue',
				                radioClass: 'iradio_square-blue',
				                increaseArea: '20%'
				        });
					
					}	
				}
				$(goodsfile).removeAttr('disabled');
			},false)
		}
	},false);
}

//上传缩略图的函数
var file= document.getElementById('file');
if(file){
file.addEventListener('change',function(){
	var filelist= this.files;
	for(var i=0; i<filelist.length; i++){
		if(filelist[i].type.indexOf('image')!=0){
			Beyond.alert('warning','只能上传图片');
			return;
		}
		var xhr = new XMLHttpRequest();
		xhr.open('POST','../file/upload.jhtml',true);
		xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
		var fd = new FormData();
		fd.append('file',filelist[i]);
		fd.append('fileType','goods_img');
		xhr.send(fd);
		xhr.addEventListener('load',function(e){
			var result= e.target.responseText;
			result=JSON.parse(result);
			if(result.message.type =="success"){
				$this=$('#file');
				var img ="<img src='"+result.url+"' width='100%'>";
				if($this.nextAll('img').length==0){	
					$this.after(img);
				}else{
					$this.parent().children('img').remove();
					$this.parent().append(img);
				}
				$('#thumbnail').val(result.url);
			}
		},false);
	}
},false)
}

//上传商品分类的图片
var cateimage =document.getElementById('categoryimage');
if(cateimage){
cateimage.addEventListener("change",function(){
	var filelist= this.files;
	for(var i=0; i<filelist.length; i++){
		if(filelist[i].type.indexOf('image')!==0){
			Beyond.alert('warning','只能上传图片');
			return;
		}
		/**
		*定义一个image的对象用于获取图片的分辨率
		**/
		var imageobject =new Image();
		imageobject.src=filelist[i];
		var xhr = new XMLHttpRequest();
		xhr.open('POST','../file/upload.jhtml',true);
		xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');
		var fd = new FormData();
		fd.append('file',filelist[i]);
		fd.append('fileType','category');
		xhr.send(fd);
		xhr.addEventListener('load',function(e){
			var result = e.target.responseText;
			result = JSON.parse(result);
			if(result.message.type == 'success'){
				var image="<img src='"+result.url+"'/>";
				$('#imgbox').find('img').remove();
				$('#imgbox').append(image).children('a').remove();
				$('#image').val(result.url);
			}else{
				Beyond.alert('error','上传失败');
			}
		},false);
	}
},false)
}