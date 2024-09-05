
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('rememberMe');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;
        const rememberMe = rememberMeCheckbox.checked;

        // Validation simple des champs
        if (!email || !password) {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        // Simulation d'une requête de connexion
        simulateLogin(email, password, rememberMe);
    });

    function simulateLogin(email, password, rememberMe) {
        // Simuler un délai de traitement
        showLoadingIndicator();
        
        setTimeout(() => {
            hideLoadingIndicator();
            
            // Simuler une réponse de serveur
            if (email === 'user@example.com' && password === 'password123') {
                alert('Connexion réussie !');
                if (rememberMe) {
                    localStorage.setItem('userEmail', email);
                } else {
                    localStorage.removeItem('userEmail');
                }
                window.location.href = '../index.html'; // Rediriger vers la page d'accueil
            } else {
                alert('Échec de la connexion. Veuillez vérifier vos identifiants.');
            }
        }, 1500); // Simuler un délai de 1,5 secondes
    }

    function showLoadingIndicator() {
        const submitButton = loginForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Connexion...';
    }

    function hideLoadingIndicator() {
        const submitButton = loginForm.querySelector('button[type="submit"]');
        submitButton.disabled = false;
        submitButton.innerHTML = 'Se connecter';
    }

    // Remplir automatiquement l'email si sauvegardé
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
        emailInput.value = savedEmail;
        rememberMeCheckbox.checked = true;
    }

    // Gestion du lien "Mot de passe oublié"
    const forgotPasswordLink = document.querySelector('a[href="#"]');
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Fonctionnalité de récupération de mot de passe non implémentée.');
    });

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