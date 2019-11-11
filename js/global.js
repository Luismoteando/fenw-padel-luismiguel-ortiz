$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 56) {
            $("#navIndex").removeClass("bg-transparent").addClass("bg-dark shadow");
        } else {
            $("#navIndex").removeClass("bg-dark shadow").addClass("bg-transparent");
        }
    });

    $("#btnToggler").click(function () {
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
