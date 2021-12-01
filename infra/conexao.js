const sqlite3 = require('sqlite3').verbose();
//const path = require('path');
const caminhoArq = path.resolve(__dirname, 'database.db')

const db = new sqlite3.Database(caminhoArq);


const PEDIDOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PEDIDOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "CLIENTE" varchar(100),
    "COMIDAS" varchar(100),
    "BEBIDAS" varchar(100),
    "COMBOS" varchar(100),
    "VALOR" decimal(30),
    "PAGAMENTO" varchar(30)
  );`;

const ADD_PEDIDOS_DATA = `
INSERT INTO PEDIDOS (ID, CLIENTE, COMIDAS, BEBIDAS, COMBOS, VALOR, PAGAMENTO)
VALUES 
    (1, 'Carolina Nogueira', 'Kit Kat', 'Matte Leão Zero', 'Pipoca Salgada G + refrigerante P duplo', '83,90', 'Crédito'),
    (2, 'Jéssica Assis', 'M&M's Amendoim', 'Del Valle Uva', 'Pipoca Salgada P + refrigerante P', '62,50', 'Crédito'),
    (3, 'Rodrigo Souza', 'Snickers', 'Coca-cola Zero', 'Pipoca Doce G dupla', '75,50', 'Débito')
    (4, 'Bianca Garcia', 'Kit Kat', 'Matte Leão Fuze', 'Pipoca Salgada G + refrigerante P duplo', '83,90', 'Voucher')
    (5, 'Thiago Gomes', 'Fini Tubes Morango', 'Del Valle Limão', 'Pipoca Salgada M dupla', '75,50', 'Débito')
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