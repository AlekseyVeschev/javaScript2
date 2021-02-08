Vue.component("search", {
   template: `<form action="#" class="search-form">
<input type="text" class="search-field" v-model="$root.userSearch" @input="$root.filterProducts">
<button class="btn-search">&#128269</button>
</form>
`
})