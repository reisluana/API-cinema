//qualquer configuração/modificação que precisar ser feita no express

const express = require('express')
const consign = require('consign')
const sqlite3 = require('sqlite3')
//const sqlite3 = require('./infra/sqlite-db')

db = new sqlite3.Database(
    "./infra/database.db",
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    function () {
      console.log("db aberto");
    }
);

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