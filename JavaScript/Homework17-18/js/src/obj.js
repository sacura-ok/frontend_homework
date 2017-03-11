// 'use strict'
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
