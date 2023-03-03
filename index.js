/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

//  №1
//  function nameJs(){
//       const message = prompt("Яка офіційна назва JavaScript?");
//       const jsName = 'ECMAScript';

//       if(message === jsName){
//             alert("Вірно!");
//       }else{
//             alert("Не знаєте? ECMAScript!");
//       }
//  }

//  nameJs();

// #2
/**
 *? Напишіть програму, яка отримає від користувача
 *? число (кількість хвилин) та виведе в консоль
 *? рядок у форматі годин та хвилин
 *? https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 *? 70 === 01:10
 */

// function userTime(number) {

//     const hours = String(Math.floor(number / 60)).padStart(2, 0);
//     const minutes = String(number % 60).padStart(2, 0);
//     return `${hours}:${minutes}`;

// }

// const userMinutes = prompt("Введіть число");
// console.log(userTime(userMinutes));

// ========================

//№3
/**
 *? Напишіть цикл, який виводить у консоль
 *? числа від max до min за спаданням.
 *? Виведіть у консоль усі парні числа від min до max
 */

// const max = 50;
// const min = 23;

// function numbers(max, min) {
//     for (i = max; i >= min; i -= 1) {
//         if (i % 2 === 0) {
//           console.log(i)
//         }

//     }

//     for (i = max; i >= min; i -= 1) {
//         console.log(i)

//     }

// }

// // numbers(max, min)
// numbers(67, 5)

/**
 *? При завантаженні сторінки користувачеві пропонується
 *? в prompt ввести число. Введення додається до значення
 *? змінної total.
 *? Операція введення числа триває до того часу,
 *? поки користувач не натисне кнопку Cancel у prompt.
 *? Після того як користувач припинив введення, натиснувши на
 *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
 
 *! Робити перевірку, що користувач ввів саме число,
 *! а не довільний набір символів не потрібно.
 */

// №3
// let total = 0;
// let check = false;
// let message = prompt("Введіть число");

// do {
//   if (message) {
//     check = true;
//     total += Number(message);
//     message = prompt("Введіть число");
//   } else {
//     check = false;
//     alert(`Загальна сума введених чисел дорівнює ${total}`);
//   }
// } while (check);

// Task №4

/**
 *?  Записать массив, const arr = ['BEST', 'the', 'foo', 'is',  'JS' ]
 *? развернуть массив,
 *? вырезать foo,
 *? перевести его в строку разделенную пробелами не меняя массив
 */

// 1stringanswer
// const arr = ['BEST', 'the', 'foo', 'is', 'JS'];
// console.log(arr.slice(0,2).concat(arr.slice(-2)).reverse().join(' '));

/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */

//  const user = {
//       name: "John",
//       age: 20,
//       hobby: "tennis",
//       premium: true,
//     };

//     user.mood = 'happy';
//     user.hobby = 'skydiving';
//     user.premium = false;

//     const arr = Object.keys(user);

//     for(const key of arr){
//        console.log(`${key}: ${user[key]} `)
//     }

// const arr = ['BEST', 'the', 'foo', 'is', 'JS'];
// const newArrey = arr.reverse();
// delete newArrey[2];
// const result = newArrey.toString(" ");
// console.log(result);

/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */

//  const user = {
//       name: "John",
//       age: 20,
//       hobby: "tennis",
//       premium: true,
//     };

//     user.mood = "happy";
//     user.hobby = "skydiving";
//     user.premium = false;

//     for (const key of Object.keys(user)) {
//       console.log(`${key}:${user[key]}`);
//     }

/**
 *? Напишіть ф-цію calcTotalPrice(stones, stonesName),
 *? яка приймає масив об'єктів та
 *? рядок під назвою каменю.
 *? Функція вважає та повертає загальну вартість каменів
 *? з таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// const calcTotalPrice = (stones, stonesName) => {
//   for (const stone of stones) {
//     if (stone.name === stonesName) {
//       return stone.price * stone.quantity;
//     }
//   }
// };

// console.log(calcTotalPrice(stones, "Изумруд"));
