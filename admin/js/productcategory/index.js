var ProductCate =function(){
    
    var isClick=false;

    var loading=function(dom){
        var loading='<div class="tree-loading"><i class="fa fa-rotate-right fa-spin"></i></div>';
        dom.html(loading);
    };

        //删除对话框的样式
    var deleteModalHandler = function(fn){
        //console.log($('.bootbox-confirm').length);
        if($('.bootbox-confirm').length==0){
            var htm='<div class="bootbox modal fade bootbox-confirm" tabindex="-1" role="dialog" aria-hidden="false" style="display: block; padding-right: 12px;">';
            htm+='<div class="modal-backdrop fade in" style="height: 955px;"></div><div class="modal-dialog">';
            htm+='<div class="modal-content"><div class="modal-body"><button type="button" class="bootbox-close-button close"';
            htm+=' data-dismiss="modal" aria-hidden="true" style="margin-top: -10px;">×</button>';
            htm+='<div class="bootbox-body">你确定删除吗?</div></div><div class="modal-footer">';
            htm+='<button data-bb-handler="cancel" data-dismiss="modal" type="button" class="btn btn-default">取消</button>';
            htm+='<button data-bb-handler="confirm" type="button" class="btn btn-primary">确定</button></div></div></div></div>';
            $('body').append(htm);
        }
        $('.bootbox-confirm').modal();
        $('.modal-dialog').on('click','.btn-primary',function(){
            $('.bootbox-confirm').modal('hide');
            fn();
        });
    }

    var MessageHandler=function(json){
        //console.log(json);
        var time=800;
        var icon="";
        isClick=true;
        var content="操作失败";
        var type="success";
        switch(json.type){
            case "success":
                icon="fa-check";
                content="操作成功";
                break;
            case "error":
                icon="fa-times";
                type="danger";
                break;
            case "warn":
                icon="fa-warning";
                type="warning";
                break;
            }
        if(json.type=="error"){
            if(json.content=="admin.productCategory.deleteExistProductNotAllowed"){
                content="该分类下面有商品，不能被删除";
            }
        }
        setTimeout(function(){
            isClick=false;
        },time);
        Notify(content, 'center-center', time,type, icon, true);
    }

    //编辑函数的操作
    var editHandler = function(json){
        if(json.message.type=="success"){
            $('#addModal').modal();
            $('#name').val(json.category.name);
            $('#id').val(json.category.id);
            $('#parentId').val(json.parentId);
            $('#image').val(json.category.image);
            $('#order').val(json.category.order);
            if(json.parentId == null || json.parentId == ''){
                $('#tag').attr('disabled',true);
                $('#isPromoted').attr('disabled',true);
            }else{
                $('#isPromented').removeAttr('disabled');
                $('#tag').removeAttr('disabled');
            }
            if(json.category.isShown){
                $('#isShown').prop('checked',true).parent().addClass('checked');
            }else{
                $('#isShown').prop('checked',false).parent().removeClass('checked');
            }
            if(json.category.isTop){
                $('#isTop').prop('checked',true).parent().addClass('checked');
            }else{
                $('#isTop').prop('checked',false).parent().removeClass('checked');
            }
            if(json.category.isPromented){
                $('#isPromented').prop('checked',true).parent().addClass('checked');
            }else{
                $('#isPromented').prop('checked',false).parent().removeClass('checked');
            }
            $('#tag').children().each(function(){
                if($(this).val()==json.tagId){
                    $(this).attr('selected','selected');
                }
            })
        }
    }
    //删除函数的操作
    var deleteHandler=function(json,data){
        if(json.type=='success'){
            if($('.tree'+data.id).parent().hasClass('tree-folder-content')){
                if($('.tree'+data.id).prevAll().length==0 &&
                 $('.tree'+data.id).nextAll().length==0){
                    $('.tree'+data.id).parent().prev()
                    .find('.fa-folder-open').remove();
                    $('.tree'+data.id).parent().prev()
                    .find('a.red').removeClass('disabled');
                }
            }
            $('.tree'+data.id).remove();
        }
    }

    //获取子集分类的函数
    var getHandler=function(json,dom){
        if(dom.children().length>0){
            dom.children().remove();
        }
        if(json.message.type=="success"){
            var html="";
            var productCategories=json.categories;
            var len=productCategories.length;
            for(var i=0; i<productCategories.length; i++){
                html+="<div class='tree-folder tree"+productCategories[i].id+"'><div class='tree-folder-header'>";
                html+="<div class='tree-folder-name'>"+productCategories[i].name+"</div><div class='tree-folder-right'>";
                if(productCategories[i].isShown){
                    html+='<span class="sky state"  data-id="'+productCategories[i].id+'"><i class="fa fa-eye" ></i>可见</span>';
                }else{
                    html+='<span class="purple state"  data-id="'+productCategories[i].id+'"><i class="fa fa-eye"></i>不可见</span>';
                }
                if(productCategories[i].isTop){
                    html+='<span class="primary state" data-id="'+productCategories[i].id+'"><i class="fa fa-hand-pointer-o"></i>置顶</span>';
                }else{
                    html+='<span class="prink state" data-id="'+productCategories[i].id+'"><i class="fa fa-hand-pointer-o"></i>不置顶</span>';
                }
                if(productCategories[i].isPromoted){
                    html+='<span class="success state" data-id="'+productCategories[i].id+'"><i class="fa fa-get-pocket"></i>推荐</span>';
                }else{
                    html+='<span class="danger state" data-id="'+productCategories[i].id+'"><i class="fa fa-get-pocket"></i>不推荐</span>';
                }
                html+='<a href="javascript:;" class="btn btn-info btn-xs ' 
                if(productCategories[i].order<2){
                    html+=' disabled ';
                }
                html+='" style="margin-right: 8px;"  data-id="'+productCategories[i].id+'"><i class="fa fa-arrow-up"></i>上移</a>';
                html+='<a href="javascript:;" class="btn btn-primary btn-xs';
                if(productCategories[i].order == len){
                    html+=' disabled ';
                }
                html+='" style="margin-right:8px;" data-id="'+productCategories[i].id+'"><i class="fa fa-arrow-down"></i>下移</a>';
                html+="<a href='javascript:;' class='btn green btn-xs' style='margin-right:8px;' data-id='"+productCategories[i].id+"'><i class='fa fa-edit'></i>修改</a>"
                html+='<a href="javascript:;" data-id="'+productCategories[i].id+'" class="btn red btn-xs "><i class="fa fa-times"></i>删除</a></div>';
                html+="</div></div>";
            }
            dom.append(html);
        }
    }

    //添加成功后执行的函数
    var addHandler=function(json,data){
        if(json.message.type=='success'){
            if(data.parentId){
                var treeFolder=$('.tree'+data.parentId);
                if(treeFolder.find('.fa-folder').length==0 && treeFolder.find('.fa-folder-open').length==0){
                    var treeFoldername=treeFolder.find('.tree-folder-name');
                    treeFoldername.before('<i class="blue fa fa-folder"></i>').parent().
                    after("<div class='tree-folder-content'></div>").find('a.red').addClass('disabled');
                    treeFoldername.click();
                }else{
                    var treeFoldername=treeFolder.find('.tree-folder-name');
                    if(treeFolder.find('.fa-folder-open').length>0){
                        treeFoldername.click();
                    }
                    treeFoldername.click();
                }
                return;
            }
            location.reload(true);
        }
    }

    //改变状态后执行的函数
    var stateHandler=function(json){
        if(json.message.type=="success"){
            if(json.parentId!=null){
                $tree=$('.tree'+json.parentId);
                $treeName=$tree.find('.tree-folder-name');
                if($tree.find('.fa-folder-open').length>0){
                        $treeName.click();
                    }
                    $treeName.click();

                return;
            }
            location.reload(true);
        }
    }

    //ajax和服务器的统一交互函数
    var getChildrenHandler=function(type,url,data,method,time,dome){
        if(isClick){
            return;
        }
        setTimeout(function(){
            $.ajax({
                type:method,
                url:url,
                dataType:'json',
                data:data,
                success:function(json){

                    switch(type){
                        case "add":
                            $('.modal').modal('hide');
                            MessageHandler(json.message);
                            setTimeout(function(){addHandler(json,data);},800);
                            break;
                        case "get":
                            getHandler(json,dome);
                            break;
                        case "delete":
                            MessageHandler(json);
                            setTimeout(function(){
                                deleteHandler(json,data);
                            },800);
                            break;
                        case "state":
                            MessageHandler(json.message);
                            setTimeout(function(){
                                stateHandler(json);
                            },800);
                            break;
                        case "edit":
                            editHandler(json);
                            break;
                    }
                }
            })
        },time)
    }
    var bindHandler=function(){

        $('#MyTree').on('click','.tree-folder-name',function(event){
             event.stopPropagation();
            if($(this).prev('i').length==0){
                return;
            }
            var $foldericon=$(this).prev('i');
            if($foldericon.hasClass('fa-folder-open')){
                $foldericon.removeClass('fa-folder-open').addClass('fa-folder');
                $(this).parent().next().html('');
            }else{
                $foldericon.addClass('fa-folder-open').removeClass('fa-folder');
                var $treeFoldercontent=$(this).parent().next();
                loading($treeFoldercontent);
                var id=$(this).data('id');
                var paremt= new Object();
                paremt.parentId=id;
                getChildrenHandler('get','get_child.jhtml',paremt,'get',300,$treeFoldercontent);
            }
        });
         $('#MyTree').on('click','.tree-folder-header',function(event){
               event.stopPropagation();
            $(this).children('.tree-folder-name').click();
         })
        $('#addbtn').on('click',function(){
            $('#addModal').modal();
            $('#parentId').val('');
            $('#id').val('');
            $('#name').val('');
            $('#order').val('');
            $('#tag').children().each(function(){
                $(this).removeAttr('selected');
            });
            $('#isPromoted').attr('disabled',true);
            $('#tag').attr('disabled',true);
            $('input[type=checkbox]').prop('checked',false).parent().removeClass('checked');
        });

         $('#addModal input[type=checkbox]').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue',
                increaseArea: '20%'
        });



        //绑定删除函数
        $('#MyTree').on('click','a.red',function(event){
             event.stopPropagation();

            if($(this).hasClass('disabled')){
                MessageHandler({
                    type:"warn",
                    content:'此分类有子分类，不能删除'
                });
                return;
            }
            var $this=$(this);
            deleteModalHandler(function(){
                var parem = new Object();
                parem.id=$this.data('id');
                getChildrenHandler("delete",'delete.jhtml',parem,'post',10);
            });
        });
        $('#MyTree').on('click','a.yellow',function (event) {
             event.stopPropagation();
            var parentId=$(this).data('id');
            
            $('#addModal input[type=text], #addModal input[type=hidden]').val('');
            $('#parentId').val(parentId);
            $('#addModal').modal();
            $('#id').val('');
            $('#name').val('');
            $('#order').val('');
            $('#tag').children().each(function(){
                $(this).removeAttr('selected');
            });
            $('#tag').removeAttr('disabled');
            $('#isPromoted').removeAttr('disabled');
            $('input[type=checkbox]').prop('checked',false).parent().removeClass('checked');
        });
        $('#MyTree').on('click','a.btn-primary',function(event){
             event.stopPropagation();
            var parem= new Object();
            parem.id=$(this).data('id');
            parem.isMoveUp=false;
            getChildrenHandler('state','move.jhtml',parem,'post',10);                                                                                                 
        });
        $('#MyTree').on('click','a.btn-info',function(event){
             event.stopPropagation();
            var parem = new Object();
            parem.id=$(this).data('id');
            parem.isMoveUp=true;
            getChildrenHandler('state','move.jhtml',parem,'post',10);
        })
        $('#MyTree').on('click','span.state',function(event){
             event.stopPropagation();
            var id=$(this).data('id');
            var parem= new Object();
            parem.id=id;
            if($(this).children('i').hasClass('fa-eye')){
                if($(this).hasClass('sky')){
                    parem.isShown=false;
                }else{
                    parem.isShown=true;
                }
            }else if($(this).children('i').hasClass('fa-hand-pointer-o')){
                if($(this).hasClass('primary')){
                    parem.isTop=false;
                }else{
                    parem.isTop=true;
                }
            }else if($(this).children('i').hasClass('fa-get-pocket')){
                if($(this).hasClass('success')){
                    parem.isPromoted=false;
                }else{
                    parem.isPromoted=true;
                }
            }

            getChildrenHandler("state",'set.jhtml',parem,'post',10);
        });
        $('#MyTree').on('click','a.green',function(event){
            event.stopPropagation();
            var id=$(this).data('id');
            var parem={id:id};
            getChildrenHandler("edit",'edit.jhtml',parem,'get',10);
        })

    };
    var submitHandler=function(){
        $("#addForm").bootstrapValidator().on('success.form.bv',function(e){
            e.preventDefault();
            $('#tag').removeAttr('disabled');
            $('#isPromoted').removeAttr('disabled');
            var parem=new Object();
            parem.name=$('#name').val();
            parem.tagId=$('#tag').val()
            parem.isShown=$('#isShown').prop('checked');
            parem.isTop=$('#isTop').prop('checked');
            parem.order=$('#order').val();
            parem.parentId=$('#parentId').val();
            parem.image=$('#image').val();
            parem.isPromoted=$('#isPromoted').prop('checked');
            parem.id=$('#id').val();
            var url="save.jhtml";
            if(parem.id){
                url="update.jhtml";
            }

            getChildrenHandler("add",url,parem,"post",10);  
        });
    }

    return {
        init:function(){
            bindHandler();
            submitHandler();
        }
    };
}();
ProductCate.init();