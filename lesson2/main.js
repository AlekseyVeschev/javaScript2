class ProductsList {
    constructor(container = ".products") {
        this.container = container
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ]
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
        this.id = product.id
        this.title = product.title
        this.price = product.price
        this.img = img
    }
    render() {
        return `<div class="product">
                <img src="${this.img}"/>
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}
class Cart {
    constructor() {

    }
    addProduct() {

    }
    removeProduct() {

    }
    getSumPriceOfProduct() {

    }
    render() {
    }
}

class CartProduct {
    constructor() {
    }
    render() {
        return ""
    }
}

const cards = new ProductsList()
cards.render()