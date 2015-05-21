$(window).on("scroll touchmove", function () {
    $('#header-nav').toggleClass('scroll-open', $(document).scrollTop() > 0);
});

$('#myTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
    $('#myTab a[href="#meals"]').tab('show')
})