$(document).ready(function(){
    $('.navbar-nav').show();
    if(sessionStorage.getItem("user") == null){
        $('#page-area').load('pages/login.html');
    }
    $('#jitsi').click(function(){
        window.open("https://meet.example.org");
    });
    $('#camera').click(function(){
        $('#page-area').load('pages/camera_control.html');
    })
    $('#home-link').click(function(){
        $('#page-area').load('pages/main.html');
    });
    $('#control-link').click(function(){
        $('#page-area').load('pages/camera_control.html');
    })
    $('#view-link').click(function(){
        $('#page-area').load('pages/video_playback.html');
    });
});
