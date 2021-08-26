require('dotenv').config()
const { readFileSync , readdirSync } = require('fs')
const { resolve } = require('path')
const dbConnection = require('./connectionPool')

const migrationsPath = resolve(__dirname , './storages/MySQL/migrations')

const migrationFiles = readdirSync(migrationsPath)

async function runMigrations(){
    for(let i = 0 ; migrationFiles[i]; i++){
        const fileName = migrationFiles[i];
        try {
            const data = readFileSync(`${migrationsPath}/${fileName}`).toString();
            await dbConnection.promise().query(data)

            console.log(`\x1b[32m%s\x1b[0m`, `Migration succesfull: ${fileName}`);
        } catch (error) {
            console.log(`\x1b[31m%s\x1b[0m`, `Migration failed: ${fileName}`);
            console.log(err);
        }
    }
}
runMigrations()