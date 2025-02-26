
import { Users } from "./_helpers/orm"

export default async function Home(){
  

  const userModel=new Users()
  const result = await userModel.findAll()
  const search = await userModel.find({ name: "Bob Brown" })
  console.log(search)

  await userModel.insert({name:'sona',age:23})

  await userModel.delete({age:22})

  return (
    <>
      <h1 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">Users</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {
          result.map(user => (
            <div key={user.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all dark:bg-gray-800 dark:text-white">
              <p className="text-xl font-medium text-gray-800 dark:text-gray-100">{user.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{user.age} years old</p>
            </div>
          ))
        }
      </div>
    </>
  )
}
