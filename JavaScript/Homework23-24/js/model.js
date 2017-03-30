define(
  'model',
  [],

() => {

var model = function Model(data){

  var self = this;
  self.data = data;

  self.addItem = (item) => {
    if (item.length === 0){return;}
    self.data.push(item);

    return self.data;
  };

  self.removeSelected = (items) => {
    for (var item of items) {
      var index = self.data.indexOf(item);
      if(index === -1){return;}
      self.data.splice(index,1);
    }

    return self.data;
  };

  self.removeItem = (item) => {
    var index = self.data.indexOf(item);
    if(index === -1){return;}
    self.data.splice(index,1);

    return self.data;
  };

  self.changeItem = (item, itemNew) => {
    var index = self.data.indexOf(item);
    if(index === -1){return;}
    self.data.splice(index,1,itemNew);
    return self.data;
  };

}

return model;

});
