// Readonly<Type> - помечает все поля readonly

type AdvanceFigure = {
  width: number
  height: number
  coords: {
    x: number
    y: number
  }
}

const readonlyAdvFigure: Readonly<AdvanceFigure> = {
  width: 10,
  height: 10,
  coords: {x: 10, y: 10},
}

readonlyAdvFigure.width = 25 // Cannot assign to 'width' because it is a read-only property
readonlyAdvFigure.coords.x = 25 // no error
