function Human() {
      this.name = 'Alex',
      this.age = 20,
      this.sex = 'M',
      this.growth = 178,
      this.weight = 75
}

function Worker() {
      this.placeWork = 'IT Company',
      this.salary = 2000,
      this.work = function(){
        alert('I work');
      }
}

function Student() {
      this.placeStudy = 'University',
      this.scholarship = 100,
      this.watchTV = function(){
        alert('I watch TV');
      }
}

Human.prototype = new Worker();
var Human1 = new Human();
console.log('Human1', Human1);

// var human = {
//       name: 'Alex',
//       age: 20,
//       sex: 'M',
//       growth: 178,
//       weight: 75
// };
//
// var worker = {
//       placeWork: 'IT Company',
//       salary: 2000,
//       work: function(){
//         alert('I work');
//       }
// };
//
// var student = {
//       placeStudy: 'University',
//       scholarship: 100,
//       watchTV: function(){
//         alert('I watch TV');
//       }
// };
//
// if (human.age > 17 && human.age < 23) {
//   student._proto_ = human;
// }
// if (human.age > 23) {
// worker._proto_ = human;
// }
//
// console.log('worker', worker);
// console.log('student', student);
