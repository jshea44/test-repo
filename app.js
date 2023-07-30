// // adding / saving -> takes a key : value pair
// const person = { name: 'josh'}

// localStorage.setItem('name', 'Josh');

// // JSON.stringify - takes an object and converts it to Javascript Object Notation. 
// // Can't be used on a string.

// localStorage.setItem('person', JSON.stringify(person))
// console.log(localStorage.name);

// // loading from localstorage
// let personValue = JSON.parse(localStorage.getItem('person'));
// console.log(personValue.name);

// // removing / resetting
// localStorage.clear();

// console.log(localStorage);

// let square = document.getElementById('animate-me');

// square.addEventListener('click', (event) => {
//   event.target.classList.add('animated');
// });

// function Date() {
//   this.nodes = [];
//   this.edges = [];
// }

// Date.prototype.getTime = function(){
//   console.log('hello');
// };

// function unixEpochTime(){
//   let d = new Date()
//   return d.getTime();
// }

// let testAlpha = unixEpochTime();
// let testBeta = unixEpochTime;

// console.log(testAlpha);
// console.log(testBeta);

let movie = { title: "The Matrix" };
let answer1 = typeof(movie);
let answer2 = typeof(answer1)
console.log(answer1);
console.log(answer2);
