type LeftType = {
  id: number
  left: string
}

type RightType = {
  id: number
  right: string
}

type IntersectionType = LeftType & RightType

function showType(args: IntersectionType) {
  console.log(args)
}

showType({ id: 1, left: 'test', right: 'test' }) // {id: 1, left: "test", right: "test"}
