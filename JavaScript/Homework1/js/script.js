
alert('Пример возведения в степень');

var a = prompt("Введите базу, число a", "");
var n = prompt("Введите степень, число n", "");

function isPow(a, n) {
  var result = 1;
  var result1 = 1;

  if  (n >= 0) {

    for (var i = 0; i < n; i++) {
      result *=a;
    }

  return result;
  }

  if (n < 0) {
    var n = -n;

    for (var i = 0; i < n; i++) {
      result1 *= a;
    }

  return 1/result1;
  }

}

console.log('pow = ', isPow(a, n) );
console.log('Math.pow = ', Math.pow(a, n) );
