/*
Объявить две переменные a и b и задать им целочисленные произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу:
- если a и b положительные, вывести их разность (ноль можно считать положительным числом);
- если а и b отрицательные, вывести их произведение;
- * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;
*/

"use strict"
let a = -20; let b = -3;

if (a > 0 && b > 0) {
    let result = a - b;
    alert(result)
}
if (a < 0 && b < 0) {
    let result = a * b;
    alert(result);
}
if (Math.sign(a) != Math.sign(b)) {
    let result = a + b;
    alert(result);
}