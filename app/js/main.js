$(function(){

  $('.slider__items').slick({
    arrows: true,
    // autoplay: true
  });

   $('.catalog').on('click', function(){
    $('.catalog,.catalog__list').toggleClass('active');
  });

  $('.catalog__link').on('click', function(){
    $('.catalog__list').removeClass('active')
  });



  var mixer = mixitup('.products__content');
  

});

