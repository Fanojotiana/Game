const http = require ('http');
const server = http.createServer((req, res) => {
    res.end('Bienvenue sur mon server Node.js !');
});
server.listen(3000, () => {
    console.log('Le serveur écoute sur le port 3000');
});
