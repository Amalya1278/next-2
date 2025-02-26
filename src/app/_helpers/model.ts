// import mysql from 'mysql2/promise'
// import { Users } from './orm'
   
// export const pool=mysql.createPool({
//     host:process.env.HOST,
//     user:process.env.DB_USER,
//     password:process.env.PASSWORD,
//     database:process.env.DATABASE

// })
// export interface IUser{
//     id:number
//     name:string
//     age:number
// }
// export const getAllUsers=async():Promise<IUser[]>=>{
//     const model=new Users()
//     const result=await model.findAll()
//     return result
// }
// export const getUser=async(options:Partial<IUser>):Promise<IUser | null>=>{
//     const model=new Users()
//     const rows=await model.find(options)
//     if(!rows || rows.length==0){
//         return null
//     }
//     return rows[0]
    
    
    
// }
// export const addUser=async(user:Partial<IUser>)=>{
//     if(!user.name || !user.age){
//         throw new Error("something gone wrong")
//     }
//     const model=new Users()
//     return await model.insert({name:user.name,age:user.age})
// }
// export const deleteUser=async(user:Partial<IUser>)=>{
//     const model=new Users()
//     return await model.delete({age:user.age})
// }