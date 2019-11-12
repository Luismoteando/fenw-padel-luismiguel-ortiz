$(function () {
    setNavbarScrolling();
});

function setNavbarScrolling() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 56) {
            $("#navIndex").removeClass("bg-transparent").addClass("bg-dark shadow");
        } else {
            $("#navIndex").removeClass("bg-dark shadow").addClass("bg-transparent");
        }
    });
}