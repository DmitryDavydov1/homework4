function startMathGame() {
  // 1. Генерируем случайные числа
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;

  // 2. Случайная операция
  const operations = ['+', '-', '*', '/'];
  const randomIndex = Math.floor(Math.random() * operations.length);
  const operation = operations[randomIndex];

  let correctAnswer;

  // 3. Считаем правильный ответ
  if (operation === '+') {
    correctAnswer = num1 + num2;
  } else if (operation === '-') {
    correctAnswer = num1 - num2;
  } else if (operation === '*') {
    correctAnswer = num1 * num2;
  } else if (operation === '/') {
    correctAnswer = +(num1 / num2).toFixed(2); // округление
  }

  // 4. Спрашиваем ответ у пользователя
  const userAnswer = Number(
    prompt(`Реши пример: ${num1} ${operation} ${num2}`)
  );

  // 5. Проверка
  if (isNaN(userAnswer)) {
    alert('Это не число!');
    return;
  }

  // 6. Результат
  if (userAnswer === correctAnswer) {
    alert('🎉 Правильно!');
  } else {
    alert(`❌ Неправильно! Правильный ответ: ${correctAnswer}`);
  }
}






// =========================
// Задание 1
// =========================

const arr1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
  if (arr1[i] === 10) break;
}


// =========================
// Задание 2
// =========================

const arr2 = [1, 5, 4, 10, 0, 3];

console.log(arr2.indexOf(4));


// =========================
// Задание 3
// =========================

const arr3 = [1, 3, 5, 10, 20];

console.log(arr3.join(' '));


// =========================
// Задание 4
// =========================

let arr4 = [];

for (let i = 0; i < 3; i++) {
  let inner = [];

  for (let j = 0; j < 3; j++) {
    inner.push(1);
  }

  arr4.push(inner);
}

console.log(arr4);


// =========================
// Задание 5
// =========================

let arr5 = [1, 1, 1];

arr5.push(2, 2, 2);

console.log(arr5);


// =========================
// Задание 6
// =========================

let arr6 = [9, 8, 7, 'a', 6, 5];

arr6 = arr6.filter(item => item !== 'a');
arr6.sort((a, b) => a - b);

console.log(arr6);


// =========================
// Задание 7
// =========================

const arr7 = [9, 8, 7, 6, 5];

let userGuess = Number(prompt('Угадай число из массива'));

if (arr7.includes(userGuess)) {
  alert('Угадал');
} else {
  alert('Не угадал');
}


// =========================
// Задание 8
// =========================

let str = 'abcdef';

console.log(str.split('').reverse().join(''));


// =========================
// Задание 9
// =========================

let arr9 = [[1, 2, 3], [4, 5, 6]];

console.log(arr9.flat());


// =========================
// Задание 10
// =========================

let arr10 = [];

for (let i = 0; i < 10; i++) {
  arr10.push(Math.floor(Math.random() * 10) + 1);
}

for (let i = 0; i < arr10.length - 1; i++) {
  console.log(arr10[i] + arr10[i + 1]);
}


// =========================
// Задание 11
// =========================

function squareArray(arr) {
  return arr.map(num => num ** 2);
}


// =========================
// Задание 12
// =========================

function getLengths(arr) {
  return arr.map(str => str.length);
}


// =========================
// Задание 13
// =========================

function getNegativeNumbers(arr) {
  return arr.filter(num => num < 0);
}


// =========================
// Задание 14
// =========================

let arr14 = [];

for (let i = 0; i < 10; i++) {
  arr14.push(Math.floor(Math.random() * 11));
}

let evens = arr14.filter(num => num % 2 === 0);

console.log('Исходный массив:', arr14);
console.log('Четные:', evens);


// =========================
// Задание 15
// =========================

let arr15 = [];

for (let i = 0; i < 6; i++) {
  arr15.push(Math.floor(Math.random() * 10) + 1);
}

let sum = arr15.reduce((acc, num) => acc + num, 0);

console.log('Массив:', arr15);
console.log('Среднее:', sum / arr15.length);