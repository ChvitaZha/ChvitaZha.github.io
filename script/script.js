$(window).on('load', function(){
    $('.preloader').delay(2400).fadeOut('slow');
 });
//Jquery For Cursor
$(window).ready(function () {

    let mouseX = 0;
    let mouseY = 0;
    let xp = 0;
    let yp = 0;

    $(document).mousemove(function (e) {
        $(".custom__cursor__inner").css({
            transform: 'translate(' + (e.clientX - 3.25) + 'px, ' + (e.clientY - 3.25) + 'px)'
        });

        mouseX = e.clientX - 10;
        mouseY = e.clientY - 10;
    });

    setInterval(function () {
        xp += ((mouseX - xp) / 6);
        yp += ((mouseY - yp) / 6);
        $(".custom__cursor__outer").css({
            transform: 'translateX(' + (xp - 9) + 'px) translateY(' + (yp - 9) + 'px)'
        });
    }, 10);
});

// Navigation Menu
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});