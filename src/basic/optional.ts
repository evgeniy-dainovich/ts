// optional fields
interface User {
  id?: number
  name: string
  age: number
}

const newUser = { name: 'Gomer', age: 23 }
const user = { id: 122, name: 'Gomer', age: 23 }

function createUser(user: User): void {}
function updateUser(user: User): void {}

createUser(newUser)
updateUser(user)
