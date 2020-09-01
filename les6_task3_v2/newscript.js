let buyBtns = document.querySelectorAll('.toBasketBtn');

buyBtns.forEach(function(btn){
    btn.addEventListener('click', function(event){
        let id = event.srcElement.dataset.id;
        let name = event.srcElement.dataset.name;
        let price = event.srcElement.dataset.price;
        basket.addProduct({id : id, name : name, price : price});
    });
});

let basket = {
    products : {},

    addProduct(product) {
        this.addProductToBasketObj(product);
        this.showProductInBasket(product);
        this.showTotalSum();
        this.addRemoveBtnListener();
    },

    addProductToBasketObj(product){
        if(this.products[product.id] == undefined) {
            this.products[product.id] = {
                price : product.price,
                name : product.name,
                quantity : 1,
            } 
        } else {
                this.products[product.id].quantity++;
        }
    },

    showProductInBasket(product) {
        let exidstingProduct = document.querySelector(`.productQuantity[data-id="${product.id}"]`);
        if (exidstingProduct) {
            exidstingProduct.textContent++;
            return
        }
        let productRow = `
            <tr>
                <td scope='row'>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td class='productQuantity' data-id=${product.id}>1</td>
                <td><button class = 'deleteBtn' data-id="${product.id}">Delete</button></td>
            </tr>
        `;

        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentHTML('beforeend',productRow);
    },

    getTotalSum(){
        sum = 0;
        for (key in this.products) {
            sum += this.products[key].price * this.products[key].quantity;
        }
        return sum;
    },

    showTotalSum() {
        document.querySelector('.total').textContent = this.getTotalSum();
    },

    removeProductListener(event){
        basket.removeProduct(event);
        basket.showTotalSum();
    },

    addRemoveBtnListener(){
        let removeBtns = document.querySelectorAll('.deleteBtn');
        for (let i = 0; i < removeBtns.length; i++) {
            removeBtns[i].addEventListener('click', this.removeProductListener)
        }
    },

    removeProduct(event){
        let id = event.srcElement.dataset.id;
        this.removeProductFromBasket(id);
        this.removeProductFromObj(id);
    },

    removeProductFromBasket(id) {
        let quantityId =  document.querySelector(`.productQuantity[data-id="${id}"]`);
        if (quantityId.textContent == 1) {
            quantityId.parentNode.remove();
        } else {
            quantityId.textContent--;
        }
    },

    removeProductFromObj(id){
        if (this.products[id].quantity == 1) {
            delete this.products[id];
        } else {
            this.products[id].quantity--;
        }
    },
}