class Hamburger {
    constructor(size, stuffing) {
        this.hamburger = []
        this.size = size
        this.stuffing = stuffing
        this.toppingsList = []
        this.sizes = [
            { name: "small", price: 50, calories: 20 },
            { name: "large", price: 100, calories: 40 },
        ]
        this.stuffings = [
            { name: "cheese", price: 10, calories: 20 },
            { name: "salad", price: 20, calories: 5 },
            { name: "potatoes", price: 15, calories: 10 },
        ]
        this.toppings = [
            { name: "seasoning", price: 15, calories: 0 },
            { name: "mayonnaise", price: 20, calories: 5 },
        ]
    }
    // Добавить добавку
    addTopping(topping) {
        this.toppings.forEach(item => {
            if (item.name == topping) {
                this.toppingsList.push(item)
            }
        })
    }
    // Убрать добавку
    removeTopping(topping) {
        this.toppings.forEach(item => {
            if (item.name == topping) {
                this.toppingsList.filter(item => item.name !== topping)
            }
        })
    }
    // Получить список добавок
    getToppings(topping) {
        this.toppingsList.forEach(item => {
            this.toppings.forEach(topping => {
                if (topping.name == item.name) {
                    this.hamburger.push(item)
                }
            })
        })
    }
    // Узнать размер гамбургера
    getSize() {
        this.sizes.forEach(item => {
            if (this.size == item.name) {
                this.hamburger.push(item)
            }
        })
    }
    // Узнать начинку гамбургера
    getStuffing() {
        this.stuffings.forEach(item => {
            if (this.stuffing == item.name) {
                this.hamburger.push(item)
            }
        })
    }
    // Узнать цену
    calculatePrice() {
        let result = 0
        this.hamburger.forEach(item => {
            result += item.price
        })
        return result
    }
    // Узнать калорийность
    calculateCalories() {
        let result = 0
        this.hamburger.forEach(item => {
            result += item.calories
        })
        return result
    }
}
const hamburger1 = new Hamburger("large", "cheese")
hamburger1.addTopping("mayonnaise")
hamburger1.addTopping("seasoning")
hamburger1.getToppings()
hamburger1.getSize()
hamburger1.getStuffing()

console.log(hamburger1.calculatePrice())
console.log(hamburger1.calculateCalories())
//////////////////////////////////////////////////////////////////////

class ProductsList {
    constructor(container = ".products") {
        this.container = container
        this.goots = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ]
    }
    gootsSumPrice() {
        let result = 0
        this.goots.forEach(product => {
            result += product.price
        })
        return result
    }
    render() {
        const box = document.querySelector(this.container)
        this.goots.forEach(product => {
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
class Basket {
    constructor() {
        this.productsBasket = []
    }
    addProductBasket() {

    }
    removeProductBasket() {

    }
    render() {
    }
}

class ProductBasket extends ProductItem {
    constructor(product, img) {
        super(product, img)
    }
    render() {
        return `<div class="product">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <button class="buy-btn">Удалить</button>
            </div>`
    }
}

const cards = new ProductsList()
cards.render()