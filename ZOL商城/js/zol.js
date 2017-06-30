$(function() {
	$(".li-buy").eq(0).mouseenter(function() {
		$(".focus-none").css("display", "block");
	})
	$(".li-buy").eq(0).mouseleave(function() {
		$(".focus-none").css("display", "none");
	})
	$(".focus-none p").mouseenter(function() {
		$(this).css("color", "red");
	})
	$(".focus-none p").mouseleave(function() {
		$(this).css("color", "#666");
	})
	$(".li-buy").eq(1).mouseenter(function() {
		$(".code").css("display", "block");
	})
	$(".li-buy").eq(1).mouseleave(function() {
		$(".code").css("display", "none");
	})
	$(".li-buy").eq(2).mouseenter(function() {
		$(".custom").css("display", "block");
	})
	$(".li-buy").eq(2).mouseleave(function() {
		$(".custom").css("display", "none");
	})
	$(".tabbox li").mouseenter(function() {
		//console.log("123")	
		$(this).find("div").css("display", "block").animate({ left: -70 }, 100, );
		$(this).css("background", "red");
		$(this).find(".cial").css("background", "#fff").css("color", "red");
	})
	$(".tabbox li").mouseleave(function() {
		//console.log("123")
		$(this).css("background", "#4c4c4c");
		$(this).find("div").animate({ left: 0 }, 0).css("display", "none");
		$(this).find(".cial").css("background", "red").css("color", "#fff");
	})
	$(".city-name").mousemove(function() {
		//console.log("123");
		$(".city-name").css("border-color", "#eee").css("border-bottom-color", "#fff");
		$(".list-city").css("display", "block");
		$(".city-name").find(".iconfont").css("-webkit-transform", "rotate(180deg)").css("text-indent", "0px");;
	})
	$(".list-city").mousemove(function() {
		console.log("123")
		$(".city-name").css("border-color", "#eee").css("border-bottom-color", "#fff");
		$(".list-city").css("display", "block");
		$(".city-name").find(".iconfont").css("-webkit-transform", "rotate(180deg)").css("text-indent", "0px");
	})
	$(".list-city").mouseleave(function() {
		$(".city-name").css("border-color", "#fff").css("border-bottom-color", "#fff");
		$(".list-city").css("display", "none");
		$(".city-name").find(".iconfont").css("-webkit-transform", "rotate(0deg)");
	})
	$(".city-name").mouseleave(function() {
		//console.log("123");
		$(".city-name").css("border-color", "#fff").css("border-bottom-color", "#fff");
		$(".list-city").css("display", "none");
		$(".city-name").find(".iconfont").css("-webkit-transform", "rotate(0deg)");
	})
	$(".list-city li").click(function() {
		//$(".list-city li").removeAttr("class);
		$(".list-city li").removeAttr("class");
		$(this).attr("class", "active a");
		$(".big-city").text($(this).find("a").html());
	})
	$(".nav-menu-container li").mousemove(function() {
		//console.log(123);
		$(this).css("background", "#fff");
		$(this).find(".contain").find("a").css("color", "red");
		$(this).find(".nav-menu-li").css("color", "red");
		$(this).find(".nav-menu-boult").css("color", "red");
		//		$(this).find(".iconfont").css("color","yellow");
		$(".category-nav-menu").find(".clearfix").show();
	})
	$(".nav-menu-container li").mouseleave(function() {
		//console.log(123);
		$(this).css("background", "#b1191a");
		$(this).find(".contain").find("a").css("color", "#fff");
		$(this).find(".nav-menu-li").css("color", "#fff");
		$(this).find(".nav-menu-boult").css("color", "#fff");
		//		$(this).find(".iconfont").css("color","#e0a3a3");
		$(".category-nav-menu").find(".clearfix").hide();
	})
	//ajax获取轮播图数据
	$.get("http://127.0.0.1:8020/ZOL%E5%95%86%E5%9F%8E/code/Json.json", function(d) {
		//console.log("123");
		var arr = d.lunbotu1;
		for(var i = 0; i < arr.length; i++) {
			var obj = arr[i]; //每个图片的数据

			//创建li节点
			var li1 = $("<li><img src=" + obj.img + " /></li>").appendTo(".right-roll-lunbotu");
			var li2 = $("<li>" + (i + 1) + "</li>").appendTo(".right-roll-num");
			if(i == 0) {
				li2.addClass("active")
			}
		}
		//轮播
		lunbo();
	})
	
	//轮播
	function lunbo() {
		//jq轮播图
		var list1 = $(".right-roll-lunbotu");
		var list2 = $(".right-roll-num");
		var li1 = $(".right-roll-lunbotu li");
		var li2 = $(".right-roll-num li");

		//复制第一张图到最后
		li1.first().clone(true).appendTo(list1);

		//
		var size = $(".right-roll-lunbotu li").size();
		list1.width(740 * size);

		//开启定时器
		var i = 0;
		var timer = setInterval(function() {
			i++;
			move();
		}, 2000);

		function move() {

			if(i < 0) {
				list1.css("left", -740 * (size - 1));
				i = size - 2;
			}

			if(i >= size) {
				list1.css("left", 0);
				i = 1;
			}

			list1.stop().animate({ left: -i * 740 }, 1000);

			li2.eq(i).addClass("active").siblings().removeClass("active");
			if(i == size - 1) {
				li2.eq(0).addClass("active").siblings().removeClass("active");
			}
		}

		//上一页
		$(".prev").click(function() {
			i--;
			move();
		})

		//下一页
		$(".next").click(function() {
			i++;
			move();
		})

		li2.mouseenter(function() {
			i = $(this).index();
			move();
		})

		$(".version-right-roll").hover(function() {
				clearInterval(timer);
			},
			function() {
				timer = setInterval(function() {
					i++;
					move();
				}, 3000);
			})
	}
	
	$(".top-arrow").click(function() {
		//		console.log(123);
		$("html,body").animate({ scrollTop: 0 });
	})
	
	//倒计时
	//结束日期
	$.get("http://127.0.0.1:8020/ZOL%E5%95%86%E5%9F%8E/code/Json.json", function(d){
//		console.log(d);
		var arr = d.daojishi;
		for(var i = 0; i < arr.length; i++) {
			var obj = arr[i];
//					console.log(d);
				$("<a href='#'><img src='"+ obj.img +"'/></a>").prependTo($(".ztuan-section-list>li").eq(i))
//					console.log()
			var offsetTime = new Date(obj.finishDate) - new Date();
			var second = parseInt(offsetTime / 1000); //665843
//			console.log(second);
		(function(index, second){
//			console.log(index);
//			console.log(second);
				//开启定时器，倒计时
			var timer = setInterval(function() {
					second--;
//					console.log(second)
					if(second <= 0) {
						clearInterval(timer);
						alert("活动结束");
					}
					var hour = parseInt(second / 3600); //时
					var min = parseInt(second % 3600 / 60); //分
					var sec = parseInt(second % 60); //秒
					hour = hour < 0 ? "00" : (hour < 10 ? "0" + hour : hour);
//					console.log(hour);
					min = min < 0 ? "00" : (min < 10 ? "0" + min : min);
//					console.log(min)
					sec = sec < 0 ? "00" : (sec < 10 ? "0" + sec : sec);
//					console.log(sec);
					$(".countdown").eq(index).find("span").eq(0).html(hour);
					$(".countdown").eq(index).find("span").eq(1).html(min);
					$(".countdown").eq(index).find("span").eq(2).html(sec);
				}, 1000);
			})(i,second);
		}
	})
	
	//更改version-right-list数据
	$.get("http://127.0.0.1:8020/ZOL%E5%95%86%E5%9F%8E/code/Json.json",function(d){
		var arr=d.version;
		for(var i=0;i<arr.length;i++){
			var obj=arr[i];
//			console.log(obj)
			$("<h5><a href='#'>"+obj.h5+"</a></h5>").appendTo($(".version-right-list li").eq(i));
			$("<p>"+obj.p+"</p>").appendTo($(".version-right-list li").eq(i));
			$("<a href='#' class='pic'><img src="+obj.img+"/></a>").appendTo($(".version-right-list li").eq(i));
			
		}
		$(".pic").find("img").mouseenter(function() {
//		console.log(13);
			$(this).animate({ position: "absolute", left: "43px" }, "show(200)");
		})
		$(".pic").find("img").mouseleave(function() {
			//console.log(123)		
			$(this).stop();
			$(this).animate({ position: "absolute", left: "48px" }, "show");
		})
	})
	
	//更改version-left的数据
	$.get("http://127.0.0.1:8020/ZOL%E5%95%86%E5%9F%8E/code/Json.json",function(d){
		var arr=d.left;
		for(var i=0;i<arr.length;i++){
			var obj=arr[i];
//			console.log(obj);
			$("<a href='#' ><img src="+obj.img+"/></a>").appendTo($(".version-left"));
		}
	})
	
	$.get("http://127.0.0.1:8020/ZOL%E5%95%86%E5%9F%8E/code/Json.json",function(d){
		var arr=d.first;
		for(var i=0;i<arr.length;i++){
			var obj=arr[i];
//			console.log(obj);
			//动态添加1F
			$("<img src="+obj.img+"/>").appendTo($(".computer-left a"));
			//动态添加2F
			$("<img src="+obj.img+"/>").appendTo($(".computer-left1 a"));
			//动态添加3F
			$("<img src="+obj.img+"/>").appendTo($(".computer-left2 a"));
		}
	})
	//吸顶效果
	$(window).on("scroll",function(){		
		if($(this).scrollTop()>650){
			$("#top-suspend").stop(true,true).fadeIn();
		}else{
			$("#top-suspend").stop(true,true).fadeOut();
		}
	})
	
	
//	轮播图二
	$.get("http://127.0.0.1:8020/ZOL%E5%95%86%E5%9F%8E/code/Json.json", function(d){
		var arr=d.lunbotu2;
		for(var i=0;i<arr.length;i++){
			var obj=arr[i];//每个图片的数据
			//创建li节点
//			console.log(obj);
			var li3=$("<a href='#' ><img src="+obj.img+"/></a>").appendTo($(".box1-list1"));
			console.log(li3);
			var li4=$("<span></span>").appendTo(".box1-list2");
			console.log(li4);	
			if(i == 0) {				
				li4.addClass("active1");
			}
		}
		//轮播
		lunbo1();
	})
	function lunbo1(){
		//jq轮播图
		var list3 = $(".box1-list1");
		var list4 = $(".box1-list2");
		var li3 = $(".box1-list1 a");
		var li4 = $(".box1-list2 span");

		//复制第一张图到最后
		li3.first().clone(true).appendTo(list3);

		//
		var size = $(".box1-list1 a").size();
		list3.width(840 * size);

		//开启定时器
		var i = 0;
		var timer = setInterval(function() {
			i++;
			move();
		}, 2000);

		function move() {

			if(i < 0) {
				list3.css("left", -840 * (size - 1));
				i = size - 2;
			}

			if(i >= size) {
				list3.css("left", 0);
				i = 1;
			}

			list3.stop().animate({ left: -i * 840 }, 1000);

			li4.eq(i).addClass("active1").siblings().removeClass("active1");
			if(i == size - 1) {
				li4.eq(0).addClass("active1").siblings().removeClass("active1");
			}
		}

		//上一页
		$(".box1-prev").click(function() {
			i--;
			move();
		})

		//下一页
		$(".box1-next").click(function() {
			i++;
			move();
		})

		li4.mouseenter(function() {
			i = $(this).index();
			move();
		})

		$(".box1").hover(function() {
				clearInterval(timer);
			},
			function() {
				timer = setInterval(function() {
					i++;
					move();
				}, 3000);
			})
	}
		

	//tab切换1
	$(".computer-right-list").find("li").eq(0).show().siblings().hide();//默认第一个显示
	$(".waretype-tab li").mouseenter(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		var index = $(this).index();
		$(".computer-right-list>li").eq( index ).show().siblings().hide();
	})
	//tab切换2
	$(".computer-right-list1").find("li").eq(0).show().siblings().hide();//默认第一个显示
	$(".waretype-tab1 li").mouseenter(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		var index = $(this).index();
		$(".computer-right-list1>li").eq( index ).show().siblings().hide();
	})
	//tab切换3
	$(".computer-right-list2").find("li").eq(0).show().siblings().hide();//默认第一个显示
	$(".waretype-tab2 li").mouseenter(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		var index = $(this).index();
		$(".computer-right-list2>li").eq( index ).show().siblings().hide();
	})
	
	$.get("http://127.0.0.1:8020/ZOL%E5%95%86%E5%9F%8E/code/Json.json", function(d){
		var arr=d.remen;
		for(var i=0;i<arr.length;i++){
			var obj=arr[i];
			//动态添加1F
			$("<img src="+obj.img+"/>").appendTo($(".box2 a").eq(i))
			//动态添加2F
			$("<img src="+obj.img+"/>").appendTo($(".box4 a").eq(i))
			//动态添加3F
			$("<img src="+obj.img+"/>").appendTo($(".box6 a").eq(i))
		}
		
	})
	
	$.get("http://127.0.0.1:8020/ZOL%E5%95%86%E5%9F%8E/code/Json.json", function(d){
		var arr=d.product;
		for(var i=0;i<arr.length;i++){
			var obj=arr[i];
			//动态添加1F
			$("<a href='#'><img src="+obj.img+" class='productlia'/></a>").appendTo($(".product-series li").eq(i));
			$("<h5 class='name'><a href='#'>"+obj.a+"</a></h5>").appendTo($(".product-series li").eq(i));
			$("<span class='price'>"+obj.span+"</span>").appendTo($(".product-series li").eq(i));
			//动态添加2F
			$("<a href='#'><img src="+obj.img+" class='productlia'/></a>").appendTo($(".product-series1 li").eq(i));
			$("<h5 class='name'><a href='#'>"+obj.a+"</a></h5>").appendTo($(".product-series1 li").eq(i));
			$("<span class='price'>"+obj.span+"</span>").appendTo($(".product-series1 li").eq(i));
			//动态添加3F
			$("<a href='#'><img src="+obj.img+" class='productlia'/></a>").appendTo($(".product-series2 li").eq(i));
			$("<h5 class='name'><a href='#'>"+obj.a+"</a></h5>").appendTo($(".product-series2 li").eq(i));
			$("<span class='price'>"+obj.span+"</span>").appendTo($(".product-series2 li").eq(i));
		}
		
	})
	
	$.get("http://127.0.0.1:8020/ZOL%E5%95%86%E5%9F%8E/code/Json.json", function(d){
		var arr=d.region;
		for(var i=0;i<arr.length;i++){
			var obj=arr[i];
			//动态添加1F
			$("<a href='#'><img src="+obj.img+" /></a>").appendTo($(".computer-region-list li").eq(i));
			//动态添加2F
			$("<a href='#'><img src="+obj.img+" /></a>").appendTo($(".computer-region-list1 li").eq(i));
			//动态添加3F
			$("<a href='#'><img src="+obj.img+" /></a>").appendTo($(".computer-region-list2 li").eq(i));
		}
	})
	$.get("http://127.0.0.1:8020/ZOL%E5%95%86%E5%9F%8E/code/Json.json",function(d){
		var arr=d.remen;
		for(var i=0;i<arr.length;i++){
			var obj=arr[i];
			$("<a href='#' class='pict'><img src="+obj.img+" /></a>").appendTo($(".recommend-section-list li").eq(i));
			$("<h4><a href='#'>"+obj.h4+"</a></h4>").appendTo($(".recommend-section-list li").eq(i));
			$("<span>"+obj.span+"</span>").appendTo($(".recommend-section-list li").eq(i));
		}
		
	})
})