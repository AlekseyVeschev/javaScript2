const products = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Mouse', price: 20 },
    { id: 3, title: 'Keyboard', price: 200 },
    { id: 4, title: 'Gamepad', price: 50 },
];
//Функция для формирования верстки каждого товара
const renderProduct = (product = { title: '', price: 0 }) => {
    return `<div class="product">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = products => {
    const productsList = products.map(product => renderProduct(product));
    // преобразуем массив в строку,чтобы убрать запятые.
    document.querySelector('.products').innerHTML = productsList.join("");
};

renderPage(products);