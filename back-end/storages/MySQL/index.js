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
            let query

            //this literal template puts all key/value pairs in one query whether single option or multiple options are passed
            const simpleSelectQuery = `SELECT * FROM ${this._table} WHERE ${keys.length > 1 ? `${keys.flatMap(key => ` \`${key}\` = \` ${criteria[key]}\` `).join(' AND ')} ` 
                        : ` \`${keys[0]}\` = '${criteria[keys[0]]}' ` }`

            //seperate query for post because it needs extra join and concat clauses to swap numeric id with user name and surname
            const innerJoinPostsQuery = `SELECT CONCAT(name , " " , surname) as author , posts.id , posts.body , posts.title , posts.publicationDate , posts.postImage FROM posts 
                    INNER JOIN users ON posts.author = users.id 
                    WHERE ${keys.length > 1 ? `${keys.flatMap(key => ` posts.${key} = '${criteria[key]}' `).join(' AND ')}` 
                          : ` posts.${keys[0]} = '${criteria[keys[0]]}' `} `

            
            
            if(this._table == 'posts'){query = innerJoinPostsQuery}
            else {query = simpleSelectQuery}

            

            const [rows] = await connectionPool.promise().execute(query)



            if(!rows.length){
                return false
            }

            if(rows.length === 1){
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

    async findAll(queryOptions){
        try {

            const simpleSelectQuery = `SELECT * FROM ${this._table} ${queryOptions.order ? ` ORDER BY ${queryOptions.order}` : ''}`

            //seperate query for post because it needs extra join and concat clauses to swap numeric id with user name and surname
            const innerJoinPostsQuery = `SELECT CONCAT(name , " " , surname) as author , posts.id , posts.body , posts.title , posts.publicationDate , posts.postImage FROM posts 
                    INNER JOIN users ON posts.author = users.id  ${queryOptions.order ? ` ORDER BY ${queryOptions.order}` : ''}`

            let query
            if(this._table == 'posts'){query = innerJoinPostsQuery}
            else {query = simpleSelectQuery}

            const [rows] = await connectionPool.promise().execute(query)
            const data = rows.map(row => Object.assign({} , row))
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async create(data){
        try {
            const keys = Object.keys(data)
            const query = `INSERT INTO \`${this._table}\` (\`id\` ,  ${keys.flatMap(key => `\`${key}\``).join(' , ')})
             VALUES (NULL , ${keys.flatMap(key => `'${data[key]}'`).join(' , ')})  `
            await connectionPool.promise().execute(query)

            const getInsertedIdQuery = `SELECT LAST_INSERT_ID()`
            const row = await connectionPool.promise().execute(getInsertedIdQuery)
            
            //getting id of newly created record to return/check data from database in result
            //row[0] === [BinaryRow {'LAST_INSERT_ID()': desired id here} ]
            const lastId = row[0].flatMap(e => e['LAST_INSERT_ID()'])[0]
            return lastId
            
         
        } catch (error) {
            console.log(error)
            return false
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