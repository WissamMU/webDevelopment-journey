$(document).ready(function () {
    $("#myBtn").on("click", function(){
        read();
    });
    $(".reply").click(function() {
        $(this).parents("div.row").next("div.card").toggle();
    });
});

function read() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "show more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "show less";
      moreText.style.display = "inline";
    }
} 