interface ComplexInterface {
  readonly id: ID
  readonly passportData: PassportData
  name?: string
  coordinates: Coordinates
}

type ID = string | number

type PassportData = {
  number: string
  expiresAt: string
}

interface Coordinates {
  lng: string
  lat: string
}
