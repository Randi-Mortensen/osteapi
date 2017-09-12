const security = require('../services/security');

module.exports = (server) => {
    server.get('/login', (req, res) => {
        security.generateTolken((err, token) => {
            res.send(token);
        });
    });
};