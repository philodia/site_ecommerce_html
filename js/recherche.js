// recherche.js

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchOverlay = document.getElementById('searchOverlay');

    // Simule une base de données de produits (à remplacer par des données réelles)
    const products = [
        { id: 1, name: "Ordinateur portable Dell XPS 13", category: "Informatique", price: 1299 },
        { id: 2, name: "iPhone 13 Pro", category: "Téléphonie", price: 1159 },
        { id: 3, name: "Caméra de surveillance WiFi", category: "Vidéo Surveillance", price: 79.99 },
        { id: 4, name: "Écouteurs sans fil", category: "Accessoires", price: 129 },
        { id: 5, name: "Disque dur externe 1To", category: "Informatique", price: 59.99 },
        // Ajoutez plus de produits ici
    ];

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function performSearch(query) {
        if (query.length < 2) {
            hideSearchResults();
            return;
        }

        const results = products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );

        displayResults(results);
    }

    function displayResults(results) {
        searchResults.innerHTML = '';
        if (results.length === 0) {
            searchResults.innerHTML = '<p class="text-muted">Aucun résultat trouvé</p>';
        } else {
            const ul = document.createElement('ul');
            ul.className = 'list-group';
            results.forEach(product => {
                const li = document.createElement('li');
                li.className = 'list-group-item';
                li.innerHTML = `
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h6 class="mb-0">${product.name}</h6>
                            <small class="text-muted">${product.category}</small>
                        </div>
                        <span class="badge bg-primary rounded-pill">${product.price.toFixed(2)} €</span>
                    </div>
                `;
                li.addEventListener('click', () => {
                    // Rediriger vers la page du produit (à implémenter)
                    console.log(`Produit sélectionné : ${product.name}`);
                    hideSearchResults();
                });
                ul.appendChild(li);
            });
            searchResults.appendChild(ul);
        }
        showSearchResults();
    }

    function showSearchResults() {
        searchResults.style.display = 'block';
        searchOverlay.style.display = 'block';
    }

    function hideSearchResults() {
        searchResults.style.display = 'none';
        searchOverlay.style.display = 'none';
    }

    const debouncedSearch = debounce(performSearch, 300);

    searchInput.addEventListener('input', function() {
        debouncedSearch(this.value);
    });

    searchInput.addEventListener('focus', function() {
        if (this.value.length >= 2) {
            showSearchResults();
        }
    });

    searchOverlay.addEventListener('click', hideSearchResults);

    // Fermer les résultats si on clique en dehors
    document.addEventListener('click', function(event) {
        if (!searchResults.contains(event.target) && event.target !== searchInput) {
            hideSearchResults();
        }
    });
});