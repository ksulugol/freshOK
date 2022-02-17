// ================ filter ===============

// let results = arr.filter(function(item, index, array) {
//   // если true - элемент добавляется к результату, и перебор продолжается
//   // возвращается пустой массив в случае, если ничего не найдено
// });


let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];

// возвращает массив, состоящий из двух первых пользователей
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2



// =========== find и findIndex ===========

// let result = arr.find(function(item, index, array) {
//   // если true - возвращается текущий элемент и перебор прерывается
//   // если все итерации оказались ложными, возвращается undefined
// });


// let users = [
//   {id: 1, name: "Вася"},
//   {id: 2, name: "Петя"},
//   {id: 3, name: "Маша"}
// ];
// let user = users.find(item => item.id == 1);

// console.log(user.name); // Вася




// ======= indexOf/lastIndexOf и includes =========

// let arr = [1, 0, false];
// console.log( arr.indexOf(0) ); // 1
// console.log( arr.indexOf(false) ); // 2
// console.log( arr.indexOf(null) ); // -1
// console.log( arr.includes(0) ); // true


// const arr = [NaN];
// console.log( arr.indexOf(NaN) ); // -1 (должен быть 0, но === проверка на равенство не работает для NaN)
// console.log( arr.includes(NaN) );// true (верно)


// =========== Перебор: forEach ===========
// arr.forEach(function(item, index, array) {
//   // ... делать что-то с item
// });


// // Вызов alert для каждого элемента
// ["Bilbo", "Gandalf", "Nazgul"].forEach(alert);



// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//   alert(`${item} имеет позицию ${index} в ${array}`);
// });





// ============== concat =============
// arr.concat(arg1, arg2...)

// let arr = [1, 2];
// let arrayLike = {
//   0: "что-то",
//   1: "ещё",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2
// };
// console.log( arr.concat(arrayLike) ); // 1,2,что-то,ещё



// let arr = [1, 2];
// let arrayLike = {
//   0: "что-то",
//   length: 1
// };
// console.log( arr.concat(arrayLike) ); // 1,2,[object Object]



// let arr = [1, 2];
// // создать массив из: arr и [3,4]
// console.log( arr.concat([3, 4]) ); // 1,2,3,4
// // создать массив из: arr и [3,4] и [5,6]
// console.log( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
// // создать массив из: arr и [3,4], потом добавить значения 5 и 6
// console.log( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6






// ============= slice ==========
// arr.slice([start], [end])


// let arr = ["t", "e", "s", "t"];

// console.log( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)

// console.log( arr.slice(-2) ); // s,t (копирует с -2 до конца)



// ========= splice =========
// arr.splice(index[, deleteCount, elem1, ..., elemN])


// let arr = [1, 2, 5];
// // начиная с индекса -1 (перед последним элементом)
// // удалить 0 элементов,
// // затем вставить числа 3 и 4
// arr.splice(-1, 0, 3, 4);
// console.log( arr ); // 1,2,3,4,5


// let arr = ["Я", "изучаю", "JavaScript"];
// // с позиции 2
// // удалить 0 элементов
// // вставить "сложный", "язык"
// arr.splice(2, 0, "сложный", "язык");
// console.log( arr ); // "Я", "изучаю", "сложный", "язык", "JavaScript"


// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// // удалить 2 первых элемента
// let removed = arr.splice(0, 2);
// console.log( removed ); // "Я", "изучаю" <-- массив из удалённых элементов


// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// // удалить 3 первых элемента и заменить их другими
// arr.splice(0, 3, "Давай", "танцевать");
// console.log( arr ) // теперь ["Давай", "танцевать", "прямо", "сейчас"]



// let arr = ["я", "изучаю", "JavaScript"];
// arr.splice(2, 1); // начиная с позиции 1, удалить 1 элемент
// console.log( arr ); // осталось ["Я", "JavaScript"]




// let a = [1, 2, 3, 4,5];
// console.log(a);

// let temp = a[0];
// a[0] = a[a.length - 1];
// a[a.length - 1] = temp;
// console.log(a);



// let zodiac = ['Козерог', 1, 19, 'Ivanov'];
// zodiac[3] = 'Sergeev'
// console.log(zodiac);
