//controlar as rotas e o que fazer quando acessar cada uma delas

module.exports = app => {
    app.get('/bomboniere', (req, res) => res.send('você está na rota da bomboniere e está realizando um GET'))
    /*
    app.get('/bomboniere', (req, res) => {
        sql = "SELECT * FROM Pedidos";
        db.all(sql, function (err, rows) {
          if (rows) {
            var result = JSON.stringify(rows);
            response.status(200).json({ result });
          }
          if (err) {
            response.status(500).json({ err });
          }
        });
    });
    */
    app.post('/bomboniere', (req, res) => {
        console.log(req.body)
        res.send('você está na rota da bomboniere e está realizando um POST')
    })

    app.patch('/bomboniere/:id', (req, res) => {
        
    })
}