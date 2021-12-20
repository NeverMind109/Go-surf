$(function(){
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        nextArrow: '<img class="slider-arrows slider-item__info-next" src="images/arrow-right.svg" alt="Arrow: Right">',
        prevArrow: '<img class="slider-arrows slider-item__info-prev" src="images/arrow-left.svg" alt="Arrow: Left">',
        asNavFor: '.slider-dots',
    });
    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        asNavFor: '.header__slider',
    });
});