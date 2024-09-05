document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, name: "Caméra IP Wi-Fi 1080p", price: 79.99, category: "cameras", features: ["wifi", "nightVision", "motionDetection"], image: "../img/camera-ip-wifi.jpg" },
        { id: 2, name: "Système d'alarme sans fil", price: 199.99, category: "alarmes", features: ["wifi", "motionDetection"], image: "../img/alarme-sans-fil.jpg" },
        { id: 3, name: "Détecteur de fumée connecté", price: 49.99, category: "detecteurs", features: ["wifi"], image: "../img/detecteur-fumee.jpg" },
        { id: 4, name: "Caméra extérieure 4K", price: 149.99, category: "cameras", features: ["wifi", "nightVision", "motionDetection"], image: "../img/camera-exterieure-4k.jpg" },
        { id: 5, name: "Kit de vidéosurveillance 4 caméras", price: 399.99, category: "cameras", features: ["nightVision", "motionDetection"], image: "../img/kit-videosurveillance.jpg" },
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
                            <p class="card-text"><small class="text-muted">${product.features.join(', ')}</small></p>
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
        const selectedFeatures = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.id.replace('feature', '').toLowerCase());

        let filteredProducts = products.filter(product => 
            (category === '' || product.category === category) &&
            product.price <= maxPrice &&
            selectedFeatures.every(feature => product.features.includes(feature))
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