const numbers = [1, 2, 3, 4, 5]

type Guy = {age: number; name: string}

const guys1: Guy[] = [
  {name: 'alex', age: 12},
  {name: 'john', age: 13},
]

const guys2: Array<Guy> = [
  {name: 'alex', age: 12},
  {name: 'john', age: 13},
]

function calculate(numbers: [string]): number
function calculate(numbers: string[]): number
function calculate(numbers: Array<string>): number {
  return numbers.reduce((sum, number) => Number(number + sum), 0)
}
