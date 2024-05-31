function scrollFunction(){
    if(document.documentElement.scrollTop>200){
        document.getElementById("navbar").classList.add("noTransparrent");
    }else{
        document.getElementById("navbar").classList.remove("noTransparrent");
    }
}

window.onscroll =function(){
    scrollFunction();
}
window.onload = function(){
    let website = new CountUp('website-count', 0, 250, 0, 2.5);
    website.start();
    let app = new CountUp('app-count', 0, 100, 0, 2.5);
    app.start();
    let user = new CountUp('user-count', 0, 10000, 0, 2.5);
    user.start();
    let video = new CountUp('video-count', 0, 30, 0, 2.5);
    video.start();
};