$(document).ready(function () {
    // $(".main_slide").click(function () {
    //     $(this).hide();
    // });
    $('.main_slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow:true,
        dot:false
    });
});