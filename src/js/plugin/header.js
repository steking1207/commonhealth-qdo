function changeWidth(){var pcNavH=innerWidth>768?$('.menu__content--lv1').outerHeight(true):50;$('.main').css({'padding-top':pcNavH+'px'});}
$('[data-menu-id="default"]').addClass('on');$('#pcHeader .menu--lv1 > li').hover(function(e){$(this).addClass('on').siblings().removeClass('on');},function(e){$(this).removeClass('on');$(this).find('.menu--lv2').children('li').removeClass('on');$('[data-menu-id="default"]').addClass('on');});$('#pcHeader .menu--lv2 > li').on('click',function(e){$(this).toggleClass('on').siblings().removeClass('on');$(this).find('.menuList').removeClass('on');setTimeout(function(){$(this).find('.menuLeaflet__text').children('.title,.description').addClass('line-clamp2');},1);});$('#pcHeader .menu__name--lv3').on('click',function(e){e.stopPropagation()
$(this).closest('.menuList').addClass('on');});$('#pcHeader .lastMenu__header .back').on('click',function(e){e.stopPropagation()
$(this).closest('.menuList').removeClass('on');})
var menu_headH=$('#mobileHeader .nav__head').outerHeight(true);$('#mobileHeader .nav__main').css({'margin-top':menu_headH})
changeWidth();$(window).resize(function(){changeWidth();if(innerWidth>768){$('body').removeClass('openMenu');$(this).find('.burger__icon').removeClass('active');$('[data-burger="open"]').find('.burger__icon').removeClass('active')}});$(window).on('scroll',function(){var scrollTop=$(this).scrollTop();if(scrollTop>$('.header').outerHeight(true)){$('.header').addClass('on');}else{$('.nav').css({'top':0})
$('.header,.nav').removeClass('on');}})
$('#pcHeader [data-fancy-select="search"]').select2({minimumResultsForSearch:Infinity,width:Infinity,containerCssClass:'fancySearch'});$('#mobileHeader [data-search="open"]').on('click',function(){$('body').addClass('openSearch');});$('#mobileHeader [data-search="close"]').on('click',function(){$('body').removeClass('openSearch');});$('#mobileHeader [data-id="clear-search"]').on('click',function(){$(this).siblings('input[name=keyword]').val('')});$('#mobileHeader [data-burger="open"]').on('click',function(){$('body').addClass('openMenu');$(this).find('.burger__icon').addClass('active')
$('[data-burger="close"]').find('.burger__icon').addClass('active')});$('#mobileHeader [data-burger="close"]').on('click',function(){$('body').removeClass('openMenu');$(this).find('.burger__icon').removeClass('active');$('[data-burger="open"]').find('.burger__icon').removeClass('active')});$('#mobileHeader [data-collapse="topic"]').on('click',function(){var $this=$(this),$parent=$(this).closest('#mobileHeader [data-collapse="group"]'),$target=$(this).next('#mobileHeader [data-collapse="content"]');$parent.toggleClass('opened');})
$('.menu').find('#mobileHeader [data-collapse="group"]').eq(0).children('#mobileHeader [data-collapse="topic"]').trigger('click');$(document).on('click','[data-id="user-tools"]',function(){$(this).find('.user__links').toggleClass('active');})
function check_login(){$.ajax({url:"https://www.commonhealth.com.tw/user",type:"get",dataType:"jsonp",jsonpCallback:"callback",success:function(data){if(!data.id){$('#mobileHeader .nav_member').html(`
    			<a href="https://m.commonhealth.com.tw/login" class="icon icon--verticalText icon__feature icon__feature--login">
    			<div class="icon__text">登入/加入會員</div>
    			</a>`);$('#mobileHeader .member_logout').hide();$("#pcHeader .member_action").html(`<div class="widget__account">
		    	<a href="https://www.commonhealth.com.tw/login" class="accountBtn accountBtn--login">登入</a>
		    	<a href="https://www.commonhealth.com.tw/register" class="accountBtn accountBtn--join">立即註冊</a>
	    	</div>`);}else{$('#mobileHeader .nav_member').html(`
    			<a href="https://m.commonhealth.com.tw/myFavorite.action" class="icon icon--verticalText icon__feature icon__feature--member">
    			<div class="icon__text">會員中心</div>
    			</a>`);$("#pcHeader .member_action").html(`<div class="user" data-id="user-tools">
	            <span>您好，</span>
	            <span class="user__name">`+data.name+`</span>
	            <div class="user__links">
	                <a href="https://www.commonhealth.com.tw/myFavorite.action">我的收藏</a>
	                <a href="http://topic.commonhealth.com.tw/edm/chdaily/book/" target="_blank">訂閱每日報</a>
	                <a href="https://www.commonhealth.com.tw/logout">登出</a>
	            </div>
	        </div>`);}}});}
check_login()