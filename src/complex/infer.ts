type IsNumber<T> = T extends number ? 'number' : 'other'

type WithNumber = IsNumber<number> // number
type WithOther = IsNumber<string> // other

type IsArray<T> = T extends Array<any> ? 'array' : 'other'

type WithArray = IsArray<string[]> // array
type WithoutArray = IsArray<string> // other

type UnboxArray<T> = T extends Array<infer Item> ? Item : T

type UnboxedStringArray = UnboxArray<string[]> // string
type UnboxedNumberArray = UnboxArray<number[]> // number
type Auto = {maxSpeed: number}
type UnboxedAutoArray = UnboxArray<Auto[]> // { maxSpeed: number }
type UnboxedString = UnboxArray<string> // string
