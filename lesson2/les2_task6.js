/* 
Программа должна спросить у пользователя число, это будет количество денег, которое он хочет положить на счет в банке.
Затем программа должна выдать примерно такое сообщение: 
"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101. 
"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020. 
"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104. 
То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного числа.
*/

"use strict"
/**
 * choose the ending of word "рубл"
 *
 * @param      {string}  num        The number
 * @param      {number}  numLength  The number length
 * @return     {string}  ending     the ending of word "рубл"
 */
function chooseEnd(num,numLength){
	let ending = "";
	let lastNumber = num.charAt(numLength);
    if (lastNumber == "1" || lastNumber == "2" || lastNumber == "3" || lastNumber == "4") {
        if (numLength == 0) {
            switch (lastNumber) {
                case "1":
                    ending = "ь";
                    break;
                default:
                    ending = "я";
                    break;
            }
        } else {
            let almostLastNumber = num.charAt(numLength-1);
            switch (almostLastNumber) {
                case "1":
                    ending = "ей";
                    break;
                case "0":
                    if (lastNumber == "1") {
					   ending = "ь";
					   break;
				    } else {
					   ending = "я";
					   break;
				    }
                default:
                    ending = "ей";
                    break; 
            }  
        }
    } else {
        ending = "ей";
    }
	return ending;
}
/**
 * Gets the answer.
 *
 * @param      {string}  num     The number
 * @return     {<type>}  The answer.
 */
function getAnswer (num) {
	if (num === null) {
		alert("Вы нажали отмена");
		return;
		//throw new Error("вы нажали отмена");
	}
	if (num === "") {
		alert("Вы не ввели никакого значения");
		return;
		//throw new Error("Вы не ввели никакого значения");
	}
	num = Number(num);
	if (isNaN(num)) {
		alert("Вы ввели не корректное значение");
		return;
		//throw new Error("вы ввели не корректное значение");
	}
	num = String(num);
	let numLength = num.length - 1;
	return alert(`Ваша сумма в ${num} рубл${chooseEnd(num,numLength)} успешно зачислена`);
}

let num = (prompt("Сколько денег вы хотите положить на счёт?",""));

getAnswer(num);

