$(function(){var e=store.get("userInfo"),r=$.getUrlParam("keyword");$.getUrlParam("grade"),$.getUrlParam("subject");$.loginStatus(e),function(){$.ajax({url:"http://182.92.220.222:8080/course/readSearch",type:"GET",data:{page:"1",keyword:r},success:function(e){console.log(e);var r=e.content;console.log(r),console.log(typeof r);for(var o in r){var t="<li><dl><dt><img src="+r[o].icon+" ></dt><dd><h3>课程名称:"+r[o].name+"</h3><p>课程年级:"+r[o].grade+"</p><p>课程简介:"+r[o].descript+"</p></dd></dl></li>";$(".courseUl").append(t)}},error:function(e){alert("错误！！")},xhrFields:{withCredentials:!0}})}()});