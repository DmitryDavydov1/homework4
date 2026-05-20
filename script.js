



function startGame() {
  // 1. Генерируем случайное число от 1 до 100
  const secretNumber = Math.floor(Math.random() * 100) + 1;

  let guess;

  alert('Игра началась! Угадай число от 1 до 100');

  // 2. Цикл пока не угадает
  while (true) {
    guess = Number(prompt('Введи число от 1 до 100'));

    // Проверка на число
    if (isNaN(guess)) {
      alert('Это не число! Попробуй ещё раз');
      continue;
    }

    // Проверка ответа
    if (guess > secretNumber) {
      alert('Меньше ⬇️');
    } else if (guess < secretNumber) {
      alert('Больше ⬆️');
    } else {
      alert('🎉 Ты угадал!');
      break;
    }
  }
}




// =========================
// Задание 1
// =========================

function minNumber(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}


// =========================
// Задание 2
// =========================

function checkEvenOdd(n) {
  if (n % 2 == 0) {
    return 'Число четное';
  } else {
    return 'Число нечетное';
  }
}


// =========================
// Задание 3
// =========================

// Функция выводит квадрат числа в консоль
function printSquare(n) {
  console.log(n * n);
}

// Функция возвращает квадрат числа
function getSquare(n) {
  return n * n;
}


// =========================
// Задание 4
// =========================

function checkAge() {
  let age = Number(prompt('Сколько вам лет?'));

  if (age < 0) {
    alert('Вы ввели неправильное значение');
  } else if (age >= 0 && age <= 12) {
    alert('Привет, друг!');
  } else {
    alert('Добро пожаловать!');
  }
}


// =========================
// Задание 5
// =========================

function multiplyNumbers(a, b) {
  if (isNaN(Number(a)) || isNaN(Number(b))) {
    return 'Одно или оба значения не являются числом';
  }

  return Number(a) * Number(b);
}


// =========================
// Задание 6
// =========================

function cubeNumber() {
  let value = prompt('Введите число');

  if (isNaN(Number(value))) {
    return 'Переданный параметр не является числом';
  }

  let n = Number(value);

  return `${n} в кубе равняется ${n ** 3}`;
}


// =========================
// Задание 7
// =========================

let circle1 = {
  radius: 5,

  getArea() {
    return Math.PI * this.radius ** 2;
  },

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
};

let circle2 = {
  radius: 10,

  getArea() {
    return Math.PI * this.radius ** 2;
  },

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
};