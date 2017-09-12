const security = require('../services/security');

module.exports = (server) => {
    server.get('/hemmelig', security.isAuthenticated, (req, res) => {
        res.send('hej');
    });
};