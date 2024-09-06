document.addEventListener('DOMContentLoaded', function() {
    const cartTable = document.getElementById('cartTable').getElementsByTagName('tbody')[0];
    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const cartCountElement = document.getElementById('cartCount');

    // Charger le panier depuis le localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCart() {
        cartTable.innerHTML = '';
        let subtotal = 0;

        if (cart.length === 0) {
            cartTable.innerHTML = '<tr><td colspan="5" class="text-center">Votre panier est vide</td></tr>';
        } else {
            cart.forEach(item => {
                const row = cartTable.insertRow();
                row.innerHTML = `
                    <td>${item.name}</td>
                    <td>${item.price.toFixed(2)} €</td>
                    <td>
                        <input type="number" min="1" value="${item.quantity}" class="form-control quantity-input" data-id="${item.id}">
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)} €</td>
                    <td><button class="btn btn-danger btn-sm remove-item" data-id="${item.id}">Supprimer</button></td>
                `;
                subtotal += item.price * item.quantity;
            });
        }

        const tax = subtotal * 0.2;
        const total = subtotal + tax;

        subtotalElement.textContent = subtotal.toFixed(2) + ' €';
        taxElement.textContent = tax.toFixed(2) + ' €';
        totalElement.textContent = total.toFixed(2) + ' €';

        // Mettre à jour le compteur du panier
        updateCartCount();

        // Sauvegarder le panier dans le localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function updateQuantity(id, newQuantity) {
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity = Math.max(1, newQuantity); // Assure que la quantité est au moins 1
            updateCart();
        }
    }

    function removeItem(id) {
        cart = cart.filter(item => item.id !== id);
        updateCart();
    }

    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    }

    cartTable.addEventListener('change', function(e) {
        if (e.target.classList.contains('quantity-input')) {
            const id = parseInt(e.target.dataset.id);
            const newQuantity = parseInt(e.target.value);
            updateQuantity(id, newQuantity);
        }
    });

    cartTable.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-item')) {
            const id = parseInt(e.target.dataset.id);
            removeItem(id);
        }
    });

    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Votre panier est vide. Ajoutez des produits avant de passer commande.');
        } else {
            // Ici, vous ajouteriez la logique pour passer à la page de paiement
           // alert('Redirection vers la page de paiement...');
             window.location.href = '../order/checkout.html';
        }
    });

    // Initialiser l'affichage du panier
    updateCart();
});