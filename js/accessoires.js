document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, name: "Écouteurs sans fil", price: 79.99, category: "audio", compatibility: ["Apple", "Android"], image: "../img/ecouteurs-sans-fil.jpg" },
        { id: 2, name: "Chargeur rapide USB-C", price: 24.99, category: "chargeurs", compatibility: ["Android", "Universal"], image: "../img/chargeur-usb-c.jpg" },
        { id: 3, name: "Clé USB 64 Go", price: 19.99, category: "stockage", compatibility: ["Universal"], image: "../img/cle-usb-64go.jpg" },
        { id: 4, name: "Coque iPhone 13", price: 29.99, category: "protection", compatibility: ["Apple"], image: "../img/coque-iphone-13.jpg" },
        { id: 5, name: "Batterie externe 10000mAh", price: 39.99, category: "chargeurs", compatibility: ["Apple", "Android", "Universal"], image: "../img/batterie-externe.jpg" },
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
                            <p class="card-text">${product.price.toFixed(2)} €</p>
                            <p class="card-text"><small class="text-muted">Compatibilité: ${product.compatibility.join(', ')}</small></p>
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
        const selectedCompatibility = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.id.replace('compat', ''));

        let filteredProducts = products.filter(product => 
            (category === '' || product.category === category) &&
            product.price <= maxPrice &&
            selectedCompatibility.some(compat => product.compatibility.includes(compat))
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