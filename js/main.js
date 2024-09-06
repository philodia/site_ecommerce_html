document.addEventListener('DOMContentLoaded', function() {
    // Gestion du panier
    const cartButton = document.querySelector('.btn-outline-primary');
    let cartCount = JSON.parse(localStorage.getItem('cart'))?.length || 0;

    function updateCartCount() {
        cartButton.innerHTML = `<i class="fas fa-shopping-cart"></i> Panier (${cartCount})`;
    }

    updateCartCount();

    // Animation pour les cartes de catégories
    const categoryCards = document.querySelectorAll('.card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Animation pour les icônes de réseaux sociaux
    const socialIcons = document.querySelectorAll('.top-bar .fab');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.2)';
            this.style.transition = 'transform 0.3s ease';
        });
        icon.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Carrousel de produits vedettes
    const featuredProducts = [
        { name: "Ordinateur portable XYZ", image: "img/products/laptop.jpg", price: "999 €" },
        { name: "Smartphone ABC", image: "img/products/smartphone.jpg", price: "599 €" },
        { name: "Caméra de surveillance 123", image: "img/products/camera.jpg", price: "199 €" },
        // Ajoutez d'autres produits ici
    ];

    function createFeaturedProductsCarousel() {
        const carousel = document.createElement('div');
        carousel.className = 'carousel slide';
        carousel.id = 'featuredCarousel';
        carousel.setAttribute('data-bs-ride', 'carousel');

        const carouselInner = document.createElement('div');
        carouselInner.className = 'carousel-inner';

        featuredProducts.forEach((product, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
            carouselItem.innerHTML = `
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}</p>
                        <a href="#" class="btn btn-primary">Voir le produit</a>
                    </div>
                </div>
            `;
            carouselInner.appendChild(carouselItem);
        });

        carousel.appendChild(carouselInner);

        // Ajout des contrôles du carrousel
        carousel.innerHTML += `
            <button class="carousel-control-prev" type="button" data-bs-target="#featuredCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Précédent</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#featuredCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Suivant</span>
            </button>
        `;

        const featuredSection = document.querySelector('.my-5:last-child');
        featuredSection.appendChild(carousel);

        // Initialiser le carrousel Bootstrap
        new bootstrap.Carousel(document.getElementById('featuredCarousel'));
    }

    createFeaturedProductsCarousel();

    // Gestion de la recherche (à implémenter dans recherche.js)
    const searchForm = document.querySelector('form.d-flex');
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchQuery = document.getElementById('searchInput').value;
        console.log('Recherche pour:', searchQuery);
        // Implémentez ici la logique de recherche ou redirigez vers une page de résultats
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Gestion du panier
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartButton = document.querySelector('.btn-outline-primary');
    const cartCount = document.getElementById('cartCount');

    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    updateCartCount();

    // Animation pour les cartes de catégories
    const categoryCards = document.querySelectorAll('.card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Animation pour les icônes de réseaux sociaux
    const socialIcons = document.querySelectorAll('.top-bar .fab');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.2)';
            this.style.transition = 'transform 0.3s ease';
        });
        icon.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Carrousel de produits vedettes
    const featuredProducts = [
        { id: 1, name: "Ordinateur portable XYZ", image: "img/products/laptop.jpg", price: 999 },
        { id: 2, name: "Smartphone ABC", image: "img/products/smartphone.jpg", price: 599 },
        { id: 3, name: "Caméra de surveillance 123", image: "img/products/camera.jpg", price: 199 },
        // Ajoutez d'autres produits ici
    ];

    function createFeaturedProductsCarousel() {
        const carousel = document.createElement('div');
        carousel.className = 'carousel slide';
        carousel.id = 'featuredCarousel';
        carousel.setAttribute('data-bs-ride', 'carousel');

        const carouselInner = document.createElement('div');
        carouselInner.className = 'carousel-inner';

        featuredProducts.forEach((product, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
            carouselItem.innerHTML = `
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price.toFixed(2)} €</p>
                        <button class="btn btn-primary add-to-cart" data-id="${product.id}">Ajouter au panier</button>
                    </div>
                </div>
            `;
            carouselInner.appendChild(carouselItem);
        });

        carousel.appendChild(carouselInner);

        // Ajout des contrôles du carrousel
        carousel.innerHTML += `
            <button class="carousel-control-prev" type="button" data-bs-target="#featuredCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Précédent</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#featuredCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Suivant</span>
            </button>
        `;

        const featuredSection = document.querySelector('.my-5:last-child');
        featuredSection.appendChild(carousel);

        // Initialiser le carrousel Bootstrap
        new bootstrap.Carousel(document.getElementById('featuredCarousel'));
    }

    createFeaturedProductsCarousel();

    // Gestion de l'ajout au panier
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const product = featuredProducts.find(p => p.id === productId);
            
            if (product) {
                const existingItem = cart.find(item => item.id === productId);
                if (existingItem) {
                    existingItem.quantity++;
                } else {
                    cart.push({ ...product, quantity: 1 });
                }
                updateCartCount();
                alert(`${product.name} ajouté au panier !`);
            }
        }
    });

    // Gestion de la recherche
    const searchForm = document.querySelector('form.d-flex');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchOverlay = document.getElementById('searchOverlay');

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchQuery = searchInput.value.toLowerCase();
        const results = featuredProducts.filter(product => 
            product.name.toLowerCase().includes(searchQuery)
        );
        displaySearchResults(results);
    });

    function displaySearchResults(results) {
        searchResults.innerHTML = '';
        if (results.length === 0) {
            searchResults.innerHTML = '<p class="p-3">Aucun résultat trouvé</p>';
        } else {
            results.forEach(product => {
                const resultItem = document.createElement('div');
                resultItem.className = 'p-2 border-bottom';
                resultItem.innerHTML = `
                    <h6>${product.name}</h6>
                    <p>${product.price.toFixed(2)} €</p>
                `;
                searchResults.appendChild(resultItem);
            });
        }
        searchResults.style.display = 'block';
        searchOverlay.style.display = 'block';
    }

    searchOverlay.addEventListener('click', function() {
        searchResults.style.display = 'none';
        searchOverlay.style.display = 'none';
    });
});