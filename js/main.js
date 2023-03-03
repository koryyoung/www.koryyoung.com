// Hamburger Menu
var hamburger = document.querySelector(".hamburger")
var nav = document.getElementById("k-nav")
var navWrap = document.getElementById("nav-wrap")
var logo = document.getElementById("logo-name")

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("open");
    navWrap.classList.toggle("open");
    logo.classList.toggle("close");
});

// Reveal on Scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 125;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("slide-up");
        } else {
            reveals[i].classList.remove("slide-up");
        }
    }
}
window.addEventListener("scroll", reveal);

// Hide/reveal nav on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-90px";
    }
    prevScrollpos = currentScrollPos;
}