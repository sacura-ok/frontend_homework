$(function(){
  $('.menu li').hover(
          function() {
              $(this).addClass('active');
              $(this).find('.submenu').stop(true, true);
              $(this).find('.submenu').delay(300).slideDown();
          },
          function() {
              $(this).removeClass('active');
              $(this).find('.submenu').slideUp('fast');
          }
      );
});
