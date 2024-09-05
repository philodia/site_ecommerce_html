document.addEventListener('DOMContentLoaded', function() {
    const orderSummary = document.getElementById('order-summary');
    const subtotalElement = document.getElementById('subtotal');
    const shippingElement = document.getElementById('shipping');
    const taxesElement = document.getElementById('taxes');
    const totalElement = document.getElementById('total');
    const paymentForm = document.getElementById('payment-form');

    // Fonction pour charger le résumé de la commande
    function loadOrderSummary() {
        // Simuler un appel API pour obtenir les détails de la commande
        const orderItems = [
            { name: "Produit 1", quantity: 2, price: 19.99 },
            { name: "Produit 2", quantity: 1, price: 29.99 },
        ];

        let summaryHTML = '';
        orderItems.forEach(item => {
            summaryHTML += `
                <div class="d-flex justify-content-between mb-2">
                    <span>${item.name} x ${item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}€</span>
                </div>
            `;
        });

        orderSummary.innerHTML = summaryHTML;
        updateTotals(orderItems);
    }

    // Fonction pour mettre à jour les totaux
    function updateTotals(items) {
        const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
        const shipping = subtotal > 50 ? 0 : 5.99; // Exemple : livraison gratuite au-dessus de 50€
        const taxes = subtotal * 0.2; // Exemple : 20% de taxes
        const total = subtotal + shipping + taxes;

        subtotalElement.textContent = subtotal.toFixed(2) + '€';
        shippingElement.textContent = shipping.toFixed(2) + '€';
        taxesElement.textContent = taxes.toFixed(2) + '€';
        totalElement.textContent = total.toFixed(2) + '€';
    }

    // Gestionnaire d'événements pour la soumission du formulaire
    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Ici, vous ajouteriez la logique pour traiter le paiement
        // Par exemple, en utilisant une API de paiement comme Stripe

        // Simuler un traitement de paiement
        console.log('Traitement du paiement...');
        alert('Paiement traité avec succès ! Redirection vers la page de confirmation...');
        // Rediriger vers une page de confirmation
        // window.location.href = 'confirmation.html';
    });

    // Charger le résumé de la commande au chargement de la page
    loadOrderSummary();
});