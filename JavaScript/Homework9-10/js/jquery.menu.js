$(function(){
  $('.menu li').hover(
          function() {
              $(this).addClass('active');
              $(this).find('.submenu').stop(true, true);
              $(this).find('.submenu').slideDown();
          },
          function() {
              $(this).removeClass('active');
              $(this).find('.submenu').slideUp('fast');
          }
      );
});
