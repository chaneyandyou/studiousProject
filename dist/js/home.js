$(function(){var o=store.get("userInfo");$.loginStatus(o),function(){$.ajax({url:"http://182.92.220.222:8080/index/hotTeacher",type:"GET",success:function(o){console.log(o),console.log(typeof o);for(var e in o)console.log(e),console.log(o)},error:function(o){alert("错误！！")},xhrFields:{withCredentials:!0}})}(),$.logout()});