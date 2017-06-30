

$(function(){
//	var verifyCode = new GVerify("v_container1");
//
//		document.getElementById("my_button").onclick = function(){
//			var res = verifyCode.validate(document.getElementById("code_input").value);
//			if(res){
//				alert("验证正确");
//			}else{
//				alert("验证码错误");
//			}
//		}
		
	$(".main-inner input").focus(function(){
//		console.log(123)
		$(this).css({"border":"1px solid #cd1f1f"});
	})
	$(".main-inner input").blur(function(){
//		console.log(123)
		$(this).css({"border":"1px solid #ccc"});
	})
	//	tab切换
	$(".main-inner").show();
	$(".main-write-top p").click(function(){
		$(".main-inner").hide();
//		$(".plain-login").show()
	})

})
