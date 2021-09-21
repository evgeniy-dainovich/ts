// Pick<Type, Keys> / Omit<Type, Keys> - создает подтип на основе существующего

// type Figure = {
//   width: number
//   height: number
//   area?: number
// }

type FigureDimensions = Pick<Figure, 'height' | 'width'> // { width: number; height: number; }
type FigureWithoutArea = Omit<Figure, 'area'> // { width: number; height: number; }
