$(function(){function e(){var e=new FormData($("#createForm")[0]);e.append("name","value"),e.append("a",1),e.append("b",2),console.log(e),$.ajax({url:"http://182.92.220.222:8080/teacher/update?id=8",type:"post",data:e,cache:!1,processData:!1,contentType:!1,success:function(e){alert(e)},error:function(e){alert("错误！！")},xhrFields:{withCredentials:!0}})}$("#update").click(function(){e()})});