document.addEventListener('DOMContentLoaded', function() {
    // Simuler des produits dans le panier (à remplacer par une vraie gestion de panier)
    let cart = [
        { id: 1, name: "Ordinateur portable Dell XPS 13", price: 1299, quantity: 1 },
        { id: 2, name: "Écouteurs sans fil", price: 79.99, quantity: 2 }
    ];

    const cartTable = document.getElementById('cartTable').getElementsByTagName('tbody')[0];
    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkoutBtn');

    function updateCart() {
        cartTable.innerHTML = '';
        let subtotal = 0;

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

        const tax = subtotal * 0.2;
        const total = subtotal + tax;

        subtotalElement.textContent = subtotal.toFixed(2) + ' €';
        taxElement.textContent = tax.toFixed(2) + ' €';
        totalElement.textContent = total.toFixed(2) + ' €';
    }

    function updateQuantity(id, newQuantity) {
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity = newQuantity;
            updateCart();
        }
    }

    function removeItem(id) {
        cart = cart.filter(item => item.id !== id);
        updateCart();
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
        // Ici, vous ajouteriez la logique pour passer à la page de paiement
        alert('Redirection vers la page de paiement...');
    });

    // Initialiser l'affichage du panier
    updateCart();
});