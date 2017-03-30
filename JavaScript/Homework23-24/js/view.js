define(
  'view',
  ['jquery', 'template', 'model'],

($, tmpl, Model) => {


 var view = function View(model){

  var self = this;
  function init(){

    var wrapper = tmpl($('#toDolist').html());
    $('body').append(wrapper);

    self.elements = {
      input: $('.task__value'),
      addBtn: $('.task__add'),
      removeBtn: $('.task__del-selected'),
      listContainer: $('.list')
    };

    self.renderList(model.data);
  }
  self.renderList = (data) => {
    var list = tmpl($('#list-template').html(), {data: data});
    self.elements.listContainer.html(list);
  };

  init();

}

return view;

});
