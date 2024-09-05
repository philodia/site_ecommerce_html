document.addEventListener('DOMContentLoaded', function() {
    const userName = document.getElementById('userName');
    const logoutLink = document.getElementById('logoutLink');
    const tabs = document.querySelectorAll('.list-group-item');
    const contentSections = document.querySelectorAll('.content-section');
    const profileForm = document.getElementById('profile-form');
    const settingsForm = document.getElementById('settings-form');

    // Simuler un utilisateur connecté
    userName.textContent = 'John Doe';

    // Gestion de la déconnexion
    logoutLink.addEventListener('click', function(e) {
        e.preventDefault();
        // Ici, vous ajouteriez la logique de déconnexion
        alert('Déconnexion effectuée');
        window.location.href = '../../index.html';
    });

    // Gestion des onglets
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const targetId = this.id.replace('-tab', '-content');
            contentSections.forEach(section => {
                section.classList.add('d-none');
                if (section.id === targetId) {
                    section.classList.remove('d-none');
                }
            });
        });
    });

    // Gestion du formulaire de profil
    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Ici, vous ajouteriez la logique pour mettre à jour le profil
        alert('Profil mis à jour avec succès');
    });

    // Gestion du formulaire de paramètres
    settingsForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const newsletter = document.getElementById('newsletter').checked;

        if (newPassword !== confirmPassword) {
            alert('Les mots de passe ne correspondent pas');
            return;
        }

        // Ici, vous ajouteriez la logique pour mettre à jour les paramètres
        alert('Paramètres mis à jour avec succès');
    });
});