var ksWebApp=function(){
	var pageName = ''; //设置要加载页面的名字
	var collapsed = false; //sidebar collapsed
	var is_mobile = false; //is screen mobile?
	var is_mini_menu = false; //is mini-menu activated
	/*-----------------------------------------------------------------------------------*/
	/*	上下拉隐藏菜单
	/*-----------------------------------------------------------------------------------*/
	var handleSidebar = function () {
	jQuery('.sidebar-menu .has-sub > a').click(function () {
            var last = jQuery('.has-sub.open', $('.sidebar-menu'));
            last.removeClass("open");
            jQuery('.arrow', last).removeClass("open");
            jQuery('.sub', last).slideUp(200);
            
			var thisElement = $(this);
			var slideOffeset = -200;
            var slideSpeed = 200;
			
            var sub = jQuery(this).next();
            if (sub.is(":visible")) {
                jQuery('.arrow', jQuery(this)).removeClass("open");
                jQuery(this).parent().removeClass("open");
				sub.slideUp(slideSpeed, function () {
					if ($('#sidebar').hasClass('sidebar-fixed') == false) {
						ksWebApp.scrollTo(thisElement, slideOffeset);
					}
					handleSidebarAndContentHeight();
                });
            } else {
                jQuery('.arrow', jQuery(this)).addClass("open");
                jQuery(this).parent().addClass("open");
                sub.slideDown(slideSpeed, function () {
					if ($('#sidebar').hasClass('sidebar-fixed') == false) {
						ksWebApp.scrollTo(thisElement, slideOffeset);
					}
					handleSidebarAndContentHeight();
                });
            }
        });
		// Handle sub-sub menus
		jQuery('.sidebar-menu .has-sub .sub .has-sub-sub > a').click(function () {
            var last = jQuery('.has-sub-sub.open', $('.sidebar-menu'));
            last.removeClass("open");
            jQuery('.arrow', last).removeClass("open");
            jQuery('.sub', last).slideUp(200);
                
            var sub = jQuery(this).next();
            if (sub.is(":visible")) {
                jQuery('.arrow', jQuery(this)).removeClass("open");
                jQuery(this).parent().removeClass("open");
                sub.slideUp(200);
            } else {
                jQuery('.arrow', jQuery(this)).addClass("open");
                jQuery(this).parent().addClass("open");
                sub.slideDown(200);
            }
        });
	};
	/*-----------------------------------------------------------------------------------*/
	/*	侧边栏和主要内容大小匹配
	/*-----------------------------------------------------------------------------------*/
	var handleSidebarAndContentHeight = function () {
        var content = $('#content');
        var sidebar = $('#sidebar');
        var body = $('body');
        var height;

        if (body.hasClass('sidebar-fixed')) {
            height = $(window).height() - $('#header').height() + 1;
        } else {
            height = sidebar.height() + 20;
        }
        if (height >= content.height()) {
            content.attr('style', 'min-height:' + height + 'px !important');
        }
    }
	/*-----------------------------------------------------------------------------------*/
	/*	得到屏幕宽度
	/*-----------------------------------------------------------------------------------*/
    var getViewPort = function () {
        var e = window, a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return {
            width: e[a + 'Width'],
            height: e[a + 'Height']
        }
    }
    /*-----------------------------------------------------------------------------------*/
	/*	换肤
	/*-----------------------------------------------------------------------------------*/
	var handleThemeSkins = function () {
		// Handle theme colors
        var setSkin = function (color) {
            $('#skin-switcher').attr("href", "css/themes/" + color + ".css");
            $.cookie('skin_color', color);
        }
		$('ul.skins > li a').click(function () {
            var color = $(this).data("skin");
            setSkin(color);
        });
		
		 if ($.cookie('skin_color')) {
            setSkin($.cookie('skin_color'));
        }
	}
	/*-----------------------------------------------------------------------------------*/
	/*	上下拉隐藏菜单
	/*-----------------------------------------------------------------------------------*/
	var handleSidebarCollapse = function () {
		var viewport = getViewPort();
        if ($.cookie('mini_sidebar') === '1') {
			jQuery('.navbar-brand').addClass("mini-menu");
			jQuery('#sidebar').addClass("mini-menu");
			jQuery('#main-content').addClass("margin-left-50");
			collapsed = true;
        }
		jQuery('.sidebar-collapse').click(function () {
			if(is_mobile && !(is_mini_menu)){
				if(collapsed){
					jQuery('body').removeClass("slidebar");
					jQuery('.sidebar').removeClass("sidebar-fixed");
					if(is_fixed_header) {
						jQuery('#header').addClass("navbar-fixed-top");
						jQuery('#main-content').addClass("margin-top-100");
					}
					collapsed = false;
					$.cookie('mini_sidebar', '0');
				}
				else {
					jQuery('body').addClass("slidebar");
					jQuery('.sidebar').addClass("sidebar-fixed");
					if(is_fixed_header) {
						jQuery('#header').removeClass("navbar-fixed-top");
						jQuery('#main-content').removeClass("margin-top-100");
					}
					collapsed = true;
					$.cookie('mini_sidebar', '1');
					handleMobileSidebar();
				}
			}
			else { 
				var iconElem = document.getElementById("sidebar-collapse").querySelector('[class*="fa-"]');
				var iconLeft = iconElem.getAttribute("data-icon1");
				var iconRight = iconElem.getAttribute("data-icon2");
				if(collapsed){
					jQuery('.navbar-brand').removeClass("mini-menu");
					jQuery('#sidebar').removeClass("mini-menu");
					jQuery('#main-content').removeClass("margin-left-50");
					jQuery('.sidebar-collapse i').removeClass(iconRight);
					jQuery('.sidebar-collapse i').addClass(iconLeft);
					jQuery('.search').attr('placeholder', "Search");
					collapsed = false;
					$.cookie('mini_sidebar', '0');
				}
				else {
					jQuery('.navbar-brand').addClass("mini-menu");
					jQuery('#sidebar').addClass("mini-menu");
					jQuery('#main-content').addClass("margin-left-50");
					jQuery('.sidebar-collapse i').removeClass(iconLeft);
					jQuery('.sidebar-collapse i').addClass(iconRight);
					jQuery('.search').attr('placeholder', '');
					collapsed = true;
					$.cookie('mini_sidebar', '1');
				}
				$("#main-content").on('resize', function (e) {
					e.stopPropagation();
				});
			}
        });
	};
	/*---------------------------------------------------------------------------*/
	/*-----------------------------------------------------------------------------------*/
	/*	Data Tables
	/*-----------------------------------------------------------------------------------*/
	var handleDataTables = function () {
		$('#datatable').dataTable({
			"sPaginationType": "bs_full"
		});
		$('.datatable').each(function(){
			var datatable = $(this);
			// SEARCH - Add the placeholder for Search and Turn this into in-line form control
			var search_input = datatable.closest('.dataTables_wrapper').find('div[id$=_filter] input');
			search_input.attr('placeholder', 'Search');
			search_input.addClass('form-control input-sm');
			// LENGTH - Inline-Form control
			var length_sel = datatable.closest('.dataTables_wrapper').find('div[id$=_length] select');
			length_sel.addClass('form-control input-sm');
		});
	};
	return {
		init : function(){
			handleSidebar();//上下拉显示与隐藏
			handleSidebarCollapse();//点击显示或者隐藏侧面栏
			handleThemeSkins();//换肤
		},
		setPage:function(name){
			pageName = name;
		},
		isPage:function(name){
			return pageName == name ? true:false;
		},
		scrollTo: function (el, offeset) {
            pos = (el && el.size() > 0) ? el.offset().top : 0;
            jQuery('html,body').animate({
                scrollTop: pos + (offeset ? offeset : 0)
            }, 'slow');
        },
	}
}();
$(function() {		
	ksWebApp.setPage("xcharts");  
	ksWebApp.init(); 
});