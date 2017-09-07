const Service = require('../services/cheeses');

module.exports = (server) => {
    //Alle oste
    server.get('/cheeses', function (req, res) { //henter fra database
        res.send(Service.getAll());
    });
    //En bestemt ost
    server.get('/cheeses/:varenr', (req, res) => {
        res.send(Service.getOne(req.params.varenr));
    });

};