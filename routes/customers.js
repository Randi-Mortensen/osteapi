module.exports = (server) => {
    server.get('/customers', function (req, res, next) { //henter fra database
        res.send({ "kundenr": "ef22", "navn": "Randi Mortensen" });
        return next();
    });
};