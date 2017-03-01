(function($){

  $.fn.carousel = function(options){

    var defaults = {
      numberImg: 3, // Количество видимых картинок
      widthImg: 200, // Ширина картинка
      marginRightImg: 3, // Расстояние между картинкими
      backgroundColorBtn: 'lightgrey', // Цвет кнопки
      borderRadiusBtn: 20
    };

    var settings = $.extend(defaults, options);

    var wigthCarousel = (((settings.widthImg + settings.marginRightImg) * settings.numberImg)- settings.marginRightImg) + 6;
    var heightImg = $('.carousel__item img').height() * settings.widthImg / $('.carousel__item img').width();
    var heightBtn = $('.carousel-arrow-right').height();

    $('.carousel').width(wigthCarousel);
    $('.carousel__wrapper').width(wigthCarousel + 108);

    $('.carousel-arrow-right').css({top: heightImg/2, left: wigthCarousel + 56, backgroundColor: settings.backgroundColorBtn, borderRadius: settings.borderRadiusBtn });
    $('.carousel-arrow-left').css({top: heightImg/2, backgroundColor: settings.backgroundColorBtn, borderRadius: settings.borderRadiusBtn});
    $('.carousel__item img').css({width: settings.widthImg});
    $('.carousel__item').css({marginRight: settings.marginRightImg});

    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel__list');

    var pixelsOffset = settings.widthImg + settings.marginRightImg;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - settings.numberImg) * pixelsOffset);
    var maximumOffset = 0;
    leftUIEl.click(function() {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += settings.widthImg + settings.marginRightImg;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });

    rightUIEl.click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= settings.widthImg + settings.marginRightImg;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });
    
    return this;
    
  }
})(jQuery);
