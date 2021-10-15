$(function(){

  $('.slider__items').slick({
    arrows: true,
    // autoplay: true
  });


  $('.brands__list').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });


   $('.catalog__btn').on('click', function(){
    $('.catalog, .catalog__list, .catalog__btn').toggleClass('active');
    $('.catalog__list').slideToggle();
  });

  $(document).on('click', function (e) {
    var div = $('.catalog');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
      $('.catalog__list').slideUp();
    }
  });


  $('.catalog__link').on('click', function(){
    $('.catalog__list').slideUp();
  });


  var mixer = mixitup('.products__content');

  var mixer = mixitup('.stock__content');
  

});

