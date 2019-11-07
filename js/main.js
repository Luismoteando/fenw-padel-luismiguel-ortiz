$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 56) {
            $('#indexNavbar').removeClass('bg-transparent').addClass('bg-dark shadow');
        } else {
            $('#indexNavbar').removeClass('bg-dark shadow').addClass('bg-transparent');
        }
    });
});