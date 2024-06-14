$(window).scroll(function() {
    if ($(this).scrollTop() >= 200){
        $("#navbar").addClass("noTransparent");
    }
    else{
        $("#navbar").removeClass("noTransparent");
    }
})