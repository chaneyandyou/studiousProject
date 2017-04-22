$(function () {
    /*
     * 公共变量
     * */
    var userInfo = store.get('userInfo');

    /*
     * 1. 热门讲师介绍
     * */
    function hotTeac() {
        $.ajax({
            url: 'http://182.92.220.222:8080/index/hotTeacher',
            type: "GET",
            success: function (dataArr) {
                for(var index in dataArr){
                    switch (dataArr[index].level)
                    {
                        case 0:
                            var level = "小学老师";
                            break;
                        case 1:
                            var level = "初中老师";
                            break;
                        case 2:
                            var level = "高中老师";
                            break;
                    }
                    var teacLiEle =
                        '<li>' +
                        '<a href="#">' +
                        '<img src='+ dataArr[index].icon+' alt="讲师">' +
                        '<h3 class="lec_type">' + level + '</h3>' +
                        '<span class="lec_name">' + dataArr[index].name + '</span><br>' +
                        '<span class="lec_school">' + dataArr[index].graduateSchool + '毕业</span>' +
                        '<p class="lec_detail">' + dataArr[index].profile + '</p>' +
                        '</a>' +
                        '</li>';
                    $(".hotTeacList").append(teacLiEle);
                }
            },
            error: function (e) {
                alert("错误！！");

            },
            xhrFields: {
                withCredentials: true
            }
        });
    }

    /*
    * 2.搜索按钮
    * */
    function searchClick() {

        $(".searchBtn").click(function () {
            var keyword = encodeURI($(".searchInp").val());
            alert(keyword);
            window.location.href = "../view/searchResult.html?keyword=" + keyword;
        });
    }

    /*
     * 函数执行
     * */
    $.loginStatus(userInfo);
    searchClick();
    hotTeac();
    $.logout();

});


