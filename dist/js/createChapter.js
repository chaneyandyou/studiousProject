$(function(){var e=store.get("userInfo"),t=$.getUrlParam("courseId");!function(){$(".addNew").click(function(){$(".con_rig_con").fadeOut(100),$(".con_right").append('<div class="con_rig_con clearfix"><p><span>发布新章节</span>严禁发布违反国家法律法规的视频内容</p><div class="con_left_dec"><label for="chapterName">章节名称</label><label for="chapterFile">章节视频</label><label for="chapterDec">章节视频</label></div><div class="con_right_inp"><form id="chapterForm" enctype="multipart/form-data"><input type="text" class="myInput" id="chapterName" placeholder="请输入章节名称" name="name"><input type="file" id="chapterFile" name="file"><textarea id="chapterDec" class="myInput" rows="10" autofocus="autofocus" name="descript"></textarea><input type="button" value="发布" id="registerChapter"></form><div class="progress"><div class="bar"></div ><div class="percent">0%</div ></div></div></div>')})}(),function(){$(".con_right").on("click","#registerChapter",function(){var e=($(".bar"),$(".percent"),new FormData($("#chapterForm")[0]));$.ajax({xhrFields:{withCredentials:!0},url:"http://182.92.220.222:8080/coursedetails/create?courseId="+t,type:"post",data:e,cache:!1,processData:!1,contentType:!1,success:function(e){alert(e),"success"==e&&(window.location.href="../view/teacherPersonal.html")},error:function(e){alert("错误！！"),alert(e),window.location.href="../view/teacherPersonal.html"}})})}(),function(){$.ajax({url:"http://182.92.220.222:8080/coursedetails/readCourseAll/"+t,success:function(e){var t=e||[];0==t.length&&$(".chapters").append('<li>暂无章节视频 <button class="del">删除</button></li>');for(var a=0;a<t.length;a++){var r="<li>"+t[a].name+'<button class="del" data-chapterid="'+t[a].id+'">删除</button></li>';$(".chapters").append(r)}}})}(),function(){$(".chapters").on("click",".del",function(){var e=$(this).data("chapterid");$.ajax({url:"http://182.92.220.222:8080/coursedetails/delete/"+e,success:function(e){alert(e),window.location.href="../view/createChapters.html?courseId="+t},error:function(e){alert(e),window.location.href="../view/createChapters.html?courseId="+t}})})}(),$.logout(),$.loginStatus(e)});