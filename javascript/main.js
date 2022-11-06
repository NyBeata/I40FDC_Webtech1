window.onscroll = function(){
    var navbar = document.getElementById("navbar");
    var menu = document.getElementById("menu");

    if(window.pageYOffset >= menu.offsetTop){
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

