const mysql2 = require('mysql2')
require('dotenv').config()



const connectionPool = mysql2.createPool({
    host:process.env.MYSQL_HOST,
    password:process.env.MYSQL_PASSWORD,
    user:process.env.MYSQL_USER,
    database:process.env.MYSQL_DATABASE,
    waitForConnections:true,
    connectionLimit:10
})

module.exports = connectionPool