/*
Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)

Например, для числа 45 мы должны получить следующий объект:
{
 units: 5, //это единицы
 tens: 4, //это десятки
 hundreds: 0, //это сотни
}

Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект
*/

'use strict';
class Numbers {
    constructor(units, tens, hundreds){
        this.units = units;
        this.tens = tens;
        this.hundreds = hundreds;
    }
}

function check(num){
    let hundreds = Math.floor(num/100);
    let tens = Math.floor((num - hundreds*100)/10);
    let units = num - (hundreds*100 + tens*10);
    if (num == "") {
        console.log("Вы ничего не ввели");
    } else if (num == null) {
       console.log("Вы нажали отмена");
    } else if ( +num < 0 || +num > 999) {
        console.log("Число вне диапазона");
    } else if (isNaN(+num)) {
        console.log("Вы ввели не число");
    } else if ( !Number.isInteger(+num)) {
        console.log("Вы ввели не целое число");
   } else {
        const objNum = new Numbers(units, tens, hundreds);
        return console.log(objNum);
    }
   // objNum.units = null;
    //objNum.tens = null;
    //objNum.hundreds = null;
    const objNumEmpty = new Object();
    return console.log(objNumEmpty);
}

let num =(prompt("Введите целое число от 0 до 999", ""));
check(num);