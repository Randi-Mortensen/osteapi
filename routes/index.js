module.exports = (server) => {
    require('./cheeses')(server);
    require('./hemmelig')(server);
    require('./login')(server);
    //require('./customers')(server);
}