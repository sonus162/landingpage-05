AOS.init();
$(".news__list").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
});
function prevSlide() {
    $(".news__list").slick("slickPrev");
}
function nextSlide() {
    $(".news__list").slick("slickNext");
}
