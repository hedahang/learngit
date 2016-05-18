 $("#j_btn_save").click(function(){
	 var _select = $('#j_select option:selected').val();
	 var _pid = $("#j_id").val(); 
     $.ajax({
        url:'update_type.jhtml',
        dataType:"json",
        data:{'pid':_pid,'type':_select},
        type:"POST",
        success:function(data){
            if(data.type=='success'){
                Beyond.alert('success','修改成功！');
                window.location.href='list.jhtml';
            }
            if(data.type=='error'){
                Beyond.alert('error','修改失败！');
                window.location.href='list.jhtml';
            }
      },
    error:function(data){
        Beyond.alert('error','修改失败！');
        window.location.href='list.jhtml';
        }
     });
});
 
$("#j_shop_goods").click(function(){
	queryShopInfo();
});
 
function queryShopInfo(pageSize,pageNumber,_pageNumber){
	var htmls='',li_htmls='';
	var id = $("#j_shop_goods").attr('data-id');
	var pageSize = pageSize || 20 ;
	var pageNumber = pageNumber || 1 ;
	var _pageNumber = _pageNumber || 1;
	var url = 'goods.jhtml?id='+id+'&pageSize='+pageSize+'&pageNumber='+pageNumber;
	$.ajax({
        url:url,
        dataType:"json",
        type:"GET",
        success:function(data){
            if(data.message.type=='success'){
            	var len = data.goods.length;
            	if(len == 0){
            		$('#j_shop_tbody').html('<tr><td align="center" colspan="13">暂无商品!!</td></tr>');
        			return;
            	}else{
            		for(var i=0;i<len;i++){
                		var ilen = data.goods[i].products.length;
                		for(var j=0;j<ilen;j++){
                			htmls +='<tr><td>'+data.goods[i].products[j].sn+'</td>';
                			htmls +='<td>'+data.goods[i].category.name+'</td>';
                			htmls +='<td>'+data.goods[i].products[j].price+'</td>';
                			htmls +='<td>'+data.goods[i].category.tag.name+'</td>';
                			htmls +='<td>'+data.goods[i].products[j].sales+'</td>';
                			htmls +='<td>'+isRecommended(data.goods[i].products[j].isRecommended)+'</td>';
                			htmls +='<td>'+isRecommended(data.goods[i].products[j].isNewProduct)+'</td>';
                			htmls +='<td>'+isRecommended(data.goods[i].products[j].isHot)+'</td>';
                			htmls +='<td>'+isRecommended(data.goods[i].products[j].isPromoted)+'</td>';
                			htmls +='<td>'+isRecommended(data.goods[i].products[j].stock)+'</td>';
                			htmls +='<td>'+isRecommended(data.goods[i].products[j].isMarketable)+'</td>';
                			htmls +='<td>'+checkStatus(data.goods[i].checkStatus)+'</td>';
                			htmls +='<td><a href='+basePath+'admin/unchecked/view.jhtml?id='+data.goods[i].id+' class="j-btn-id btn btn-warning btn-xs"><i class="fa fa-eye"></i>查看</a></td></tr>';
                		}
                	}
            	}
            	
               $("#j_shop_tbody").html(htmls);
               if(_pageNumber==1){
            	   li_htmls += '<li class="disabled"><a href="javascript:;" class="prev">&lt;&lt;</a></li>';
               }else{
            	   li_htmls += '<li><a href="javascript:;" class="prev">&lt;&lt;</a></li>';
               }
               if(data.total <= 5){
            	   for(var k=1;k<=data.total;k++){
                	   li_htmls +='<li class="j_page"><a href="javascript:;" data-page='+k+'>'+k+'</a></li>';
                   }
               }else if(data.total <= 10 && data.total > 5){
            	   if(_pageNumber >= 4){
            		   var top_page = (_pageNumber+2) >= data.total ? data.total : (_pageNumber+2);
            		   for(var k=top_page-4;k<=top_page;k++){
                    	   li_htmls +='<li class="j_page"><a href="javascript:;" data-page='+k+'>'+k+'</a></li>';
                       }
            	   }else{
            		   for(var k=1;k<=5;k++){
                    	   li_htmls +='<li class="j_page"><a href="javascript:;" data-page='+k+'>'+k+'</a></li>';
                       }  
            	   }
               }  
               if(_pageNumber==data.total){
            	   li_htmls += '<li class="disabled"><a href="javascript:;" class="next">&gt;&gt;</a></li>';
               }else{
            	   li_htmls += '<li><a href="javascript:;" class="next">&gt;&gt;</a></li>';
               }
               $('#j_pagination').html(li_htmls);
               $('#j_pagination>li:eq('+_pageNumber+')').addClass('active').find("a").addClass('active');
            }
            if(data.message.type=='error'){
                  Beyond.alert('error','查询失败！');
            }
        },
	    error:function(data){
	        Beyond.alert('error','网络连接失败！');
	    }
	  });
}
$('.pagination').on('click','a',function(){
	var pg = $('.pagination').find('.active').find('.active').attr('data-page');
	var pg_len = $('.pagination>li').length;
	if(pg_len == 3){return false;}
	if($(this).hasClass('prev')){
		var prev_Number = parseInt(pg)-1;
		queryShopInfo(20,prev_Number,prev_Number);
		return false;
	}
	if($(this).hasClass('next')){
		var next_number = parseInt(pg)+1;
		queryShopInfo(20,next_number,next_number);
		return false;
	}
	var _pageNumber = parseInt($(this).attr("data-page"));
	queryShopInfo(20,_pageNumber,_pageNumber);
});

function isRecommended(str){
	if(str){
		return '<span class="success"><i class="fa fa-check"></i></span>';
	}else{
		return '<span class="danger"><i class="fa fa-times"></i></span>';
	}
}
function checkStatus(str){
	if(str =='unchecked'){
		return '未审核';
	}else if(str == 'fail'){
		return '未通过';
	}else{
		return '通过';
	}
}


