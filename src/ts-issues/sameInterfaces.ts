interface Book {
  price: number
  name: string
}

interface Car {
  price: number
  name: string
  maxSpeed: number
  color: string
}

function buyBook(_book: Book): void {}

const car = {
  price: 10000,
  name: 'BMW',
  maxSpeed: 200,
  color: 'red',
}

buyBook(car) // no any issues with type cheking
