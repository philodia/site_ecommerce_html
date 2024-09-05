document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const termsAgreement = document.getElementById('termsAgreement').checked;

        // Validation simple
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Les mots de passe ne correspondent pas.');
            return;
        }

        if (!termsAgreement) {
            alert('Veuillez accepter les conditions d\'utilisation.');
            return;
        }

        // Simulation d'une requête d'inscription
        simulateRegister(firstName, lastName, email, password);
    });

    function simulateRegister(firstName, lastName, email, password) {
        // Simuler un délai de traitement
        showLoadingIndicator();
        
        setTimeout(() => {
            hideLoadingIndicator();
            
            // Simuler une réponse de serveur
            alert(`Inscription réussie pour ${firstName} ${lastName} !`);
            window.location.href = 'login.html'; // Rediriger vers la page de connexion
        }, 1500); // Simuler un délai de 1,5 secondes
    }

    function showLoadingIndicator() {
        const submitButton = registerForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Inscription en cours...';
    }

    function hideLoadingIndicator() {
        const submitButton = registerForm.querySelector('button[type="submit"]');
        submitButton.disabled = false;
        submitButton.innerHTML = 'S\'inscrire';
    }

    // Animation des icônes de réseaux sociaux
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
});