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




   $('.filters__button--categories').on('click', function(){
    $('.filters__list--categories, .filters__button--categories, .filters__title--categories').toggleClass('active');
  });


 $('.filters__button--offer').on('click', function(){
    $('.filters__list--offer, .filters__button--offer, .filters__title--offer').toggleClass('active');
  });


 $('.filters__button--brand').on('click', function(){
    $('.filters__list--brand, .filters__button--brand, .filters__title--brand').toggleClass('active');
  });


   $('.filters__button--price').on('click', function(){
    $('.filters__list--price, .filters__button--price, .filters__title--price').toggleClass('active');
  });



  $('.filters__input--line').ionRangeSlider({
    type: "double",
     postfix: "₽",
     onChange: function (data) {
       $('.filter__span--from').text(data.from);
       $('.filters__span--to').text(data.to);
    }
  });



	$('.content__select').styler();   
  
  
  
  $('.content__btn').on('click', function() {
    $('.content__btn').removeClass('.content__btn--active');
    $(this).addClass('.content__btn--active');
  });



  $('.button-list').on('click', function(){
     $('.content__products').addClass('content__products--list');
  });
  $('.button-grid').on('click', function(){
     $('.content__products').removeClass('content__products--list');
  });
  



  $('.catalogue__btn').on('click', function(){
    $('.catalogue__btn, .filters').toggleClass('active');
    $('body').toggleClass('hidden');
  });

  $('.catalogue__btn.active').on('click', function(){
    $('.catalogue__btn, .filters').removeClass('active')
    $('body').removeClass('hidden');
  });



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

