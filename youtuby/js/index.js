$(document).ready(function(){
    $(".nav-item").click(function(){
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });
    $("#toggler").click(function(event) {
        $('#wrap').toggleClass('toggled');
        var left = $('.sidebar').css("left"); //أعطينا هذه الخاصية للقائمة الجانبية لكي تُصبح على اليمين
        if (left == '0px') //القائمة الجانبية بحالة إظهار وبالتالي يجب إغلاقها
        {
            $('.sidebar').css({ 'left': '-17rem' });
            $('.layer').fadeOut(); /*أخفي الطبقة السوداء*/
        }
        else { //القائمة الجانبية بحالة إغلاق وبالتالي يجب إظهارها
            $('.sidebar').css({ 'left': '0' });
            $('.layer').fadeIn(); 
        }
    });
});