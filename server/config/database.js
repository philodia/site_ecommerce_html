// config/database.js

const mongoose = require('mongoose');

// URL de connexion à la base de données MongoDB
// Remplacez <username>, <password>, <cluster-url>, et <database-name> par vos propres valeurs
const DB_URI = 'mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority';

// Options de connexion
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
};

// Fonction pour connecter à la base de données
const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI, options);
        console.log('Connexion à la base de données établie avec succès');
    } catch (error) {
        console.error('Erreur de connexion à la base de données:', error.message);
        process.exit(1); // Quitter l'application en cas d'échec de connexion
    }
};

// Gestion des événements de connexion
mongoose.connection.on('connected', () => {
    console.log('Mongoose connecté à la base de données');
});

mongoose.connection.on('error', (err) => {
    console.error('Erreur de connexion Mongoose:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose déconnecté de la base de données');
});

// Fermeture propre de la connexion lors de l'arrêt de l'application
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('Connexion à la base de données fermée suite à l\'arrêt de l\'application');
    process.exit(0);
});

module.exports = connectDB;