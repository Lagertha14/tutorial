const arrow = document.querySelector(".arrow");
const nav = document.querySelector("nav");

arrow.addEventListener("click", function(){
    arrow.classList.toggle("rotate");
    arrow.classList.toggle("arrow-up");
    nav.classList.toggle("nav-up");

})