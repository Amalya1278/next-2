import mysql from 'mysql2/promise'

export interface IUser{
         id:number
         name:string
        age:number
    }


export class Model{
    pool:mysql.Pool 
    table:string
    constructor(table:string){
        this.table=table
        this.pool=mysql.createPool({
            host:process.env.HOST,
            database:process.env.DATABASE,
            user:process.env.DB_USER,
            password:process.env.PASSWORD
            
        })
    }
   async findAll(){
    return await this.pool.query(`SELECT * FROM ${this.table}`)
    
    }

    async find(options:Partial<IUser>){
        let query=`SELECT * FROM ${this.table} WHERE name=? AND age=? `

   

   query = query.slice(0, -3); 

  return await this.pool.query(query,[options.name,options.age])


    }
   async delete(options:Partial<IUser>){
    let query=`DELETE FROM ${this.table} WHERE age=?`
    
    return this.pool.query(query,[options.age])

    }
  async insert(user:{name:string;age:number}){
        return await this.pool.query(`INSERT INTO users(name,age)
            VALUES(?,?)`,[user.name,user.age])

    }
}
export class Users extends Model{
    constructor(){
        super('users')
    
    }
}
