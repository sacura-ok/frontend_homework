define(
  'script',
  ['jquery', 'model', 'view', 'controller'],

  ($, Model, View, Controller) => {

 var List = (() => {

  var toDoList = ['learn html/css', 'learn javascript', 'learn english'];
  var model = new Model(toDoList);
  var view = new View(model);
  var controller = new Controller(model, view);

})();

return List;

});
