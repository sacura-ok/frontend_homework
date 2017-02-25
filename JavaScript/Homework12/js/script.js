$(function(){

  var html = $('#my-page').html();
  
  var info = [
    {fio: 'Огурова Кристина Владимировна',
     photo: 'img/photo.jpg',
     position: 'Инженер-программист',
     title: 'Хочу учить фронтенд, потому что:',
     titlePhone: 'Мой контктный телефон:',
     phone: '+380662452552',
     titleVk: 'Мой профиль Вконтакте:',
     linkVk: 'https://vk.com/k_ogurova',
     linkText: 'vk.com',
     titleFb: 'Мой фидбек:',
     intoFb: 'Могу помочь с SQL и 1С'},

    { content: 'Нет карьерного и профессионального развития'},
    { content: 'Низкий уровень оплаты труда'},
    { content: 'Интересно видеть результат своей работы'},
    { content: 'Хочу быть профессионалом во фронтенде'},
];

  var content = tmpl(html,{
    data: info
  });

  $('body').append(content);

});
