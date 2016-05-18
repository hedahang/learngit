//热门分类的
var Hotcategory = function(){

	//初始化组件的函数
	var initPlugHandler=function(){
		$('input[type=checkbox],input[type=radio]').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue',
                increaseArea: '20%'
        });
	}

	//添加热门分类函数
	var addHotHandler=function(){
		$('.portlet').on('click','.btn-success',function(){
			var len=$('input[type=checkbox]:checked').length;

			if(len>6){
				Beyond.alert("error","最多只能添加6个热门标签");
				return;
			}
			console.log('wdsgb');
			$('form').ajaxSubmit({
				dataType:'json',
				success:function(json){
					if(json.type=='success'){
						Beyond.alert("success",json.content);
						setTimeout(function(){
							location.href="hostlist.jhtml";
						},800)
					}else{
						Beyond.alert('error',json.content);
					}
				}
			})
		})
	}

	//上传商品分类的图片
	var uploadHandler=function(){
		var $categoryimage=document.getElementById("hotcategoryimage");
		if($categoryimage==null){
			return;
		}
		$categoryimage.addEventListener("change",function(){
			var files=this.files;
			var file=files[0];
			if(file.type.indexOf("image")>0){
				Beyond.alert("warn","只能上传图片");
				return;
			}
			var xhr =new XMLHttpRequest();
			xhr.open("POST",'../file/upload.jhtml',true);
			xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");
			var fd = new FormData();
			fd.append("fileType",'hotcategory');
			fd.append('file',file);
			xhr.send(fd);
			xhr.addEventListener("load",function(e){
				var data = JSON.parse(e.target.responseText);
				console.log(data);
				if(data.message.type=="success"){
					var image="<img src='"+data.url+"' style='width:150px'>";
					var box =$(".imagebox");
					if(box.children("img")){
						box.children("img").remove();
						
					}
					box.append(image);
					$("#imagebox").val(data.url);
				}else{
					Beyond.alert("error",data.content);
				}
			},false)
		},false)
	}

	//初始化函数
	var initHandler=function(){
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
	}

	//保存资料的函数
	var saveHandler=function(){
		$('.portlet').on("click",'.btn-success',function(){
			$('form').ajaxSubmit({
				dataType:"json",
				success:function(json){
					if(json.type=="success"){
						Beyond.alert("success",json.content);
						setTimeout(function(){
							location.href="hostlist.jhtml";
						},800);
					}else{
						Beyond.alert("error",json.content);
					}
				}
			})
		})
	}

	//删除函数
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
		$dom.on('click','a.red,a.btn-danger',function(){
			$this=$(this);
			deleteModalHandler(function(){
				var id = $this.data('id');
				var parem = new Object();
				parem.ids = id;
				$.ajax({
					type:"post",
					url:"detelehot.jhtml",
					data:parem,
					dataType:"json",
					success:function(json){
						if(json.type=="success"){
							Beyond.alert('success',json.content);
							setTimeout(function(){
								location.reload(true);
							},800);
						}else{
							Beyond.alert('error',json.content);
						}
					}
				})
			});
		})
	};
	return {
		init:function(){
			uploadHandler();
			//保存函数初始化
			saveHandler();
			//初始化函数
			initHandler();

			deletebtnHandler($('.portlet'));
		},
		initplug:function(){
			//初始化组件
			initPlugHandler();
			addHotHandler();
		}
	}
}()
Hotcategory.init();
$('form').submit(function(){
	return false;
})