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
   async findAll():Promise <IUser[]>{
    const [rows]=await this.pool.query(`SELECT * FROM ${this.table}`)
    return rows as IUser[]
    }

    async find(options:Partial<IUser>):Promise<IUser[]>{
        if(Object.keys(options).length==0){
            return await this.findAll()
        }
        let query=`SELECT * FROM ${this.table} WHERE `
        let values: any[] = [];

    for (let key in options) {
        query += `${key} = ? AND `;
        values.push(options[key as keyof IUser]);
    }

    query = query.slice(0, -5); 
try{
    const [rows] = await this.pool.query(query, values);
    return rows as IUser[];
} catch(err){
    console.log(err)
    return []
}


    }
   async delete(options:Partial<IUser>){
    let query=`DELETE FROM ${this.table} WHERE `
    let values:any[]=[]
    if(options.age){
        query+='age=?'
       values.push(options.age)
    }
    return this.pool.query(query,values)

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
