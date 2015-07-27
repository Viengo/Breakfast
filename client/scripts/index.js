//Header scroll effect
$(window).on("scroll touchmove", function () {
    $('#header-nav').toggleClass('scroll-open', $(document).scrollTop() > 0);
});

//Slow scroll
jQuery(document).ready(function ($) {
    $('a[href^="#menu"],a[href^="#faq"],a[href^="#about"],a[href^="#how-it-works"]').click(function () {
        if (document.getElementById($(this).attr('href').substr(1)) != null) {
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500);
        }
        return false;
    });

//Tooltip
    $("#about a,footer a").tooltip();
});