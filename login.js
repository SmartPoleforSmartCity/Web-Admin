$(document).ready(function(){
    $("#login-button").click(function(){
        if($("#user").val() == "" || $("#passwd").val() == ""){
            $('#notify-text').text('กรุณากรอกข้อมูลให้ครบ');
            $('#noti-modal').modal('show');
            $("#user").css({"border":"2px solid red"});
            $("#passwd").css({"border":"2px solid red"});
        }else{
            if($("#user").val() == "admin" &&  $("#passwd").val() == "admin"){
                sessionStorage.setItem("user","admin");
                $('#page-area').load("pages/main.html");
            }else{
                $('#notify-text').html('ชื่อผู้ใช้หรือรหัสผ่านผิด กรุณากรอกใหม่');
                $('#noti-modal').modal('show');
                $("#user").css({"border":"2px solid red"});
                $("#passwd").css({"border":"2px solid red"});
            }
        }
    });
    $("#exit-button").click(function(){
        if(confirm("ต้องการออกจากระบบ")){
            window.location.replace("https://www.google.com");
        }else{
            return;
        }
    });
    $("input").keypress(function(){
        $("#user").css({"border":""});
        $("#passwd").css({"border":""});
    });
    if(sessionStorage.getItem("user") != null){
        $('#page-area').load("pages/main.html");
    }
});