$(window).on("scroll touchmove", function () {
    $('#header-nav').toggleClass('scroll-open', $(document).scrollTop() > 0);
});