$(document).ready(function(){
    $(".nav-item").click(function(){
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });
    $("#toggler").click(function(event) {
        $('#wrap').toggleClass('toggled');
        var left = $('.sidebar').css("left");
        if (left == '0px') 
        {
            $('.sidebar').css({ 'left': '-17rem' });
            $('.layer').fadeOut(); 
        }
        else { 
            $('.sidebar').css({ 'left': '0' });
            $('.layer').fadeIn(); 
        }
    });
    $(".search-icon").click(function() {
        $(".search-input").slideToggle("slow");
    });
});
