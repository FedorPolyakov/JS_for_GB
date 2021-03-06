/* 
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который
принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product
должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%.
*/

'use strict';
/*
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price *=0.75;
}

const prod= new Product('soap', 100);
prod.make25PercentDiscount();
console.log(prod);
*/

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price *=0.75;
    }
}

const prod = new Product('soap', 100);
prod.make25PercentDiscount();
console.log(prod);