$(function(){

  $('.slider__items').slick({
    arrows: true,
    dots: false,
    // autoplay: true,
     responsive: [{
            breakpoint: 992,
              settings: {
                arrows: false,
                dots: true
              }
    }]
  });


  $('.brands__list').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
      responsive: [{
          breakpoint: 992,
            settings: {
              slidesToShow: 4
            },
          breakpoint: 576,
            settings: {
              slidesToShow: 2
            }
      }]
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

  

  $('.info__burger').on('click', function(){
    $('.info__burger, .info__menu, .info__burger--open').toggleClass('active');
    $('body').toggleClass('hidden');
  });

  $('.info__menu').on('click', function(){
    $('.info__burger, .info__menu').removeClass('active')
    $('body').removeClass('hidden');
  });



   $('.header__search').on('click', function(){
    $('.header__search, .header__form').toggleClass('active');
  });

//   jQuery(function($){
// 	$(document).mouseup(function (e){ // событие клика по веб-документу
// 		var div = $("#hide"); // тут указываем ID элемента
// 		if (!div.is(e.target) // если клик был не по нашему блоку
// 		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
// 			div.hide(); // скрываем его
// 		}
// 	});
// });



  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

});

