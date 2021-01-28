const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/'

class ProductsList {
    constructor(container = ".products") {
        this.container = container
        this.goods = []

        this._getGoods()
            .then(data => {
                this.goods = [...data]
                this.render()
            })

    }
    _getGoods = () => {
        return fetch(`${API}catalogData.json`)
            .then(response => response.json())
            .catch((error) => console.log("goods", error))
    }
    getSumPriceOfGoods() {
        let result = 0
        this.goods.forEach(product => {
            result += product.price
        })
        return result
    }
    render() {
        const box = document.querySelector(this.container)
        this.goods.forEach(product => {
            const card = new ProductItem(product)
            box.insertAdjacentHTML("beforeend", card.render())
        })
    }
}

class ProductItem {
    constructor(product = { title: '', price: 0 },
        img = "https://via.placeholder.com/150") {
        this.id = product.id_product
        this.title = product.product_name
        this.price = product.price
        this.img = img
    }
    render() {
        return `<div class="product">
                <img src="${this.img}"/>
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="btn buy-btn">Купить</button>
            </div>`
    }
}

class Cart {
    constructor(container = ".products") {
        this.container = container
        this.goodsCart = []
        this._getGoodsCart()
            .then(data => {
                this.goodsCart = [...data.contents]
                this.amount = data.amount
                this.countGoods = data.countGoods
                this.render()
            })
    }
    _getGoodsCart = () => {
        return fetch(`${API}getBasket.json`)
            .then(response => response.json())
            .catch((error) => console.log("goodsCart", error))
    }
    addProduct() {

    }
    _removeProduct(event) {
        this.goodsCart = this.goodsCart.filter(item => event.target.parentNode.dataset["id"] != item.id_product)
        this.render()
    }
    getSumPriceOfProduct() {

    }
    render() {
        const box = document.querySelector(this.container)
        box.innerHTML = ""
        this.goodsCart.forEach(product => {
            const card = new CartProduct(product)
            box.insertAdjacentHTML("beforeend", card.render())
        })
        const removeProductCartButtons = document.querySelectorAll(".remove-btn")
        removeProductCartButtons.forEach(btn => btn.addEventListener("click", this._removeProduct.bind(this)))
    }
}

class CartProduct {
    constructor(product = { title: '', price: 0 },
        img = "https://via.placeholder.com/150") {
        this.id = product.id_product
        this.title = product.product_name
        this.price = product.price
        this.quantity = product.quantity
        this.img = img
    }
    render() {
        return `<div class="product" data-id = ${this.id}>
               <img src="${this.img}"/>
               <h3>${this.title}</h3>
               <p>${this.price}</p>
               <p>${this.quantity}</p>
               <button class="btn remove-btn">удалить из корзины</button>
    </div>`
    }
}

const getCart = () => {
    const cart = new Cart()
}

const productsList = new ProductsList();

const buttonCart = document.querySelector(".btn-cart");
buttonCart.addEventListener("click", getCart)