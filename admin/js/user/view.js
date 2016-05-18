//查看合伙人的类
var UserView = function(){
		//公用分页函数
	var pagintionHandler = function(json,dom,form){
		if(json.total>0){
			var total=json.total;
			var pageNumber=json.pageNumber;
			total=Math.ceil(total/json.pageSize)+1;
			console.log(total);
			var html="<div class='row'><div class='col-lg-12'><ul class='pagination' style='float:right;'>";
			html+="<li";
			if(pageNumber==1){
				html+=" class='disabled'";
			}
			html+='><a href="javascript:;" class="prev">«</a></li>';
			if(total>5 && pageNumber>3){
				html+="<li class='disabled'><a href='javascript:;'>...</a></li>";
			}
			for (var i = 1; i <total; i++) {
				if(pageNumber<5 && i<6){
					html+="<li";
					if(pageNumber == i){
						html+=" class='active' ";
					}
					html+="><a href='javascript:;'";
					if(pageNumber==i){
						html+=" class='active'";
					}
					html+="data-page='"+i+"'>"+i+"</a></li>";
				}else if(pageNumber>3 && i< pageNumber*+3 && i> pageNumber-3){
					html+="<li><a href='javascript:;'";
					if(pageNumber ==i){
						html+=" class='active'";
					}
					html+="data-page='"+i+"'>"+i+"</a></li>";
				}
			}
			if(total>5 && pageNumber<total-2){
				html+="<li class='disabled'><a href='javascript:;'>...</a></li>"
			}
			html+="<li";
			if(pageNumber == total-1){
				html+=" class='disabled'";
			}
			html+="><a href='javascript:;' class='next'>>></a></li></ul></div></div>";
			dom.append(html);
			paginationclickHandler(pageNumber,form);
		}
	}

	//分页按钮促发的函数
	var paginationclickHandler= function(pageNumber,$form){
		var $pageNumber=$form.children('input[name=pageNumber]');
		$('.pagination').on('click','a',function(){
			if($(this).hasClass('next')){
				pageNumber++;
				$pageNumber.val(pageNumber);
			}else if($(this).hasClass('prev')){
				pageNumber--;
				$pageNumber.val(pageNumber);
			}else{
				pageNumber=$(this).data('page');
				$pageNumber.val(pageNumber);
			}
			var id=$form.attr('id');
			if(id=="feeSForm"){
				feeSHandler();
			}else if(id=="platForm"){
				platHandler();
			}else{
				initHandler();			
			}
		})
	}

	var initHandler= function(){
		$('#getusers').ajaxSubmit({
			dataType:'json',
			success:function(json){
				if(json.message.type=="success"){
					$('#portlet_tab2').find('.pagination').parent().remove();
					$('#juniortab').children('tbody').html('');
					var uses= json.users;
					for(var i=0; i<uses.length; i++){
						var html="<tr><td>"+uses[i].username;
						html+="</td><td>"+uses[i].phoneNumber;
						html+='</td><td>'+uses[i].superior.phoneNumber+'</td></tr>';
						$('#juniortab').children('tbody').append(html);
					}
					pagintionHandler(json,$('#portlet_tab2'),$('#getusers'));

				}
			}
		})
	};



	//获取用户的分润信息
	var feeSHandler = function(){
		$('#feeSForm').ajaxSubmit({
			dataType:'json',
			success:function(json){
				if(json.message.type=="success"){
					$('#portlet_tab3').find('.pagination').parent().remove();
					$("#feetab").children('tbody').html('');
					var feeSplits = json.feeSplits;
					for(var i=0; i<feeSplits.length; i++){
						var html="<tr><td>"+feeSplits[i].order.seller.realName;
						html+="</td><td>"+feeSplits[i].order.sn;
						html+="</td><td>"+feeSplits[i].order.amount+"</td>";
						html+="<td>"+formatDate(parseInt(feeSplits[i].createDate))+"</td>";
						html+="<td>"+feeSplits[i].amount+"</td></tr>";
						$("#feetab").children('tbody').append(html);
					}
					pagintionHandler(json,$('#portlet_tab3'),$('#feeSForm'));
				}
			}
		})
	}

	//用户推广记录查询
	var platHandler = function(){
		$('#platForm').ajaxSubmit({
			dataType:'json',
			success:function(json){
				if(json.message.type=="success"){
					$('#portlet_tab4').find('.pagination').parent().remove();
					$("#pomotab").children('tbody').html('');
					var feeSplits = json.feeSplits;
					for(var i=0; i<feeSplits.length; i++){
						var html="<tr><td>"+feeSplits[i].sn;
						html+="</td><td>";
						if(feeSplits[i].promotionAward.awardType=="depositRefund"){
							html+='推广奖励（特定）';
						}else{
							html+="推广奖励（普通）";
						}
						html+="</td><td>"+formatDate(feeSplits[i].createDate)+"</td>";
						html+="<td>"+feeSplits[i].amount+"</td></tr>";
						$("#pomotab").children('tbody').append(html);
					}
					pagintionHandler(json,$('#portlet_tab4'),$('#platForm'));
				}
			}
		})
	}


	//修改用户状态的函数
	var editHandler = function(){
		$('table').on('click','a.btn-primary',function(){
			if($(this).children('i').hasClass('fa-edit')){
				$userType=$('#usertype');
				$userType.on('change',function(){
					var str=$(this).val();
					if(str=="agent"){
						$('#deposit').removeAttr('disabled');
					}else{
						$('#deposit').attr('disabled',true);
					}
				})
				$userType.removeAttr("disabled");
				if($userType.val()=="agent"){
					$('#deposit').removeAttr('disabled');
				}
				$(this).html('<i class="glyphicon glyphicon-save"></i>保存');
				return;
			}
			$('#type').val($('#usertype').val());
			if($('#usertype').val()=='agent'){
				var str=$('#deposit').val();
				var re = /^[0-9]*[1-9][0-9]*$/ ; 
				if(!re.test(str)){
					Beyond.alert('warning','必须填正整数');
					return;
				}
			}
			$form=$('#updateform');
			$form.ajaxSubmit({
				dataType:"json",
				success:function(json){
					if(json.type=='success'){
						Beyond.alert("success","修改用户成功");
						setTimeout(function(){
							location.reload(true);
						},300)
					}else{
						Beyond.alert("error","修改用户失败");
					}
				}
			})
		})
	}

	//选择不同的等级伙伴
	var selectHandler = function(){
		$('#navbar').on('click','li',function(){
			$('#navbar').children('li').removeClass('active');
			$(this).addClass('active');
			var grade=$(this).data('grade');
			$('#grade').val(grade);
			$('#juniortab').children('tbody').html('');
			initHandler();
		})
	}
	return{
		init:function(){
			initHandler();
			selectHandler();
			feeSHandler();
			platHandler();
			editHandler();
		}
	}
}();
UserView.init();
//时间戳转化
function formatDate(now) {
	now=new Date(now); 
	var year=now.getFullYear()
	var month=now.getMonth()+1; 
	var date=now.getDate(); 
	var hour=now.getHours(); 
	var minute=now.getMinutes(); 
	var second=now.getSeconds(); 
	return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second; 
} 