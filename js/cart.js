document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.getElementById('cartItems');
    const subtotalElement = document.getElementById('subtotal');
    const shippingElement = document.getElementById('shipping');
    const taxesElement = document.getElementById('taxes');
    const totalElement = document.getElementById('total');
    const checkoutButton = document.getElementById('checkoutButton');
    const suggestedProducts = document.getElementById('suggestedProducts');

    let cart = [];

    // Fonction pour charger les articles du panier (simulée ici)
    function loadCartItems() {
        // Simuler un appel API pour obtenir les articles du panier
        cart = [
            { id: 1, name: "Produit 1", price: 19.99, quantity: 2, image: "product1.jpg" },
            { id: 2, name: "Produit 2", price: 29.99, quantity: 1, image: "product2.jpg" },
        ];

        renderCart();  // Afficher les articles du panier
    }

    // Fonction pour afficher les articles du panier
    function renderCart() {
        cartItems.innerHTML = '';  // Vider le conteneur des articles
        cart.forEach(item => {
            const itemHTML = `
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <div class="d-flex align-items-center">
                        <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover;" class="me-3">
                        <div>
                            <h6 class="mb-0">${item.name}</h6>
                            <small class="text-muted">${item.price.toFixed(2)}€</small>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-sm btn-outline-secondary me-2" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="btn btn-sm btn-outline-secondary ms-2" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="btn btn-sm btn-danger ms-3" onclick="removeItem(${item.id})">Supprimer</button>
                    </div>
                </div>
            `;
            cartItems.innerHTML += itemHTML;
        });

        updateTotals();  // Mettre à jour les totaux
    }

    // Fonction pour mettre à jour les quantités d'articles
    window.updateQuantity = function(id, change) {
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity = Math.max(0, item.quantity + change);  // Empêcher les quantités négatives
            if (item.quantity === 0) {
                removeItem(id);  // Supprimer l'article si la quantité est 0
            } else {
                renderCart();  // Réafficher le panier après la mise à jour
            }
        }
    }

    // Fonction pour supprimer un article du panier
    window.removeItem = function(id) {
        cart = cart.filter(item => item.id !== id);
        renderCart();  // Réafficher le panier après la suppression
    }

    // Fonction pour mettre à jour les totaux du panier
    function updateTotals() {
        const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        const shipping = subtotal > 50 ? 0 : 5.99;  // Livraison gratuite si le sous-total est supérieur à 50€
        const taxes = subtotal * 0.2;  // 20% de taxes
        const total = subtotal + shipping + taxes;

        // Afficher les totaux dans le DOM
        subtotalElement.textContent = subtotal.toFixed(2) + '€';
        shippingElement.textContent = shipping.toFixed(2) + '€';
        taxesElement.textContent = taxes.toFixed(2) + '€';
        totalElement.textContent = total.toFixed(2) + '€';
    }

    // Fonction pour charger les produits suggérés (simulée ici)
    function loadSuggestedProducts() {
        const products = [
            { id: 3, name: "Produit Suggéré 1", price: 24.99, image: "suggested1.jpg" },
            { id: 4, name: "Produit Suggéré 2", price: 34.99, image: "suggested2.jpg" },
            { id: 5, name: "Produit Suggéré 3", price: 44.99, image: "suggested3.jpg" },
        ];

        suggestedProducts.innerHTML = '';  // Vider le conteneur des produits suggérés
        products.forEach(product => {
            const productHTML = `
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.price.toFixed(2)}€</p>
                            <button class="btn btn-primary" onclick="addToCart(${product.id})">Ajouter au panier</button>
                        </div>
                    </div>
                </div>
            `;
            suggestedProducts.innerHTML += productHTML;
        });
    }

    // Fonction pour ajouter un produit suggéré au panier
    window.addToCart = function(id) {
        const product = suggestedProductsData.find(item => item.id === id);
        if (product) {
            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;  // Augmenter la quantité si l'article est déjà dans le panier
            } else {
                cart.push({ ...product, quantity: 1 });  // Ajouter un nouvel article au panier
            }
            renderCart();  // Réafficher le panier après ajout
            alert('Produit ajouté au panier !');
        }
    }

    // Gestionnaire d'événements pour le bouton de passage à la caisse
    checkoutButton.addEventListener('click', function() {
        // Logique de redirection vers la page de paiement
        console.log('Passage à la caisse');
       // alert('Redirection vers la page de paiement...');
        window.location.href = '../pages/order/checkout.html';  // Redirection vers la page de paiement
    });

    // Charger les données initiales
    loadCartItems();
    loadSuggestedProducts();
});
