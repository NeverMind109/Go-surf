$(function () {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    nextArrow:
      '<img class="slider-arrows slider-item__info-next" src="images/arrow-right.svg" alt="Arrow: Right">',
    prevArrow:
      '<img class="slider-arrows slider-item__info-prev" src="images/arrow-left.svg" alt="Arrow: Left">',
    asNavFor: ".slider-dots",
  });
  $(".slider-dots").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    asNavFor: ".header__slider",
    responsive: [
      {
        breakpoint: 961,
          settings: "unslick",
      },
    ]
  });
  $(".surf-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    nextArrow:
      '<img class="slider-arrows slider-item__info-next" src="images/arrow-right.svg" alt="Arrow: Right">',
    prevArrow:
      '<img class="slider-arrows slider-item__info-prev" src="images/arrow-left.svg" alt="Arrow: Left">',
    asNavFor: ".slider-map",
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      },
    ]
  });
  $(".slider-map").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".surf-slider",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1103,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      },
    ]
  });
  $(".holder__slider").slick({
    infinite: true,
    fade: true,
    nextArrow:
      '<img class="slider-arrows slider-item__info-next" src="images/arrow-right.svg" alt="Arrow: Right">',
    prevArrow:
      '<img class="slider-arrows slider-item__info-prev" src="images/arrow-left.svg" alt="Arrow: Left">',
  });
  $(".shop__slider").slick({
    infinite: true,
    fade: true,
    nextArrow:
      '<img class="slider-arrows slider-item__info-next" src="images/arrow-right.svg" alt="Arrow: Right">',
    prevArrow:
      '<img class="slider-arrows slider-item__info-prev" src="images/arrow-left.svg" alt="Arrow: Left">',
  });

// Кнопки, изменяющие количество
  $(
    '<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg" alt="Plus"></div><div class="quantity-button quantity-down"><img src="images/minus.svg" alt="Minus"></div></div>'
  ).insertAfter(".quantity input");
  $(".quantity").each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.on("click", function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.on("click", function () {
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

// Калькулятор
  $(".quantity-button").on("click", function () {
    var parents = $(this).parents(".holder-slider__info");
    let summ =
      $(".summ", parents).data("nights") * $(".nights", parents).val() +
      $(".summ", parents).data("guests") * $(".guests", parents).val();
    $(".summ", parents).html("$" + summ + " ");
  });

// Для каждого слайда
  $(".quantity").each(function () {
    var parents = $(this).parents(".holder-slider__info");
    let summ =
      $(".summ", parents).data("nights") * $(".nights", parents).val() +
      $(".summ", parents).data("guests") * $(".guests", parents).val();
    $(".summ", parents).html("$" + summ + " ");
  });

// Элементы секции Shop
  $("#first-circle").on("click", function () {
    $("#first-plus").toggleClass("circle__plus--active");
    $("#first-text").toggleClass("surfboard-box__content--active");
  });
  $("#second-circle").on("click", function () {
    $("#second-plus").toggleClass("circle__plus--active");
    $("#second-text").toggleClass("surfboard-box__content--active");
  });
  $("#third-circle").on("click", function () {
    $("#third-plus").toggleClass("circle__plus--active");
    $("#third-text").toggleClass("surfboard-box__content--active");
  });


  $('.menu-mobile-btn').on('click', function() {
    $('.menu').toggleClass('menu-active')
  })

  new WOW().init();
});
