type UnionType1 = string | number

function showType(arg: UnionType1) {
  console.log(arg)
}

showType('test') // test
showType(7) // 7

type UnionType2 = {a: string} | {b: number}
const ut21: UnionType2 = {a: ''}
const ut22: UnionType2 = {b: 3}
