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

const form = document.querySelector("form")

const onSubmit = (event) => {
    let size = event.target.size.value
    let stuffing = event.target.stuffing.value
    let topping = event.target.topping

    const hamburger = new Hamburger(size, stuffing)
    event.preventDefault();
    hamburger.getSize()
    hamburger.getStuffing()

    topping.forEach(item => {
        if (item.checked) {
            hamburger.addTopping(item.value)
        } else {
            hamburger.removeTopping(item.value)
        }
    })
    hamburger.getToppings()
    form.insertAdjacentHTML("beforebegin",
        `<h2>
        Price hamburger: ${hamburger.calculatePrice()}<br>
        Calories hamburger: ${hamburger.calculateCalories()}
    </h2>`
    )
}
form.addEventListener("submit", onSubmit)