module.exports = {
    'isAuthenticated': (req, res, next) => {
        return res.send(401);
    }
};