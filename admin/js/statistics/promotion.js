
var Chart=function(){
	//初始化个人推广统计的函数
	var initChartHandler=function(id,data){
		
		var myChart= echarts.init(document.getElementById(id));
		var xAxisdata=[];
		for(var key in data.grade1){
			xAxisdata.push(key);
		}
		var data1=[];
		for(var key in data.grade1){
			data1.push(data.grade1[key]);
		}
		var data2=[];
		for(var key in data.grade2){
			data2.push(data.grade2[key]);
		}
		var data3=[];
		for(var key in data.grade3){
			data3.push(data.grade3[key]);
		}
	option = {
	    title : {
	        text: '个人推荐统计'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['1级伙伴','2级伙伴','3级伙伴']
	    },
	    toolbox: {
	        show : false,
	        feature : {
	            dataZoom: {},
	            dataView: {readOnly: false},
	            magicType: {type: ['line', 'bar']},
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data :xAxisdata
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            axisLabel : {
	                formatter: '{value} 人'
	            }
	        }
	    ],
	    series : [
	        {
	            name:'1级伙伴',
	            type:'line',
	            data:data1,
	            markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }
	        },
	        {
	            name:'2级伙伴',
	            type:'line',
	            data:data2,
	            markPoint : {
	                data : [
	                    {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name : '平均值'}
	                ]
	            }
	        },
	         {
	            name:'3级伙伴',
	            type:'line',
	            data:data3,
	            markPoint : {
	                data : [
	                    {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name : '平均值'}
	                ]
	            }
	        }
	    ]
	};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
	}

	//推广统计的初始化函数
	var oprationHandler=function(){
		$('.promotion').on('click',function(){
			$('#promotionform').ajaxSubmit({
				dataType:"json",
				success:function(json){
					console.log(json);
					initChartHandler('main',json);
				}
			})
		})
	};

	//初始化个人销售的函数
	var saleintHander=function(id,data){
		var myChart=echarts.init(document.getElementById(id));
		var xAxisdata=[];
		for(var key in data.sales){
			xAxisdata.push(key);
		}
		var data1=[];
		for(var key in data.sales){
			data1.push(data.sales[key]);
		}
		option = {
	    title : {
	        text: '个人推荐统计'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['销售统计']
	    },
	    toolbox: {
	        show : false,
	        feature : {
	            dataZoom: {},
	            dataView: {readOnly: false},
	            magicType: {type: ['line', 'bar']},
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data :xAxisdata
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            axisLabel : {
	                formatter: '{value} 人'
	            }
	        }
	    ],
	    series : [
	        {
	            name:'销售统计',
	            type:'line',
	            data:data1,
	            markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }
	        },
	       
	    ]
	};


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
	}
	//个人销售统计初始化函数
	var saleHandler=function(){
		$('.salebtn').on('click',function(){
			$('#saleform').ajaxSubmit({
				dataType:'json',
				success:function(json){
					if(json.message.type=="success"){
						saleintHander('salemain',json);
					}
				}
			})
		})
	}

	//个人提提现统计初始化函数
	whitdrawchartHandler=function(id,data){
		var myChart=echarts.init(document.getElementById(id));
		var xAxisdata=[];
		for(var key in data.withDraws){
			xAxisdata.push(key);
		}
		var data1=[];
		for(var key in data.withDraws){
			data1.push(data.withDraws[key]);
		}
		option = {
	    title : {
	        text: '个人提现统计'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['提现统计']
	    },
	    toolbox: {
	        show : false,
	        feature : {
	            dataZoom: {},
	            dataView: {readOnly: false},
	            magicType: {type: ['line', 'bar']},
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data :xAxisdata
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            axisLabel : {
	                formatter: '{value} 元'
	            }
	        }
	    ],
	    series : [
	        {
	            name:'提现统计',
	            type:'line',
	            data:data1,
	            markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }
	        },
	       
	    ]
	};
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
	}

	//个人提现统计
	var whitdrawHandler=function(){
		$('.wthidrawbtn').on('click',function(){
			$('#withdrawform').ajaxSubmit({
				dataType:'json',
				success:function(json){
					if(json.message.type=='success'){
						whitdrawchartHandler('whitdrawmain',json);
					}
				}
			})
		})
	}
	//个人销量统计初始化函数
	var saleCountChartHandler=function(id,data){
		var myChart=echarts.init(document.getElementById(id));
		var xAxisdata=[];
		for(var key in data.counts){
			xAxisdata.push(key);
		}
		var data1=[];
		for(var key in data.counts){
			data1.push(data.counts[key]);
		}
		option = {
	    title : {
	        text: '个人销量统计'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['销量统计']
	    },
	    toolbox: {
	        show : false,
	        feature : {
	            dataZoom: {},
	            dataView: {readOnly: false},
	            magicType: {type: ['line', 'bar']},
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data :xAxisdata
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            axisLabel : {
	                formatter: '{value} 个'
	            }
	        }
	    ],
	    series : [
	        {
	            name:'销量统计',
	            type:'line',
	            data:data1,
	            markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }
	        },
	       
	    ]
	};
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
	}

	//个人销量统计
	var salecountHandler=function(){
		$('.salecountbtn').on('click',function(){
			$('#salecountform').ajaxSubmit({
				dataType:'json',
				success:function(json){
					saleCountChartHandler("salecountmain",json);
				}
			})
		})
	}

	//每日增加代理商个数
	agentChartHanler=function(id,data){
		var myChart=echarts.init(document.getElementById(id));
		var xAxisdata=[];
		for(var key in data.agents){
			xAxisdata.push(key);
		}
		var data1=[];
		for(var key in data.agents){
			data1.push(data.agents[key]);
		}
		option = {
	    title : {
	        text: '代理商增加个数'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['代理商增加个数统计']
	    },
	    toolbox: {
	        show : false,
	        feature : {
	            dataZoom: {},
	            dataView: {readOnly: false},
	            magicType: {type: ['line', 'bar']},
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data :xAxisdata
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            axisLabel : {
	                formatter: '{value} 个'
	            }
	        }
	    ],
	    series : [
	        {
	            name:'销量统计',
	            type:'line',
	            data:data1,
	            markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }
	        },
	       
	    ]
	};
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
	}

	//每日增加代理商的个数
	var agrentIncreaseHandler=function(){
		$('.agentIncreasebtn').on('click',function(){
			$('#agentIncreaseform').ajaxSubmit({
				dataType:'json',
				success:function(json){
					console.log(json);
					agentChartHanler('agentmain',json)
				}
			})
		})
	}

	//代理商推广统计
	var agentPromotionChartHandler = function(id,data){
		var myChart=echarts.init(document.getElementById(id));
		var xAxisdata=[];
		for(var key in data.promotions){
			xAxisdata.push(key);
		}
		var data1=[];
		for(var key in data.promotions){
			data1.push(data.promotions[key]);
		}
		option = {
	    title : {
	        text: '代理商推广'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['代理商推广个数统计']
	    },
	    toolbox: {
	        show : false,
	        feature : {
	            dataZoom: {},
	            dataView: {readOnly: false},
	            magicType: {type: ['line', 'bar']},
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data :xAxisdata
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            axisLabel : {
	                formatter: '{value} 人'
	            }
	        }
	    ],
	    series : [
	        {
	            name:'代理商推广统计',
	            type:'line',
	            data:data1,
	            markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }
	        },
	       
	    ]
	};
	// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
	}

	//代理商推广统计
	var agentPromotionHandler=function(){
		$('.agentPromotionbtn').on('click', function(){
			$('#agentPromotionform').ajaxSubmit({
				dataType:'json',
				success:function(json){
					agentPromotionChartHandler('agentIncressmain',json);
				}
			})
		})
	}

	//代理商添加用户统计
	var agentValidUsersChartHandler =function(id,data){
		var myChart=echarts.init(document.getElementById(id));
		var xAxisdata=[];
		for(var key in data.validUsers){
			xAxisdata.push(key);
		}
		var data1=[];
		for(var key in data.validUsers){
			data1.push(data.validUsers[key]);
		}
		option = {
	    title : {
	        text: '代理商推广'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['代理商添加用户个数统计']
	    },
	    toolbox: {
	        show : false,
	        feature : {
	            dataZoom: {},
	            dataView: {readOnly: false},
	            magicType: {type: ['line', 'bar']},
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data :xAxisdata
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            axisLabel : {
	                formatter: '{value} 人'
	            }
	        }
	    ],
	    series : [
	        {
	            name:'代理商添加用户个数统计',
	            type:'line',
	            data:data1,
	            markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }
	        },
	       
	    ]
	};
	// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
	}

	//代理商添加用户的统计
	var agentValidUsersHandler=function(){
		$('.agentValidUsersbtn').on('click',function(){
			$('#agentValidUsersform').ajaxSubmit({
				dataType:'json',
				success:function(json){
					//console.log(json);
					agentValidUsersChartHandler('agentValidUsersmain',json);
				}
			})
		})
	}

	//每天合伙人统计函数
	var partnerIncreaseChartHandler=function(id,data){
		var myChart=echarts.init(document.getElementById(id));
		var xAxisdata=[];
		for(var key in data.partners){
			xAxisdata.push(key);
		}
		var data1=[];
		for(var key in data.partners){
			data1.push(data.partners[key]);
		}
		option = {
	    title : {
	        text: '合伙人增加统计'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['合伙人增加统计']
	    },
	    toolbox: {
	        show : false,
	        feature : {
	            dataZoom: {},
	            dataView: {readOnly: false},
	            magicType: {type: ['line', 'bar']},
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data :xAxisdata
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            axisLabel : {
	                formatter: '{value} 人'
	            }
	        }
	    ],
	    series : [
	        {
	            name:'代理商添加用户个数统计',
	            type:'line',
	            data:data1,
	            markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }
	        },
	       
	    ]
	};
	// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
	}

	//每日添加合伙人统计
	var partnerIncreaseHandler=function(){
		$('.partnerIncreasebtn').on('click',function(){
			$('#partnerIncreaseform').ajaxSubmit({
				dataType:'json',
				success:function(json){
					console.log(json);
					partnerIncreaseChartHandler('partermain',json);
				}
			})
		});
	}

	//合伙人推广统计画图
	var partnerPromotionChartHander = function(id,data){
		var myChart=echarts.init(document.getElementById(id));
		var xAxisdata=[];
		for(var key in data.promotions){
			xAxisdata.push(key);
		}
		var data1=[];
		for(var key in data.promotions){
			data1.push(data.promotions[key]);
		}
		option = {
	    title : {
	        text: '合伙人增加统计'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['合伙人增加统计']
	    },
	    toolbox: {
	        show : false,
	        feature : {
	            dataZoom: {},
	            dataView: {readOnly: false},
	            magicType: {type: ['line', 'bar']},
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data :xAxisdata
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            axisLabel : {
	                formatter: '{value} 人'
	            }
	        }
	    ],
	    series : [
	        {
	            name:'合伙人增加统计',
	            type:'line',
	            data:data1,
	            markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }
	        },
	       
	    ]
	};
	// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
	}

	//合伙人推广统计
	var partnerPromotionHander =function(){
		$('.partnerPromotionbtn').on('click',function(){
			$('#partnerPromotionform').ajaxSubmit({
				dataType:'json',
				success:function(json){

					partnerPromotionChartHander('partnerPromotionmain',json);
				}
			})
		})
	}

	//合伙人添加用户画图
	var partnerPromotionChartHander = function(id,data){
		var myChart=echarts.init(document.getElementById(id));
		var xAxisdata=[];
		for(var key in data.validUsers){
			xAxisdata.push(key);
		}
		var data1=[];
		for(var key in data.validUsers){
			data1.push(data.validUsers[key]);
		}
		option = {
	    title : {
	        text: '合伙人增加统计'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['合伙人增加统计']
	    },
	    toolbox: {
	        show : false,
	        feature : {
	            dataZoom: {},
	            dataView: {readOnly: false},
	            magicType: {type: ['line', 'bar']},
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data :xAxisdata
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            axisLabel : {
	                formatter: '{value} 人'
	            }
	        }
	    ],
	    series : [
	        {
	            name:'合伙人增加用户统计',
	            type:'line',
	            data:data1,
	            markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }
	        },
	       
	    ]
	};
	// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
	}

	//合伙人添加用户统计
	var partnerValidUsersHandler =function(){
		$('.partnerValidUsersbtn').on('click',function(){
			$('#partnerValidUsersform').ajaxSubmit({
				dataType:'json',
				success:function(json){

					partnerPromotionChartHander('partnerValidUsersmain',json);
				}
			})
		})
	}


	var userIncreaseChartHander = function(id,data){
		var myChart=echarts.init(document.getElementById(id));
		var xAxisdata=[];
		for(var key in data.validUsers){
			xAxisdata.push(key);
		}
		var data1=[];
		for(var key in data.validUsers){
			data1.push(data.validUsers[key]);
		}
		option = {
	    title : {
	        text: '每日用户增加统计'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['每日用户增加统计']
	    },
	    toolbox: {
	        show : false,
	        feature : {
	            dataZoom: {},
	            dataView: {readOnly: false},
	            magicType: {type: ['line', 'bar']},
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data :xAxisdata
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            axisLabel : {
	                formatter: '{value} 人'
	            }
	        }
	    ],
	    series : [
	        {
	            name:'每日用户增加统计',
	            type:'line',
	            data:data1,
	            markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }
	        },
	       
	    ]
	};
	// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
	}

	//个人消费统计
	var userIncreaseHandler =function(){
		$('.userIncreasebtn').on('click',function(){
			$('#userIncreaseform').ajaxSubmit({
				dataType:'json',
				success:function(json){
					console.log(json);
					userIncreaseChartHander('userIncreasemain',json);
				}
			})
		})
	}


	var comsumptionChartHander = function(id,data){
		var myChart=echarts.init(document.getElementById(id));
		var xAxisdata=[];
		for(var key in data.comsumptions){
			xAxisdata.push(key);
		}
		var data1=[];
		for(var key in data.comsumptions){
			data1.push(data.comsumptions[key]);
		}
		option = {
	    title : {
	        text: '个人消费统计'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['个人消费统计']
	    },
	    toolbox: {
	        show : false,
	        feature : {
	            dataZoom: {},
	            dataView: {readOnly: false},
	            magicType: {type: ['line', 'bar']},
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data :xAxisdata
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            axisLabel : {
	                formatter: '{value} 元'
	            }
	        }
	    ],
	    series : [
	        {
	            name:'个人消费统计',
	            type:'line',
	            data:data1,
	            markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }
	        },
	       
	    ]
	};
	// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
	}

	//个人消费统计
	var comsumptionHandler =function(){
		$('.comsumptionbtn').on('click',function(){
			$('#comsumptionform').ajaxSubmit({
				dataType:'json',
				success:function(json){
					//console.log(json);
					comsumptionChartHander('comsumptionmain',json);
				}
			})
		})
	}


	var feeSplitAmountChartHander = function(id,data){
		var myChart=echarts.init(document.getElementById(id));
		var xAxisdata=[];
		for(var key in data.amounts){
			xAxisdata.push(key);
		}
		var data1=[];
		for(var key in data.amounts){
			data1.push(data.amounts[key]);
		}
		option = {
	    title : {
	        text: '每日分润支出统计'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['每日分润支出统计']
	    },
	    toolbox: {
	        show : false,
	        feature : {
	            dataZoom: {},
	            dataView: {readOnly: false},
	            magicType: {type: ['line', 'bar']},
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data :xAxisdata
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            axisLabel : {
	                formatter: '{value} 人'
	            }
	        }
	    ],
	    series : [
	        {
	            name:'每日分润支出统计',
	            type:'line',
	            data:data1,
	            markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }
	        },
	       
	    ]
	};
	// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
	}

	//个人丰润支出统计
	var feeSplitAmountHandler =function(){
		$('.feeSplitAmountbtn').on('click',function(){
			$('#feeSplitAmountform').ajaxSubmit({
				dataType:'json',
				success:function(json){
					console.log(json);
					feeSplitAmountChartHander('feeSplitAmountmain',json);
				}
			})
		})
	}

	var awardAmountChartHander = function(id,data){
		var myChart=echarts.init(document.getElementById(id));
		var xAxisdata=[];
		for(var key in data.amounts){
			xAxisdata.push(key);
		}
		var data1=[];
		for(var key in data.amounts){
			data1.push(data.amounts[key]);
		}
		option = {
	    title : {
	        text: '推广推荐奖励统计'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['推广推荐奖励统计']
	    },
	    toolbox: {
	        show : false,
	        feature : {
	            dataZoom: {},
	            dataView: {readOnly: false},
	            magicType: {type: ['line', 'bar']},
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data :xAxisdata
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            axisLabel : {
	                formatter: '{value} 人'
	            }
	        }
	    ],
	    series : [
	        {
	            name:'推广推荐奖励统计',
	            type:'line',
	            data:data1,
	            markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }
	        },
	       
	    ]
	};
	// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
	}


	//推荐奖励统计
	var awardAmountHandler =function(){
		$('.awardAmountbtn').on('click',function(){
			$('#awardAmountform').ajaxSubmit({
				dataType:'json',
				success:function(json){
					console.log(json);
					awardAmountChartHander('awardAmountmain',json);
				}
			})
		})
	}

	//分润统计画图函数
	var feeSplitAmountterraverHander = function(id,data){
		var myChart=echarts.init(document.getElementById(id));
		var xAxisdata=[];
		for(var key in data.amounts){
			xAxisdata.push(key);
		}
		var data1=[];
		for(var key in data.amounts){
			data1.push(data.amounts[key]);
		}
		option = {
	    title : {
	        text: '分润统计'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['分润金额']
	    },
	    toolbox: {
	        show : false,
	        feature : {
	            dataZoom: {},
	            dataView: {readOnly: false},
	            magicType: {type: ['line', 'bar']},
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data :xAxisdata
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            axisLabel : {
	                formatter: '{value} 元'
	            }
	        }
	    ],
	    series : [
	        {
	            name:'分润金额',
	            type:'line',
	            data:data1,
	            markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }
	        },
	       
	    ]
	};
	// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
	}

	//分润统计的函数
	var feeSplitAmountHandler = function(){
		$('.feeSplitAmountbtn').on('click',function(){
			$('#feeSplitAmountform').ajaxSubmit({
				dataType:'json',
				success:function(json){
					//console.log(json);
					feeSplitAmountterraverHander('feeSplitAmountmain',json);
				}
			})
		})
	}

	//推广奖励统计绘图
	var promotionChartHandler = function(id,data){
		var myChart= echarts.init(document.getElementById(id));
		var xAxisdata=[];
		for(var key in data.amounts){
			xAxisdata.push(key);
		}
		var data1=[];
		for(var key in data.amounts){
			data1.push(data.amounts[key]);
		}
		option = {
	    title : {
	        text: '推广奖励统计'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['推广奖励金额']
	    },
	    toolbox: {
	        show : false,
	        feature : {
	            dataZoom: {},
	            dataView: {readOnly: false},
	            magicType: {type: ['line', 'bar']},
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data :xAxisdata
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            axisLabel : {
	                formatter: '{value} 元'
	            }
	        }
	    ],
	    series : [
	        {
	            name:'推广奖励金额',
	            type:'line',
	            data:data1,
	            markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }
	        },
	       
	    ]
	};
	// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
	}

	//推广奖励统计
	var promotionAwardHandler = function(){
		$('.promotionAwardbtn').on('click',function(){
			$('#promotionAwardform').ajaxSubmit({
				dataType:'json',
				success:function(json){
					console.log(json);
					promotionChartHandler('awardAmountmain',json);
					
				}
			})
		});
	}
	return {
		init:function(){
			//初始化个人推荐统计初始化函数
			oprationHandler();
			//初始化个人销售统计
			saleHandler();
			//个人提现统计
			whitdrawHandler();
			//初始化个人销量统计
			salecountHandler();
			//每日增加代理商的个数统计
			agrentIncreaseHandler();
			//代理商推广统计
			agentPromotionHandler();
			//代理商添加用户的统计
			agentValidUsersHandler();
			//初始化每天增加合伙人的函数
			partnerIncreaseHandler();
			//初始化合伙人推广统计
			partnerPromotionHander();
			//初始化合伙人添加用户统计
			partnerValidUsersHandler();
			//初始化每日增加用户统计
			userIncreaseHandler();
			//初始化个人消费统计
			comsumptionHandler();
			//初始化个人丰润支出
			feeSplitAmountHandler();
			//初始化推广推荐奖励
			awardAmountHandler();
			//初始化分润统计的函数
			feeSplitAmountHandler();
			//初始化推广奖励的函数
			promotionAwardHandler();
		}
	}
}();
Chart.init();