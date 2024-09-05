document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, name: "Ordinateur portable Dell XPS 13", price: 799, category: "ordinateurs-portables", state: "Excellent", image: "../img/dell-xps-13.jpg" },
        { id: 2, name: "iMac 27 pouces", price: 1299, category: "ordinateurs-de-bureau", state: "Bon", image: "../img/imac-27.jpg" },
        { id: 3, name: "Carte graphique NVIDIA GTX 1660", price: 249, category: "composants", state: "Excellent", image: "../img/nvidia-gtx-1660.jpg" },
        { id: 4, name: "Écran Dell UltraSharp 24 pouces", price: 199, category: "peripheriques", state: "Acceptable", image: "../img/dell-ultrasharp-24.jpg" },
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
                            <p class="card-text"><small class="text-muted">État: ${product.state}</small></p>
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
        const states = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.id.replace('state', ''));

        let filteredProducts = products.filter(product => 
            (category === '' || product.category === category) &&
            product.price <= maxPrice &&
            states.includes(product.state)
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