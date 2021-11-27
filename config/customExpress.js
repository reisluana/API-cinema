//qualquer configuração/modificação que precisar ser feita no express

const express = require('express')
const consign = require('consign')
//const bodyParser = require('body-parser')

module.exports = () => {
    const app = express()
    
   /* app.use(bodyParser.json)
    app.use(bodyParser.urlencoded({extended: true}))*/
    app.use(express.json())
    app.use((req, res, next) => {
        next()
    })

    consign()
        .include('controllers')
        .into(app)

    return app
}