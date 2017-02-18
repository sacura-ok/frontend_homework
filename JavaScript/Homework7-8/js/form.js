$(document).ready(function(){

    $('div .inpt').append('<p></p>');

    $('input').hover(function() {

      var $num = $(this).index('input');
      var hoverText = $(this).attr('title');
      $('input').eq($num).removeAttr("title");
      $('p').eq($num).addClass('style');
      $('div .inpt').eq($num).find('p').text(hoverText).show();
      $('p').eq($num).animate({opacity: 'show', top: '-25'}, 'slow');

    }, function() {

      var $num = $(this).index('input');
      $('p').eq($num).animate({opacity: 'hide', top: '-25'}, 'fast');

    });

    $('input').focus(function() {

       var $num = $(this).index('input');
       var hoverText = $(this).attr('title');
       $('input').eq($num).removeAttr("title");
       $('p').eq($num).addClass('style');
       $('div .inpt').eq($num).find('p').text(hoverText).show();
       $('p').eq($num).animate({opacity: 'show', top: '-25'}, 'slow');
       $('p').eq($num).animate({opacity: 'hide', top: '-25'}, 'slow');
    });

});

// var inputs = document.querySelectorAll('.inp');
//
//     for (var i = 0; i < inputs.length; i++) {
//       var ipt = inputs[i];
//
//       ipt.onfocus = function() {
//         var focusText = this.getAttribute('title');
//         var el = document.querySelector('.inpt');
//         var el_p = document.createElement('p');
//         el.appendChild(el_p);
//         el_p.classList.add('style');
//         el_p.appendChild(document.createTextNode(focusText));
//
//         setTimeout(function() {
//           el_p.parentNode.removeChild(el_p);
//         }, 10000);
//
//       };
//     }
