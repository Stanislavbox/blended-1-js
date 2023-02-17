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
