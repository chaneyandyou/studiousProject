$(function(){function e(){var e=new FormData($("#createForm")[0]);$.ajax({url:"http://182.92.220.222:8080/teacher/update?id="+c.id,type:"post",data:e,cache:!1,processData:!1,contentType:!1,success:function(e){alert(e),location.reload()},error:function(e){alert("错误！！")},xhrFields:{withCredentials:!0}})}function t(){$.ajax({url:"http://182.92.220.222:8080/course/readTeacherAll",type:"GET",data:{page:"1",teacherId:n},timeout:1e3,success:function(e){a=e.content,o=e.totalPages;for(var t=0;t<a.length;t++){var c='<a href="#" class="courseBox" data-index=" '+a[t].id+'"><img src="'+a[t].cover+'" alt="" ><p>课程名称：'+a[t].name+'</p><span class="grade">'+a[t].subject+'</span><span class="isFree">¥：'+a[t].price+'</span><button class="delete"><i class="iconfont icon">&#xe61b;</i></button></a>';$(".con_course").append(c)}for(var t=0;t<o;t++){var n="<li><button>"+(t+1)+"</button></li>";$(".pagesUl").append(n)}$(".con_course").on("click",".courseBox",function(){var e=$(this).data("index"),t="./createChapters.html?courseId="+e;window.open(t)})},error:function(){alert("很抱歉，创建失败")}}),$(".manage").click(function(){$(".delete").fadeIn(100)}),$(".con_course").on("click",".delete",function(e){e.stopPropagation();var t=$(this).parent().data("index");$.ajax({url:"http://182.92.220.222:8080/course/delete/"+t,type:"get",success:function(e){alert(e)}})})}var a=null,o=null,c=store.get("userInfo"),n=c.id;$.loginStatus(c),function(){$("#managerBtn").click(function(){$("#update").show(),$(".disInput").removeAttr("disabled")})}(),function(){$(".teaPerNav li").click(function(){$(this).addClass("cur").siblings().removeClass("cur"),"center"==$(this).attr("id")?($("#userMain").show(),$("#courseMain").hide()):"courseMan"==$(this).attr("id")&&($(".con_course").html(""),$(".pagesUl").html(""),$(".footer").hide(),$("#courseMain").show(),$("#userMain").hide(),$(".footer").show(),t())})}(),function(){$.ajax({url:"http://182.92.220.222:8080/teacher/read/"+n,type:"get",success:function(e){console.log(e),null!=e.graduateSchool&&($("#userName").val(e.realName),$("#school").val(e.graduateSchool),$("#classSubject").val(e.subject),$("#classGrade").val(e.level),$("#teacDec").val(e.profile))}})}(),$.logout(),$("#update").click(function(){e()})});