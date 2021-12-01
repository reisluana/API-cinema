//controlar as rotas e o que fazer quando acessar cada uma delas

module.exports = app => {
    app.get('/bomboniere', (req, res) => res.send('você está na rota da bomboniere e está realizando um GET'))

    app.post('/bomboniere', (req, res) => {
        console.log(req.body)
        res.send('você está na rota da bomboniere e está realizando um POST')
    })

    app.patch('/bomboniere/:id', (req, res) => {
        
    })
}