document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.getElementById('productGrid');
    const productCount = document.getElementById('productCount');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const applyFilters = document.getElementById('applyFilters');
    const sortProducts = document.getElementById('sortProducts');
    const pagination = document.getElementById('pagination');

    // Simuler le chargement des produits (à remplacer par un appel API réel)
    function loadProducts(page = 1, filters = {}, sort = 'popular') {
        // Ici, vous feriez normalement un appel à votre API pour obtenir les produits
        // En fonction des filtres, du tri et de la page
        const products = [
            { name: 'Produit 1', price: '19.99€', image: 'product1.jpg' },
            { name: 'Produit 2', price: '29.99€', image: 'product2.jpg' },
            { name: 'Produit 3', price: '39.99€', image: 'product3.jpg' },
            // ... ajoutez plus de produits ici
        ];

        productGrid.innerHTML = ''; // Effacer les produits existants

        products.forEach(product => {
            const productHTML = `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.price}</p>
                            <a href="#" class="btn btn-primary">Ajouter au panier</a>
                        </div>
                    </div>
                </div>
            `;
            productGrid.innerHTML += productHTML;
        });

        productCount.textContent = products.length;
        updatePagination(page, Math.ceil(products.length / 9)); // Supposons 9 produits par page
    }

    function updatePagination(currentPage, totalPages) {
        pagination.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement('li');
            li.className = `page-item ${i === currentPage ? 'active' : ''}`;
            li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            li.addEventListener('click', (e) => {
                e.preventDefault();
                loadProducts(i);
            });
            pagination.appendChild(li);
        }
    }

    // Gestionnaire d'événements pour le filtre de prix
    priceRange.addEventListener('input', function() {
        priceValue.textContent = this.value + '€';
    });

    // Gestionnaire d'événements pour appliquer les filtres
    applyFilters.addEventListener('click', function() {
        const filters = {
            price: priceRange.value,
            // Ajoutez d'autres filtres ici
        };
        loadProducts(1, filters);
    });

    // Gestionnaire d'événements pour le tri
    sortProducts.addEventListener('change', function() {
        loadProducts(1, {}, this.value);
    });

    // Charger les produits initiaux
    loadProducts();
});