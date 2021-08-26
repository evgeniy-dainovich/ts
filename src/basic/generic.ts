// add type parameters
type Container<T> = {value: T}
const container1: Container<number> = {value: '344'} // Type 'string' is not assignable to type 'number'
const container2: Container<number> = {value: 344}

// generic
interface GenericType<T> {
  id: number
  store: T
}

function showType(args: GenericType<string>) {
  console.log(args)
}

showType({id: 1, store: 'test'}) // {id: 1, store: "test"}

function showTypeTwo(args: GenericType<number>) {
  console.log(args)
}

showTypeTwo({id: 1, store: 4}) // {id: 1, store: 4}

// or refer yourself
type Tree<T> = {
  value: T
  left: Tree<T>
  right: Tree<T>
}

const tree: Tree<number> = {
  value: 4,
  left: {} as Tree<number>,
  right: {} as Tree<number>,
}

tree.left.left.left.left.left.left.left.value

// or refer yourself with optionally fields
type Tree2<T> = {
  value: T
  left?: Tree2<T>
  right?: Tree2<T>
}

const tree2: Tree2<number> = {
  value: 4,
  left: {} as Tree2<number>,
  right: {} as Tree2<number>,
}

tree2?.left?.left?.left?.left?.left?.left?.left?.value
