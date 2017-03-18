$(function(){

 'use strict'

 var $body = $('body');
 var $modal;
 var $close;
 var $alert;
 var $overlay = $('<div class="overlay"></div>');
  function showModal(e){
    $modal = $('<div class="modal-result">'+
 	                '<div class="modal__header">'+
 	                  '<button type="button" class="close">x</button>'+
 	                  '<h4 class="modal__title">Результат тестирования</h4>'+
 	                '</div>'+
 	                '<div class="modal__body"></div>'+
 	              '</div>');

    $body.append($overlay);
    $body.append($modal);
    $('.close').on('click',closeModal);
  }

  function closeModal(){
    $modal.remove();
    $overlay.remove();
    $(':checked').removeAttr('checked');
    $('span').remove();
    $('input').prop('disabled', false);
  }

  function showAlert(e){
  $alert = $('<div class="modal-result">'+
                '<button type="button" class="close">x</button>'+
                '<div class="alert__title">Выберите только один вариант ответа</div>'+
             '</div>');

    $body.append($overlay);
    $body.append($alert);
    $('.close').on('click',closeAlert);
  }

  function closeAlert(){
    $alert.remove();
    $overlay.remove();
  }

  $('input').on( 'click', function() {

    $('fieldset').each(function(i,value) {
      var $checked = $(this).find(':checked');
      if ($checked.length > 1 ){
        showAlert();
        $checked.removeAttr('checked');
      }
    });

  });

  $('.click').on('click', function(){

  $('input').prop('disabled', true);
  var $question = $('legend');

    $question.each(function(i,value) {
      var indexQ = $(this).text();
      if (indexQ == test1[i+2][0].question){
        var $checked = $(this).siblings().find(':checked').parent();
        if($checked.text() == test1[i+2][1][3].true_answer){
          $checked.append('<span>Верно</span>');
          $checked.find('span').css({'color': 'green'})
        } else {
          $checked.append('<span>Неверно</span>');
          $checked.find('span').css({'color': 'red'})
        }
      }
    });

    showModal();

    $('.question').clone().appendTo('.modal__body');

  });

});
