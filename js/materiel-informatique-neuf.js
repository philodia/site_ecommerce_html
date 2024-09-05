document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, name: "Dell XPS 15", price: 1799, category: "ordinateurs-portables", brand: "Dell", image: "../img/dell-xps-15.jpg" },
        { id: 2, name: "HP Pavilion Gaming Desktop", price: 999, category: "ordinateurs-de-bureau", brand: "HP", image: "../img/hp-pavilion-gaming.jpg" },
        { id: 3, name: "NVIDIA GeForce RTX 3080", price: 699, category: "composants", brand: "Asus", image: "../img/nvidia-rtx-3080.jpg" },
        { id: 4, name: "Lenovo ThinkVision P27h-20", price: 449, category: "peripheriques", brand: "Lenovo", image: "../img/lenovo-thinkvision-p27h.jpg" },
        // Ajoutez d'autres produits ici
    ];

    const productList = document.getElementById('productList');
    const productCount = document.getElementById('productCount');
    const filterForm = document.getElementById('filterForm');
    const sortSelect = document.getElementById('sortSelect');
    const priceRange = document.getElementById('priceRange');
    const priceOutput = document.getElementById('priceOutput');

    function renderProducts(filteredProducts) {
        productList.innerHTML = '';
        filteredProducts.forEach(product => {
            const productCard = `
                <div class="col">
                    <div class="card h-100">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.price} €</p>
                            <p class="card-text"><small class="text-muted">Marque: ${product.brand}</small></p>
                            <a href="#" class="btn btn-primary">Ajouter au panier</a>
                        </div>
                    </div>
                </div>
            `;
            productList.innerHTML += productCard;
        });
        productCount.textContent = filteredProducts.length;
    }

    function applyFilters() {
        const category = document.getElementById('categoryFilter').value;
        const maxPrice = parseInt(priceRange.value);
        const brands = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.id.replace('brand', ''));

        let filteredProducts = products.filter(product => 
            (category === '' || product.category === category) &&
            product.price <= maxPrice &&
            brands.includes(product.brand)
        );

        const sortValue = sortSelect.value;
        filteredProducts.sort((a, b) => {
            if (sortValue === 'price-asc') return a.price - b.price;
            if (sortValue === 'price-desc') return b.price - a.price;
            if (sortValue === 'name-asc') return a.name.localeCompare(b.name);
            if (sortValue === 'name-desc') return b.name.localeCompare(a.name);
        });

        renderProducts(filteredProducts);
    }

    filterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        applyFilters();
    });

    sortSelect.addEventListener('change', applyFilters);

    priceRange.addEventListener('input', function() {
        priceOutput.textContent = this.value + ' €';
    });

    // Initial render
    renderProducts(products);
});