$(function () {
    // $("#login p").click(function () {
    //     $("#login").fadeOut(20);
    //     $("#registe").fadeIn(20).addClass("animated flipInX");
    // });
    $("#registe p").click(function () {
        $("#registe").fadeOut(20);
        $("#login").fadeIn(20).removeClass("animated slideInLeft").addClass("animated flipInY");
    });


    var app = new Vue({
        el:"#login",
        data:{
        },
        methods:{
            tiao:function(){
                $("#login").fadeOut(20);
                $("#registe").fadeIn(20).addClass("animated flipInX");
            },
            login1:function () {
                var username = $("#username").val();
                var password = $("#password").val();
                console.log(username);
                $.ajax({
                    type:"get",
                    url:"http://127.0.0.1:8080/ajaxQuestServletFactory",
                    dataType:"json",
                    xhrFields:{
                        withCredentials:true
                    },
                    data:{
                        account:username,
                        password:password,
                        Ajax:"Login"
                    },
                    success:function (res) {
                        console.log(res);
                        if(res.IsSuccess){
                            alert("登陆成功");
                            window.location.href="./index.html";
                        }else {
                            alert("账号或密码不正确");
                        }
                    }

                })
            }
        }
    })

});