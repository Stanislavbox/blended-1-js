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