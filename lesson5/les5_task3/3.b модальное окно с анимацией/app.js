// 1. получить элемент с классом .wrap и сохранить
// его в переменную
let modalEl = document.querySelector('.wrap');
// 2. получить тег span, сохранить в переменную
let spanEl = document.querySelector('span');
// 3. получить тег button, сохранить в переменную
let butEl = document.querySelector('button');

modalEl.classList.toggle('rollOut');
// 4. на кнопку показа модального окна назначить обработку
// события клика
// 4.1 при клике функция обработчик у элемента с
// классом .wrap должна удалять классы rollOut и hidden,
// элементу с классом .wrap добавить классы animated и rollIn
butEl.addEventListener('click',function(){
    modalEl.classList.remove('rollOut','hidden');
    modalEl.classList.add('animated', 'rollIn');
});
// 5. назначить обработку клика по тегу span
// 5.1 при клике у элемента с классом .wrap удалите
// класс rollIn и добавьте класс rollOut
spanEl.addEventListener('click',function(){
    modalEl.classList.remove('rollIn');
    modalEl.classList.add('rollOut');
});
// 5.2 используя setTimeout через секунду элементу
// .wrap добавьте класс .hidden
function addHidden () {
    modalEl.classList.add('hidden');
};

setTimeout(addHidden,1000);

