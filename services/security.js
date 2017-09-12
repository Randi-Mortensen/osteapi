const crypto = require('crypto');

module.exports = {
    'isAuthenticated': (req, res, next) => {
        if (req.header('Authorization') === '1234') {
            return next();
        } else {
            return res.send(401);
        }
    },
    'generateTolken': (next) => {
        crypto.randomBytes(256, (err, buffer) => {
            if (err) {
                return next(err, null);
            } else {
                return next(null, buffer.toString('hex'));
            }
        });
    }
};