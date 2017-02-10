$(document).ready(function(){

    $('div .inpt').append('<p></p>');

    $('input').hover(function() {

      var $num = $(this).index('input');
      var hoverText = $(this).attr('title');
      $('input').eq($num).removeAttr("title");
      $('p').eq($num).addClass('style');
      $('div .inpt').eq($num).find('p').text(hoverText).show();
      $('p').eq($num).animate({opacity: "show", top: "-25"}, "slow");

    }, function() {

      var $num = $(this).index('input');
      $('p').eq($num).animate({opacity: "hide", top: "-25"}, "fast");

    });
});
