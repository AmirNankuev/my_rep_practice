   const products = [
    {
        id: 1,
        title: "Formal Canvas Shoe For Man",
        price: 2.999,
        oldPrice: 4.999,
        category: "Man"
    },
    {
        id: 2,
        title: "Formal Canvas Shoe For Man",
        price: 2.999,
        oldPrice: 4.999,
        category: "man"
    },
    {
        id: 3,
        title: "Slick Sneakers Woman",
        price: 2.999,
        oldPrice: 4.999,
        category: "woman"
    },
    {
        id: 4,
        title: "Slick Running Woman",
        price: 2.999,
        oldPrice: 4.999,
        category: "woman"
    },
    {
        id: 5,
        title: "Formal Canvas Shoe For Man",
        price: 2.999,
        oldPrice: 4.999,
        category: "man"
    },
    {
        id: 6,
        title: "Formal Slick Shoe For Man",
        price: 2.999,
        oldPrice: 4.999,
        category: "man"
    },
          {
        id: 7,
        title: "Платье Choupette",
        price: 5599,
        oldPrice: 4999,
        category: "kids"
    },
          {
        id: 8,
        title: "Жилет Bell Bimbo",
        price: 5890,
        oldPrice: 3999,
        category: "kids"
    },
          {
        id: 9,
        title: "Платье Sela",
        price: 2799,
        oldPrice: 3999,
        category: "kids"
    },
          {
        id: 10,
        title: "Футболка и шорты PlayToDay",
        price: 2499,
        oldPrice: 1999,
        category: "kids"
    },
          {
        id: 11,
        title: "Футболка Sela",
        price: 799,
        oldPrice: null,
        category: "kids"
    },
          {
        id: 12,
        title: "Панама PlayToDay",
        price: 1400,
        oldPrice: 999,
        category: "kids"
    },
          {
        id: 13,
        title: "Футболка Fila",
        price: 2100,
        oldPrice: 2000,
        category: "kids"
    },
          {
        id: 14,
        title: "Трусы 2 шт. PlayToDay",
        price: 1299,
        oldPrice: null,
        category: "kids"
    },
          {
        id: 15,
        title: "Очки PlayToDay",
        price: 799,
        oldPrice: 3999,
        category: "kids"
    },
          {
        id: 16,
        title: "Сапоги PlayToDay",
        price: 1999,
        oldPrice: null,
        category: "kids"
    },
          {
        id: 17,
        title: "Брюки RUSSP Mango Kids",
        price: 4999,
        oldPrice: 3999,
        category: "kids"
    },
          {
        id: 18,
        title: "Ветровка PlayToDay",
        price: 7499,
        oldPrice: null,
        category: "kids"
    },
    

];

const productsContainer = document.getElementById('productsContainer');
const filterButtons = document.querySelectorAll('.filter-btn');

// Функция отображения товаров
function displayProducts(filter = 'all') {
    productsContainer.innerHTML = '';
    
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(product => product.category === filter);
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-image">${product.title}</div>
            <div class="product-info">
                <div class="product-title">${product.title}</div>
                <div class="product-price">
                    ${product.price} ₽
                    ${product.oldPrice ? `<span class="original-price">${product.oldPrice} ₽</span>` : ''}
                </div>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
}

// Фильтрация товаров
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.dataset.category;
        displayProducts(filter);
    });
});
