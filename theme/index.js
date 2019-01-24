$(function(){

	// 判断是否是pc端
	 function IsPC(){
		var userAgentInfo = navigator.userAgent;
		var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
		var flag = true;
		for (var v = 0; v < Agents.length; v++) {
		   if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
		  }
		return flag;
	}

	// 移动端导航显示隐藏
	$('.js_icon_handle').click(function(){
		if($(this).hasClass('active')){
			$('.js_wap_nav').removeClass('active');
			$(this).removeClass('active')
		}else{
			$(this).addClass('active')
			$('.js_wap_nav').addClass('active');
		}
	})

	if(IsPC()){
		// pc端二级菜单显示
		$('.js_wap_nav li').mouseenter(function(){
			$(this).children('.nav-list-child').stop().slideDown(200);
		}).mouseleave(function(){
			$(this).children('.nav-list-child').stop().slideUp(100);
		})
	}else{
		//移动端二级菜单显示
		$('.js_wap_nav li').click(function(){
			if($(this).find('.js_icon_direction').hasClass('active')){
				$(this).find('.nav-list-child').stop().slideUp(100);
				$(this).find('.js_icon_direction').removeClass('active');
			}else{
				$(this).find('.nav-list-child').stop().slideDown(200);
				$(this).find('.js_icon_direction').addClass('active');
			}
		})
	}

	
})