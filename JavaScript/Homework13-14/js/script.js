$(function(){

 'use strict'

  var html = $('#test').html();

  var content = tmpl(html,{
    data: test1
  });

  $('body').append(content);

});
