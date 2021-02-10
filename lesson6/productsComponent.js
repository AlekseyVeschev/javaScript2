Vue.component("products", {
   props: ["filtered", "img"],
   template: `<div class="products">
                   <product class="product-item" v-for="product of filtered" 
                   :key="product.id_product"
                   :img="img"
                   :product ="product"
                   >
                  </product>
            </div>
   `
})
Vue.component("product", {
   props: ["product", "img"],
   template: `  <div class="product">
                        <img :src="img" alt="Some img">
                        <h3>{{product.product_name}}</h3>
                        <p>{{product.price}} &#8381</p>
                        <button class="btn buy-btn" @click="$root.addProductInCart(product)">Купить</button>
                </div>
     `
})