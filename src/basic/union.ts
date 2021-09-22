type UnionType1 = 'type1' | 'type2'

function showType(arg: UnionType1) {
  console.log(arg)
}

showType('type1') // type1
showType(7) // Argument of type '7' is not assignable to parameter of type 'UnionType1'.

type UnionType2 = {a: string} | {b: number}
const ut21: UnionType2 = {a: ''}
const ut22: UnionType2 = {b: 3}
