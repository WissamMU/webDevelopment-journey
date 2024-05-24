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