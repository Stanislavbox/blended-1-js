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

//  *? У нас є об'єкт, у якому зберігаються зарплати
//  *? нашої команди
//  *? Напишіть код для підсумовування всіх зарплат і
//  *? збережіть його результат у змінній sum.
//  *? Якщо об'єкт salaries порожній, то результат має бути 0
//  */

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// function salary(object) {
//     let sum = 0;
//     const array = Object.values(object);
//     for (const value of array) {
//         sum += value;
//     }
//     return sum;
// }
// console.log(salary(salaries));

/**
 *? Напишіть функцію updateObject, яка приймає об'єкт та повертає
 *? новий об'єкт без вказаного параметра
 *? Очікуваний результат updateObject({a: 1, b: 2, c: 3}, 'b') => {a: 1}
 *? https://coderoad.ru/208105/%D0%9A%D0%B0%D0%BA-%D1%83%D0%B4%D0%B0%D0%BB%D0%B8%D1%82%D1%8C-%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%BE-%D0%B8%D0%B7-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0-JavaScript
 */

// const obj = { a: 1, b: 2, c: 3 };
// function updateObject(object, removeKey) {
//   const arr = { ...object };
//   delete arr[removeKey];
//   return arr;
// }
// console.log(updateObject(obj, "b"));

//TODO:==============================================
/**
*? Поверніть об'єкт, в якому вказано кількість тегів.
*? Очікуваний результат {js: 3, 
    nodejs: 3, 
    html: 2, 
    css: 2, 
    react: 2,
}

 */
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const totalTags = (array) => {
//   const arrayNew = array.flatMap((tweet) => tweet.tags);
//   console.log(arrayNew);
//   const newObj = arrayNew.reduce((acc, el) => {
//     return {
//       ...acc,
//       [el]: acc[el] ? acc[el] + 1 : 1,
//     };
//   }, {});
//   console.log(newObj);
// };

// totalTags(tweets);

///**
// *? Зробіть знижку 20% на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

// const fruits = [
//       { name: "apple", price: 200 },
//       { name: "orange", price: 300 },
//       { name: "grapes", price: 750 },
//     ];
// Вариант через map()
//     const newArr = fruits.map(fruit => {
      
//      return  {...fruit, id: Date.now(), price: fruit.price * 0.8}
//     });

// Вариант через for of
//       let newArr = [];
//       for(const item of fruits){
//             newArr.push({...item, id: Date.now(), price: item.price * 0.8})
//     }

//     console.log(newArr);


const arr = [
      { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
      { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
      { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
      { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
      { name: "Pierre", surname: "Curie", born: 1859, dead: 1906, id: 5 },
      { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 6 },
      { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 7 },
      { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 8 },
      { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 9 },
      { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 10 },
      { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 11 },
      { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 12 },
      { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 13 }
      ];
      
      // - Получить массив ученых, родившихся в 19 веке.
      // - Найти общую сумму лет, сколько прожили все ученые.
      // - Отсортировать ученых по алфавиту.
      // - Отсортировать ученых по количеству прожитых лет.
      // - Удалить из массива ученых, родившихся в 15, 16 или 17 веках.
      // - Найти ученого, который родился позже всех.
      // - Найти год рождения Albert Einstein.
      // - Найти ученых, фамилия которых начинается на букву "С".
      // - Удалить из массива всех ученых, имя которых начинается на букву "A".
      // - Найти ученого, который прожил больше всех и ученого, который меньше.
      // - Найти ученых, у которых совпадают первые буквы имени и фамилии.
      // - Узнать, все ли ученые работали в 19 веке.