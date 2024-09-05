# TechShop

TechShop est un site e-commerce dédié à la vente de matériel informatique, de téléphones, de matériel de vidéo surveillance et d'accessoires. Ce projet utilise HTML, CSS, Bootstrap 5 et JavaScript pour offrir une expérience utilisateur fluide et interactive.

## Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Structure du projet](#structure-du-projet)
- [Contribuer](#contribuer)
- [Licence](#licence)

## Fonctionnalités

- Navigation facile entre les différentes catégories de produits.
- Pages pour le matériel informatique d'occasion et neuf, les téléphones, la vidéo surveillance et les accessoires.
- Fonctionnalité de recherche en temps réel.
- Gestion du panier d'achat avec affichage des produits ajoutés.
- Système de compte utilisateur avec options de mise à jour du profil et de gestion des commandes.
- Filtres et tri des produits par prix, catégorie et marque.

## Technologies utilisées

- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- Font Awesome pour les icônes

## Installation

1. Clonez ce dépôt sur votre machine locale :
    ```bash
    git clone https://github.com/votre-utilisateur/techshop.git
    ```

2. Accédez au dossier du projet :
    ```bash
    cd techshop
    ```

3. Ouvrez le fichier `index.html` dans votre navigateur pour visualiser le site.

## Structure du projet
techshop/
│
├── index.html
├── pages/
│ ├── auth/
│ │ ├── login.html
│ │ └── register.html
│ ├── materiel-informatique-occasion.html
│ ├── materiel-informatique-neuf.html
│ ├── materiel-telephonique.html
│ ├── video-surveillance-securite.html
│ └── accessoires.html
│ └── panier.html
│ └── compte-utilisateur.html
│
├── css/
│ ├── style.css
│ └── custom-bootstrap.css
│
├── js/
│ ├── main.js
│ ├── recherche.js
│ ├── panier.js
│ ├── compte-utilisateur.js
│ ├── materiel-informatique-occasion.js
│ ├── materiel-informatique-neuf.js
│ ├── materiel-telephonique.js
│ └── video-surveillance-securite.js
│ └── accessoires.js
│
├── img/
│ ├── (vos images de produits ici)
│
└── README.md

## Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, veuillez suivre ces étapes :

1. Forkez le projet.
2. Créez une branche pour votre fonctionnalité ou correction de bug :
    ```bash
    git checkout -b feature/ma-fonctionnalite
    ```
3. Effectuez vos modifications et validez-les :
    ```bash
    git commit -m "Ajout de ma fonctionnalité"
    ```
4. Poussez votre branche :
    ```bash
    git push origin feature/ma-fonctionnalite
    ```
5. Ouvrez une Pull Request.

## Licence

Ce projet est sous licence MIT. Pour plus de détails, veuillez consulter le fichier [LICENSE](LICENSE).