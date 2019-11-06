$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 56) {
            $('.navbar').removeClass('bg-transparent').addClass('bg-dark shadow');
        } else {
            $('.navbar').removeClass('bg-dark shadow').addClass('bg-transparent');
        }
    });
});