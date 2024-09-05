document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Récupérer les valeurs du formulaire
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Ici, vous ajouteriez la logique pour envoyer le message
        // Par exemple, en utilisant une API ou en envoyant un e-mail

        console.log('Formulaire soumis :', { name, email, subject, message });

        // Simuler l'envoi du message
        alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');

        // Réinitialiser le formulaire
        contactForm.reset();
    });

    // Si vous utilisez une carte interactive, vous pouvez l'initialiser ici
    // Par exemple, pour Google Maps :
    /*
    function initMap() {
        const mapOptions = {
            center: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE },
            zoom: 15
        };
        const map = new google.maps.Map(document.getElementById('map'), mapOptions);
        const marker = new google.maps.Marker({
            position: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE },
            map: map,
            title: 'Notre emplacement'
        });
    }
    // Assurez-vous d'appeler initMap() ou de le lier au chargement de l'API Google Maps
    */
});