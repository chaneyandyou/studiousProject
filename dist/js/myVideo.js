$(function(){var e=store.get("userInfo");console.log(e);var o=e.id,t=$.getUrlParam("coursedetailsId");$.loginStatus(e),$.logout(),function(){$.ajax({xhrFields:{withCredentials:!0},url:"http://182.92.220.222:8080/student/play?coursedetailsId="+t+"&studentId="+o,type:"get",cache:!1,processData:!1,contentType:!1,success:function(e){if(console.log(e),console.log(typeof e),"error"!=e){var o='<video id="my-video" class="video-js vjs-big-play-centered" controls preload="auto" data-setup="{}" width="990px" height="600px"><source src="'+e+'" type="video/mp4" class="videoSrc"></video>';$(".videoMain").prepend(o)}else alert("你还没有购买该视频")},error:function(e){alert("错误！！")}})}()});