/*
Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами.
Т.е. например, функция для сложения должна принимать два числа, складывать их и возвращать результат.
Обязательно использовать оператор return.
*/
"use strict"

function getSum (a, b) {
    let result  = a + b;
    return result;
}

function getSubtract (a, b) {
    let result  = a - b;
    return result;
}

function getMultiplication (a, b) {
    let result  = a * b;
    return result;    
}

function getDevision (a, b) {
    let result  = a / b;
    if (isFinite(result)) {
            return result;
    } else {
        alert('Деление на ноль. Второе число не должно быть равно нулю!')
    }   
}


let a = Number(prompt("Введите первое число",''));
let b = Number(prompt("Введите второе число",''));

//getSum(a,b);
//getSubtract(a, b);
//getMultiplication(a, b);
getDevision(a, b);
