const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'database.db')

const db = new sqlite3.Database(caminhoArq);


const PEDIDOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PEDIDOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "COMIDAS" varchar(100),
    "BEBIDAS" varchar(100),
    "COMBOS" varchar(100),
    "VALOR" decimal(30),
    "PAGAMENTO" varchar(30)
  );`;

const ADD_PEDIDOS_DATA = `
INSERT INTO PEDIDOS (ID, COMIDAS, BEBIDAS, COMBOS, VALOR, PAGAMENTO)
VALUES 
    (1, ),
    (2, ),
    (3, )
    (4, )
    (5, )
`

function criaTabelaPedidos() {
    db.run(PEDIDOS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de pedidos");
    });
}


function populaTabelaPedidos() {
    db.run(ADD_PEDIDOS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de pedidos");
    });
}

db.serialize( ()=> {
    criaTabelaPedidos();
    populaTabelaPedidos();
});