document.addEventListener('DOMContentLoaded', function() {
    const orderSummary = document.getElementById('orderSummary');
    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    const checkoutForm = document.getElementById('checkoutForm');

    // Charger le panier depuis le localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function displayOrderSummary() {
        orderSummary.innerHTML = '';
        let subtotal = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.innerHTML = `
                ${item.name}
                <span>${item.quantity} x ${item.price.toFixed(2)} €</span>
            `;
            orderSummary.appendChild(li);
            subtotal += item.price * item.quantity;
        });

        const tax = subtotal * 0.2;
        const total = subtotal + tax;

        subtotalElement.textContent = subtotal.toFixed(2) + ' €';
        taxElement.textContent = tax.toFixed(2) + ' €';
        totalElement.textContent = total.toFixed(2) + ' €';
    }

    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Ici, vous ajouteriez la logique pour traiter le paiement
        // Par exemple, un appel à une API de paiement
        alert('Commande confirmée ! Merci pour votre achat.');
        // Vider le panier après la commande
        localStorage.removeItem('cart');
        // Rediriger vers une page de confirmation
        // window.location.href = 'confirmation.html';
    });

    // Afficher le résumé de la commande au chargement de la page
    displayOrderSummary();
});