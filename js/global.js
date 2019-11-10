$(document).ready(() => {
    $(window).scroll(() => {
        if ($(this).scrollTop() > 56) {
            $("#navIndex").removeClass("bg-transparent").addClass("bg-dark shadow");
        } else {
            $("#navIndex").removeClass("bg-dark shadow").addClass("bg-transparent");
        }
    });
    document.getElementById("btnToggler").addEventListener("click", function () {
        if ($(window).scrollTop() > 56) {
            if ($("#navIndex").hasClass("bg-transparent")) {
                $("#navIndex").removeClass("bg-transparent").addClass("bg-dark shadow");
            }
        } else {
            if ($("#navIndex").hasClass("bg-transparent")) {
                $("#navIndex").removeClass("bg-transparent").addClass("bg-dark shadow");
            } else {
                $("#navIndex").removeClass("bg-dark shadow").addClass("bg-transparent");
            }
        }
    });
});
