const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // remplace par ton fichier HTML
});

app.listen(3000, () => {
    console.log('Serveur lancé sur http://localhost:3000');
});
