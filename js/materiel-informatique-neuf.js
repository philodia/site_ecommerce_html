document.addEventListener('DOMContentLoaded', function() {
    {/*const products = [
        { id: 1, name: "Dell XPS 15", price: 1799, category: "ordinateurs-portables", brand: "Dell", image: "../../img/dell-xps-15.jpg" },
        { id: 2, name: "HP Pavilion Gaming Desktop", price: 999, category: "ordinateurs-de-bureau", brand: "HP", image: "../../img/hp-pavilion-gaming.jpg" },
        { id: 3, name: "NVIDIA GeForce RTX 3080", price: 699, category: "composants", brand: "Asus", image: "../../img/nvidia-rtx-3080.jpg" },
        { id: 4, name: "Lenovo ThinkVision P27h-20", price: 449, category: "peripheriques", brand: "Lenovo", image: "../../img/lenovo-thinkvision-p27h.jpg" },
        { id: 5, name: "Asus ROG Zephyrus G14", price: 1499, category: "ordinateurs-portables", brand: "Asus", image: "../../img/asus-rog-zephyrus-g14.jpg" },
        { id: 6, name: "Dell Inspiron Desktop", price: 699, category: "ordinateurs-de-bureau", brand: "Dell", image: "../../img/dell-inspiron-desktop.jpg" },
        { id: 7, name: "AMD Ryzen 9 5950X", price: 799, category: "composants", brand: "AMD", image: "../../img/amd-ryzen-9-5950x.jpg" },
        { id: 8, name: "HP Spectre x360", price: 1299, category: "ordinateurs-portables", brand: "HP", image: "../../img/hp-spectre-x360.jpg" },
        { id: 9, name: "Lenovo Legion Tower 5i", price: 1199, category: "ordinateurs-de-bureau", brand: "Lenovo", image: "../../img/lenovo-legion-tower-5i.jpg" },
        { id: 10, name: "Asus ProArt PA32UCX-PK", price: 4999, category: "peripheriques", brand: "Asus", image: "../../img/asus-proart-pa32ucx-pk.jpg" },
        { id: 11, name: "Dell UltraSharp U2720Q", price: 719, category: "peripheriques", brand: "Dell", image: "../../img/dell-ultrasharp-u2720q.jpg" },
        { id: 12, name: "Intel Core i9-11900K", price: 539, category: "composants", brand: "Intel", image: "../../img/intel-core-i9-11900k.jpg" },
        { id: 13, name: "HP OMEN 30L Desktop", price: 1899, category: "ordinateurs-de-bureau", brand: "HP", image: "../../img/hp-omen-30l-desktop.jpg" },
        { id: 14, name: "Lenovo ThinkPad X1 Carbon", price: 1499, category: "ordinateurs-portables", brand: "Lenovo", image: "../../img/lenovo-thinkpad-x1-carbon.jpg" },
        { id: 15, name: "Asus TUF Gaming VG27AQ", price: 429, category: "peripheriques", brand: "Asus", image: "../../img/asus-tuf-gaming-vg27aq.jpg" }
    ];*/}

    const productList = document.getElementById('productList');
    const productCount = document.getElementById('productCount');
    const filterForm = document.getElementById('filterForm');
    const sortSelect = document.getElementById('sortSelect');
    const priceRange = document.getElementById('priceRange');
    const priceOutput = document.getElementById('priceOutput');
    const miniCart = document.getElementById('miniCart');
    const cartTotal = document.getElementById('cartTotal');
    const cartCount = document.getElementById('cartCount');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function renderProducts(filteredProducts) {
        productList.innerHTML = '';
        if (filteredProducts.length === 0) {
            productList.innerHTML = '<p class="text-center">Aucun produit trouvé.</p>';
        } else {
            filteredProducts.forEach(product => {
                const productCard = `
                    <div class="col">
                        <div class="card h-100">
                            <img src="${product.image}" class="card-img-top" alt="${product.name}" onerror="this.src='../../img/placeholder.jpg'">
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">${product.price.toFixed(2)} €</p>
                                <p class="card-text"><small class="text-muted">Marque: ${product.brand}</small></p>
                                <a href="#" class="btn btn-primary add-to-cart" data-id="${product.id}">Ajouter au panier</a>
                            </div>
                        </div>
                    </div>
                `;
                productList.innerHTML += productCard;
            });
        }
        productCount.textContent = filteredProducts.length;
    }

    function applyFilters() {
        const category = document.getElementById('categoryFilter').value;
        const maxPrice = parseInt(priceRange.value);
        const brands = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.id.replace('brand', ''));

        let filteredProducts = products.filter(product => 
            (category === '' || product.category === category) &&
            product.price <= maxPrice &&
            (brands.length === 0 || brands.includes(product.brand))
        );

        const sortValue = sortSelect.value;
        filteredProducts.sort((a, b) => {
            if (sortValue === 'price-asc') return a.price - b.price;
            if (sortValue === 'price-desc') return b.price - a.price;
            if (sortValue === 'name-asc') return a.name.localeCompare(b.name);
            if (sortValue === 'name-desc') return b.name.localeCompare(a.name);
        });

        renderProducts(filteredProducts);
    }

    function renderCart() {
        miniCart.innerHTML = '';
        if (cart.length === 0) {
            miniCart.innerHTML = '<li class="list-group-item">Votre panier est vide.</li>';
        } else {
            cart.forEach(item => {
                const product = products.find(p => p.id === item.id);
                const cartItem = `
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        ${product.name} - ${item.quantity} x ${product.price.toFixed(2)} €
                        <button class="btn btn-sm btn-danger remove-from-cart" data-id="${item.id}">Supprimer</button>
                    </li>
                `;
                miniCart.innerHTML += cartItem;
            });
        }
        cartTotal.textContent = cart.reduce((total, item) => {
            const product = products.find(p => p.id === item.id);
            return total + product.price * item.quantity;
        }, 0).toFixed(2) + ' €';
        updateCartCount();
    }

    function addToCart(productId) {
        const existingItem = cart.find(item => item.id == productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ id: parseInt(productId), quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id != productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }

    productList.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            e.preventDefault();
            const productId = e.target.getAttribute('data-id');
            addToCart(productId);
        }
    });

    miniCart.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-from-cart')) {
            const productId = e.target.getAttribute('data-id');
            removeFromCart(productId);
        }
    });

    filterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        applyFilters();
    });

    sortSelect.addEventListener('change', applyFilters);

    priceRange.addEventListener('input', function() {
        priceOutput.textContent = this.value + ' €';
    });

    // Initial render
    renderProducts(products);
    renderCart();
});