// ==================== Игра «Камень, ножницы, бумага» ====================
function playGame() {
    const choices = ["камень", "ножницы", "бумага"];
    const userChoice = prompt("Ваш выбор: камень, ножницы или бумага?").toLowerCase();
    if (!choices.includes(userChoice)) {
        alert("Некорректный ввод. Пожалуйста, выберите камень, ножницы или бумагу.");
        return;
    }
    const computerIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[computerIndex];
    let result = "";
    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Вы проиграли!";
    }
    alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\n${result}`);
}
playGame(); // запуск игры

// ==================== Задание 1 ====================
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
people.sort((a, b) => a.age - b.age);
console.log(people);

// ==================== Задание 2 ====================
function isPositive(num) {
    return num > 0;
}
function isMale(person) {
    return person.gender === 'male';
}
function filter(array, ruleFunction) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}


// ==================== Задание 3 ====================
let counter = 0;
const intervalId = setInterval(() => {
    console.log(new Date());
    counter++;
    if (counter === 10) { // 30 секунд / 3 секунды = 10 раз
        clearInterval(intervalId);
        console.log("30 секунд прошло");
    }
}, 3000);

// ==================== Задание 4 ====================
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}
delayForSecond(function () {
    console.log('Привет, Глеб!');
});

// ==================== Задание 5 ====================
// Исправленный код: передаём функцию, а не результат вызова
function delayForSecondWithCb(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) cb();
    }, 1000);
}
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}
delayForSecondWithCb(() => sayHi('Глеб'));