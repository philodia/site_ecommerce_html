document.addEventListener('DOMContentLoaded', function() {
    const productName = document.getElementById('productName');
    const productPrice = document.getElementById('productPrice');
    const productRating = document.getElementById('productRating');
    const reviewCount = document.getElementById('reviewCount');
    const productDescription = document.getElementById('productDescription');
    const addToCart = document.getElementById('addToCart');
    const reviewsTab = document.getElementById('reviews');
    const relatedProducts = document.getElementById('relatedProducts');

    // Fonction pour charger les détails du produit
    function loadProductDetails() {
        // Simuler un appel API pour obtenir les détails du produit
        const productData = {
            name: "Super Produit",
            price: "99.99€",
            rating: 4.5,
            reviewCount: 42,
            description: "Ce produit incroyable va changer votre vie...",
        };

        productName.textContent = productData.name;
        productPrice.textContent = productData.price;
        productRating.textContent = "★".repeat(Math.round(productData.rating)) + "☆".repeat(5 - Math.round(productData.rating));
        reviewCount.textContent = `(${productData.reviewCount} avis)`;
        productDescription.textContent = productData.description;
    }

    // Fonction pour charger les avis
    function loadReviews() {
        // Simuler un appel API pour obtenir les avis
        const reviews = [
            { author: "Jean D.", rating: 5, comment: "Excellent produit !" },
            { author: "Marie L.", rating: 4, comment: "Très satisfaite de mon achat." },
            // Ajoutez d'autres avis...
        ];

        let reviewsHTML = '';
        reviews.forEach(review => {
            reviewsHTML += `
                <div class="mb-3">
                    <h5>${review.author}</h5>
                    <p>${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</p>
                    <p>${review.comment}</p>
                </div>
            `;
        });

        reviewsTab.innerHTML = reviewsHTML;
    }

    // Fonction pour charger les produits connexes
    function loadRelatedProducts() {
        // Simuler un appel API pour obtenir les produits connexes
        const products = [
            { name: "Produit Connexe 1", price: "79.99€", image: "related-1.jpg" },
            { name: "Produit Connexe 2", price: "89.99€", image: "related-2.jpg" },
            { name: "Produit Connexe 3", price: "69.99€", image: "related-3.jpg" },
        ];

        let productsHTML = '';
        products.forEach(product => {
            productsHTML += `
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.price}</p>
                            <a href="#" class="btn btn-primary">Voir le produit</a>
                        </div>
                    </div>
                </div>
            `;
        });

        relatedProducts.innerHTML = productsHTML;
    }

    // Gestionnaire d'événements pour le bouton "Ajouter au panier"
    addToCart.addEventListener('click', function() {
        const size = document.getElementById('productSize').value;
        const color = document.getElementById('productColor').value;
        const quantity = document.getElementById('productQuantity').value;

        // Ici, vous ajouteriez la logique pour ajouter le produit au panier
        console.log(`Produit ajouté au panier : Taille ${size}, Couleur ${color}, Quantité ${quantity}`);
        alert('Produit ajouté au panier !');
    });

    // Charger les données initiales
    loadProductDetails();
    loadReviews();
    loadRelatedProducts();
});