var arrName = [];

alert('Введите 5 имен');

for (var i = 0; i < 5; i++) {
    var Name = prompt("Введите " + (i + 1) + "-е имя:", "");
    arrName.push(Name);
}

var userName = prompt("Введите имя пользователя", "");
var in_arr = false;

for (var i = 0; i < arrName.length-1; i++) {

  if (arrName[i] == userName) {
    in_arr = true;
    alert(userName + ', вы успешно вошли.');
  }

}

if  (in_arr == false) {
  alert('Неверно введено имя пользователя');
}
