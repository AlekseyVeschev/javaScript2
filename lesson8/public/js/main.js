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
        error: false,
    },
    methods: {
        getProducts(url) {
            return fetch(url)
                .then(response => response.json())
                .catch(() => { this.error = true })
        },
        addProductInCart(product) {
            const findedProductCart = this.productsCart.find(el => product.id_product === el.id_product)
            this.amountCart += product.price
            this.countGoodsCart++
            if (findedProductCart) {
                fetch(`/api/cart/${product.id_product}`, {
                    method: 'PUT',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ quantity: 1 })
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.result === 1) {
                            findedProductCart.quantity++
                        }
                    })

            } else {
                const newProductCart = { ...product, quantity: 1 }
                fetch(`/api/cart`, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newProductCart)
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.result === 1) {
                            this.productsCart.push(newProductCart)
                        }
                    })
            }
        },
        removeProductCart(productCart) {
            this.amountCart -= productCart.price
            this.countGoodsCart--
            if (productCart.quantity > 1) {
                fetch(`/api/cart/${productCart.id_product}`, {
                    method: 'PUT',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ quantity: -1 })
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.result === 1) {
                            this.productsCart.forEach(el => {
                                if (el.id_product === productCart.id_product) {
                                    el.quantity--
                                }
                            })
                        }
                    })
            } else {
                fetch(`/api/cart/${productCart.id_product}`, {
                    method: 'DELETE'
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.result === 1) {
                            this.productsCart = this.productsCart.filter(
                                el => productCart.id_product !== el.id_product
                            )
                        }
                    })
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
        this.getProducts(`/api/products`)
            .then(data => {
                data.forEach(el => this.products.push(el))
                this.filterProducts()
            })
        this.getProducts(`/api/cart`)
            .then(data => {
                this.amountCart = 0
                this.countGoodsCart = 0
                data.contents.forEach(el => {
                    this.productsCart.push(el)
                    this.amountCart += el.price * el.quantity
                    this.countGoodsCart += el.quantity
                })
            })
    }
})