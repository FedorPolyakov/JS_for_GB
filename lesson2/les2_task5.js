/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.
*/

'use strict'

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

function getDivision (a, b) {
    let result  = a / b;
    if (isFinite(result)) {
            return result;
    } else {
        alert('Деление на ноль. Второе число не должно быть равно нулю!')
    }   
}
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return getSum(arg1,arg2);
            break;
        case "-":
            return getSubtract(arg1,arg2);
            break;
        case "*":
            return getMultiplication(arg1,arg2);
            break;
        case "/":
            return getDivision(arg1,arg2);
            break;
        default:
            let result = "Данная операция невозможна"
            return result;
    }
}

let a = Number(prompt("Введите первое число",''));
let b = Number(prompt("Введите второе число",''));
let operation = (prompt("Что делаем? Возможно сложение, вычитание, умножение и деление",''));
alert(mathOperation(a,b,operation));