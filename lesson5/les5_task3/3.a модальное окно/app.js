'use strict';

// 1. получить объект модального окна с классом .wrap
let modalEL = document.querySelector('.wrap');
// 2. получить тег span, используемый для закрытия окна
let spanEl = document.querySelector('span');
// 3. получить кнопку, используемую для показа модального окна
let butEl = document.querySelector('button');
// 4. назначить обработку клика на кнопку показа модального окна
// когда функция обработчик срабатывает она должна у модального
// окна удалять класс hidden
butEl.addEventListener('click', function() {
    modalEL.classList.remove('hidden');
});
// 5. назначить обработку клика на тег span, при клике
// в обработчике модальному окну должен быть добавлен
// класс hidden
spanEl.addEventListener('click',function(){
    modalEL.classList.add('hidden');
});
