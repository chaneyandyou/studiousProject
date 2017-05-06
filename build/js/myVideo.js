$(function () {
    /*
     * 全局变量
     * */
    var user = store.get('userInfo');
    if(user == undefined){
        // alert("您还没有登录");
        // window.location.href = "../view/login.html"
    }else{
        var userId = user['id'];
    }

    var coursedetailsId = $.getUrlParam('coursedetailsId');
    var courseId = $.getUrlParam('courseId');

    /*
     * 鉴权成功后获取视频地址
     * */
    function getVideoLink() {
        $.ajax({
            xhrFields: {
                withCredentials: true
            },
            url: 'http://182.92.220.222:8080/student/play?coursedetailsId=' + coursedetailsId + '&studentId='+userId,
            type: "get",
            cache: false,
            processData: false,
            contentType: false,
            success: function (data) {
                if (data != "error") {
                    var videoEle =
                        '<video id="my-video" class="video-js vjs-big-play-centered" controls preload="auto" data-setup="{}" width="990px" height="600px">' +
                        '<source src="' + data + '" type="video/mp4" class="videoSrc">' +
                        '</video>';
                    $('.videoMain').prepend(videoEle);
                } else {
                    $('.mask').fadeIn(100);
                }
            },
            error: function (e) {
                alert("错误！！");
            }
        });
    }

    /*
    * 购买按钮点击
    * */
    function buyBtn() {
        $('.mask').on("click",".buy",function () {
            $.ajax({
                xhrFields: {
                    withCredentials: true
                },
                url: 'http://182.92.220.222:8080/student/tradePrecreate/?studentId=' + userId + "&courseId=" + courseId,
                type: "get",
                cache: false,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                    console.log(typeof data);
                    setQrcode(data)

                },
                error: function (e) {
                    alert("错误！！");
                }
            });
        })
    }
    
    /*
    * 生成二维码
    * */
    function setQrcode(text) {
        var qrcodeEle =
            '<h3>扫一扫，带走课程吧</h3>'+
            '<div id="qrcode"></div>';
        $('.box').html("").append(qrcodeEle);
        $('#qrcode').qrcode({
            render  : "canvas",//也可以替换为table
            width   : 150,
            height  : 150,
            text    : text
        });
    }
    
    /*
     * 函数执行
     * */
    $.loginStatus(user);
    $.logout();
    getVideoLink();
    buyBtn();
});