// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();
;// 'use strict'
﻿var test = [
  { head: "Тест по программированию" },
  { button: "Проверить мои результаты" },
  q = [ {question: "1. Выберите правильный метод для преобразования объекта в JSON формат:"},
        a = [ {answer: "parse()"},
              {answer: "toJSON()"},
              {answer: "stringify()"},
              {true_answer: "stringify()"}]
  ],
  q = [ {question: "2. Выберите правильный метод для создания объекта из JSON формата:"},
        a = [ {answer: "toJSON()"},
              {answer: "parse()"},
              {answer: "stringify()"},
              {true_answer: "parse()"}]
  ],
  q = [ {question: "3. С помощью какого объекта осуществляется доступ к локальному хранилищу в современных браузерах?"},
        a = [ {answer: "cookies"},
              {answer: "Storage"},
              {answer: "localStorage"},
              {true_answer: "localStorage"}]
  ]
];
// var str = JSON.stringify(test);
// console.log(str);
localStorage.setItem('obj',JSON.stringify(test));

var test1 = JSON.parse(localStorage.getItem('obj'));
// console.log(test1);
;$(function(){

 'use strict'

  var html = $('#test').html();

  var content = tmpl(html,{
    data: test1
  });

  $('body').append(content);

});
;$(function(){

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
