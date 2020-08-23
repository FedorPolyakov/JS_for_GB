'use strict';

const buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
    button.addEventListener('click',handleClick);
});

function handleClick(clickedButtonEvent) {
    const cardNode = clickedButtonEvent.target.parentNode;

    const card = {
        wrap : cardNode,
        img :  cardNode.querySelector('img'),
        productName : cardNode.querySelector('.productName'),
        button : cardNode.querySelector('button'),
    };

    const buttonText = card.button.innerText;
    if (buttonText == "Подробнее") {
        showMoreText(card);
    } else {
        hideMoreText(card);
    }
};

function showMoreText(card) {
    card.img.style.display = "none";
    const anyText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, quas, eligendi. Minus molestias veritatis eos explicabo earum odit blanditiis saepe officia, dolores reprehenderit quod quibusdam deleniti vitae delectus. Nulla, ipsa.";
    let div = `<div class = "desc">${anyText}</div>`
    card.productName.insertAdjacentHTML("beforeend",div);
    card.button.innerText = "Отмена";
}

function hideMoreText(card) {
    card.img.style.display = "block";
    let delEl = card.wrap.querySelector('.desc');
    delEl.parentNode.removeChild(delEl);
    card.button.innerText = "Подробнее";
}