var menu = document.getElementById('menu');
var tree = menu.getElementsByTagName('ul')[0];

  tree.onclick = function(event) {

  var target = event.target;

  if (target.tagName != 'A') {
    return;
  }

  var li = target.parentNode;

  var childrenContainer = li.getElementsByTagName('ul')[0];

  if (!childrenContainer){
     return; 
    } else{
      childrenContainer.classList.toggle('display');
     }
   }
