$(function(){function e(){var e=new FormData($("#createForm")[0]);$.ajax({url:"http://182.92.220.222:8080//student/update?id="+s,type:"post",data:e,cache:!1,processData:!1,contentType:!1,success:function(e){alert(e),location.reload()},error:function(e){alert("错误！！")},xhrFields:{withCredentials:!0}})}function t(){$.ajax({url:"http://182.92.220.222:8080/course/readStudentAll",type:"GET",data:{page:"1",studentId:s},timeout:1e3,success:function(e){a=e.content,n=e.totalPages;for(var t=0;t<a.length;t++){var o='<a href="#" class="courseBox" data-index=" '+a[t].id+'"><img src="'+a[t].cover+'" alt="" ><p>课程名称：'+a[t].name+'</p><span class="grade">'+a[t].subject+'</span><span class="isFree">¥：'+a[t].price+"</span></a>";$(".con_course").append(o)}for(var t=0;t<n;t++){var s='<li><button data-index="'+(t+1)+'" class="pageBtn">'+(t+1)+"</button></li>";$(".pagesUl").append(s)}$(".con_course").on("click",".courseBox",function(){alert("点击了")})},error:function(){alert("很抱歉，创建失败")}})}var a=null,n=null,o=store.get("userInfo"),s=o.id;$.loginStatus(o),function(){$("#managerBtn").click(function(){$("#update").show(),$(".disInput").removeAttr("disabled")})}(),function(){$(".teaPerNav li").click(function(){$(this).addClass("cur").siblings().removeClass("cur"),"center"==$(this).attr("id")?($("#userMain").show(),$("#courseMain").hide()):"courseMan"==$(this).attr("id")&&($(".con_course").html(""),$(".pagesUl").html(""),$(".footer").hide(),$("#courseMain").show(),$("#userMain").hide(),$(".footer").show(),t())})}(),function(){$.ajax({url:"http://182.92.220.222:8080/student/read/"+s,type:"get",success:function(e){null!=e.graduateSchool&&($("#userName").val(e.realName),$("#school").val(e.school),$("#classGrade").val(e.education)),$.renderIcon($(".userIcon"),e.icon)}})}(),function(){$(".pagesUl").on("click",".pageBtn",function(){var e=$(this).data("index");$.ajax({url:"http://182.92.220.222:8080/course/readStudentAll",type:"GET",data:{page:e,studentId:s},timeout:1e3,success:function(e){a=e.content,n=e.totalPages,$(".con_course").html("");for(var t=0;t<a.length;t++){var o='<a href="#" class="courseBox" data-index=" '+a[t].id+'"><img src="'+a[t].cover+'" alt="" ><p>课程名称：'+a[t].name+'</p><span class="grade">'+a[t].subject+'</span><span class="isFree">¥：'+a[t].price+"</span></a>";$(".con_course").append(o)}$(".con_course").on("click",".courseBox",function(){alert("点击了")})},error:function(){alert("很抱歉，创建失败")}})})}(),$.logout(),$("#update").click(function(){e()})});