const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'database.db')

const bd = new sqlite3.Database(caminhoArq);



process.on('SIGINT', () =>
    bd.close(() => {
        console.log('db encerrado!');
        process.exit(0);
    })
);

module.exports = bd;