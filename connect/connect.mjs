import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync("./info.db");

if(db){
    console.log('Banco de Dados Existe!');
}

export function add_User(name,password){
   const stmt =  db.prepare(`
        INSERT INTO infousers (name,password) VALUES (?,?);   
    `);

    stmt.run(name,password);
}

export function CleanDatabase(){
    db.exec(`DELETE FROM infousers`);
}

