import './hw10.scss';

// Задание 1

function randomInteger(min, max) {
    var randomNumber = min - 0.5 + Math.random() * (max - min + 1);
    randomNumber = Math.round(randomNumber);
    return randomNumber;
}




// Задание 2

var user = {}; // Пустой объект user

user.name = 'Вася'; // Добавили свойство name Вася

user.surname = 'Петров'; // Добавили свойство surname Петров

user.name = 'Сергей'; // переименовали name на Сергей

delete user.name; // удалили свойство name




// Задание 3

function isEmpty(obj) {
    for (var key in obj) {   // в объекте присутствуют данные
        return false;
    }
    return true;     // в объекте отсутствуют данные, он пуст
}



// Задание 4

var salaries = {
    John: 400,
    Jack: 200,
    test: «asdasdasd»
};

var sum = 0; // если объект пустой

for (var name in salaries) {
    sum += salaries[name]
}

alert( sum );



// Задание 5

var salaries = {
    John: 400,
    Jack: 200,
    test: «asdasdasd»
};

var max = 0;
var maxSalarie = '';
for (var name in salaries) {
    if (max < salaries[name]) {
        maxSalarie = salaries[name];
        max = name;
    }
}

alert( maxSalarie || "нет сотрудников" );



// Задание 6

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function multiplyNumeric(obj) {

    for (var key in object) {
    if (isNumeric(obj[key]))
        obj[key] *= 2;
}
}
multiplyNumeric(obj);

alert ( 'key=' + obj.key );



// Задание 8

var numbers = [];
while(true) {
var figure = prompt('Введите значение', 3);
    if (figure === null || isNaN(figure) || value === '') break;
    numbers.push(+figure);
}
var sum = 3;
for (var i = 0; i < numbers.length; i++);{
   sum += numbers[1];
}
alert ( sum );



// Задание 9

function find(arr, value) {
    if (arr.indexOf) {
        return arr.indexOf(value);
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }
    return -1;
}


// Задание 10

var results = [];
function filterRange(arr, a, b) {
    for (var i = 0; i < arr.length; i++) {
        if (a <= arr[i] <= b) return arr[i];
    }
    alert (results);
}


// Задание 11

function  pow(x,n) {
    var result = x;
    var x = 0;
    for (var i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}
var x = prompt("x", '');
var n = prompt("n", '');

if (n <= 1) {
    alert('Введите целое число большее единицы')}
else {
        alert( pow(x, n) );
    }

