const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/'

const app = new Vue({
    el: "#app",
    data: {
        products: [],
        productsCart: [],
        filteredProducts: [],
        catalogUrl: "catalogData.json",
        basketUrl: "getBasket.json",
        imgProduct: "https://via.placeholder.com/150",
        amountCart: null,
        countGoodsCart: null,
        userSearch: "",
        show: false,
    },
    methods: {
        getProducts(url) {
            return fetch(url)
                .then(response => response.json())
                .catch((error) => console.log(error))
        },
        addProductInCart(product) {
            const findedProductCart = this.productsCart.find(el => product.id_product === el.id_product)
            this.amountCart += product.price
            this.countGoodsCart++
            if (findedProductCart) {
                findedProductCart.quantity++
            } else {
                this.productsCart.push({
                    ...product,
                    quantity: 1
                })
            }
        },
        removeProductCart(productCart) {
            this.amountCart -= productCart.price
            this.countGoodsCart--
            if (productCart.quantity > 1) {
                this.productsCart.forEach(el => {
                    if (el.id_product === productCart.id_product) {
                        el.quantity--
                    }
                })
            } else {
                this.productsCart = this.productsCart.filter(
                    el => productCart.id_product != el.id_product
                )
            }
        },
        filterProducts() {
            const regexp = new RegExp(this.userSearch, "i")
            this.filteredProducts = this.products.filter(
                el => regexp.test(el.product_name)
            )
        },
        getSumPriceOfProducts() {
            return this.products.reduce((sum, product) => sum += product.price, 0)
        }
    },
    mounted() {
        this.getProducts(`${API}${this.catalogUrl}`)
            .then(data => {
                data.forEach(el => this.products.push(el))
                this.filterProducts()
            })
        this.getProducts(`${API}${this.basketUrl}`)
            .then(data => {
                data.contents.forEach(el => this.productsCart.push(el))
                this.amountCart = data.amount
                this.countGoodsCart = data.countGoods
            })
    }
})