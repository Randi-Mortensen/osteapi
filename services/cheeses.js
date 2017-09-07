const cheeses = require('../data/cheeses');
/**
 * @module Cheeses
 */
module.exports = {
    /**
     * getAll
     * Retunerer et json object med alle oste fra kartoteket
     * @returns {Object}
     */
    'getAll': () => cheeses,

    /**
     * getOne
     * Retunerer et json object med en enkelt ost fra kartoteket
     * @param {string} varenr - varenummeret på en ost
     * @returns {Object}
     */
    'getOne': (varenr) => {
        let currentCheese = null;
        cheeses.forEach((cheese) => {
            if (cheese.varenr == varenr) {
                currentCheese = JSON.stringify(cheese);
            }
        });

        if (currentCheese !== null) {
            return currentCheese;
        } else {
            return {
                "code": "ResourceNotFound",
                "message": "${varenr} does not exist"
            };
        }
    }
};

// server.post('/cheeses', (req, res) => {
//     res.send(200, req.body);
// });
// };
// }
// };