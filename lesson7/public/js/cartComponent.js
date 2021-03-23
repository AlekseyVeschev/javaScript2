Vue.component("cart", {
   props: ["countGoods", "amountCart", "productsCart"],
   template: `<div class="cart">
                   <button class="btn-close-cart" @click="$root.show = false">&#10006;</button>
                      <div v-if="productsCart.length">
                            <p>Кол-во товара: {{countGoods}}</p>
                            <span>На сумму: {{amountCart}}&#8381</span>
                     </div>
                     <p v-else="productsCart.length">Товар не выбран</p>
                   <hr>
                      <div class="cart-product" v-for="productCart of productsCart" :key="productCart.id_product">
         <productCart :productCart="productCart"></productCart>
   </div>
</div>
   `
})
Vue.component("productCart", {
   props: ["productCart"],
   template: ` <div class="cart-product">
                   <div class="productCart">
                      <h3>{{productCart.product_name}}</h3>
                      <p>{{productCart.price}} &#8381</p>
                       <p>{{productCart.quantity}}</p>
                       <button class="btn remove-btn" @click="$root.removeProductCart(productCart)">Удалить</button>
                       <hr>
                    </div>
                </div>
   `
})