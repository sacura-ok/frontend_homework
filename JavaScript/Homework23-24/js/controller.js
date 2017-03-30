define(
  'controller',
  ['jquery', 'model', 'view'],

($, Model, View) => {

  var Controller = function Controller(model, view){

      var self = this;

  view.elements.addBtn.on('click', addItem);
  view.elements.removeBtn.on('click', removeSelected);
  view.elements.listContainer.on('click', '.list__select', selectItem);
  view.elements.listContainer.on('click', '.list__delete', removeItem);
  view.elements.listContainer.on('click', '.list__save', changeItem);
  view.elements.listContainer.on('click', '.list__item', openTextarea);
  view.elements.listContainer.on('click', '.close', closeTextarea);

  function addItem(){
    var newItem = view.elements.input.val();
    model.addItem(newItem);
    view.renderList(model.data);
    view.elements.input.val('');
  }

  function removeSelected(){
    var arrItem = [];
    var items = $('.selected').siblings('.list__delete');

    for (var item of items) {
      arrItem.push($(item).attr('data-value')) ;
    }
    model.removeSelected(arrItem);
    view.renderList(model.data);
  }

  function selectItem(){
    $(this).toggleClass('selected');
  }

  function removeItem(){
    var item = $(this).attr('data-value');

    model.removeItem(item);
    view.renderList(model.data);
  }

  function changeItem(){
    var changeItem = $(this).parent().parent().find($('.list__item')).val();
    var changeItemNew = $(this).siblings($('.list__text')).val();
    model.changeItem(changeItem, changeItemNew);
    view.renderList(model.data);
  }

  function openTextarea(){
    $(this).siblings($('.list__change')).css({display: 'block'});
  }

  function closeTextarea(){
    $(this).siblings($('.list__change')).css({display: 'none'});
  }

}

return Controller;
});
