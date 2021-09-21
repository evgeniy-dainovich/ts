interface Someone {
  name: string
  age: number
  location: string
  coords: {
    lng: string
    lat: string
  }
}

// We can also rename fields and fields below will autorename too (except union types)

type MapUserKey = keyof Someone // "name" | "age" | "location" | "coords"
type Name = Someone['name'] // string
type NameOrAge = Someone['name' | 'age'] // string | number
type Coords = Someone['coords'] // {lng: string; lat: string}
