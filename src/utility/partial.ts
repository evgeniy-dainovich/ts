// Partial<Type> / Required<Type> - позволяет делать поля обязательными или не обязательными

type Figure = {
  width: number
  height: number
  area?: number
}

type Dimension = Partial<Figure>

const dim1: Dimension = {width: 12}
const dim2: Dimension = {height: 12}
const dim3: Dimension = {width: 12, height: 12}
const dim4: Required<Figure> = {width: 12, height: 12} // Property 'area' is missing in type '{ width: number; height: number; }' but required in type 'Required<Figure>'
