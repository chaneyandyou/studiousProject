$(function(){function e(){var e=new FormData($("#createForm")[0]);$.ajax({url:"http://182.92.220.222:8080/course/create?teacherId="+r,type:"post",data:e,cache:!1,processData:!1,contentType:!1,success:function(e){alert(e)},error:function(e){alert("错误！！")},xhrFields:{withCredentials:!0}})}var t=store.get("userInfo"),r=t.id;$(".bar"),$(".percent");$("#register").click(function(){e()})});