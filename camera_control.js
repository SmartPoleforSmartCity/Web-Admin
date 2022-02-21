$(document).ready(function(){
    $.get('http://192.168.1.29:5000',function(data,response){
        $('#video').html(data);
        console.log(response);
    });
});