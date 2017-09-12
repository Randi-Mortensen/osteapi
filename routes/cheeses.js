const mysql = require('mysql2');
const db = mysql.createConnection({
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'cheese'
});

module.exports = (server) => {
    //Alle oste
    server.get('/cheeses', (req, res) => {
        const query = `SELECT cheeses.*, typer.navn AS typenavn
        from cheeses 
        inner join typer 
        on fk_Type = typer.id`;

        db.query(query, (err, rows) => {
            if (err) {
                res.status(500);
                res.end();
            } else {
                res.send(rows);
            }
        });
    });
    //En bestemt ost
    server.get('/cheeses/:varenr', (req, res) => {
        const query = `SELECT cheeses.*, typer.navn AS typenavn
        from cheeses 
        inner join typer 
        on fk_Type = typer.id
        where cheeses.varenr = ?`;

        db.execute(query, [req.params.varenr], (err, row) => {
            if (err) {
                res.status(500);
                res.end();
            } else {
                res.send(row[0]);
            }
        });
    });
};