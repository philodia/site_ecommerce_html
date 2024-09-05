// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Animation de fondu pour les éléments
    function fadeInElements() {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }

    // Vérifier si un élément est dans le viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Appeler fadeInElements au chargement et au scroll
    window.addEventListener('load', fadeInElements);
    window.addEventListener('scroll', fadeInElements);

    // Carrousel pour les produits vedettes
    const featuredProducts = [
        { name: "Ordinateur portable XYZ", image: "img/laptop.jpg", price: "999 €" },
        { name: "Smartphone ABC", image: "img/smartphone.jpg", price: "599 €" },
        { name: "Caméra de surveillance 123", image: "img/camera.jpg", price: "199 €" },
        // Ajoutez d'autres produits ici
    ];

    const featuredSection = document.querySelector('.my-5:last-child');
    const carousel = createCarousel(featuredProducts);
    featuredSection.appendChild(carousel);

    function createCarousel(products) {
        const carousel = document.createElement('div');
        carousel.className = 'carousel slide';
        carousel.id = 'featuredCarousel';
        carousel.setAttribute('data-bs-ride', 'carousel');

        const innerCarousel = document.createElement('div');
        innerCarousel.className = 'carousel-inner';

        products.forEach((product, index) => {
            const item = document.createElement('div');
            item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
            item.innerHTML = `
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}</p>
                        <a href="#" class="btn btn-primary">Voir le produit</a>
                    </div>
                </div>
            `;
            innerCarousel.appendChild(item);
        });

        carousel.appendChild(innerCarousel);

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

        return carousel;
    }

    // Gestion du panier (exemple simple)
    let cartCount = 0;
    const cartButton = document.querySelector('.btn-outline-primary');

    function updateCartCount() {
        cartButton.textContent = `Panier (${cartCount})`;
    }

    document.body.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-primary') && e.target.textContent === 'Voir le produit') {
            e.preventDefault();
            cartCount++;
            updateCartCount();
            alert('Produit ajouté au panier !');
        }
    });

    // Exemple de recherche (à implémenter)
    function searchProducts(query) {
        // Ici, vous implémenteriez la logique de recherche
        console.log(`Recherche pour : ${query}`);
    }

    // Vous pouvez ajouter un champ de recherche dans votre HTML et l'utiliser comme ceci :
    // const searchInput = document.querySelector('#searchInput');
    // searchInput.addEventListener('input', (e) => searchProducts(e.target.value));
});

/// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Animation de fondu pour les éléments
    function fadeInElements() {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }

    // Vérifier si un élément est dans le viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Appeler fadeInElements au chargement et au scroll
    window.addEventListener('load', fadeInElements);
    window.addEventListener('scroll', fadeInElements);

    // Gestion du panier
    let cartCount = 0;
    const cartButton = document.querySelector('.btn-outline-primary');

    function updateCartCount() {
        cartButton.textContent = `Panier (${cartCount})`;
    }

    // Ajouter au panier lors du clic sur "Découvrir"
    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.textContent === 'Découvrir') {
                e.preventDefault();
                cartCount++;
                updateCartCount();
                alert('Produit ajouté au panier !');
            }
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

    // Gestion de la recherche (à implémenter)
    function handleSearch(query) {
        console.log(`Recherche pour : ${query}`);
        // Implémentez ici la logique de recherche
    }

    // Vous pouvez ajouter un champ de recherche dans votre HTML et l'utiliser comme ceci :
    // const searchInput = document.querySelector('#searchInput');
    // searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
});
