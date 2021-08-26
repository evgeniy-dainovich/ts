interface Person {
  name: string
  age: number
  location: string
  coords: {
    lng: string
    lat: string
  }
}

// We can also rename fields and fields below will autorename too (except union types)

type PersonKey = keyof Person // "name" | "age" | "location" | "coords"
type Name = Person['name'] // string
type NameOrAge = Person['name' | 'age'] // string | number
type Coords = Person['coords'] // {lng: string; lat: string}
