const BaseStorage = require('../BaseStorage')
const connectionPool = require('./connectionPool')

module.exports = class MySQLStorage extends BaseStorage{

    constructor(options){
        super()
        this._table = options.table
    }
    
    async findBy(criteria){
        try {
            const keys = Object.keys(criteria)

            //this literal template puts all key/value pairs in one query whether single option or multiple options are passed
            const query = `SELECT * FROM ${this._table} WHERE ${keys.length > 1 ? `${keys.flatMap(key => ` ${key} = ${criteria[key]} `).join(' AND ')} ` 
            : `${keys[0]} = ${criteria[keys[0]]}` }`

            const [rows] = await connectionPool.promise().execute(query)

            if(rows.length == 1){
                const postData = Object.assign({} , rows[0])
                return postData
            }else{
                //in case of non-unique criteria/s return array of data
                const postsData = rows.map(row => Object.assign({} , row))
                return postsData
            }

        } catch (error) {
            console.log(error)
        }
    }

    async findAll(){
        try {
            const [rows] = await connectionPool.promise().execute(`SELECT * FROM ${this._table}`)
            const postsData = rows.map(row => Object.assign({} , row))
            return postsData
        } catch (error) {
            console.log(error)
        }
    }

    async create(data){
        try {
            const keys = Object.keys(data)
            const query = `INSERT INTO \`${this._table}\` (\`id\` ,  ${keys.flatMap(key => `\`${key}\``).join(' , ')})
              VALUES (NULL , ${keys.flatMap(key => `'${data[key]}'`).join(' , ')}) `
            await connectionPool.promise().execute(query)
        } catch (error) {
            console.log(error)
        }
    }

    async delete(id){
        try {
           const query = `DELETE FROM ${this._table} WHERE id = ${id} `;
           await connectionPool.promise().execute(query)
        } catch (error) {
            console.log(error)
        }
    }

    async update({id , data}){
        try {
            const keys = Object.keys(data)
            const query = `UPDATE ${this._table} SET ${keys.length > 1 ?
                `${keys.flatMap( key  => ` \`${key}\` = '${data[key]}' `)}`
                 : ` \`${keys[0]}\` = '${data[keys[0]]}'`} WHERE id = ${id}`

            await connectionPool.promise().execute(query)
           
        } catch (error) {
            console.log(error)   
        }
    }
}