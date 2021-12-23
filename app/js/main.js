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
    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: '<img class="slider-arrows slider-item__info-next" src="images/arrow-right.svg" alt="Arrow: Right">',
        prevArrow: '<img class="slider-arrows slider-item__info-prev" src="images/arrow-left.svg" alt="Arrow: Left">',
        asNavFor: '.slider-map',
    })
    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true,
    })
    $('.holder__slider').slick({
        infinite: true,
        fade: true,
        nextArrow: '<img class="slider-arrows slider-item__info-next" src="images/arrow-right.svg" alt="Arrow: Right">',
        prevArrow: '<img class="slider-arrows slider-item__info-prev" src="images/arrow-left.svg" alt="Arrow: Left">',
    })

    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg" alt="Star"></div><div class="quantity-button quantity-down"><img src="images/minus.svg" alt="Star"></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

    $('.quantity-button').on('click', function(){
      var parents = $(this).parents('.holder-slider__info');
       let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + $('.summ', parents).data('guests') * $('.guests', parents).val();
       $('.summ', parents).html('$' + summ + ' ');
      });
      
// Для каждого слайда
      $('.quantity').each(function() {
      var parents = $(this).parents('.holder-slider__info');
      let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + $('.summ', parents).data('guests') * $('.guests', parents).val();
       $('.summ', parents).html('$' + summ + ' ');
      });
});